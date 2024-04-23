import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { CenteredLayout } from "../layout/CenteredLayout";
import { Group } from "../components/Group";
import { $starMapService } from "../service/StarMapService";
import { Button } from "../components/Button";
import { StarMapTutorial } from "../tutorials/StarMapTutorial";

export function StarMapPage(props: { navigate: (path: string) => void }) {
  const [regionX, setRegionX] = useState(
    -127 + Math.floor(Math.random() * 256),
  );
  const [regionY, setRegionY] = useState(
    -127 + Math.floor(Math.random() * 256),
  );
  const [regionSystems, setRegionSystems] = useState([]);

  const onRegionCoordinatesChanged = () => {
    const perform = async () => {
      const region = await $starMapService.getRegion(regionX, regionY);
      setRegionSystems(region.starSystems);
    };
    perform();
  };

  const onSelectStarSystem = (n: number) => {
    $starMapService.selectedStarSystemCoordinates = [regionX, regionY, n];
    props.navigate("/star-system");
  };

  useEffect(onRegionCoordinatesChanged, [regionX, regionY]);

  useEffect(onRegionCoordinatesChanged, []);

  return (<>
    <CenteredLayout>
      <Card>
        <Card>
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

        <Card className="mt w-100">
          <h5>Star Systems</h5>
          {regionSystems.map((system, systemIndex) => (
            <Button
              key={system.id}
              onClick={() => onSelectStarSystem(systemIndex)}
            >
              {system.name}
            </Button>
          ))}
        </Card>
      </Card>
    </CenteredLayout>
    <StarMapTutorial />
  </>);
}
