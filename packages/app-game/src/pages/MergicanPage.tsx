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
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
          this.image,
          this.sx,
          this.sy,
          this.sWidth,
          this.sHeight,
          this.dx,
          this.dy,
          this.dWidth,
          this.dHeight,
        );
      }
    }
    class Effect {
      canvas: HTMLCanvasElement;
      width: number;
      height: number;
      cellWidth: number;
      cellHeight: number;
      imageGrid: Cell[];
      resource: Resource;
      constructor(canvas: HTMLCanvasElement, resource: Resource) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.cellWidth = 10;
        this.cellHeight = 10;
        this.resource = resource;
        this.imageGrid = [];
        this.createGrid(300, 300);
      }
      createGrid(postionX: number, positionY: number) {
        const cellWidth = 100 / 10;
        const cellHeight = 100 / 10;
        for (let x = 0; x < 10; x += 10) {
          for (let y = 0; y < 10; y += 10) {
            const cell = new Cell(img, 0, 0, 1028, 1028, 300, 300, 100, 100);
            this.imageGrid.push(cell);
          }
        }
      }
      render(ctx: CanvasRenderingContext2D) {
        this.imageGrid.forEach((cell, i) => {
          cell.draw(ctx);
        });
      }
    }
    const effect = new Effect(canvas, resourceEl);
    effect.render(ctx);

    return () => {};
  }, [loaded]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
