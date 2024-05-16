import { Particle } from "./ParticleClass";
export class Effect {
  width: number;
  height: number;
  particlesArray: Particle[];
  image: HTMLImageElement;
  centerX: number;
  centerY: number;
  x: number;
  y: number;
  gap: number;
  mouse: {
    radius: number;
    x: undefined | number;
    y: undefined | number;
  };
  counter: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.particlesArray = [];
    this.image = document.getElementById("image1") as HTMLImageElement;
    this.centerX = this.width * 0.5;
    this.centerY = this.height * 0.5;
    this.x = this.centerX - this.image.width * 0.5;
    this.y = this.centerY - this.image.height * 0.5;
    this.gap = 3;
    this.mouse = {
      radius: 3000,
      x: undefined,
      y: undefined,
    };
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });
    this.counter = 0;
  }
  init(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y);
    const pixels = context.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const color = "rgb(" + red + "," + green + "," + blue + ")";

        if (alpha > 0) {
          this.particlesArray.push(new Particle(this, x, y, color));
        }
      }
    }
  }
  draw(context: CanvasRenderingContext2D) {
    this.particlesArray.forEach((particle) => particle.draw(context));
  }
  update() {
    this.particlesArray.forEach((particle) => particle.update());
  }
  warp() {
    this.particlesArray.forEach((particle) => particle.warp());
  }
  blocks() {
    this.particlesArray.forEach((particle) => particle.blocks());
  }
  assemble() {
    this.counter = 0;
    this.particlesArray.forEach((particle) => particle.assemble());
  }
  particlePrint() {
    this.counter = 0;
    this.particlesArray.forEach((particle) => particle.particlePrint());
  }
}
