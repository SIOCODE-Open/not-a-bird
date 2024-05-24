import { cryptoWaitReady, mnemonicGenerate } from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/api";

export interface IGameChainWallet {
    address: string;
    suri: string;
}

export async function loadGameChainWallet(): Promise<IGameChainWallet | null> {
    const localStorageItem = localStorage.getItem('game-chain-wallet');
    if (!localStorageItem) {
        console.log("loadGameChainWallet", "null wallet");
        return null;
    }
    const w = JSON.parse(localStorageItem) as IGameChainWallet;
    console.log("loadGameChainWallet", "wallet found", w);
    return w;
}

export async function createGameChainWalletFromSURI(suri: string): Promise<IGameChainWallet> {
    await cryptoWaitReady();
    const kr = new Keyring({ type: 'sr25519' });
    const pair = kr.addFromUri(suri);
    const address = pair.address;
    const gameChainWallet = {
        address,
        suri,
    };
    localStorage.setItem('game-chain-wallet', JSON.stringify(gameChainWallet));
    console.log("createGameChainWalletFromSURI", "wallet created", gameChainWallet);
    return gameChainWallet;
}

export async function createRandomGameChainWallet(): Promise<IGameChainWallet> {
    await cryptoWaitReady();
    const mn = mnemonicGenerate(12);
    const kr = new Keyring({ type: 'sr25519' });
    const pair = kr.addFromUri(mn);
    const address = pair.address;
    const gameChainWallet = {
        address,
        suri: mn,
    };
    localStorage.setItem('game-chain-wallet', JSON.stringify(gameChainWallet));
    console.log("createRandomGameChainWallet", "wallet created", gameChainWallet);
    return gameChainWallet;
}
