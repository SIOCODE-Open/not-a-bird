import { useEffect, useRef } from "react";
import { ImageEffect } from "../classes/ImageEffectClass";

function ImageEffectPage(props: { navigate: (path: string) => void }) {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!imageRef.current) return;

    const handleLoad = () => {
      const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const effect = new ImageEffect(canvas);
      effect.render(ctx);
      console.log(effect);
    };

    imageRef.current.addEventListener("load", handleLoad);
    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <>
      <canvas id="canvas1"></canvas>
      <img
        ref={imageRef}
        id="image1"
        src="/assets/items/item.ironore.png"
        hidden
      ></img>
    </>
  );
}

export { ImageEffectPage };
