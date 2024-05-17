import { Cell } from "./CellClass";

class ImageEffect {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  cell: Cell;
  imageGrid: Cell[];
  image: HTMLImageElement;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellWidth = this.width / 50;
    this.cellHeight = this.height / 50;
    this.cell = new Cell(this, this.cellWidth * 10, this.cellHeight * 10);
    this.imageGrid = [];
    this.createGrid();
    this.image = new Image();
    this.image.src = "/assets/items/item.corn.png";
    console.log(this.imageGrid);
  }
  createGrid() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.imageGrid.push(new Cell(this, x, y));
      }
    }
  }
  render(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      0,
      0,
      1028,
      1028,
      0,
      0,
      this.canvas.height,
      this.canvas.width,
    );
    this.imageGrid.forEach((cell) => cell.draw(context));
    // this.cell.draw(context);
  }
}
export { ImageEffect };
