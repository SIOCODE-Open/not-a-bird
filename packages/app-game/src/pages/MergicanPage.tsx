import { useEffect, useState } from "react";
import { useControls, button } from "leva";
import { Resource } from "../classes/RessourceClass";
//!TODO BROWSER COMPATIBLITLY
import { useUnique } from "../service/UniqueService";
import { useBorderControls, useContractVersion1Controls, useFrontendControls } from "../components/LevaCmp";
import { useFrank } from "../service/FrankService";
import { BN } from "@polkadot/util";

export function MergicanPage(props: { navigate: (path: string) => void }) {
  // const { mint, burn, createCollection } = useUnique("");
  const { mintMetal, mintCrystal, createMetcrys, getMetcrysCount } = useFrank();
  const [metalCount, setMetalCount] = useState(new BN(0));
  const [crystalCount, setCrystalCount] = useState(new BN(0));
  const [metCrysCount, setmetCrysCount] = useState("");
  // const [colorBorder, setColorBorder] = useState("#fff000");
  // Resource State
  const [selectedResources, setSelectedResources] = useState<Resource[]>([]);
  const [resources, setResources] = useState<Resource[]>([
    new Resource(300, 300, "white", false, 0, 0, 1),
    new Resource(300, 300, "white", false, 0, 0, 1),
    new Resource(500, 500, "white", false, 2, 0, 1),
    new Resource(200, 200, "white", false, 4, 0, 1),
    new Resource(280, 120, "white", false, 6, 0, 1),
  ]);

  // Function to add a new resource
  const addResource = (newResource: Resource) => {
    setResources((prevResources) => [...prevResources, newResource]);
  };

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

  // Function to update a resource
  const updateResource = (resourceIndex: number, updatedResource: Resource) => {
    setResources((prevResources) => prevResources.map((rect, index) => (index === resourceIndex ? updatedResource : rect)));
  };
  // Function to remove a resource
  const removeResource = (resourceIndex: number) => {
    setResources((prevResources) => prevResources.filter((_, index) => index !== resourceIndex));
  };

  // Mouse
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
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
  // const [, setUnique] = useControls(
  //   "Unique",
  //   () => ({
  //     collectionId: {
  //       value: 0,
  //       disabled: true,
  //     },
  //     createCollectionOnUnique: button(async () => {
  //       /*createCollection()*/
  //     }),
  //     mintOnUnique: button(async () => {
  //       /*mint()*/
  //     }),
  //     burOnUnique: button(async () => {
  //       /*burn(5)*/
  //     }),
  //   }),
  //   [resources]
  // );

  // const [, setFrontend] = useControls(
  //   "Frontend",
  //   () => ({
  //     resourcesCount: {
  //       value: resources.length,
  //       disabled: true,
  //     },
  //     add_ressource: button(() => {
  //       addResource(new Resource(500 * Math.random(), 500 * Math.random(), "green", false, 0, 0, 1));
  //       setFrontend({ resourcesCount: resources.length });
  //     }),
  //   }),
  //   [resources]
  // );

  // const [borderControls, setBorder] = useControls(
  //   "Border",
  //   () => ({
  //     color: {
  //       value: colorBorder,
  //       disabled: false,
  //       onChange: (c) => {
  //         setColorBorder(c);
  //       },
  //     },
  //     get_color: button(() => {
  //       console.log(colorBorder);
  //     }),
  //   }),
  //   [colorBorder]
  // );

  // const [, setContractVersion1] = useControls(
  //   "ContractVersion1",
  //   () => ({
  //     metcrysCount: {
  //       value: 0,
  //       disabled: true,
  //     },
  //     metal: {
  //       value: metalCount.toNumber(),
  //       disabled: true,
  //     },
  //     crystal: {
  //       value: crystalCount.toNumber(),
  //       disabled: true,
  //     },
  //     metCrys: {
  //       value: "",
  //       disabled: true,
  //     },
  //     mintMetal: button(async () => {
  //       console.log("mint metal");
  //       const newMetalCount = metalCount.add(new BN(1));
  //       await mintMetal(newMetalCount);
  //       setMetalCount(newMetalCount);
  //       setContractVersion1({ metal: metalCount.toNumber() });
  //     }),
  //     mintCrystal: button(async () => {
  //       console.log("mint crystal");
  //       const newCrystalCount = crystalCount.add(new BN(1));
  //       await mintCrystal(newCrystalCount);
  //       setCrystalCount(newCrystalCount);
  //       setContractVersion1({ crystal: crystalCount.toNumber() });
  //     }),
  //     createMetcrys: button(async () => {
  //       console.log("create MetCrys");
  //       await createMetcrys();
  //       const newMetCrysCount = await getMetcrysCount();
  //       setmetCrysCount(newMetCrysCount);
  //       setContractVersion1({ metCrys: metCrysCount });
  //     }),
  //     getMetcrysCount: button(async () => {
  //       console.log("getMetcrysCount");
  //       const newMetCrysCount = await getMetcrysCount();
  //       setmetCrysCount(newMetCrysCount);
  //       setContractVersion1({ metCrys: metCrysCount });
  //     }),
  //   }),
  //   [resources, metalCount, crystalCount, metCrysCount]
  // );

  const [, setContractVersion3] = useControls("ContractVersion3", () => ({}), [resources]);

  // Helpers
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

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

    let newRessourecs: Resource[] = [];
    resources.forEach((res_el: Resource) => {
      // If mouse in rectangle then blue
      if (getDistance(mouseX, mouseY, res_el.x, res_el.y) <= 50) {
        res_el.color = "#ddffff";
        // and if mouse down make it moveable
        if (isMouseDown) {
          res_el.isSelected = true;
          res_el.x = mouseX;
          res_el.y = mouseY;
          newRessourecs = resources.filter((el) => el.isSelected === false);
        }
      } else {
        res_el.color = "white";
        res_el.isSelected = false;
      }

      const cornerRadius = 10;
      const borderWidth = 2;

      // Draw the main rectangle
      ctx.fillStyle = res_el.color;
      ctx.fillRect(res_el.x, res_el.y, 50, 50);

      // Draw top left corner
      // Border
      ctx.fillStyle = colorBorder;
      ctx.fillRect(res_el.x, res_el.y, cornerRadius, borderWidth);
      ctx.fillRect(res_el.x, res_el.y, borderWidth, cornerRadius);

      // Draw top right corner
      ctx.fillRect(res_el.x + 50 - cornerRadius, res_el.y, cornerRadius, borderWidth);
      ctx.fillRect(res_el.x + 50 - borderWidth, res_el.y, borderWidth, cornerRadius);

      // Draw bottom left corner
      ctx.fillRect(res_el.x, res_el.y + 50 - borderWidth, cornerRadius, borderWidth);
      ctx.fillRect(res_el.x, res_el.y + 50 - cornerRadius, borderWidth, cornerRadius);

      // Draw bottom right corner
      ctx.fillRect(res_el.x + 50 - cornerRadius, res_el.y + 50 - borderWidth, cornerRadius, borderWidth);
      ctx.fillRect(res_el.x + 50 - borderWidth, res_el.y + 50 - cornerRadius, borderWidth, cornerRadius);

      // Add Image in rectangle
      const img = new Image();
      img.src = res_el.getCurrentImage();
      ctx.drawImage(img, res_el.x, res_el.y, 50, 50); // Draw texture on canvas
    });

    // Recreate Ressources
    console.log(newRessourecs.length);
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
