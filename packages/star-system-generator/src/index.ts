import { IStarSystem } from "@not-a-bird/model";
import { seededRandom } from "@not-a-bird/seeded-random";

function starSystemNameGenerator(seed) {
    const random = seededRandom(seed);
    const greekLetters = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
    const descriptors = ["Major", "Minor", "Prime", "Quadrant", "Sector", "Belt", "Fields", "Drift", "Ring", "Realm", "System", "Galaxy"];
    const celestialNames = ["Andara", "Cassiopeiae", "Draconis", "Elysium", "Thalassa", "Cygni", "Oberon", "Zenithar", "Helios", "Nebular", "Vega", "Rigel", "Arcturus", "Polaris", "Altair"];
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];

    function generateName() {
        const letter = randomElement(greekLetters, random);
        const descriptor = randomElement(descriptors, random);
        const celestialName = randomElement(celestialNames, random);
        const roman = randomElement(romanNumerals, random);

        const formats = [
            `${letter} ${celestialName} ${descriptor}`,
            `${celestialName} ${descriptor}`,
            `${celestialName} ${letter}`,
            `${celestialName} ${roman}`,
            `${celestialName} System ${roman}`,
            `${celestialName} ${descriptor} ${roman}`
        ];

        return randomElement(formats, random);
    }

    return generateName;
}

// Helper function to pick a random element from an array
function randomElement(array, random) {
    return array[Math.floor(random() * array.length)];
}

export function generateStarSystem(
    x: number,
    y: number,
    n: number
): IStarSystem {
    const seed = x * 1_000_000 + y * 1000 + n;
    const random = seededRandom(seed);

    const nameGenerator = starSystemNameGenerator(seed);
    const numPlanets = Math.floor(random() * 10) + 3;
    const generatedName = nameGenerator();

    return {
        name: generatedName,
        coordinates: [x, y, n],
        numPlanets: numPlanets
    }
}
