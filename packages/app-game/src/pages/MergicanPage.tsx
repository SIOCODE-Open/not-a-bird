import { useEffect, useRef, useState } from "react";
import { Resource } from "../classes/ResourceClass";
import { useResources } from "../service/ResourceService";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const { getResources } = useResources();
  const [loaded, setLoaded] = useState(false);
  // Resource State
  const resources = getResources();

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
    const res_el = resources[0];

    //!TODO Main
    const img = new Image();
    img.src = res_el.getCurrentImage();
    console.log(img);
    ctx.drawImage(img, res_el.x, res_el.y, res_el.width, res_el.height);

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
      resources: Resource;
      constructor(canvas: HTMLCanvasElement, resource: Resource) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.cellWidth = 10;
        this.cellHeight = 10;
        this.resources = resource;
        this.cell = new Cell(this, this.cellWidth, this.cellHeight);
        this.imageGrid = [];
        this.createGrid();
      }
      createGrid() {
        for (let y = 0; y < this.resources.y / 3; y += this.cellHeight) {
          for (let x = 0; x < this.resources.x / 3; x += this.cellWidth) {
            this.imageGrid.push(
              new Cell(this, this.resources.x + x, this.resources.y + y),
            );
          }
        }
        console.log(this.imageGrid);
      }
      render(ctx: CanvasRenderingContext2D) {
        this.imageGrid.forEach((cell) => {
          cell.x = cell.x + Math.random() * 5;
          cell.y = cell.y + Math.random() * 5;
          ctx.drawImage(img, cell.x, cell.y, cell.width, cell.height);
          // ctx.drawImage(
          //   img,
          //   cell.x,
          //   cell.y,
          //   cell.width,
          //   cell.height,
          //   cell.x,
          //   cell.y,
          //   cell.width,
          //   cell.height,
          // );
          ctx.strokeRect(cell.x, cell.y, 10, 10);
        });
      }
    }
    const effect = new Effect(canvas, res_el);
    effect.render(ctx);

    return () => {};
  }, [loaded]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
