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
        address: "5DMBon1j8yZ4HXjzSEgvYnwtXBe8B1jVPihyZfy8yHKDTzAi"
    },
    elementContracts: {
        0: {
                address: "5Ehtwg36UdF8bcxoLM9oEr1QhtGwt3zR8tyR9GvSw6ne35rw"
            },
1: {
                address: "5DuLYYpTC9Drz3DbqdSonGEnyvZWoSWYoxb1JCoUfQTEd3WE"
            },
2: {
                address: "5C7zt4nnLDfHsac7rE7sEeR9oqypeE5GUjp8X5q1N4qgAVKr"
            },
3: {
                address: "5Db1nmGC5PWUGypvxFAYbrV7jytVdPc9hkwshyDXKKXTvytx"
            },
4: {
                address: "5Gu7yArB4h3a5KA7AG1fX91ca7oYdZN64iL1o9dbgRK71px2"
            },
5: {
                address: "5DftDBnQQnT3nbtggGqeRmFZcA8Co94w6UHFanHNABpgrs45"
            },
6: {
                address: "5HNC2dfz7qAa6gs2bhPaJNSVGQxab1rpTxmQz2eYzsr2t3kj"
            },
7: {
                address: "5FYZHveTF7ntfwL7msWUZiqTM31yRKDDPNpKqNoCr8MprkPZ"
            },
8: {
                address: "5EXovnrLz3WiFi2tYaY7KAEjJsyjbBB7BuHGaTGQEmbcvH5i"
            },
9: {
                address: "5DXmDnN5k5hHvd5qQCLMSKaTS7NzDGFXbCSdLSNapeZhMvVt"
            },
10: {
                address: "5HbmLRD5PtYwC1YXi5w2pNZXbsJTXFTV4v5QLyrHp1KHLaeF"
            },
11: {
                address: "5Hct85sQwqAuR2M1C1bLTekemKmXxcKx8VuMi6ieLP1ZYtDM"
            },
12: {
                address: "5DnPCTfyPeCoVLDYxg7ZwfJ1HjUSFsnK2BEhrSoDXYtqByoy"
            },
13: {
                address: "5C9VLjBe5JULNf9vcwzRs1QQbRbfH4Ba21JxDMgbPLbnwYcd"
            },
14: {
                address: "5GwxC5P7pfcr5qJNZmqSpC6mGQnT57YndSoDLCPRUJxZDDix"
            },
15: {
                address: "5DedmwwkcAgsPjZw9S9Pi1vqkVu65gvfnWY4Uqm7oLZUuaF4"
            },
16: {
                address: "5GDF9wwxSUYZWiiGmiQP9aMFMTDybvnGd41FdpFANDVX5Wrb"
            },
17: {
                address: "5DoFmKbbEKUeqPBQrGwACxa2GxsbZNP57vaaXWykTMAQrqEo"
            },
18: {
                address: "5DzxZXkCWEUQeEVdXPFhysKbZfNwG3n5fUB6rKqJkcKZe91r"
            },
19: {
                address: "5Fe1s3pjHcu2Uhbh69k3cWUa126noqnrwuzwW1EBXiDcwfj4"
            },
20: {
                address: "5FzmMoSNRYJkBAJhWrukaXszrwBcPVGnuYnzFgWHVFZnd5ri"
            },
21: {
                address: "5DNa6KQ28xQ7fgCyhTq1P6xXTPuC6kuVqniwmaPa38VVuTxP"
            },
22: {
                address: "5E8vGBKTViztpGAL4jJDnUZYerRWau1qRFZFq264in6YoSih"
            },
23: {
                address: "5FUaBg7jf4wszJbjdPcun2Ax8EYW2dxcd2nmJAxi4qUQ2dc5"
            },
24: {
                address: "5CdQb5YfqSpu7UUZqiFw9f7gAFDtx6xY5YbB86ToFKjTTYPG"
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