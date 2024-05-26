import { loadGameChainWallet } from "@not-a-bird/game-chain-wallet";
import { IGameWallet } from "@not-a-bird/model";
import { $modals } from "../service/Modals";
import { IModalContext } from "./IModalContext";
import { BulmaButton } from "../components/BulmaButton";
import { useState } from "react";

export async function showWalletDialog(
    wallet: IGameWallet
) {
    const chainWallet = await loadGameChainWallet();
    await new Promise<void>((resolve, reject) => {
        $modals.openModal({
            title: "Wallet",
            message: "",
            content: (ctx: IModalContext) => {
                const [didCopy, setDidCopy] = useState(false);

                const copyAddress = async () => {
                    await navigator.clipboard.writeText(wallet.address);
                    setDidCopy(true);
                }

                const addressQrUrl = `https://barcode.tec-it.com/barcode.ashx?data=${wallet.address}&code=QRCode`

                return <>
                    <p className="block">
                        <div className="level">
                            <div className="level-item">
                                <figure className="image is-128x128">
                                    <img src={addressQrUrl} alt="QR code" />
                                </figure>
                            </div>
                            <div className="level-item">
                                <div className="notification is-link">
                                    <p className="block">
                                        This QR code contains your address.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </p>
                    <p className="block">
                        <div className="field has-addons is-fullwidth">
                            <div className="control">
                                <BulmaButton color="static">
                                    Address
                                </BulmaButton>
                            </div>
                            <div className="control is-expanded">
                                <input
                                    className="input"
                                    type="text"
                                    value={wallet.address}
                                    readOnly
                                />
                            </div>
                            <div className="control">
                                <BulmaButton
                                    color="dark"
                                    onClick={copyAddress}
                                >
                                    {didCopy ? "Copied" : "Copy"}
                                </BulmaButton>
                            </div>
                        </div>
                    </p>
                    <p className="block">
                        <div className="field has-addons is-fullwidth">
                            <div className="control">
                                <BulmaButton color="static">
                                    SURI
                                </BulmaButton>
                            </div>
                            <div className="control is-expanded">
                                <input
                                    className="input"
                                    type="text"
                                    value={chainWallet?.suri || 'UNKNOWN'}
                                    readOnly
                                />
                            </div>
                        </div>
                    </p>
                    <p className="block">
                        <div className="field has-addons is-fullwidth">
                            <div className="control">
                                <BulmaButton color="static">
                                    Balance
                                </BulmaButton>
                            </div>
                            <div className="control is-expanded">
                                <input
                                    className="input"
                                    type="text"
                                    value={
                                        (
                                            parseInt(wallet.balance.toString()) / Math.pow(10, wallet.token.decimals)
                                        ).toFixed(4) + ""
                                    }
                                    readOnly
                                />
                            </div>
                            <div className="control">
                                <BulmaButton
                                    color="static"
                                >
                                    {wallet.token.symbol}
                                </BulmaButton>
                            </div>
                        </div>
                    </p>
                </>
            },
            actions: [
                {
                    label: "Close",
                    onAction: ({ closeModal }) => {
                        closeModal();
                        resolve();
                    },
                },
            ],
        })
    });
}
