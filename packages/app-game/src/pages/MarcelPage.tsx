import { ALL_ITEMS, ALL_RECIPES, IAsset, IItem, IRecipe } from "@not-a-bird/model";
import { MouseEvent, useEffect, useRef, useState } from "react";
import CanvasCard from "../components/CanvasCard";

export function MarcelPage(props: { navigate: (path: string) => { void } }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const allRecipes = ALL_RECIPES as IRecipe[];
  const allItems = ALL_ITEMS as IItem[];

  const allAssets = [] as IAsset[];

  for (const [index, item] of allItems.entries()) {
    if (item.tier === 1) {
      allAssets.push({
        type: item,
        position: {
          x: (index % 5) * 200,
          y: Math.floor(index / 5) * 200,
        },
      });
    }
  }

  const [domAssets, setDomAssets] = useState<IAsset[]>(allAssets);

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [visibleCardInfo, setVisibleCardInfo] = useState<string[]>([]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string, index: number) => {
    setIsDragging(true);
    setDraggingId(id);
    setDraggingIndex(index);

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    setOffsetX(event.clientX - rect.left);
    setOffsetY(event.clientY - rect.top);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging || !draggingId) return;

    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    setDomAssets((prevAssets) => prevAssets.map((asset) => (asset.type.id.toString() === draggingId ? { ...asset, position: { x, y } } : asset)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingId(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const img = new Image();
        img.src = `assets/items/Placeholder.png`;
        img.onload = () => {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.onerror = () => {
          img.src = "assets/items/Placeholder.png";
        };
      }
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offsetX, offsetY]);

  const detectOverlap = (element1: HTMLElement, element2: HTMLElement) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect2.left > rect1.right || rect2.right < rect1.left || rect2.top > rect1.bottom || rect2.bottom < rect1.top);
  };

  const mergeCards = (index1: number, index2: number) => {
    const newDomAssets = [...domAssets];
    const asset1 = newDomAssets[index1];
    const asset2 = newDomAssets[index2];

    // Find a recipe that includes both assets
    console.log(asset1.type);
    console.log(allRecipes);
    const recipe = allRecipes.find((r) => {
      return (r.a === asset1.type && r.b === asset2.type) || (r.a === asset2.type && r.b === asset1.type);
    });

    if (recipe) {
      const mergedAsset = {
        type: recipe.result,
        position: {
          x: asset2.position.x,
          y: asset2.position.y,
        },
      };

      newDomAssets.splice(index1, 1, mergedAsset);
      newDomAssets.splice(index2, 1);

      setDomAssets(newDomAssets);
    } else {
      console.log("No matching recipe found for assets", asset1.type, asset2.type);
    }
  };

  function handleDoubleClick(asset: IAsset): void {
    setVisibleCardInfo((prevVisibleCardInfo) => {
      if (prevVisibleCardInfo.includes(asset.type.id.toString())) {
        return prevVisibleCardInfo.filter((id) => id !== asset.type.id.toString());
      } else {
        return [...prevVisibleCardInfo, asset.type.id.toString()];
      }
    });
  }

  const getStars = (tier: number) => {
    return "⭐".repeat(tier);
  };

  return (
    <>
      {domAssets.map((asset, index) => (
        <div
          key={index}
          className="cardBackground"
          onMouseDown={(event) => handleMouseDown(event, asset.type.id.toString(), index)}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onDoubleClick={(event) => handleDoubleClick(asset)}
          style={{ position: "absolute", left: `${asset.position.x}px`, top: `${asset.position.y}px`, zIndex: draggingIndex === index ? 1 : 0 }}
          ref={(element) => {
            if (element) {
              for (let i = 0; i < domAssets.length; i++) {
                if (i !== index && detectOverlap(element, document.querySelector(`.cardBackground:nth-child(${i + 1})`))) {
                  mergeCards(index, i);
                }
              }
            }
          }}
        >
          <div className="centerContainerPictureAndText">
            <CanvasCard asset={asset} />
            <p className="modifyCardP cardDescriptionBackground">{asset.type.name}</p>
            <div className={`cardInfo ${visibleCardInfo.includes(asset.type.id.toString()) ? "visible" : ""}`}>
              <p className="cardDescriptionBackground">{asset.type.description}</p>
              <p>{getStars(asset.type.tier)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
