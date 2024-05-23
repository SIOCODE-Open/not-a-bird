import { IDeployableGame } from "./IDeployableGame";
import { IDeployableElement } from "./IDeployableElement";
import { DEPLOYABLE_UNIFIERS, DEPLOYABLE_ELEMENTS, DEPLOYABLE_GAMES } from "./game";
import { Listr, ListrTask } from "listr2";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { BN, BN_ONE } from "@polkadot/util";
import { CodePromise, ContractPromise } from "@polkadot/api-contract";
import YAML from "yaml";
import * as path from "path";
import * as fs from "fs";
import { program } from "commander";

program.option('-n, --node-url <nodeUrl>', 'Node URL to connect to', 'ws://127.0.0.1:9944');
program.option('-s, --suri <suri>', 'SURI to use for keyring', '//Alice');
program.option('-o, --output <output>', 'Output directory', 'output');
program.option('-f, --format <format>', 'Output format (json, yaml)', 'json');
program.option('-e, --env <env>', 'Environment variables to pass to the script', 'dev');
program.option('-c, --code <code>', 'Code to generate (on-chain-game | json-export)', 'json-export');
program.option('--dev', 'Use development environment variables', false);
program.parse(process.argv);

const progOpts = program.opts();

if (progOpts.dev) {
    console.log('FORCING DEV ENV VALUES');
    progOpts.nodeUrl = 'ws://127.0.0.1:9944';
    progOpts.suri = '//Alice';
    progOpts.output = '../on-chain-game/src';
    progOpts.format = 'json';
    progOpts.env = 'dev';
    progOpts.code = 'on-chain-game';
}

function generateOnChainGameCode(game: IDeployableGame, ctx: any) {
    const chainDeploymentCode = `const ${game.otherNames.constantCase}_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "${progOpts.nodeUrl}",
    gameContract: {
        address: "${ctx[game.name]}"
    },
    elementContracts: {
        ${Object.keys(game.elementContracts).map(elementId => {
    return `${elementId}: {
                address: "${ctx[`element_${elementId}`]}"
            }`;
}).join(',\n')}
    },
    content: GAME_${game.otherNames.constantCase}
}`;
    let code = `import { IChainDeployment, GAME_${game.otherNames.constantCase} } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';

${chainDeploymentCode}

registerLazyGame(
    '${game.otherNames.kebabCase}.polkadotjs.${ctx.env}',
    {
        name: '${game.name}',
        description: '${game.description}',
        chainInfo: 'Deployed to ${ctx.env}',
    },
    async () => {
        // FIXME
        const suri = "//Alice";
        return createPolkadotJSGame(
            ${game.otherNames.constantCase}_CHAIN_DEPLOYMENT,
            GAME_${game.otherNames.constantCase},
            suri
        );
    }
);`;

    return code;
}

async function connectToChain(nodeUrl: string) {
    const wsProvider = new WsProvider(nodeUrl);
    const apiPromise = await ApiPromise.create({ provider: wsProvider });
    await apiPromise.isReady;
    return apiPromise;
}

const connectToChainTask = {
    title: 'Connect to Chain',
    task: async (ctx: any) => {
        ctx.api = await connectToChain(ctx.nodeUrl);
    }
};

const disconnectFromChainTask = {
    title: 'Disconnect from Chain',
    task: async (ctx: any) => {
        await ctx.api.disconnect();
    }
};

const createKeyringTask = {
    title: 'Create Keyring',
    task: async (ctx: any) => {
        const keyring = new Keyring({ type: 'sr25519' });
        const pair = keyring.addFromUri(ctx.suri, { name: 'user' });
        ctx.keyring = keyring;
    }
};

const deployContractTask = (
    opts: {
        contractName: string;
        contractData: any;
        completed?: () => void;
    }
) => {
    return {
        title: `Deploy ${opts.contractName}`,
        task: async (ctx: any, task: any) => {
            const gasLimit = ctx.api.registry.createType("WeightV2", {
                refTime: new BN("2000000000"),
                proofSize: new BN("200000"),
            });
            const storageDepositLimit = null;
            const user = ctx.keyring.pairs.find(pair => pair.meta.name === "user");
            const codeObject = new CodePromise(
                ctx.api,
                opts.contractData,
                opts.contractData.source.wasm
            );
            const newCodeTx = codeObject.tx.new(
                { gasLimit, storageDepositLimit },
            );
            const contractAddress = await new Promise<string>(async (resolve, reject) => {
                const unsub = await newCodeTx.signAndSend(
                    user as any,
                    ({ contract, status }: any) => {
                        if (status.isInBlock) {
                            unsub();
                            resolve(contract?.address!.toString());
                        } else if (status.isFinalized) {
                        } else if (status.isDropped || status.isInvalid || status.isUsurped) {
                            unsub();
                            reject();
                        }
                    }
                );
            });
            const contractApi = new ContractPromise(
                ctx.api,
                opts.contractData,
                contractAddress
            );
            ctx[opts.contractName] = contractAddress;
            ctx[`${opts.contractName}_api`] = contractApi;
            opts.completed?.();
        }
    };
};

const claimOwnershipTask = (opts: {
    contractName: string;
    completed?: () => void;
}) => {
    return {
        title: `Claim ownership of contract ${opts.contractName}`,
        task: async (ctx: any, task: any) => {
            const contractAddress = ctx[opts.contractName];
            const contractApi = ctx[`${opts.contractName}_api`];
            const gasLimit = ctx.api.registry.createType("WeightV2", {
                refTime: new BN("2000000000"),
                proofSize: new BN("200000"),
            });
            const storageDepositLimit = null;
            const user = ctx.keyring.pairs.find(pair => pair.meta.name === "user");
            await contractApi.tx.claimOwnership(
                { gasLimit, storageDepositLimit },
            );
            opts.completed?.();
        }
    }
};

const lockElementContractTask = (opts: {
    gameContractName: string;
    elementIndex: number;
    elementContractName: string;
    completed?: () => void;
}) => {
    return {
        title: `Lock element ${opts.elementIndex} in game ${opts.gameContractName}`,
        task: async (ctx: any, task: any) => {
            const gameContractAddress = ctx[opts.gameContractName];
            const elementContractAddress = ctx[opts.elementContractName];
            const gameContractApi = ctx[`${opts.gameContractName}_api`];
            const elementContractApi = ctx[`${opts.elementContractName}_api`];
            const gasLimit = ctx.api.registry.createType("WeightV2", {
                refTime: new BN("2000000000"),
                proofSize: new BN("200000"),
            });
            const storageDepositLimit = null;
            const user = ctx.keyring.pairs.find(pair => pair.meta.name === "user");
            await gameContractApi.tx.lockElementContract(
                { gasLimit, storageDepositLimit },
                opts.elementIndex,
                elementContractAddress
            ).signAndSend(user as any);
            opts.completed?.();
        }
    }
};

const deployElementsTask = {
    title: "Deploy elements",
    task: (ctx: any, task: any) => {
        ctx.deployElementsStats = {
            deployed: 0,
            total: 0
        };
        const onTaskComplete = () => {
            ctx.deployElementsStats.deployed++;
            task.title = `Deploy elements (${ctx.deployElementsStats.deployed} / ${ctx.deployElementsStats.total})`;
        };
        const elementDeployTasks: Array<any> = [];
        for (let element of DEPLOYABLE_ELEMENTS) {
            elementDeployTasks.push(
                deployContractTask({
                    contractName: `element_${element.id}`,
                    contractData: element.contract,
                    completed: onTaskComplete
                }),
            );
            ctx.deployElementsStats.total++;
        }
        for (let element of DEPLOYABLE_ELEMENTS) {
            elementDeployTasks.push(
                claimOwnershipTask({
                    contractName: `element_${element.id}`,
                    completed: onTaskComplete
                })
            );
            ctx.deployElementsStats.total++;
        }
        return task.newListr(elementDeployTasks, { rendererOptions: { showSubtasks: false } });
    },
    rendererOptions: { showSubtasks: false },
    showSubtasks: false
}

const createGameTasks = (game: IDeployableGame) => {
    return [
        {
            title: `Deploy ${game.name} game`,
            task: (ctx: any, task: any) => {
                ctx[`deploy_${game.name}_stats`] = {
                    deployed: 0,
                    total: 0
                };
                const onTaskComplete = () => {
                    ctx[`deploy_${game.name}_stats`].deployed++;
                    task.title = `Deploy ${game.name} game (${ctx[`deploy_${game.name}_stats`].deployed} / ${ctx[`deploy_${game.name}_stats`].total})`;
                };
                const deployTasks: Array<ListrTask> = [];
                const claimOwnershipTasks: Array<ListrTask> = [];
                const wiringTasks: Array<ListrTask> = [];
                deployTasks.push(
                    deployContractTask({
                        contractName: game.name,
                        contractData: game.gameContract,
                        completed: onTaskComplete
                    })
                );
                claimOwnershipTasks.push(
                    claimOwnershipTask({
                        contractName: game.name,
                        completed: onTaskComplete
                    })
                );
                ctx[`deploy_${game.name}_stats`].total += 2;
                for (let elementId of Object.keys(game.elementContracts)) {
                    wiringTasks.push(
                        lockElementContractTask({
                            gameContractName: game.name,
                            elementIndex: parseInt(elementId),
                            elementContractName: `element_${elementId}`,
                            completed: onTaskComplete
                        })
                    );
                    ctx[`deploy_${game.name}_stats`].total++;
                }
                return task.newListr([...deployTasks, ...claimOwnershipTasks, ...wiringTasks], { rendererOptions: { showSubtasks: false } });
            },
            rendererOptions: { showSubtasks: false },
            showSubtasks: false
        }
    ]
};

const writeOutput = {
    title: 'Write output',
    task: async (ctx: any, task: any) => {
        const outputDir = path.resolve(ctx.output);
        const jsonFilename = path.join(outputDir, 'contracts.' + ctx.env + (ctx.format ? ('.' + ctx.format) : '.json'));
        const tsFilename = path.join(outputDir, 'contracts.' + ctx.env + '.ts');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        const output: any = { contracts: [] };
        for (let element of DEPLOYABLE_ELEMENTS) {
            output.contracts.push({
                name: `element_${element.id}`,
                address: ctx[`element_${element.id}`]
            });
        }
        for (let game of DEPLOYABLE_GAMES) {
            output.contracts.push({
                name: game.name,
                address: ctx[game.name]
            });
        }
        if (ctx.code === 'json-export') {
            if (!ctx.format || ctx.format.toLowerCase() === 'json') {
                fs.writeFileSync(jsonFilename, JSON.stringify(output, null, 4));
            } else if (ctx.format.toLowerCase() === 'yaml') {
                fs.writeFileSync(jsonFilename, YAML.stringify(output));
            } else {
                throw new Error(`Unsupported output format: ${ctx.format}`);
            }

            const tsCode = `import ENV_DATA from './contracts.${ctx.env}.json';\n\nexport default ENV_DATA;\n`;
            fs.writeFileSync(tsFilename, tsCode);
        } else {
            for (let game of DEPLOYABLE_GAMES) {
                const code = generateOnChainGameCode(game, ctx);
                const filename = path.join(outputDir, `${game.otherNames.kebabCase}.${ctx.env}.ts`);
                fs.writeFileSync(filename, code);
            }
        }
    }
}

async function main() {
    const tasks: Array<ListrTask> = [
    ];
    tasks.push(connectToChainTask);
    tasks.push(createKeyringTask);
    tasks.push(deployElementsTask);
    tasks.push(...DEPLOYABLE_GAMES.map(createGameTasks).flat());
    tasks.push(disconnectFromChainTask);
    tasks.push(writeOutput);
    const options = {
        showSubtasks: false,
        rendererOptions: {
            showSubtasks: false
        }
    };
    const context = {
        nodeUrl: progOpts.nodeUrl,
        suri: progOpts.suri,
        env: progOpts.env,
        output: progOpts.output,
        format: progOpts.format
    };

    const listr = new Listr(tasks, options);
    await listr.run(context);
}

main().then(
    () => { process.exit(0); }
).catch(
    (e) => { console.error('error'); console.error(e); process.exit(1); }
)