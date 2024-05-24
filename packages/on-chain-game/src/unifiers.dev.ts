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
        address: "5C7QwoejSRnufxcyeH3BFXEgNTFkqMFLCLenS8M61oAztbnL"
    },
    elementContracts: {
        0: {
                address: "5EWaKNdEG2NuGxZraRjipGd39xiDVTaLaZoop5E7LoutE49M"
            },
1: {
                address: "5D1M4u6Yr5ELXUVH4UPDNSyk4RyPA3GnHiDAF91a1ZAJRoMh"
            },
2: {
                address: "5GYDt1G2Ehv64Cq8hp84eK8jDwCGq4JinUQpAqiZZxHCLQXp"
            },
3: {
                address: "5GJEbbvwkxB1giAs2T68wzdcft9zZwmSqLDVUftuVh6zNWUJ"
            },
4: {
                address: "5GrrVzKbJEajGwS4s6HHUnNXh4tXxnU6pg6XpJiEvdzRHHTv"
            },
5: {
                address: "5CEZyxXHjP5BQMgowJP1F7R4Kk9JJ7g3vNsijuo7ioS21Eo8"
            },
6: {
                address: "5EYpqKGNAqFeQsW7fTx2ryghAftoTzsBoctTwm2GN7LQL3N7"
            },
7: {
                address: "5CyZK4VySvQefQZL2QDBVLciPNtReWSLyQSsfYf5MjRzagqS"
            },
8: {
                address: "5GxU33L7ggoSfGi3pfS8zpfGmhvSNBQU8s1x9Dyvtxw8H61F"
            },
9: {
                address: "5FQA4g7o5eazaYYfkCa56CkaPhVZDAnS5bpERBUkDaVac9Dv"
            },
10: {
                address: "5Eq9tH2HhfhTSX7xhrYBF6qFCyayrSBxrMXYFg5M7tuuNtX4"
            },
11: {
                address: "5Ehpqeot97x4NtMQGPJ1WKgo5ytM7QBiL3ts4iaXsqgCTdAB"
            },
12: {
                address: "5DxdorkhjE1k5zC9LgZh23A6Kpe2v19JJpo7GQgi9uQ1ZvB6"
            },
13: {
                address: "5H3yFVQks5ThHSVMytWiTwEBg31Ru9nrqAWXQitBkRCqLopM"
            },
14: {
                address: "5F5VKB8h92RaA3LSoGHjZ2aTNtVbQsqhnv9cHY5zUJye13wQ"
            },
15: {
                address: "5H1LJYvE7AbCz6R3pPVyYXRwrmWe5UUdDkH8Z3unHMo2zTfo"
            },
16: {
                address: "5FYH2eEzX7XKqBPz41nDWacdaf1oQD1LgvAa2q7u72NSyHbn"
            },
17: {
                address: "5FoCdivSYmbfJorUKwSY7L9UcyhConKKXxzPCvLphBzR4rS8"
            },
18: {
                address: "5FN2VeMurV6WSLNcfu6G6expc23KaKQTdWJkNZgDt74BXdnF"
            },
19: {
                address: "5CorFg5wtJXqzkQKvGc193cdE7aDpnsqvBH7ysdehSzVm7TK"
            },
20: {
                address: "5DAxrWYmS8AASPiH2wtzxeAVUoA9dJ2aPpPAj6Sib5zPyDZ2"
            },
21: {
                address: "5HfbwESnLBVNmxNb9xNva3kDgwWpBVMnt7H59H4UicAajLq3"
            },
22: {
                address: "5C9GLAh7s75yJXnvewNzZJadaf42obDUzAP5t1SgR4DmDWru"
            },
23: {
                address: "5GF418j7Bai37LYokZGPr5Q7vmD6BETFUQhrqLKKyTAepwFz"
            },
24: {
                address: "5HeJo3cbZacRQnRZmVk6jcy32eYME8rdMViZrzR8H5M4AWrs"
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