import { useEffect } from "react";
import { Resource } from "../classes/ResourceClass";
import { useBorderControls } from "../service/LevaService";
import { useCrosshair } from "../service/CrossHairService";
import { useResources } from "../service/ResourceService";
import { useMouse } from "../service/MouseService";
import { useHelpers } from "../service/HelperService";
import { ContextBuilder } from "../classes/ContextBuilder";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  const { addCrosshair } = useCrosshair();
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

      // We use the builder Pattern and pass the the context around.
      // f.e. Doe + Tomoato + Salami + Onions + Mushrooms + Cheese = Pizza

      // 1. Create Builder
      const builder = new ContextBuilder(
        ctx,
        res_el.x,
        res_el.y,
        50,
        50,
        res_el,
      );

      // 2. Draw one thing after another
      const new_ctx = builder
        .addSparkels("gold")
        .addBlueCircle()
        .addX()
        .addCrossHair("blue")
        .addImage()
        .getCtx();

      // 3. ContextBuilder return after getCtx call the modified ctx for more thingies if needed
      // Done
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
