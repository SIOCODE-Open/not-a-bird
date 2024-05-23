import { IGameWallet, IOnChainGame, IWorld } from "@not-a-bird/model";
import { useRef, useState } from "react";
import { BulmaCard } from "../../components/BulmaCard";
import { BulmaButton } from "../../components/BulmaButton";

export function ElementCard(
    props: {
        world: IWorld,
        wallet: IGameWallet,
        elementId: number,
        onChainGame: IOnChainGame,
        onPopulateWorld: () => any,
        isActiveDropTarget?: boolean,
        onBeginCrafting?: () => any,
        onExecuteCraft?: (a: number, b: number) => any | Promise<any>
    }
) {
    const craftSelectRef = useRef<HTMLSelectElement>(null);
    const [isLoadingBuy, setIsLoadingBuy] = useState(false);
    const [isLoadingSacrifice, setIsLoadingSacrifice] = useState(false);
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    const [isLoadingCraft, setIsLoadingCraft] = useState(false);

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
    };

    const onSacrificeElement = async () => {
        setIsLoadingSacrifice(true);
        await props.onChainGame.sacrifice(props.elementId);
        setIsLoadingSacrifice(false);
    };

    const onSendElement = async () => {
        setIsLoadingSend(true);
        alert("Not implemented");
        setIsLoadingSend(false);
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
        <BulmaButton onClick={onBuyElement} loading={isLoadingBuy}>
            Buy
        </BulmaButton>,
        <BulmaButton onClick={onSacrificeElement} loading={isLoadingSacrifice}>
            Sacrifice
        </BulmaButton>,
        <BulmaButton onClick={onSendElement} loading={isLoadingSend}>
            Send
        </BulmaButton>,
        (<>
            {
                isLoadingCraft ? <>
                    <p>Loading...</p>
                </> : <>
                    <div className="select is-rounded">
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

    ]}>
        <h1>
            {elementItem.name}
        </h1>
        <p>
            <i>
                {elementItem.description}
            </i>
        </p>
        <p>
            You have: {props.world.inventory.balances[props.elementId]}
        </p>
    </BulmaCard>
}