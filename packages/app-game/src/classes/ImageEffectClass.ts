import { Cell } from "./CellClass";

class ImageEffect {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  cell: Cell;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellWidth = this.width / 50;
    this.cellHeight = this.height / 50;
    this.cell = new Cell(this, 0, 0);
  }
  render(context: CanvasRenderingContext2D) {
    this.cell.draw(context);
  }
}
export { ImageEffect };
