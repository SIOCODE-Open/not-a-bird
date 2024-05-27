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
        address: "5E1JqUqmHxnhYFF1Rwpmq98zyLpVPf82CdM58ycwEcQSwGAd"
    },
    elementContracts: {
        0: {
                address: "5G9aRJeXGtmqHgZ2SQ5eSNefvzJcJzQzuMF83awhML7RcsPC"
            },
1: {
                address: "5Fr11ZFjkYXyQTqobATbLyUMPMJxRLCC5QALHMmd6aHDf5KZ"
            },
2: {
                address: "5FpUDe9inrsXRVuYUxHTbhVYznKDET3auPRsRE7M55gBZig4"
            },
3: {
                address: "5DysArWZz1vMjmxd79KXT1sAB9W1yRrGMmpi46Ro13cgBmSh"
            },
4: {
                address: "5F2qNdVwWc2NiN8fgFLxhJYEac8b524uQi582U7wZm8uWKMv"
            },
5: {
                address: "5E3g3mwgbjU6ZH37jU8FwWhk2rbtZ9BEYvtW7auAaokpyWCb"
            },
6: {
                address: "5GJCv5UkQpDVfUoCRzEeqDhXdNrC7MfvJzyJ5SrbcN2pQJQ9"
            },
7: {
                address: "5DjwK3TXpWXXGsk3cty7nn7qrqfPydAwnWkSxNhKwHRq2fAN"
            },
8: {
                address: "5FrsqZXspxJs9iQHgq6ZX9m2at5MV4Ve47TYd8bMbax1onSH"
            },
9: {
                address: "5FDaSAtp7da8cKjyMERcp1F2f49FBkhYm2rgejfBH9nx3Vm8"
            },
10: {
                address: "5CsCYADiByn7StZXMQjfkTAPcbu5GAbJn9gGkRfP15LqmPv5"
            },
11: {
                address: "5EvdC9TyZX6n2iaB4XyAPoYACmDGouj69zcwwSRTWrsdFLUA"
            },
12: {
                address: "5EWUHC71R1oMSoqsxoTDyH73LVDDw6Ltx38gnie4HmyDN5eT"
            },
13: {
                address: "5GBFcusUpgtau4AC3YY46GuUrzKX3kHJfMvPewKwPPv6gjmG"
            },
14: {
                address: "5DTNVkDGRWS9WugmmsUyH6gCTyB5Ke17q98TcTvEYqLuM7M4"
            },
15: {
                address: "5EQ1ujeDRuSPFYKDTo7LJx16U7wGFrm245EKex9YFzC2mT6C"
            },
16: {
                address: "5EQN5F8WF9tndxe755s9UfyxJVrmoRwRMX7fBz3Nx4Hh98PM"
            },
17: {
                address: "5FgqiGnXnx4ebv2r8VMKnrYu5Cj8qNJriTEkEaSsZNEE41A8"
            },
18: {
                address: "5GVDHxzLMBxn6fF34eXpdjq5GcjLLcKREeDFGokjfkfR3wDs"
            },
19: {
                address: "5Du8oBr949xYVXxj6RRduWv73Kp4YRVciiFjdC45rqRAmomx"
            },
20: {
                address: "5ETD2TMrtvow7VLWkf24jpD2zwCiqaFZn3s5CK7S3e4oYZcd"
            },
21: {
                address: "5H4ifRavuVa1gLpGu6szRFBbf3giDRBTx9TX85q5sJm88i2E"
            },
22: {
                address: "5FCAmvdPgY486gKZww4iPCNpYc6WyJk2gegLWLBNw615utxX"
            },
23: {
                address: "5CdFRXQxQpPq6t2PxCaXra27Mzj4EDrKez9W4dRszyDuxPbq"
            },
24: {
                address: "5FwCBcncM45mnbarahQfbLaP5Vgz3JfmcNPcoNphX4XuxEjj"
            }
    },
    content: GAME_UNIFIERS
}

const GAME_CHAIN_NATIVE_TOKEN_META = {
    name: 'Unit',
    symbol: 'UNIT',
    decimals: 12
};

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
            suri,
            GAME_CHAIN_NATIVE_TOKEN_META
        );
    }
);