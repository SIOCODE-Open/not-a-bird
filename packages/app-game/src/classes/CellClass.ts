import { ImageEffect } from "./ImageEffectClass";

class Cell {
  effect: ImageEffect;
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  constructor(effect: ImageEffect, x: number, y: number) {
    this.effect = effect;
    this.x = x;
    this.y = y;
    this.width = this.effect.cellWidth;
    this.height = this.effect.cellHeight;
    this.image = new Image();
    this.image.src = "/assets/items/item.corn.png";
  }
  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}
export { Cell };
