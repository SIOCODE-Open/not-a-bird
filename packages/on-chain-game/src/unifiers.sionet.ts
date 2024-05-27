import { IChainDeployment, GAME_UNIFIERS } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';
import { loadGameChainWallet, createRandomGameChainWallet } from '@not-a-bird/game-chain-wallet';

const UNIFIERS_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "wss://sionet.siocode.hu",
    gameContract: {
        address: "5DRPc2VBauQwqofwnGYP59j3ZtHt4RebPjy8L1hHhrAFhdVj"
    },
    elementContracts: {
        0: {
                address: "5DRMQZxSGmycgpXiHrQhSMDSHkX3mEZDWp285US7AsHfDTkw"
            },
1: {
                address: "5EGCHKKevRercVSaazrs8bmZdVNT6mK5shKT4z7WiY1kEDiS"
            },
2: {
                address: "5FkRvfWiRir955mnxcyX6xmVfJ93jedmN1s1WZoPAw26qhiS"
            },
3: {
                address: "5FTTdVjzfbgGd1PW4VNKz9ZYDNUw8p3y4hPR62AkMmSEqyvF"
            },
4: {
                address: "5FQ1y9ErNw4vyBNduLzz53yoGC84Gm8T89dntAgKujZgNcqb"
            },
5: {
                address: "5CCipLoTcrXguF1Nbo9upKwpmpWrpoFQdTX6XRs7kFMduAjc"
            },
6: {
                address: "5Fc9jR3vYhy4C6BsAN3QVwUQbm8GjciXNxkR7XDvMCFDXShC"
            },
7: {
                address: "5GXPe3FA5KvxpwMcYRHqZoGz58viMwGCRU4UDw2eV97H9Mwg"
            },
8: {
                address: "5FKRACRUcnj9Lr3rFCwsXmmZbdbKJWBwGorF5goSMF2VvBdR"
            },
9: {
                address: "5FZkRhUjn2h73KBCBkEusVsytXjyYGn5umRzARU4s8Pj5WkH"
            },
10: {
                address: "5GTbRM614e62mbTXZbwzAB3mStBhf14uzJYxHYN8Jqpu6khv"
            },
11: {
                address: "5HKgkxUaKJApXWAmxQmG5Wrn9xBQKx9VZRwwhaHH2xGc524d"
            },
12: {
                address: "5DETpFuw8yUjQYWv6z2CCdoPTCUeFLA9LywCYf5SSDjQmNb4"
            },
13: {
                address: "5F6ZRGueUobAzvbr8o2baLXVwg1vvmsTwaZP7KSW6kQ1gTCC"
            },
14: {
                address: "5GQe6PH1RJQZMk2FszWJk2VJCwX7RGrUZgNmQArKNDYsgD1J"
            },
15: {
                address: "5FnW6134ZcqZh4em13kDAT2JiPTCg2v4v57iLEr8CuFtY4oF"
            },
16: {
                address: "5GSr5dic9HHRP1MJSRVvLS7QvZ8fNJVmSrjqZmvGYw98cKci"
            },
17: {
                address: "5EkrTtKRaGjW96yHPxaheT68rhE3iEywasw2fY3gpQimFixT"
            },
18: {
                address: "5FysNF73NaQAdf3yMp6Vcd96sUsTQMAGfnuFq8VZ1nHMtXyo"
            },
19: {
                address: "5GHjkdMdfYeLBuumHNGnaiqYAeBxMw7Jz4FK4ANaY3TiUZnA"
            },
20: {
                address: "5HXkpbSteKwW23fqr5TUqKmXZftSZHL88V8xz7fjp2XutrQv"
            },
21: {
                address: "5GoGwSzo8FNckqrLfK7AD8pH4sZf8xbeKfWm4kjK6x9BbncA"
            },
22: {
                address: "5Er66Lw6v692mZhgxhpv8wb2bDUU6qfvXYvorNZ55R9UxmDt"
            },
23: {
                address: "5CrjdDUsXCcwTbjje2ELXH4K7ZhKPDDXFTGEyRK9LMbnCrZA"
            },
24: {
                address: "5EwoXbeaN5Pqgk1tcnbHmZGTKWzYxaUEoSknfCfdfnvyW7Xy"
            }
    },
    content: GAME_UNIFIERS
}

const GAME_CHAIN_NATIVE_TOKEN_META = {
    name: 'SIOCOIN',
    symbol: 'SIO',
    decimals: 12
};

registerLazyGame(
    'unifiers.polkadotjs.sionet',
    {
        name: 'Unifiers',
        description: 'A game created with the help of the Unifiers group',
        chainInfo: 'Deployed to sionet',
    },
    async () => {
        let chainWallet = await loadGameChainWallet();
        if(!chainWallet) {
            chainWallet = await createRandomGameChainWallet();
        }
        const suri = chainWallet.suri;
        return createPolkadotJSGame(
            UNIFIERS_CHAIN_DEPLOYMENT,
            GAME_UNIFIERS,
            suri,
            GAME_CHAIN_NATIVE_TOKEN_META
        );
    }
);