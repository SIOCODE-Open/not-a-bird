import { useEffect, useRef, useState } from "react";
import { Resource } from "../classes/ResourceClass";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = "/assets/items/item.ironore.png"; // replace this with the url of the image in your public folder
  }, []);

  useEffect(() => {
    if (!loaded) return;
    // Get Canvas Element
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    // Set the Canvas Size as the whole viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const resourceEl = new Resource(300, 300, "white", false, 0, 0, 1);

    resourceEl.updateImage("/assets/items/item.ironore.png");
    const img = new Image();
    img.src = resourceEl.getCurrentImage();

    class Cell {
      image: HTMLImageElement;
      sx: number;
      sy: number;
      sWidth: number;
      sHeight: number;
      dx: number;
      dy: number;
      dWidth: number;
      dHeight: number;

      slideX: number;
      slideY: number;

      //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
      constructor(
        img: HTMLImageElement,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
      ) {
        this.image = img;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;

        this.slideX = Math.random() * 10;
        this.slideY = Math.random() * 10;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeRect(
          this.dx + this.slideX,
          this.dy + this.slideY,
          this.dWidth,
          this.dHeight,
        );
        ctx.drawImage(
          this.image,
          this.sx,
          this.sy,
          this.sWidth,
          this.sHeight,
          this.dx + this.slideX,
          this.dy + this.slideY,
          this.dWidth,
          this.dHeight,
        );
      }
      update() {
        this.slideX = Math.random() * 10;
        this.slideY = Math.random() * 10;
      }
    }
    class Effect {
      imageGrid: Cell[];
      resource: Resource;
      constructor(resource: Resource) {
        this.resource = resource;
        this.imageGrid = [];
        this.createGrid(150, 150);
      }
      createGrid(positionX: number, positionY: number) {
        const cellWidth = 15;
        const cellHeight = 15;
        let rows = 15;
        let columns = 10;
        const imgWidth = img.width;
        const imgHeight = img.height;
        const srcWidth = imgWidth / columns;
        const srcHeight = imgHeight / rows;

        for (let y = 0; y < cellWidth * rows; y += cellWidth) {
          for (let x = 0; x < cellHeight * columns; x += cellHeight) {
            const random = Math.random() * 3;
            const cell = new Cell(
              img,
              (x / cellWidth) * srcWidth,
              (y / cellHeight) * srcHeight,
              srcWidth,
              srcHeight,
              x + positionX + random,
              y + positionY + random,
              cellWidth,
              cellHeight,
            );
            this.imageGrid.push(cell);
          }
        }
      }
      render(ctx: CanvasRenderingContext2D) {
        console.log(this.imageGrid.length);
        this.imageGrid.forEach((cell, i) => {
          cell.update();
          cell.draw(ctx);
        });
      }
    }
    const effect = new Effect(resourceEl);
    let timeoutId = null;
    function animate() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render(ctx);
        requestAnimationFrame(animate);
      }, 1000);
    }
    animate();

    return () => {};
  }, [loaded]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
