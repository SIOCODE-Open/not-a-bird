const fs = require('fs');
const path = require('path');

const POSSIBLE_CONTRACTS_V1_README_MD_FILES = [
    "../../contracts.v1/README.md",
    "../../../contracts.v1/README.md",
    "contracts.v1/README.md",
]

const realContractsV1ReadmeMdIndex = POSSIBLE_CONTRACTS_V1_README_MD_FILES.findIndex((file) => fs.existsSync(file));
const contractsV1ReadmeMd = POSSIBLE_CONTRACTS_V1_README_MD_FILES[realContractsV1ReadmeMdIndex];
const contractsV1Dir = path.join(path.dirname(contractsV1ReadmeMd), "artifacts");

console.log(`Loading contracts from ${contractsV1Dir} ...`);

if (!fs.existsSync(contractsV1Dir)) {
    throw new Error(`Contracts not found at ${contractsV1Dir}`);
}
