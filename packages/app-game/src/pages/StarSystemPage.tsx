import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import { CenteredLayout } from "../layout/CenteredLayout"
import { $starMapService } from "../service/StarMapService";
import { $starSystemService } from "../service/StarSystemService";
import { Button } from "../components/Button";

export function StarSystemPage(
    props: {
        navigate: (path: string) => void
    }
) {
    const [regionX, setRegionX] = useState(0);
    const [regionY, setRegionY] = useState(0);
    const [systemN, setSystemN] = useState(0);
    const [starSystem, setStarSystem] = useState(null);

    const onSelectPlanet = (planetN: number) => {
        $starSystemService.selectedPlanetCoordinates = [
            regionX,
            regionY,
            systemN,
            planetN
        ];
        props.navigate("/game");
    };

    useEffect(
        () => {
            const perform = async () => {
                const selectedCoords = $starMapService.selectedStarSystemCoordinates;
                setRegionX(selectedCoords[0]);
                setRegionY(selectedCoords[1]);
                setSystemN(selectedCoords[2]);
                const system = await $starSystemService.getStarSystem(selectedCoords[0], selectedCoords[1], selectedCoords[2]);
                setStarSystem(system);
            };
            perform();
        },
        []
    );

    return <CenteredLayout>
        <Card>
            <h5>
                {starSystem && starSystem.name}
            </h5>
            <h5>Planets</h5>
            {
                starSystem && starSystem.planets.map((planet, planetIndex) => (<Button onClick={() => onSelectPlanet(planetIndex)}>{planet.name}</Button>))
            }
        </Card>
    </CenteredLayout>
}
