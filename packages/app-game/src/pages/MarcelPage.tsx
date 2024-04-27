import { MouseEventHandler, useState } from "react";

export function MarcelPage(props: { navigate: (path: string) => { void } }) {
  const [strElement1, setstrElement1] = useState("Wurst");
  const [strElement2, setstrElement2] = useState("Apfel");

  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  function changeName(newStr: string) {
    if (strElement1) setstrElement1(newStr);
    else {
      setstrElement2;
    }
  }

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffsetX(event.clientX - event.target.getBoundingClientRect().left);
    setOffsetY(event.clientY - event.target.getBoundingClientRect().top);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const posX = event.clientX - offsetX;
      const posY = event.clientY - offsetY;

      event.target.style.left = posX + "px";
      event.target.style.top = posY + "px";
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
