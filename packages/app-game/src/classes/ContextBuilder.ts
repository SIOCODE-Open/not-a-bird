import { Resource } from "./ResourceClass";

class ContextBuilder {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  resource: Resource;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    resource: Resource,
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.resource = resource;
  }

  addBlueCircle() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.arc(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width / 2,
      0,
      Math.PI * 2,
    );
    this.ctx.stroke();
    return this;
  }

  addX() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.width, this.y + this.height);
    this.ctx.moveTo(this.x, this.y + this.height);
    this.ctx.lineTo(this.x + this.width, this.y);
    this.ctx.stroke();
    return this;
  }

  addSparkels(sparkleColor: string) {
    this.ctx.fillStyle = sparkleColor;
    for (let i = 0; i < 10; i++) {
      let sparkleX = Math.random() * this.width + this.x;
      let sparkleY = Math.random() * this.height + this.y;
      this.ctx.fillRect(sparkleX, sparkleY, 2, 2);
    }
    return this;
  }

  addCrossHair(colorBorder: string) {
    const cornerRadius = 10;
    const borderWidth = 2;

    // Draw the main rectangle
    this.ctx.fillStyle = this.resource.color;
    this.ctx.fillRect(this.resource.x, this.resource.y, 50, 50);

    // Draw top left corner
    // Border
    this.ctx.fillStyle = colorBorder;
    this.ctx.fillRect(
      this.resource.x,
      this.resource.y,
      cornerRadius,
      borderWidth,
    );
    this.ctx.fillRect(
      this.resource.x,
      this.resource.y,
      borderWidth,
      cornerRadius,
    );

    // Draw top right corner
    this.ctx.fillRect(
      this.resource.x + 50 - cornerRadius,
      this.resource.y,
      cornerRadius,
      borderWidth,
    );
    this.ctx.fillRect(
      this.resource.x + 50 - borderWidth,
      this.resource.y,
      borderWidth,
      cornerRadius,
    );

    // Draw bottom left corner
    this.ctx.fillRect(
      this.resource.x,
      this.resource.y + 50 - borderWidth,
      cornerRadius,
      borderWidth,
    );
    this.ctx.fillRect(
      this.resource.x,
      this.resource.y + 50 - cornerRadius,
      borderWidth,
      cornerRadius,
    );

    // Draw bottom right corner
    this.ctx.fillRect(
      this.resource.x + 50 - cornerRadius,
      this.resource.y + 50 - borderWidth,
      cornerRadius,
      borderWidth,
    );
    this.ctx.fillRect(
      this.resource.x + 50 - borderWidth,
      this.resource.y + 50 - cornerRadius,
      borderWidth,
      cornerRadius,
    );

    return this;
  }
  addImage() {
    const img = new Image();
    img.src = this.resource.getCurrentImage();
    this.resource.getCurrentImage();
    this.ctx.drawImage(img, this.resource.x, this.resource.y, 50, 50);
    return this;
  }
  getCtx() {
    return this.ctx;
  }
}
export { ContextBuilder };
