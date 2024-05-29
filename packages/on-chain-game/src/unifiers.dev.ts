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
        address: "5GRJRHYotwFXhigFFKcYJKYbRN6TC21Q3rxsqyxdhy9utunR"
    },
    elementContracts: {
        0: {
                address: "5GRdMBvV8DFgBFv6ciCnq4XWWh7QwBwrN6sXmDcXpLWQs46W"
            },
1: {
                address: "5GUnRQrSPXNquKWGKcjmA49hUt1wChLjAYngdiEjMybUh8mS"
            },
2: {
                address: "5EMJRVtMbzJUcF4u5BkwmUNK489S2s9ti13EEqVzxBpNVghG"
            },
3: {
                address: "5HD8u8nfsaEWuf1gtpQw4GTEp7nKrq76UYHCAnffgEx6q1cN"
            },
4: {
                address: "5G5xoS3TXiRVsHJqq29seKjSeTDRo52ePFjY6dhuyb2wntQK"
            },
5: {
                address: "5FLYJMLSXbjbokMRUH9ti5eTQ1vWVdEUeovLWaKQHFmRPApL"
            },
6: {
                address: "5FUMPRYRJ4dn3nUkpU6xru13wW7N1jete4oaUWdKDwuasvQ6"
            },
7: {
                address: "5ENobB34mHmJejRmJH6GrsGJTCaLaJBaCvnEUWbDL9VtnLzp"
            },
8: {
                address: "5Fnv596Ht5Y7xSpTFtyGZwctNvg1exMfvkiZ173TSApbLDb2"
            },
9: {
                address: "5CFNHdSKSNJyDvRt36LM47auRGRDvQs5JLLjS7Th6o6mu4j2"
            },
10: {
                address: "5DusPLnQTESbmiwk4MHEU5uLEeaBRCuASmW7jGX3rCABZexW"
            },
11: {
                address: "5DkVuaqskXugmmHwmLFM6iEmaCZSEqVightNpdYQZGKnzjqq"
            },
12: {
                address: "5HewWStM6oQxAeyLfEqBb6yJshQM4tFK8SDNrb7pXR7NrujR"
            },
13: {
                address: "5CtmmFGQB4Phk2nnnLZDHuH2TmDV9aLf6kzNt6bhc1V3K6Pa"
            },
14: {
                address: "5H1mY23DjCnZphr7x6wfPZ7jtX765DQmun3NC7xbwV2tQTJD"
            },
15: {
                address: "5CWjnVbtSKvhi22N1yXKfqUWfqaBGAZCQfp4npYKLutGn5pN"
            },
16: {
                address: "5GE3KA2v2cYAreAqqrKgRVULkKmTifxdpFPinTkjJ3yBRjwC"
            },
17: {
                address: "5G2QBUyJjaeT2osx3K27G3oASVVnuvP4xFNymrmtPL5MasBw"
            },
18: {
                address: "5CrqZUL65WfP1TbTfG67YNpdWH2JqTMXVwxQt6ZqBmqk5RRf"
            },
19: {
                address: "5CsHRDrP2nMNcmpZrSDZqiAFpv4Bif37HPKAr1wHnV42yUed"
            },
20: {
                address: "5Fhr3Rn7aMcCZEAPusNWM2NZvnqn4GZhcT3nTifeBrT9nNrx"
            },
21: {
                address: "5FwhA956wzUAyDLpR8SNNbTayDdZXXxWupdiXcoTuWx6EoJ4"
            },
22: {
                address: "5HaSvNC4gffYRrxKE4FmHRcf7iQ54EPWH2FbxSVtxC8afyh9"
            },
23: {
                address: "5DamDNyHR956iUfoMXiLb5cZ4RuoEPD5fZ1odSam7mmT9PG5"
            },
24: {
                address: "5CbmGpoNNwtY4M4jfc2jffhEMed9ST8vcz9eQU3EZ7vqCHpm"
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