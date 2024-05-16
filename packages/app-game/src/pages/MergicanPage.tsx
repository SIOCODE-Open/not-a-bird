import { useEffect, useRef, useState } from "react";
import { Resource } from "../classes/ResourceClass";
//!TODO BROWSER COMPATIBLITLY
import { useBorderControls, useContractVersion1Controls, useFrontendControls } from "../components/LevaCmp";
import { useFrank } from "../service/FrankService";
import { BN } from "@polkadot/util";
import { useCrosshair } from "../components/CrosshairCmp";
import { useResources } from "../service/ResourceService";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  // const { mint, burn, createCollection } = useUnique("");
  const { mintMetal, mintCrystal, createMetcrys, getMetcrysCount } = useFrank();
  const { createCrosshair } = useCrosshair();
  const { getResources, addResource, setResources } = useResources();

  const [metalCount, setMetalCount] = useState(new BN(0));
  const [crystalCount, setCrystalCount] = useState(new BN(0));
  const [metCrysCount, setmetCrysCount] = useState("");

  // Resource State
  const resources = getResources();

  // Leva Controls
  const { colorBorder, setColorBorder, borderControls } = useBorderControls();
  const { resourcesCount, setResourcesCount, frontendControls } = useFrontendControls(resources, addResource);
  const { contractVersion1Controls } = useContractVersion1Controls(
    resources,
    metalCount,
    crystalCount,
    metCrysCount,
    mintMetal,
    mintCrystal,
    createMetcrys,
    getMetcrysCount,
    setMetalCount,
    setCrystalCount,
    setmetCrysCount
  );

  // Mouse
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  const [isMouseDown, setIsMouseDown] = useState(false);
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

  // Helpers
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  useEffect(() => {
    // Get Canvas Element
    const canvas = document.querySelector("canvas");
    // Grab the 2D Context out of it

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
          newRessourecs = resources.filter((el: Resource) => el.isSelected === false);
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
