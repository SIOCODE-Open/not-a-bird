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
      effect: Effect;
      x: number;
      y: number;
      width: number;
      height: number;
      constructor(effect: Effect, x: number, y: number) {
        this.effect = effect;
        this.x = x;
        this.y = y;
        this.width = this.effect.cellWidth;
        this.height = this.effect.cellHeight;
      }
    }
    class Effect {
      canvas: HTMLCanvasElement;
      width: number;
      height: number;
      cellWidth: number;
      cellHeight: number;
      cell: Cell;
      imageGrid: Cell[];
      resource: Resource;
      constructor(canvas: HTMLCanvasElement, resource: Resource) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.cellWidth = 10;
        this.cellHeight = 10;
        this.resource = resource;
        this.cell = new Cell(this, this.cellWidth, this.cellHeight);
        this.imageGrid = [];
        this.createGrid();
      }
      createGrid() {
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        for (let y = 0; y < 100; y += 1) {
          for (let x = 0; x < 100; x += 1) {
            ctx.drawImage(
              img,
              x * (1024 / 100),
              y * (1024 / 100),
              1024 / 100,
              1024 / 100,
              300 + x,
              300 + y,
              10,
              10,
            );
            // Show Grid
          }
          for (let y = 0; y < 100; y += 10) {
            for (let x = 0; x < 100; x += 10) {
              ctx.strokeRect(300 + x, 300 + y, 10, 10);
            }
          }
        }
      }
      render(ctx: CanvasRenderingContext2D) {}
    }
    const effect = new Effect(canvas, resourceEl);

    return () => {};
  }, [loaded]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
