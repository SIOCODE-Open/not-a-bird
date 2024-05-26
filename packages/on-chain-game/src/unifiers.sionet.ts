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
        address: "5GFNRwe53M4TP1BjbcTpuAdEsNfQsykLUpoPkBFXZavXbfcf"
    },
    elementContracts: {
        0: {
                address: "5HKzRyZbZeBiBr8gjwTNVDNoeGqMSKBi8fVptbSqWgJxKt7t"
            },
1: {
                address: "5CFNyKip4TYa6NPvD2ELdA7YmsWh8UdYNa6GCDQCo4qyEtMc"
            },
2: {
                address: "5FTe4tNAoPaznJ6q9jcrpd1VUhednWwy7DTw5hhYGEsnS2yJ"
            },
3: {
                address: "5GZBqCMLsQ3xibBUoe8NHGujLV5ZKpt7C8MYgUcGvZ816SzF"
            },
4: {
                address: "5ELWzM9LbyYFjcQks7eUp82JHPpGF8QwDAqjVqpRJBYGA3rr"
            },
5: {
                address: "5DQTBLJ7qTJynVSzhEARzxsNLDTvifUKkxhyn5QGXXSbCXy9"
            },
6: {
                address: "5DC48zhVjM8DvTFir3CGrEjemuYvXn6PwUsH9nkCbngrSmbo"
            },
7: {
                address: "5E6b5rPfEr1aa9Jx3gdzc9ctGoZT78Q4f8HyRE2MohJDbT7s"
            },
8: {
                address: "5FYdyc3S81qBC1ptssfqM7vgEdhQ1Tqoz2U5WS9ymzmzNkGV"
            },
9: {
                address: "5HhbbYnMdzDWBTiPH8Yd7RRaGqzbkJJj7mwxuiz79dF6svVf"
            },
10: {
                address: "5Gea3wfJNLJEpDx9a65xuW6TeViTLv7H1HRfAhsu8W5GgsxF"
            },
11: {
                address: "5D3MWsfMgXFiD5xBcrd2uHQGXMAprKnFs1szTMMbBtPzNcws"
            },
12: {
                address: "5DhatKVr7hkAG3QuWZQ82Yw9Q8tqGFiU8PXSXPHo3ZQ18inz"
            },
13: {
                address: "5FJw6QeaWwCSkQv4Ms2urf5w4UdW5CvvFhcihEgRisb14cbx"
            },
14: {
                address: "5FYtzJA3uE7zqBP3CNtH859EWVmzNsvJcFvyszWk38vC3kjW"
            },
15: {
                address: "5Gekw9tERuPfVSQYbowdqjj8m4MZDWkSJe518QPg7s9Pax94"
            },
16: {
                address: "5EAGLVjbKrVz3TUE6YS1DQ5vRq1osnqap1wb1iT3m4xxH4wq"
            },
17: {
                address: "5DQK8Gvk3zAgmaEpd6aDF9CL1nyWTR8LHzJ29hbwVmH2cf64"
            },
18: {
                address: "5ER3z8keGFFodFeyaZ2VciEuLpH2biCEgYqFBiabWzANP55X"
            },
19: {
                address: "5HETqC126uZUQLTs2HW5bcuESbx51aX2QhvTNNEWZCCKgAF8"
            },
20: {
                address: "5DGu28KirebSUrzrrJXAQMkKV5Etwmftuv7hTcUN3gRnCoAi"
            },
21: {
                address: "5FZYDWBud5TF7pd6Vv2Qe7cTu1pPtNA4SMyuEBb7FcXhzSyk"
            },
22: {
                address: "5CJmV3fUYNgrJW7qfzT7vCYp5UMzwiVdzNi3SiTCCooytMA4"
            },
23: {
                address: "5EKb72NT6PeCnCjQwJ8rQeFh11TY1VhWV4Q2eSwi11KqW9cE"
            },
24: {
                address: "5HPy2XvzFeSsPUGdTYi7AAvdtwnJhrEauBFmQu9qKHWwszbg"
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