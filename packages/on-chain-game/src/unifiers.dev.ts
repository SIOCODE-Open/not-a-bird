import { IChainDeployment, GAME_UNIFIERS } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';
import { loadGameChainWallet, createRandomGameChainWallet } from '@not-a-bird/game-chain-wallet';

const UNIFIERS_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "ws://127.0.0.1:9944",
    gameContract: {
        address: "5FwyfVqRo8j7FMfyseYiajSjLUuhMmf24outo6Ry9rrFjfz7"
    },
    elementContracts: {
        0: {
                address: "5GACrT38moQxGwobsURLq612jGrqPavWUm4tN6yNXbUb6cYd"
            },
1: {
                address: "5FzVcC9Ar2KdXmRxzQfZajfqtAS8C7Migb6ZcZmM8eEJbcs7"
            },
2: {
                address: "5DVC5yrbjQMbXvZ4U5sUQWvwCKrMww3G7fYa24UDumV1joo2"
            },
3: {
                address: "5CSfXhQtDJoe8e9gPGemfUzWjN9dR52uy7KNuaGjbU3UqyYc"
            },
4: {
                address: "5DpSNz68VuoCUdL4kKeWBspb5fB5j91oveKdhZScCRan3Y8E"
            },
5: {
                address: "5H4s91p9epvx1h1XDM3YQ9myTc5MfDmrmK9bMasMK8j9ZuhA"
            },
6: {
                address: "5DEVQn1WPQzeCTsZHFuwtjrZ4REpounX2KzJMACw5w1cLJUT"
            },
7: {
                address: "5Ep1dZ3CwdZgHsFPCnWhM8Et8kpKgdkN7wbsGX5XVoH57mAX"
            },
8: {
                address: "5CpeTPA7b6q4YGvimVSr68DaPGzGrY2DbE1gHkq8j7SHDSSc"
            },
9: {
                address: "5F1s9tVCcvYrKytAn837FST7qFh2Mny3mcjWKrwUreN4M4LH"
            },
10: {
                address: "5GuX7V8Bpm5ovPB69ArAtAEFPfBv5ah31pvJZJqbuCm4K5MN"
            },
11: {
                address: "5Ge8wGQtAsnqzT3no4vbMmMjbKiXUv8Mt42cr7cJRvrPF7sF"
            },
12: {
                address: "5EYWcZ8cfuHBaFw4KMdCaY94rMx2FwDHrmCpx2ojfFjzYEYW"
            },
13: {
                address: "5E5VfAWfFyybCVYGUe77w8nE4E8e5jRTWtKYc31yUVAvXEtU"
            },
14: {
                address: "5CxKykkMnw3ZpdtvkmopcoyZ1GpHydX3hMDzPJKYgi4tfiKS"
            },
15: {
                address: "5Eg5cUAfykVyU452pKsvBwyiBcZTUpbKRgzsYJhfv2kkSMAi"
            },
16: {
                address: "5DxCX6axaQbKAAE6WXWeiVACJZXrJFQXMws6PAN9CXSkQJsz"
            },
17: {
                address: "5H537fzAdPJJLuHPs6zLF3RP7xX1zavTQYj9MpLNepokfbjs"
            },
18: {
                address: "5DUwoFJUrUt5M3sb2F3Qbk4Es9M1zogDq5cC3TfnzH71WcBs"
            },
19: {
                address: "5GQmQJGXL4CA8w7Vtnj1LX6RRznnLhotJ7fS8V2c4hUJuWTg"
            },
20: {
                address: "5FRZkC1D4QvAQhWsPcYWAUZonfzCSsBnjDQPyd1icqyUji7N"
            },
21: {
                address: "5Ck5hL1tjXfNFi2B9Zn58oNw3PA1tpnPuk6rwZMxzaoKhysC"
            },
22: {
                address: "5GDAZKiTUKVpTrehPaMWq6RPYY7umYu4reKchmZkmwYMEfNW"
            },
23: {
                address: "5Giw2iEqZcUZVCo2mqss9poF4MmAFQX8bLqtjhgws1UAAga2"
            },
24: {
                address: "5GQ8exiyHCyPuKpjzYzBaLZde7WBqT7jc3wNGvNN9ZpWN65v"
            }
    },
    content: GAME_UNIFIERS
}

registerLazyGame(
    'unifiers.polkadotjs.dev',
    {
        name: 'Unifiers',
        description: 'A game created with the help of the Unifiers group',
        chainInfo: 'Deployed to dev',
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
            suri
        );
    }
);