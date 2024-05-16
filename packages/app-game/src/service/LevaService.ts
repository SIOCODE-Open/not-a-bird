import { button, useControls } from "leva";
import { useEffect, useState } from "react";
import { Resource } from "../classes/ResourceClass";
import { BN } from "@polkadot/util";
import { useResources } from "../service/ResourceService";
import { useFrank } from "./FrankService";

function useBorderControls() {
  const [colorBorder, setColorBorder] = useState("#0000ff");
  const [, setBorder] = useControls(
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
    [colorBorder],
  );

  return { colorBorder, setColorBorder };
}

function useFrontendControls() {
  const { resources, addResource } = useResources();
  const [resourcesCount, setResourcesCount] = useState(resources.length);
  const [, setFrontend] = useControls(
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
        setResourcesCount(resources.length);
      }),
    }),
    [resourcesCount],
  );

  useEffect(() => {
    setResourcesCount(resources.length);
  }, [resources, setResourcesCount]);
}

function useContractVersionOne() {
  const { resources } = useResources();
  const [metalCount, setMetalCount] = useState(new BN(0));
  const [crystalCount, setCrystalCount] = useState(new BN(0));
  const [metCrysCount, setmetCrysCount] = useState("");
  const { mintMetal, mintCrystal, createMetcrys, getMetcrysCount } = useFrank();

  const [, setContractVersion1] = useControls(
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
    [resources, metalCount, crystalCount, metCrysCount],
  );
}

export { useContractVersionOne, useFrontendControls, useBorderControls };

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
