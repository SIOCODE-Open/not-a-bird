import { useEffect, useRef } from "react";
import { Effect } from "../classes/EffectClass";

export function ParticlePage(props: { navigate: (path: string) => void }) {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!imageRef.current) return;
    const handleLoad = () => {
      const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
      // const image = document.getElementById("image1") as HTMLImageElement;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const effect = new Effect(canvas.width, canvas.height);
      effect.init(ctx);
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
      }
      animate();
      effect.particlePrint();
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
