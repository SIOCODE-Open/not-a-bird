export class Resource {
  x: number;
  y: number;
  isSelected: boolean;
  color: string;
  image: string;
  // code as before
  constructor(
    x: number,
    y: number,
    color: string,
    isSelected: boolean,
    image: string,
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isSelected = isSelected;
    this.image = image;
  }
}
