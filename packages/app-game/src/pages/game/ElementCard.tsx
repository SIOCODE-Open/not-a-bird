import { IGameWallet, IOnChainGame, IWorld } from "@not-a-bird/model";
import { useRef, useState } from "react";
import { BulmaCard } from "../../components/BulmaCard";
import { BulmaButton } from "../../components/BulmaButton";
import { IAchievementService } from "@not-a-bird/on-chain-game";

export function ElementCard(
    props: {
        world: IWorld,
        wallet: IGameWallet,
        elementId: number,
        onChainGame: IOnChainGame,
        onPopulateWorld: () => any,
        isActiveDropTarget?: boolean,
        onBeginCrafting?: () => any,
        onExecuteCraft?: (a: number, b: number) => any | Promise<any>,
        achievementsService?: IAchievementService | null
    }
) {
    const craftSelectRef = useRef<HTMLSelectElement>(null);
    const [isLoadingBuy, setIsLoadingBuy] = useState(false);
    const [isLoadingSacrifice, setIsLoadingSacrifice] = useState(false);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    const [isLoadingCraft, setIsLoadingCraft] = useState(false);
    const [isSendActive, setIsSendActive] = useState(false);
    const [sendToAddress, setSendToAddress] = useState("");
    const [sendAmount, setSendAmount] = useState(0);
    const [isSendFinalizeLoading, setIsSendFinalizeLoading] = useState(false);
    const resolveSendRef = useRef<any>(null);

    const elementItem = props.world.items.find((item) => item.id === props.elementId);

    if (!elementItem) {
        return <BulmaCard>
            <p>Element not found: {props.elementId}</p>
        </BulmaCard>;
    }

    const onBuyElement = async () => {
        setIsLoadingBuy(true);
        await props.onChainGame.buy(props.elementId, 1);
        setIsLoadingBuy(false);
        props.achievementsService?.onBuyElement(props.elementId, 1);
    };

    const onSacrificeElement = async () => {
        setIsLoadingSacrifice(true);
        await props.onChainGame.sacrifice(props.elementId);
        setIsLoadingSacrifice(false);
        props.achievementsService?.onSacrificeElement(props.elementId, 1);
    };

    const onSendElement = async () => {
        setSendToAddress("");
        setSendAmount(0);
        setIsLoadingSend(true);
        await new Promise<void>(
            (resolve, reject) => {
                resolveSendRef.current = resolve;
                setIsSendActive(true);
            }
        )
        setIsLoadingSend(false);
    };

    const onFinalizeSend = async () => {
        console.log("onFinalizeSend: ", sendToAddress, sendAmount);
        try {
            setIsSendFinalizeLoading(true);
            await props.onChainGame.send(props.elementId, sendToAddress, sendAmount);
            setIsSendActive(false);
            resolveSendRef.current();
        } catch (e) {
            console.error("Error sending: ", e);
        } finally {
            setIsSendFinalizeLoading(false);
        }
    };

    const onCancelSend = async () => {
        setIsSendActive(false);
        resolveSendRef.current();
    };

    const foundRecipes = props.world.recipes.filter(
        (recipe) => recipe.a.id === props.elementId || recipe.b.id === props.elementId
    );
    const activeElementIdsSet = new Set<number>();
    let craftableWithSelf = false;
    foundRecipes.forEach((recipe) => {
        activeElementIdsSet.add(recipe.a.id);
        activeElementIdsSet.add(recipe.b.id);
        if (recipe.a.id === props.elementId && recipe.b.id === props.elementId) {
            craftableWithSelf = true;
        }
    });
    if (!craftableWithSelf) {
        activeElementIdsSet.delete(props.elementId);
    }
    const craftableWith = props.world.items.filter(
        (item) => activeElementIdsSet.has(item.id) && props.world.inventory.balances[item.id] > 0
    );

    const onSelectChanged = async (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setIsLoadingCraft(true);
        const selectedId = parseInt(ev.target.value);
        console.log("Selected: ", selectedId);
        if (selectedId < 0) {
            return;
        }
        await props.onExecuteCraft?.(props.elementId, selectedId);
        ev.target.options[0].selected = true;
        setIsLoadingCraft(false);
    }

    return <BulmaCard footer={[
        (<>
            {
                isLoadingCraft ? <>
                    <progress className="progress is-large is-primary is-indeterminate"></progress>
                </> : <>
                    <div className="select is-rounded is-fullwidth">
                        <select title="Craft ..." ref={craftSelectRef} onChange={onSelectChanged}>
                            <option value={-1}>Craft ...</option>
                            {
                                craftableWith.map(
                                    (item) => (
                                        <option value={item.id}>
                                            {item.name}
                                        </option>
                                    )
                                )
                            }
                        </select>
                    </div>
                </>
            }
        </>)
    ]}
    >
        <p className="block is-flex is-justify-content-center is-align-items-center">
            <figure className="image is-128x128">
                <img className="is-rounded" src={"/assets/items/item." + elementItem.name.split(' ').map(s => s.toLowerCase()).join('') + ".png"} alt={elementItem.name} />
            </figure>
        </p>
        <h1 className="title">
            {elementItem.name}
        </h1>
        <p className="block">
            <i>
                {elementItem.description}
            </i>
        </p>
        <p className="block">
            <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                    <span className="tags has-addons">
                        <span className="tag is-large is-dark">
                            Tier
                        </span>
                        <span className="tag is-large is-info">
                            {elementItem.tier}
                        </span>
                    </span>
                </div>
                <div className="control">
                    <span className="tags has-addons">
                        <span className="tag is-large is-dark">
                            Balance
                        </span>
                        <span className="tag is-large is-success">
                            {props.world.inventory.balances[props.elementId]}
                        </span>
                    </span>
                </div>
            </div>
        </p>
        <p className="block">
            <div className="field has-addons is-fullwidth is-rounded my-1">
                <div className="control is-expanded">
                    <BulmaButton fullWidth onClick={onBuyElement} loading={isLoadingBuy}>
                        Buy
                    </BulmaButton>
                </div>
                <div className="control is-expanded">
                    <BulmaButton fullWidth onClick={onSacrificeElement} loading={isLoadingSacrifice}>
                        Sacrifice
                    </BulmaButton>
                </div>
                <div className="control is-expanded">
                    <BulmaButton fullWidth onClick={onSendElement} loading={isLoadingSend}>
                        Send
                    </BulmaButton>
                </div>
            </div>
        </p>
        {
            isSendActive ? (
                <p className="block">
                    <div className="field is-fullwidth has-addons">
                        <div className="control is-expanded">
                            <input className="input" type="text"
                                placeholder="Send to address"
                                value={sendToAddress}
                                onChange={(ev) => setSendToAddress(ev.target.value)} />
                        </div>
                    </div>
                    <div className="field is-fullwidth has-addons">
                        <div className="control is-expanded">
                            <input className="input" type="number"
                                placeholder="Amount"
                                value={sendAmount}
                                onChange={(ev) => setSendAmount(parseFloat(ev.target.value))} />
                        </div>
                        <div className="control">
                            <a className="button is-static">
                                {elementItem.name}
                            </a>
                        </div>
                    </div>
                    <div className="field is-fullwidth has-addons">
                        <div className="control is-expanded">
                            <BulmaButton fullWidth onClick={onCancelSend} loading={isSendFinalizeLoading}>
                                Cancel
                            </BulmaButton>
                        </div>
                        <div className="control is-expanded">
                            <BulmaButton fullWidth color="success" onClick={onFinalizeSend} loading={isSendFinalizeLoading}>
                                Send
                            </BulmaButton>
                        </div>
                    </div>
                </p>
            ) : null
        }
    </BulmaCard>
}