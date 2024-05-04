import { useEffect, useState } from "react";
import { useControls, button } from "leva";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [items, setItems] = useState([
    "/assets/items/item.coalbag.png",
    "/assets/items/item.coalore.png",
    "/assets/items/item.corn.png",
    "/assets/items/item.crystal.png",
    "/assets/items/item.firewood.png",
    "/assets/items/item.flour.png",
    "/assets/items/item.gears.png",
    "/assets/items/item.goldbars.png",
    "/assets/items/item.goldore.png",
    "/assets/items/item.ironore.png",
    "/assets/items/item.logs.png",
    "/assets/items/item.planks.png",
    "/assets/items/item.popcorn.png",
    "/assets/items/item.steelbars.png",
    "/assets/items/item.wheat.png",
  ]);
  function handleClick() {
    if (currentItemIndex < items.length - 1) {
      setCurrentItemIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentItemIndex(0);
    }
  }
  const [, set] = useControls(
    "a_number",
    () => ({
      owner: {
        value: 4,
        disabled: true,
      },
      set_number: button(() => set_number()),
      change_picture: button(() => handleClick()),
    }),
    [currentItemIndex],
  );
  const set_number = async () => {
    set({ owner: 3 });
  };

  const [rectX, setRectX] = useState(0); // Initial X position of the rectangle
  const [rectY, setRectY] = useState(0); // Initial Y position of the rectangle
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setRectX(e.clientX);
      setRectY(e.clientY);
    }
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const texture = new Image();
    texture.src = items[currentItemIndex];
    console.log(currentItemIndex);

    texture.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear
      ctx.drawImage(texture, rectX, rectY, 50, 50); // Draw texture on canvas
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItemIndex, rectX, rectY, isDragging]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
