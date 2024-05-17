import { useEffect, useState } from "react";
import { ImageEffect } from "../classes/ImageEffectClass";

function ImageEffectPage(props: { navigate: (path: string) => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = "/assets/items/item.corn.png"; // replace this with the url of the image in your public folder
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const effect = new ImageEffect(canvas);
    let counter = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render(ctx, counter);
      counter++;
      requestAnimationFrame(animate);
    }
    animate();
    console.log(effect);
  }, [loaded]);

  return (
    <>
      <canvas id="canvas1"></canvas>
    </>
  );
}

export { ImageEffectPage };
