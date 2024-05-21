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
        onExecuteCraft?: (a: number, b: number) => any
    }
) {
    const [isBeingDragged, setIsBeingDragged] = useState(false);
    const craftSelectRef = useRef<HTMLSelectElement>(null);

    const elementItem = props.world.items.find((item) => item.id === props.elementId);

    if (!elementItem) {
        return <BulmaCard>
            <p>Element not found: {props.elementId}</p>
        </BulmaCard>;
    }

    const onBuyElement = async () => {
        await props.onChainGame.buy(props.elementId, 1);
        await props.onPopulateWorld();
    };

    const onSacrificeElement = async () => {
        await props.onChainGame.sacrifice(props.elementId);
        await props.onPopulateWorld();
    };

    const onSendElement = async () => {
        alert("Not implemented");
    };

    const onStartDraggingElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Dragging element: ", props.elementId);
        setIsBeingDragged(true);
        ev.dataTransfer.setData("elementId", props.elementId.toString());
        props.onBeginCrafting?.();
    };

    const onEndDraggingElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Ended dragging of element: ", props.elementId);
        setIsBeingDragged(false);
    };

    const onDropElement = (ev: React.DragEvent<HTMLDivElement>) => {
        // ev.preventDefault();
        console.log("Dropped element: ", ev.dataTransfer.getData("elementId"));
        props.onExecuteCraft?.(parseInt(ev.dataTransfer.getData("elementId")), props.elementId);
    };

    const onCraftElement = () => {
        props.onBeginCrafting?.();
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

    const onSelectChanged = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(ev.target.value);
        console.log("Selected: ", selectedId);
        if (selectedId < 0) {
            return;
        }
        props.onExecuteCraft?.(props.elementId, selectedId);
        ev.target.options[0].selected = true;
    }

    return <BulmaCard footer={[
        <BulmaButton onClick={onBuyElement}>
            Buy
        </BulmaButton>,
        <BulmaButton onClick={onSacrificeElement}>
            Sacrifice
        </BulmaButton>,
        <BulmaButton onClick={onSendElement}>
            Send
        </BulmaButton>,
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