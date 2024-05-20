import { useEffect, useRef, useState } from "react";
import { Resource } from "../classes/ResourceClass";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const [loaded, setLoaded] = useState(false);

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
    const resourceEl = new Resource(300, 300, "white", false, 0, 0, 1);

    resourceEl.updateImage("/assets/items/item.ironore.png");
    const img = new Image();
    img.src = resourceEl.getCurrentImage();

    class Cell {
      image: HTMLImageElement;
      sx: number;
      sy: number;
      sWidth: number;
      sHeight: number;
      dx: number;
      dy: number;
      dWidth: number;
      dHeight: number;
      effect: Effect;

      slideX: number;
      slideY: number;
      vx: number;
      vy: number;
      //Ease defines how fast they slide back
      ease: number;
      //Friction defines how fast the pushforce decase
      friction: number;

      cellWidth: number;
      cellHeight: number;

      positionCellX: number;
      positionCellY: number;
      speedX: number;
      speedY: number;

      //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
      constructor(
        img: HTMLImageElement,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
        effect: Effect,
      ) {
        this.image = img;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
        this.effect = effect;

        this.slideX = 1;
        this.slideY = 1;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.ease = 0.1;
        this.friction = 0.8;

        this.positionCellX = 0;
        this.positionCellY = 0;
        this.speedX = 0;
        this.speedY = 0;
      }
      draw(ctx: CanvasRenderingContext2D) {
        // Debug
        ctx.strokeRect(
          this.dx + this.slideX,
          this.dy + this.slideY,
          this.dWidth,
          this.dHeight,
        );
        ctx.drawImage(
          this.image,
          this.sx,
          this.sy,
          this.sWidth,
          this.sHeight,
          this.dx + this.slideX,
          this.dy + this.slideY,
          this.dWidth,
          this.dHeight,
        );
      }
      update() {
        // Cell position
        // this.speedX = (this.dx - this.positionCellX) / 10;
        // this.speedY = (this.dy - this.positionCellY) / 10;
        // this.positionCellY += this.speedX;
        // this.positionCellX += this.speedY;

        const postionMouseX = 250;
        const postionMouseY = 250;
        const radius = 10;

        //Debug rectancle
        ctx.fillRect(postionMouseX, postionMouseY, 10, 10);

        const distance = Math.hypot(postionMouseX, postionMouseY);
        if (distance < radius) {
          const angle = Math.atan2(postionMouseY, postionMouseX);
          const force = distance / 10;
          this.vx = force * Math.sin(angle);
          this.vy = force * Math.cos(angle);
        }
        // pushes rectancles around positionX and postionMouseY
        this.slideX -= (this.vx *= this.friction) + this.slideX * this.ease;
        this.slideY -= (this.vy *= this.friction) + this.slideY * this.ease;
        //reset force when vx is super weak/
        if (this.vx < 0.0000001 && this.vy < 0.0000001) {
          this.vx = Math.random() * 10 - 5;
          this.vy = Math.random() * 10 - 5;
        }
      }
    }
    class Effect {
      imageGrid: Cell[];
      resource: Resource;
      width: number;
      height: number;

      cellWidth: number;
      cellHeight: number;
      constructor(resource: Resource, width: number, height: number) {
        this.resource = resource;
        this.imageGrid = [];
        this.width = width;
        this.height = height;

        this.cellWidth = this.width / 10;
        this.cellHeight = this.height / 10;

        this.createGrid(150, 150);
      }
      createGrid(positionX: number, positionY: number) {
        let rows = 10;
        let columns = 10;
        const imgWidth = img.width;
        const imgHeight = img.height;
        const srcWidth = imgWidth / columns;
        const srcHeight = imgHeight / rows;

        for (let y = 0; y < this.cellWidth * rows; y += this.cellWidth) {
          for (let x = 0; x < this.cellHeight * columns; x += this.cellHeight) {
            const random = Math.random() * 3;
            // Push one Cell with the according picture
            const cell = new Cell(
              img,
              (x / this.cellWidth) * srcWidth,
              (y / this.cellHeight) * srcHeight,
              srcWidth,
              srcHeight,
              x + positionX + random,
              y + positionY + random,
              this.cellWidth,
              this.cellHeight,
              this,
            );
            this.imageGrid.push(cell);
          }
        }
      }
      render(ctx: CanvasRenderingContext2D) {
        this.imageGrid.forEach((cell, i) => {
          cell.update();
          cell.draw(ctx);
        });
      }
    }
    const effect = new Effect(resourceEl, 200, 200);
    let timeoutId = null;
    function animate() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render(ctx);
        requestAnimationFrame(animate);
      }, 100);
    }
    animate();

    return () => {};
  }, [loaded]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
