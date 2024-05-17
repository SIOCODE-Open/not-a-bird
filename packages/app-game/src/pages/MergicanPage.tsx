import { useEffect, useRef } from "react";
import { Resource } from "../classes/ResourceClass";
import { useBorderControls } from "../service/LevaService";
import { useResources } from "../service/ResourceService";
import { useMouse } from "../service/MouseService";
import { useHelpers } from "../service/HelperService";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const { getResources, setResources } = useResources();
  const imageRef = useRef<HTMLImageElement>(null);

  // Resource State
  const resources = getResources();

  // Leva Controls
  const { colorBorder } = useBorderControls();

  // Mouse
  const {
    mouseX,
    mouseY,
    offsetX,
    offsetY,
    isMouseDown,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  } = useMouse();

  const { getDistance } = useHelpers();

  useEffect(() => {
    if (!imageRef.current) return;
    // Get Canvas Element
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Set the Canvas Size as the whole viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get Current Mouse Position
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    let newRessourecs: Resource[] = [];

    //Loop for all ressources And draw each ressource
    resources.forEach((res_el: Resource) => {
      // If mouse in rectangle then blue
      if (getDistance(mouseX, mouseY, res_el.x, res_el.y) <= 50) {
        res_el.color = "#ddffff";
        // and if mouse down make it moveable
        if (isMouseDown) {
          res_el.isSelected = true;
          res_el.x = mouseX - offsetX.current;
          res_el.y = mouseY - offsetY.current;

          newRessourecs = resources.filter(
            (el: Resource) => el.isSelected === false,
          );
        }
      } else {
        res_el.color = "#00000000";
        res_el.isSelected = false;
      }

      //!TODO Main
      const img = new Image();
      img.src = res_el.getCurrentImage();
      ctx.drawImage(img, res_el.x, res_el.y, 50, 50);
    });

    // Recreate Ressources
    if (newRessourecs.length === 2) {
      setResources([...newRessourecs]);
    } else {
      setResources([...resources]);
    }

    // Clean Up
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMouseDown, colorBorder]);
  return (
    <>
      <canvas></canvas>
      <img
        ref={imageRef}
        id="image1"
        src="/assets/items/item.ironore.png"
        hidden
      ></img>
    </>
  );
}
