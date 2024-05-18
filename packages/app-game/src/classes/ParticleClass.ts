import { Effect } from "./EffectClass";

class Particle {
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

export { Particle };
