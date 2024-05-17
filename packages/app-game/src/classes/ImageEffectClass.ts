import { Cell } from "./CellClass";

class ImageEffect {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  cell: Cell;
  imageGrid: Cell[];
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellWidth = this.width / 50;
    this.cellHeight = this.height / 50;
    this.cell = new Cell(this, this.cellWidth * 10, this.cellHeight * 10);
    this.imageGrid = [];
    this.createGrid();
    console.log(this.imageGrid);
  }
  createGrid() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.imageGrid.push(new Cell(this, x, y));
      }
    }
  }
  render(context: CanvasRenderingContext2D, drawTill: number) {
    this.imageGrid.forEach((cell, i) => {
      if (i < drawTill) {
        cell.draw(context);
      }
    });
    // this.cell.draw(context);
  }
}
export { ImageEffect };
