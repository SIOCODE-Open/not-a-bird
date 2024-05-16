import { useEffect } from "react";
import { Effect } from "../classes/EffectClass";

export function ParticlePage(props: { navigate: (path: string) => void }) {
  useEffect(() => {
    setTimeout(() => {
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
      effect.assemble();
    }, 150);
  }, []);

  return (
    <>
      <canvas id="canvas1"></canvas>
      <img id="image1" src="/assets/items/item.ironore.png" hidden></img>
    </>
  );
}
