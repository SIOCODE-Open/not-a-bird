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
        address: "5FQ3niouwLpFkYivFodNu3h9S2zJzqqsjyugeboVVSxxiQC4"
    },
    elementContracts: {
        0: {
                address: "5EL3KRheqwU3t3ATuiVF5JcYxQTKViomWCWv1H2Ai1cgL359"
            },
1: {
                address: "5FttYA3skkkbGpcFBSwZfWPZg9jngMWKtBNWLpQ93otXt3VW"
            },
2: {
                address: "5CHVi8PX6J2ATPHSJsrSXakwTuM9iNNAbADXBpfvVNdPLavy"
            },
3: {
                address: "5Co8mTr61PXJAmGj63YAcB9CxcqRM7efNGd8PCupWuhFJV34"
            },
4: {
                address: "5HFM4y4vpAvqdrSQWFhdRHQKCzteRMNdwVSERuwW8p3aMHNN"
            },
5: {
                address: "5GGSXgsD3ntSic7b7grHgfq5bLuACMnwcRGQMiuwCz7zqQvK"
            },
6: {
                address: "5CjMDP7zvy98U6RvAmJCExHWGUtjpiUiMEkfi8p5CygjC9JG"
            },
7: {
                address: "5Cku54v5euqF64uVoAMu7Ci6HzKHzuTadu3CoSU7bDfZzjHN"
            },
8: {
                address: "5EJaT1jNnLHXoBB6tVSnjsaKAEYzdhHi1qgPT7fUMwJCnZsU"
            },
9: {
                address: "5H5JFApPqDMkdXP34YiS5YS3V4zTQLyieHCVJsPCuFHrhfCU"
            },
10: {
                address: "5ELZVLH64c2q1iu5WwXBb1zs9WjxquRuFgNpkmywUcyv4DHM"
            },
11: {
                address: "5CRMTX85TtoP1XwjUVeAoMagz2R5S3FeSoAzrML6NaYsmdR4"
            },
12: {
                address: "5DWxeCYv3wcfc1MP69MGR9BvHarsrMEe2nagZ9BriCYUkDiF"
            },
13: {
                address: "5HFKAzRRa3F7pjCpdttHp2EDZmQmxWDqhirzZRfWxX94bSEp"
            },
14: {
                address: "5C7aJQnzuUL79MDxLaGXdCJUp7iv9BxhPJrav4BoSa8hLCg4"
            },
15: {
                address: "5CDFLTaBR63EWCmzAgEBXqQwcmqCnG3N27Tdgrc9K6TtaPVQ"
            },
16: {
                address: "5EHe4XLk4ZxwFqXiSLuv9Avdmki3qFFJNrTxrNdZzAPfjx2j"
            },
17: {
                address: "5GLfk2i4yDqtBs6QcXSewjYbTmFbahSs8j6wSUrFawWfo57k"
            },
18: {
                address: "5HXm7p2PfHUo5ti8aZas5q1MTDY4MwN25zMjnBNZiqQNpUKG"
            },
19: {
                address: "5Eb1WbDyUm1hxMn9yRuV1RJD2pnrDFXwLMDFGt7FM2LmSFre"
            },
20: {
                address: "5DeXy3X1yJYPrkNd7EJvBh9NqNdZC8RH2ZYH5GXf5Rcn3PLv"
            },
21: {
                address: "5CS7FupSeRsKjiv38FHWiADn2yntAdzmhri16UFRxs5V4wsQ"
            },
22: {
                address: "5Ene2KbGwztbPftDYLYYpxnSAVcU6DYfq9ueavF9hpM5cDhw"
            },
23: {
                address: "5Dow4RjsbUmpUDjKZ46hfysZQ4YXY9pX4pZU6gP8fuvJtR3V"
            },
24: {
                address: "5GN7aJ2fSdWwkKeQKriY9rLALhfwYMFF5NjUQrseBhF5vDvQ"
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