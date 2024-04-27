import { MouseEventHandler, useState } from "react";

export function MarcelPage(props: { navigate: (path: string) => { void } }) {
  const [label1, setLabel1] = useState("Krystal");
  const [label2, setLabel2] = useState("Kohle");

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
        <div className="centerContainerPictureAndText">
          <img src="assets/items/item.crystal.png" style={{ width: "100%", height: "100%" }} />
          <p className="modifyCardP">{label1}</p>
        </div>
      </div>
      <div className="cardBackground" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className="centerContainerPictureAndText">
          <img src="assets/items/item.coalbag.png" style={{ width: "100%", height: "100%" }} />
          <p className="modifyCardP">{label2}</p>
        </div>
      </div>
    </>
  );
}
