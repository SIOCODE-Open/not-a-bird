import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";
import { Group } from "../components/Group";
import { $starMapService } from "../service/StarMapService";
import { Button } from "../components/Button";
import { StarMapTutorial } from "../tutorials/StarMapTutorial";
import { $starSystemService } from "../service/StarSystemService";
import { $starMapChangesService } from "../service/StarMapChangesService";
import { StackedLayout } from "../layout/StackedLayout";
import { HorizontalLayout } from "../layout/HorizontalLayout";

export function StarMapPage(props: { navigate: (path: string) => void }) {
  const [regionX, setRegionX] = useState(
    -127 + Math.floor(Math.random() * 256),
  );
  const [regionY, setRegionY] = useState(
    -127 + Math.floor(Math.random() * 256),
  );
  const [regionSystems, setRegionSystems] = useState([]);
  const [regionName, setRegionName] = useState("");

  const populateRegion = async () => {
    const region = await $starMapService.getRegion(regionX, regionY);
    const regionSystems = [];
    for (let nSystem = 0; nSystem < region.numStarSystems; nSystem++) {
      const generatedSystem = await $starSystemService.getStarSystem(regionX, regionY, nSystem);
      regionSystems.push(generatedSystem);
    }
    setRegionSystems(regionSystems);
    setRegionName(region.name);
  };

  const onRegionCoordinatesChanged = () => {
    const perform = async () => {
      $starMapService.selectRegion(regionX, regionY);
      await populateRegion();
    };
    perform();
  };

  const onSelectStarSystem = (n: number) => {
    $starMapService.selectStarSystem(n);
    $starSystemService.selectPlanet(0);
    props.navigate("/star-system");
  };

  useEffect(onRegionCoordinatesChanged, [regionX, regionY]);

  useEffect(onRegionCoordinatesChanged, []);

  useEffect(
    () => {
      // Select before subscribing
      $starMapService.selectRegion(regionX, regionY);
      const regionCoordsSub = $starMapChangesService.regionCoordinatesChanged.subscribe(
        (newCoords: [number, number]) => {
          if (newCoords[0] === regionX && newCoords[1] === regionY) return;
          setRegionX(newCoords[0]);
          setRegionY(newCoords[1]);
        },
      );
      return () => {
        regionCoordsSub.unsubscribe();
      };
    },
    []
  );

  return (<>
    <StackedLayout layers={[
      {
        className: "h-100",
        content: <CenteredLayout>
          <HorizontalLayout columns={[
            {
              className: "padded",
              content: <Card className="mt w-100">
                <h5>{regionName}</h5>
                <Group>
                  {regionSystems.map((system, systemIndex) => (
                    <Button
                      key={systemIndex}
                      onClick={() => onSelectStarSystem(systemIndex)}
                      className="mx mb"
                    >
                      {system.name}
                    </Button>
                  ))}
                </Group>
              </Card>
            },
            {
              className: "padded",
              content: <Card className="mt w-100">
                <h5>Star system details</h5>
              </Card>
            }
          ]} />
        </CenteredLayout>
      },

      {
        className: "padded top-left",
        content: <Card>
          <h5>Coordinates</h5>
          <Group>
            <input
              size={6}
              type="number"
              value={regionX}
              onChange={(e) => setRegionX(parseInt(e.target.value))}
            />
            <input
              size={6}
              type="number"
              value={regionY}
              onChange={(e) => setRegionY(parseInt(e.target.value))}
            />
          </Group>
        </Card>
      },

    ]} />
    <StarMapTutorial />
  </>);
}
