import { MouseEventHandler, useState } from "react";

export function MarcelPage(props: { navigate: (path: string) => { void } }) {
  const [strElement1, setstrElement1] = useState("Wurst");
  const [strElement2, setstrElement2] = useState("Apfel");

  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    setOffsetX(event.clientX - rect.left);
    setOffsetY(event.clientY - rect.top);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      const posX = event.clientX - offsetX;
      const posY = event.clientY - offsetY;

      const target = event.currentTarget as HTMLElement;
      target.style.left = posX + "px";
      target.style.top = posY + "px";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="cardBackground" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        {strElement2}
      </div>
      <div className="cardBackground" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        {strElement1}
      </div>
    </>
  );
}
