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
        address: "5FbvxgmfeXX438s7EJ3Yjbdt1U4z1ngLgjZKjMhKkKkWuBce"
    },
    elementContracts: {
        0: {
                address: "5HCuVFiumxxCt7zmvyRTkGAXyyoLW3Myn7QTn8uYztgffYmN"
            },
1: {
                address: "5FRt9Pt3iWBdszS5YAwo9ZSBEPshc8ZnKkdtbzyoWNeHmxm4"
            },
2: {
                address: "5GmH1N6zfVB6255QSbWJvVV3xdpytJRcsHSfjFR5WP4nagKu"
            },
3: {
                address: "5H8DFyvwz9ZPgFwK9936hVGq5m6UJv9Xsdb5BSWqZDrmarmw"
            },
4: {
                address: "5DzX8dFDtinVPmrHBSHWj73aqBZNJzr8q6vXpHAPocFDEQhK"
            },
5: {
                address: "5CroirJqrb6L9TDsY7WADxWbrCFjzF4A3DjavFKgWKdHHFYK"
            },
6: {
                address: "5CdrW1G9mD64iGVSyCd3tbMVeiLUsovG5bTLJga9TeNRsxni"
            },
7: {
                address: "5EryRCNiiE38zv46NgzJ5ZdHAkWtBCkBH33NEmYX5QSRcGAj"
            },
8: {
                address: "5HHLUNg5VVpndQSLpKybSGxyA3rXzFs67KJoB2ZJojHt9qUz"
            },
9: {
                address: "5FSJme9jnP8JHDQYN9DAm4ni2v3gjK5mb69yxkqiRAkAj531"
            },
10: {
                address: "5HVBsP68kKzDjBHpxXyUeAsu7TpvJzEjyKuk3gUYiJ5qXq1a"
            },
11: {
                address: "5DwZgonwkqCvUrYEpXctHDfMN6T5uJSPUb5D1dcswwC5e5G5"
            },
12: {
                address: "5FxYVzCxeWw2P5ej5Fz4cyCnu4hQdYGri8UakXaBjzRAXUc9"
            },
13: {
                address: "5Emjwshm8Da3CcXWoyAbhz9zQKjHFxjHSDYya2NeqXwb5gfH"
            },
14: {
                address: "5GabXiSbWoTEroxKeQ7AHLYviRPMjZYsSro12gGNRyLfRJ41"
            },
15: {
                address: "5EBfiVWBrccLjnEvDs36XM5qrJDW4pbUYgwN3MXpAxccR2BM"
            },
16: {
                address: "5FLtRHsir4apK2rmU4rSF2AqKpT9eVqQuRCjjRVJABNUK8YX"
            },
17: {
                address: "5Ce4qtDHjhHAUn9EnhYpdbVfgxzQ5N5tymTs5GxYjsjv3prJ"
            },
18: {
                address: "5Dj4PuE9qpY85Ed2bSfsJF8RkvsyhwFTMyWiF8HEzYLdpwb5"
            },
19: {
                address: "5FEzCxSu3ookKG4PgGcwHRTmQbSxvezXKg28T54z1a5GCbh3"
            },
20: {
                address: "5D7ExJ2tz1qQe8yc37EyLLBpKw7fynxDQ7a3auY8qh2yygRx"
            },
21: {
                address: "5FpjxrCusrHQ8kjv7gkh8QpU87av1jojNfuznbSFAqxD8FtX"
            },
22: {
                address: "5DskTqMZJ7uLxsF3bWohag8rCEBEg65WynTP8d4bL9ao6WiW"
            },
23: {
                address: "5F3BP8YNLg9z8YK13fjmaNGc2giy3M1ucTCyAWEj177gqMFU"
            },
24: {
                address: "5CT1oQaSmiZwmPFqfqBvcB7eMe695ubJG7iVG1MvwDW3jaiq"
            }
    },
    content: GAME_UNIFIERS
}

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
            suri
        );
    }
);