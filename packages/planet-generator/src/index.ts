import { IPlanet, PlanetType } from "@not-a-bird/model";
import { seededRandom } from "@not-a-bird/seeded-random";
import { generateStarSystem } from "@not-a-bird/star-system-generator";

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

const PLANET_TYPES: Array<PlanetType> = ["M", "T", "R", "H", "O", "A", "G", "I"];

export function generatePlanet(
    x: number,
    y: number,
    nSystem: number,
    nPlanet: number
): IPlanet {
    const seed = x * 1_000_000_000 + y * 1_000_000 + nSystem * 1000 + nPlanet;
    const random = seededRandom(seed);

    const generatedSystem = generateStarSystem(x, y, nSystem);

    const name = `${generatedSystem.name} ${ROMAN_NUMERALS[nPlanet]}`
    const type = PLANET_TYPES[Math.floor(random() * PLANET_TYPES.length)];
    const size = 4 + Math.floor(random() * 4);

    return {
        name,
        coordinates: [x, y, nSystem, nPlanet],
        type,
        size,
    }
}
