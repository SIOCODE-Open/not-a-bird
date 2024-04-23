import { IGeneratedSpaceRegion } from "@not-a-bird/model";
import { seededRandom } from "@not-a-bird/seeded-random";

function spaceRegionNameGenerator(seed: number) {
    const random = seededRandom(seed);
    const terms = ["Nebula", "Cluster", "Sector", "Void", "Expanse", "Realm", "System"];
    const adjectives = ["Silent", "Infinite", "Dark", "Shimmering", "Lost"];
    const names = ["Orion", "Kane", "Zephyr", "Draco", "Helix", "Lyra", "Caelum"];

    function generateName() {
        const name = randomElement(names, random);
        const adjective = randomElement(adjectives, random);
        const term = randomElement(terms, random);

        // Create a variety of name formats
        const formats = [
            `${name} ${term}`,
            `${adjective} ${name} ${term}`,
            `${name} ${adjective} ${term}`,
            `${name} ${term} of ${adjective}`
        ];

        return randomElement(formats, random);
    }

    return generateName;
}

// Helper function to pick a random element from an array
function randomElement(array: Array<any>, random: () => number) {
    return array[Math.floor(random() * array.length)];
}

export function generateRegion(
    x: number,
    y: number
): IGeneratedSpaceRegion {
    const seed = x * 1000 + y;
    const random = seededRandom(seed);

    const nameGenerator = spaceRegionNameGenerator(seed);
    const numStarSystems = Math.floor(random() * 100) + 10;
    const generatedName = nameGenerator();

    return {
        name: generatedName,
        coordinates: [x, y],
        numStarSystems: numStarSystems
    }
}
