import { useEffect, useState } from "react";
export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [imageSrc, setImageSrc] = useState("/assets/items/item.steelbars.png");
  const handleClick = () => {
    setImageSrc("/assets/items/item.gears.png"); // Change the image source on click
  };

  useEffect(() => {
    console.log(imageSrc);
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 100;
    canvas.height = 100;
    // Load texture image using current imageSrc state
    const texture = new Image();
    texture.src = imageSrc;

    // Draw texture
    texture.onload = () => {
      ctx.drawImage(texture, 0, 0, 20, 20); // Draw texture on canvas
    };
  }, [imageSrc]);
  return (
    <>
      <canvas></canvas>
      <button onClick={handleClick}>Change Image</button>
    </>
  );
}
