import { button, useControls } from "leva";
import { useEffect, useState } from "react";
import { Resource } from "../classes/RessourceClass";

export function useBorderControls() {
  const [colorBorder, setColorBorder] = useState("#fff000");
  const [borderControls, setBorder] = useControls(
    "Border",
    () => ({
      color: {
        value: colorBorder,
        disabled: false,
        onChange: (c) => {
          setColorBorder(c);
        },
      },
      get_color: button(() => {
        console.log("Hello World");
      }),
    }),
    [colorBorder]
  );

  return { colorBorder, setColorBorder, borderControls };
}

// NOT IMPLEMENTED FOR NOW
// export function useUniqueControls() {
//   const [collectionId, setCollectionId] = useState(0);
//   const [uniqueControls, setUnique] = useControls(
//     "Unique",
//     () => ({
//       collectionId: {
//         value: collectionId,
//         disabled: true,
//         onChange: (id) => {
//           setCollectionId(id);
//         },
//       },
//       createCollectionOnUnique: button(async () => {
//         /*createCollection()*/
//       }),
//       mintOnUnique: button(async () => {
//         /*mint()*/
//       }),
//       burOnUnique: button(async () => {
//         /*burn(5)*/
//       }),
//     }),
//     [collectionId]
//   );

//   return { collectionId, setCollectionId, uniqueControls };
// }

export function useFrontendControls(resources, addResource) {
  const [resourcesCount, setResourcesCount] = useState(resources.length);
  const [frontendControls, setFrontend] = useControls(
    "Frontend",
    () => ({
      resourcesCount: {
        value: resourcesCount,
        disabled: true,
        onChange: (count) => {
          setResourcesCount(count);
        },
      },
      add_ressource: button(() => {
        addResource(new Resource(500 * Math.random(), 500 * Math.random(), "green", false, 0, 0, 1));
        setResourcesCount(resources.length);
      }),
    }),
    [resourcesCount]
  );

  useEffect(() => {
    setResourcesCount(resources.length);
  }, [resources, setResourcesCount]);

  return { resourcesCount, setResourcesCount, frontendControls };
}

export function useContractVersion1Controls(
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
) {
  const [contractVersion1Controls, setContractVersion1] = useControls(
    "ContractVersion1",
    () => ({
      metcrysCount: {
        value: metCrysCount,
        disabled: true,
      },
      metal: {
        value: metalCount.toNumber(),
        disabled: true,
      },
      crystal: {
        value: crystalCount.toNumber(),
        disabled: true,
      },
      metCrys: {
        value: "",
        disabled: true,
      },
      mintMetal: button(async () => {
        console.log("mint metal");
        const newMetalCount = metalCount.add(new BN(1));
        await mintMetal(newMetalCount);
        setMetalCount(newMetalCount);
        setContractVersion1({ metal: newMetalCount.toNumber() });
      }),
      mintCrystal: button(async () => {
        console.log("mint crystal");
        const newCrystalCount = crystalCount.add(new BN(1));
        await mintCrystal(newCrystalCount);
        setCrystalCount(newCrystalCount);
        setContractVersion1({ crystal: newCrystalCount.toNumber() });
      }),
      createMetcrys: button(async () => {
        console.log("create MetCrys");
        await createMetcrys();
        const newMetCrysCount = await getMetcrysCount();
        setmetCrysCount(newMetCrysCount);
        setContractVersion1({ metCrys: newMetCrysCount });
      }),
      getMetcrysCount: button(async () => {
        console.log("getMetcrysCount");
        const newMetCrysCount = await getMetcrysCount();
        setmetCrysCount(newMetCrysCount);
        setContractVersion1({ metCrys: newMetCrysCount });
      }),
    }),
    [resources, metalCount, crystalCount, metCrysCount]
  );

  return { contractVersion1Controls };
}
