import { useEffect, useState } from "react";
export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [imageSrc, setImageSrc] = useState("/assets/items/item.steelbars.png");

  const [rectX, setRectX] = useState(0); // Initial X position of the rectangle
  const [rectY, setRectY] = useState(0); // Initial Y position of the rectangle
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    setImageSrc("/assets/items/item.gears.png"); // Change the image source on click
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
  };

  useEffect(() => {
    console.log(imageSrc);
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // canvas.width = 400;
    // canvas.height = 400;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const texture = new Image();
    texture.src = imageSrc;

    texture.onload = () => {
      ctx.drawImage(texture, rectX, rectY, 20, 20); // Draw texture on canvas
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imageSrc, rectX, rectY, isDragging]);
  return (
    <>
      <canvas></canvas>
      <button onClick={handleClick}>Change Image</button>
    </>
  );
}
