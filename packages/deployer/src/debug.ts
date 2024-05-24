import { DEPLOYABLE_ELEMENTS } from "./game";
import { Listr, ListrTask } from "listr2";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { BN, BN_ONE } from "@polkadot/util";
import { CodePromise, ContractPromise } from "@polkadot/api-contract";
import { program } from "commander";

program.option('-n, --node-url <nodeUrl>', 'Node URL to connect to', 'ws://127.0.0.1:9944');
program.option('-s, --suri <suri>', 'Substrate URI to use', '//Alice');
program.option('--deploy-first <deployFirst>', 'Deploy the first N elements', (value: string) => parseInt(value, 10), 5);
program.option('--dev', 'Use development environment variables', false);
program.option('--aleph-zero-testnet', 'Use Aleph Zero Testnet environment variables', false);
program.parse(process.argv);

const progOpts = program.opts();

if (progOpts.dev) {
    console.log('FORCING DEV ENV VALUES');
    progOpts.nodeUrl = 'ws://127.0.0.1:9944';
    progOpts.suri = '//Alice';
}

if (progOpts.alephZeroTestnet) {
    console.log('FORCING ALEPH ZERO TESTNET ENV VALUES');
    progOpts.nodeUrl = 'wss://ws.test.azero.dev';
}

const elementsToDeploy = DEPLOYABLE_ELEMENTS.slice(0, progOpts.deployFirst);

async function connectToChain(nodeUrl: string) {
    const wsProvider = new WsProvider(nodeUrl);
    const apiPromise = await ApiPromise.create({ provider: wsProvider });
    await apiPromise.isReady;
    return apiPromise;
}

const connectToChainTask = {
    title: 'Connect to Chain',
    task: async (ctx: any, task: any) => {
        ctx.api = await connectToChain(ctx.nodeUrl);
        task.title = `Connect to Chain (${ctx.nodeUrl})`;
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

async function signAndSendTx(
    tx: any,
    user: any,
) {
    return await new Promise(
        async (resolve, reject) => {
            try {
                await tx.signAndSend(
                    user,
                    (result: any) => {
                        if (result.status.isInBlock) {
                            resolve(result);
                        } else if (result.status.isError) {
                            reject(result);
                        }
                    }
                )
            } catch (e) {
                reject(e);
            }
        }
    );
}

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
                refTime: new BN("20000000000"),
                //               1820669018
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
            let contractAddress: string | null = null;
            let deployRetries = 0;
            while (contractAddress === null) {
                try {
                    contractAddress = await new Promise<string>(async (resolve, reject) => {
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
                } catch (e) {
                    contractAddress = null;
                    deployRetries++;
                }

                if (deployRetries > 50) {
                    throw new Error(`Failed to deploy contract ${opts.contractName}`);
                }
            }
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
                refTime: new BN("20000000000"),
                //               1981949786
                proofSize: new BN("200000"),
                //                 60507
            });
            const storageDepositLimit = null;
            const user = ctx.keyring.pairs.find(pair => pair.meta.name === "user");
            await signAndSendTx(
                contractApi.tx.claimOwnership(
                    { gasLimit, storageDepositLimit },
                ),
                user as any
            );
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
        for (let element of elementsToDeploy) {
            elementDeployTasks.push(
                deployContractTask({
                    contractName: `element_${element.id}`,
                    contractData: element.contract,
                    completed: onTaskComplete
                }),
            );
            ctx.deployElementsStats.total++;
        }
        for (let element of elementsToDeploy) {
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

const writeOutput = {
    title: 'Write output',
    task: async (ctx: any, task: any) => {
        const ctxData: any = {};
        for (let el of elementsToDeploy) {
            const contractName = `element_${el.id}`;
            ctxData[contractName] = {
                address: ctx[contractName],
            };
        }
        const ctxJson = JSON.stringify(ctxData, null, 4);
        console.log(ctxJson);
    }
};

async function main() {
    const tasks: Array<ListrTask> = [
    ];
    tasks.push(connectToChainTask);
    tasks.push(createKeyringTask);
    tasks.push(deployElementsTask);
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
    };

    const listr = new Listr(tasks, options);
    await listr.run(context);
}

main().then(
    () => { process.exit(0); }
).catch(
    (e) => { console.error('error'); console.error(e); process.exit(1); }
)