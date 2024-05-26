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
        address: "5Cd4NapR4YRzh7DjjdN8sXLmoo9b9XrQL5pGs8obn5ciZ974"
    },
    elementContracts: {
        0: {
                address: "5ENzQtbXEbmgpw7tBhN7KTzuHGS8LqkESzKbNm2He7N6z9iF"
            },
1: {
                address: "5CiooQvWPGdPXj4soRDiwWXekCyADhqFzSMFUUfq2zTKkgvd"
            },
2: {
                address: "5D9i5zTpGgrZNpaTJrbmP9GrL9C33qGV2YuwdacVzuKnmwEV"
            },
3: {
                address: "5HhuCsQEbrymaSSCdXx3ro5eCs313Xyq9x6Yy5N4be1B9tTD"
            },
4: {
                address: "5EWYcUb3HyEDBijuRumPdWnvSCzstc9guxrxAFQN9tcGccJZ"
            },
5: {
                address: "5Ek1JxwNZvoPrrfn4NryWSUeC1V1YYvPkJS5Q1tgvbX17qJM"
            },
6: {
                address: "5Ef42tmU6nSJSu2QJbebv1uAYEZ9xouMeQQrikFgsYVvUUmR"
            },
7: {
                address: "5GqKWsVNt9KZekPmic84XvqVK5jhXyNU6jmKwJH14gYcQnp7"
            },
8: {
                address: "5CesYCqDx7H5C6DBf96HM96GkGta64xKCD2GdM64P9tcNGoY"
            },
9: {
                address: "5EhBtFdMis2ZnbZ2ypnMCRUfy56SzR3hxuVCvYpqCfr9uMfQ"
            },
10: {
                address: "5GsA4dyFuHjNg8KgUzHRodDSk6gKs7k2jaLUMDt472F8zkN7"
            },
11: {
                address: "5D3wF3rrUgjsZ9tBSYhvrFo5XwjfDcNJy8yPvWGPPL4Ea3PD"
            },
12: {
                address: "5F5NGe22AypowvMrMnpCgoDAc8g4ZJ7P5D6bihY4dUZ5p4Xt"
            },
13: {
                address: "5FS1DCSpWbbBynaXMkhhtvxFZ2Z7FADZKQ6grNhVCkVnDoYK"
            },
14: {
                address: "5HNGVzjhuVA2pyPyyEYdW6sHRteRGSVoi8rmHBRAUojavNwF"
            },
15: {
                address: "5HUd6szd4tWb5HVbxU2GrZgYjDf8G8WDBhgVMLn4q42hEsXZ"
            },
16: {
                address: "5Go7dyFuJAsS8Egf7ZKCnXHSkH16RpJqwEbWyPx41AMCQ1Qr"
            },
17: {
                address: "5CD6SzFudcsjQYp9yeAka4jvGvGd6Eixz63QJtq5HxqtALSA"
            },
18: {
                address: "5EA6S2vsANnUrZU8PqDbKJmYCCASB5yskrUJRjJ2sHiTwnFr"
            },
19: {
                address: "5F3QNwCMrH2sspBv4BDobw4bDGBVXrFeGKwVKSCDa6mt3W9Q"
            },
20: {
                address: "5Cm8ongWjNbxvFErq7gNH7A59Sd3P1pouPLE2iX3L8Qr2hZC"
            },
21: {
                address: "5DzLh2vQHzWZdQxbr4xuQnDmkwQbqWN1YS1LNhsQJ4WNfUYg"
            },
22: {
                address: "5Dwb3ZuKExWuM1bbvM3opNnLAw15ftecNLEA3cqtDNiCrnQH"
            },
23: {
                address: "5FreCcYR3wYr2aP6W4PR7EiVAszrtRy6o1Sgw6EYmujXRP4G"
            },
24: {
                address: "5Gte3JMPZNBEj1wTNoWLFc6LbyKxRS4vF9UGHF85M2orUQcK"
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