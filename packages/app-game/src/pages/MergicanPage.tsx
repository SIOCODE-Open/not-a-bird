import { useEffect, useState } from "react";
import { useControls, button } from "leva";

interface Ressource {
  x: number;
  y: number;
  color: string;
  image: string;
}
export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(new Image());
  const [rectX, setRectX] = useState(0); // Initial X position of the rectangle
  const [rectY, setRectY] = useState(0); // Initial Y position of the rectangle
  const [isDragging, setIsDragging] = useState(false);
  const [rectangles, setRectangles] = useState<Ressource[]>([
    { x: 300, y: 300, color: "red", image: "" },
    { x: 500, y: 500, color: "red", image: "" },
    { x: 200, y: 200, color: "red", image: "" },
    { x: 280, y: 120, color: "red", image: "" },
  ]);

  // Function to add a new resource
  const addResource = (newResource: Ressource) => {
    setRectangles((prevRectangles) => [...prevRectangles, newResource]);
  };

  // Function to update a resource
  const updateResource = (
    resourceIndex: number,
    updatedResource: Ressource,
  ) => {
    setRectangles((prevRectangles) =>
      prevRectangles.map((rect, index) =>
        index === resourceIndex ? updatedResource : rect,
      ),
    );
  };

  // Function to remove a resource
  const removeResource = (resourceIndex: number) => {
    setRectangles((prevRectangles) =>
      prevRectangles.filter((_, index) => index !== resourceIndex),
    );
  };

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
      add_rectancle: button(() => {
        addResource({
          x: 500 * Math.random(),
          y: 500 * Math.random(),
          image: items[8],
          color: "purple",
        });
      }),
    }),
    [currentItemIndex, rectangles],
  );
  const set_number = async () => {
    set({ owner: 3 });
  };

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
    console.log(`Mouse position: (${e.clientX}, ${e.clientY})`);
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (currentImage.src !== items[currentItemIndex]) {
      const img = new Image();
      img.src = items[currentItemIndex];
      img.onload = () => setCurrentImage(img);
      img.src = items[currentItemIndex];
      ctx.drawImage(img, rectX, rectY, 50, 50); // Draw texture on canvas
    } else {
      ctx.drawImage(currentImage, rectX, rectY, 50, 50); // Draw texture on canvas
    }

    const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    rectangles.forEach((rect: Ressource) => {
      if (getDistance(rectX, rectY, rect.x, rect.y) <= 50) {
        rect.color = "blue";
      } else {
        rect.color = "red";
      }
      // draw the rectangle
      ctx.fillStyle = rect.color;
      ctx.fillRect(rect.x, rect.y, 50, 50);
    });

    setRectangles([...rectangles]);

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
