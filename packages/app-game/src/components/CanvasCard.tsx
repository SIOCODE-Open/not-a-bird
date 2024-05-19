import React, { useRef, useEffect } from "react";

function CanvasCard({ asset }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const img = new Image();
        img.src = `assets/items/${asset.type.name}.png`;
        img.onload = () => {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.onerror = () => {
          img.src = "assets/items/Placeholder.png";
        };
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [asset]);

  return (
    <div className="cardBackground" key={asset.id}>
      <canvas ref={canvasRef} className="canvasCard"></canvas>
    </div>
  );
}
export default CanvasCard;
