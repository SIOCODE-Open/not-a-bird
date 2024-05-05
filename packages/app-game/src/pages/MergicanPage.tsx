import { useEffect, useState } from "react";
import { useControls, button } from "leva";
import { Resource } from "../classes/RessourceClass";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  // Resource State
  const [selectedResources, setSelectedResources] = useState<Resource[]>([]);
  const [resources, setResources] = useState<Resource[]>([
    new Resource(300, 300, "red", false, 0, 0, 1),
    new Resource(300, 300, "red", false, 0, 0, 1),
    new Resource(500, 500, "red", false, 2, 0, 1),
    new Resource(200, 200, "red", false, 4, 0, 1),
    new Resource(280, 120, "red", false, 6, 0, 1),
  ]);

  // Function to add a new resource
  const addResource = (newResource: Resource) => {
    setResources((prevResources) => [...prevResources, newResource]);
  };

  // Function to update a resource
  const updateResource = (resourceIndex: number, updatedResource: Resource) => {
    setResources((prevResources) =>
      prevResources.map((rect, index) =>
        index === resourceIndex ? updatedResource : rect,
      ),
    );
  };
  // Function to remove a resource
  const removeResource = (resourceIndex: number) => {
    setResources((prevResources) =>
      prevResources.filter((_, index) => index !== resourceIndex),
    );
  };

  // Mouse
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  function handleClick() {}
  const handleMouseDown = (e: MouseEvent) => {
    setIsMouseDown(true);
  };
  const handleMouseUp = (e: MouseEvent) => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Leva Helpers
  const [, set] = useControls(
    "a_number",
    () => ({
      aNumber: {
        value: 4,
        disabled: true,
      },
      change_picture: button(() => handleClick()),
      add_rectancle: button(() => {
        addResource(
          new Resource(
            500 * Math.random(),
            500 * Math.random(),
            "green",
            false,
            0,
            0,
            1,
          ),
        );
      }),
    }),
    [resources],
  );
  // Helpers
  const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  useEffect(() => {
    // Get Canvas Element
    const canvas = document.querySelector("canvas");
    // Grab the 2D Context out of it
    const ctx = canvas.getContext("2d");

    // Set the Canvas Size as the whole viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get Current Mouse Position
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    let selection_count = 0;
    resources.forEach((res_el: Resource) => {
      // If mouse in rectangle then blue
      if (getDistance(mouseX, mouseY, res_el.x, res_el.y) <= 50) {
        res_el.color = "blue";
        if (selection_count < 2) {
          selection_count += 1;
        }
        // and if mouse down make it moveable
        if (isMouseDown) {
          res_el.isSelected = true;
          res_el.x = mouseX;
          res_el.y = mouseY;
          // only one element get updated,
          // ???
          // only one element get updated,
        }
      } else {
        selection_count = 0;
        res_el.color = "red";
        res_el.isSelected = false;
      }

      // draw the rectangle
      ctx.fillStyle = res_el.color;
      ctx.fillRect(res_el.x, res_el.y, 50, 50);

      // Add Image in rectangle
      const img = new Image();
      img.src = res_el.getCurrentImage();
      ctx.drawImage(img, res_el.x, res_el.y, 50, 50); // Draw texture on canvas
    });

    // Recreate Ressources
    setResources([...resources]);
    // Clean Up
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMouseDown]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
