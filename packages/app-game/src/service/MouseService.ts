import { useState, useRef } from "react";
import { Resource } from "../classes/ResourceClass";
import { useResources } from "./ResourceService";
import { useHelpers } from "./HelperService";

export function useMouse() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const { getResources } = useResources();
  const resources = getResources();
  const { getDistance } = useHelpers();

  const handleMouseDown = (e: MouseEvent) => {
    resources.forEach((res_el: Resource) => {
      if (getDistance(e.clientX, e.clientY, res_el.x, res_el.y) <= 50) {
        offsetX.current = e.clientX - res_el.x;
        offsetY.current = e.clientY - res_el.y;
      }
    });
    setIsMouseDown(true);
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return {
    mouseX,
    setMouseX,
    mouseY,
    setMouseY,
    offsetX,
    offsetY,
    isMouseDown,
    setIsMouseDown,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
}
