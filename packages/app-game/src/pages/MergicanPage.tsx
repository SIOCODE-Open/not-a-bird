import { useEffect } from "react";
import { Resource } from "../classes/ResourceClass";
import { useBorderControls } from "../service/LevaService";
import { useCrosshair } from "../service/CrossHairService";
import { useResources } from "../service/ResourceService";
import { useMouse } from "../service/MouseService";
import { useHelpers } from "../service/HelperService";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const { createCrosshair } = useCrosshair();
  const { getResources, setResources } = useResources();

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
    // Get Canvas Element
    const canvas = document.querySelector("canvas");

    // Set the Canvas Size as the whole viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get Current Mouse Position
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    let newRessourecs: Resource[] = [];
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
        res_el.color = "white";
        res_el.isSelected = false;
      }

      // Draw Crosshair Rectangle of the Ressources on the Canvas
      const crosshairCTX = createCrosshair(canvas, res_el, colorBorder);

      // Add Image in rectangle
      const img = new Image();
      img.src = res_el.getCurrentImage();
      crosshairCTX.drawImage(img, res_el.x, res_el.y, 50, 50); // Draw texture on canvas
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
    </>
  );
}
