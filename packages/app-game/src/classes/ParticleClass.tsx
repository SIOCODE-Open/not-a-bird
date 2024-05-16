export class Particle {
  effect: Effect;
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  ease: number;
  friction: number;
  dx: number;
  dy: number;
  distance: number;
  force: number;
  angle: number;
  active: boolean;
  timeout: undefined | number;

  constructor(effect: Effect, x: number, y: number, color: string) {
    this.effect = effect;
    this.x = Math.random() * this.effect.width;
    this.y = 0;
    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.color = color;
    this.size = this.effect.gap;
    this.vx = 0;
    this.vy = 0;
    this.ease = 0.2;
    this.friction = 0.98;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
    this.active = true;
    this.timeout = undefined;
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    if (this.active) {
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      this.force = -this.effect.mouse.radius / this.distance;

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      }

      this.x +=
        (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y +=
        (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }
  }
  warp() {
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
    this.ease = 0.2;
    this.size = this.effect.gap;
  }
  blocks() {
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() > 0.5 ? 0 : this.effect.height;
    this.ease = 0.04;
    this.size = 10;
  }
  assemble() {
    clearTimeout(this.timeout);
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
    this.ease = 0.2;
    this.size = this.effect.gap;
    this.active = false;
    this.effect.counter++;
    this.timeout = window.setTimeout(() => {
      this.active = true;
    }, this.effect.counter * 0.5);
  }
  particlePrint() {
    clearTimeout(this.timeout);
    this.x = this.effect.width * 0.5;
    this.y = this.effect.height * 0.5;
    this.ease = 0.2;
    this.size = this.effect.gap;
    this.active = false;
    this.effect.counter++;
    this.timeout = window.setTimeout(() => {
      this.active = true;
    }, this.effect.counter * 0.05);
  }
}

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
