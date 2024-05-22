import { IDeployableGame } from "./IDeployableGame";
import { DEPLOYABLE_UNIFIERS } from "./unifiers.game";
import { Listr, ListrTask } from "listr2";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { BN, BN_ONE } from "@polkadot/util";
import { CodePromise } from "@polkadot/api-contract";

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
            ctx[opts.contractName] = contractAddress;
            task.output = contractAddress;
        }
    };
}

const createGameTasks = (game: IDeployableGame) => {
    return [
        {
            title: `Deploy ${game.name} game`,
            task: (ctx: any, task: any) => {
                const deployTasks: Array<ListrTask> = [];
                deployTasks.push(
                    deployContractTask({
                        contractName: game.name,
                        contractData: game.gameContract
                    })
                );
                for (let elementId of Object.keys(game.elementContracts)) {
                    const element = game.elementContracts[elementId];
                    deployTasks.push(
                        deployContractTask({
                            contractName: `element_${elementId}`,
                            contractData: element
                        })
                    );
                }
                return task.newListr(deployTasks);
            }
        }
    ]
};

async function main() {
    const tasks: Array<ListrTask> = [
    ];
    tasks.push(connectToChainTask);
    tasks.push(createKeyringTask);
    tasks.push(...createGameTasks(DEPLOYABLE_UNIFIERS));
    tasks.push(disconnectFromChainTask);
    const options = {
    };
    const context = {
        nodeUrl: "ws://127.0.0.1:9944",
        suri: '//Alice',
    };

    const listr = new Listr(tasks, options);
    await listr.run(context);
}

main().then(
    () => console.log('done')
).catch(
    (e) => { console.error('error'); console.error(e); }
)