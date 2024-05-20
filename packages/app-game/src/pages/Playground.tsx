import { useEffect } from "react";

export function PlagroundPage(props: { navigate: (path: string) => { void } }) {
  useEffect(() => {
    const canvas = document.getElementById("canvasFrank") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const image = new Image();

    let lastTime = Math.floor(Date.now() / 1000); // Start time in Unix timestamp
    const column = 10;
    const row = 10;
    let vx = 0;
    let vy = 0;
    let slideX = 0;
    let slideY = 0;

    function animate() {
      const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
      if (currentTime - lastTime >= 1) {
        // Call animate every 1 second
        lastTime = currentTime;

        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const mousePointX = image.width / 2;
        const mousePointY = image.height / 2;
        const radius = 500;
        const distance = Math.hypot(mousePointX, mousePointY);
        console.log(distance);
        if (distance < radius) {
          const angle = Math.atan2(mousePointY, mousePointX);
          console.log(angle);
          const force = distance / radius;
          vx += force * Math.cos(angle);
          vy += force * Math.sin(angle);
        }
        slideX += vx - slideX;
        slideY += vy - slideY;
        console.log(slideY);

        ctx.strokeStyle = "black";
        for (let y = 0; y < image.height; y += row) {
          for (let x = 0; x < image.width; x += column) {
            ctx.drawImage(
              image,
              x,
              y,
              image.width / column,
              image.height / row,
              x + slideX,
              y + slideY,
              canvas.width / column,
              canvas.height / row,
            );
            ctx.strokeRect(x + vx, y + vy, column, row);
          }
        }
        ctx.fillStyle = "green";
        ctx.fillRect(mousePointX, mousePointY, 10, 10);
      }
      requestAnimationFrame(animate);
    }

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      requestAnimationFrame(animate);
    };
    image.src = "./monkey.png";
  }, []);

  return (
    <canvas id="canvasFrank" style={{ backgroundColor: "#00000000" }}></canvas>
  );
}
