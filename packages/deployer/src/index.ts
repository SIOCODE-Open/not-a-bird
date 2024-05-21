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

const deployContractTask = (
    opts: {
        contractName: string;
        contractData: any;
    }
) => {
    return {
        title: `Deploy ${opts.contractName}`,
        task: async (ctx: any) => {

        }
    };
}

const createGameTasks = (game: IDeployableGame) => {
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
                contractName: element.name,
                contractData: element.contract
            })
        );
    }
    return deployTasks;
};

async function main() {
    const tasks: Array<ListrTask> = [
    ];
    tasks.push(connectToChainTask);
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