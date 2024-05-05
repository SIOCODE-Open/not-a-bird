import { useEffect, useState } from "react";
import { useControls, button } from "leva";
import { Resource } from "../classes/RessourceClass";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  // Resource State
  const [resources, setResources] = useState<Resource[]>([
    new Resource(300, 300, "red", false, 0, 0, 1),
    new Resource(500, 500, "red", false, 0, 0, 1),
    new Resource(200, 200, "red", false, 0, 0, 1),
    new Resource(280, 120, "red", false, 0, 0, 1),
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

  //Mouse
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  function handleClick() {}
  const handleMouseDown = () => {};
  const handleMouseUp = () => {};
  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    console.log(`Mouse position: (${e.clientX}, ${e.clientY})`);
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

    resources.forEach((rect: Resource) => {
      if (getDistance(mouseX, mouseY, rect.x, rect.y) <= 50) {
        rect.color = "blue";
      } else {
        rect.color = "red";
      }
      // draw the rectangle
      ctx.fillStyle = rect.color;
      ctx.fillRect(rect.x, rect.y, 50, 50);
    });

    // if (currentImage.src !== items[currentItemIndex]) {
    //   const img = new Image();
    //   img.src = items[currentItemIndex];
    //   img.onload = () => setCurrentImage(img);
    //   img.src = items[currentItemIndex];
    //   ctx.drawImage(img, rectX, rectY, 50, 50); // Draw texture on canvas
    // } else {
    //   ctx.drawImage(currentImage, rectX, rectY, 50, 50); // Draw texture on canvas
    // }

    setResources([...resources]);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <>
      <canvas></canvas>
    </>
  );
}
