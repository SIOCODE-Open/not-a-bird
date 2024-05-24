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
const contractInterfacesV1Dir = path.join(path.dirname(contractsV1ReadmeMd), "interfaces");

console.log(`Loading contracts from ${contractsV1Dir} ...`);

if (!fs.existsSync(contractsV1Dir)) {
    throw new Error(`Contracts not found at ${contractsV1Dir}`);
}

if (!fs.existsSync(contractInterfacesV1Dir)) {
    fs.mkdirSync(contractInterfacesV1Dir, { recursive: true });
}

const monkeyPath = path.join(contractsV1Dir, "monkey.contract.json");
const monkeyInterfacePath = path.join(contractInterfacesV1Dir, "monkey.interface.json");
if(fs.existsSync(monkeyPath)) {
    const monkeyData = JSON.parse(
        fs.readFileSync(monkeyPath, { encoding: 'utf-8' })
    );
    if(!monkeyData.source) {
        console.log(`No source found for Monkey at ${ monkeyPath }`)
        return;
    }
    delete monkeyData.source.wasm;
    fs.writeFileSync(monkeyInterfacePath, JSON.stringify(monkeyData, null, 4));
    console.log(`Extracted metadata for Monkey to ${ monkeyInterfacePath }`)
} else {
    console.log(`No metadata found for Monkey at ${ monkeyPath }`)
}
const giraffePath = path.join(contractsV1Dir, "giraffe.contract.json");
const giraffeInterfacePath = path.join(contractInterfacesV1Dir, "giraffe.interface.json");
if(fs.existsSync(giraffePath)) {
    const giraffeData = JSON.parse(
        fs.readFileSync(giraffePath, { encoding: 'utf-8' })
    );
    if(!giraffeData.source) {
        console.log(`No source found for Giraffe at ${ giraffePath }`)
        return;
    }
    delete giraffeData.source.wasm;
    fs.writeFileSync(giraffeInterfacePath, JSON.stringify(giraffeData, null, 4));
    console.log(`Extracted metadata for Giraffe to ${ giraffeInterfacePath }`)
} else {
    console.log(`No metadata found for Giraffe at ${ giraffePath }`)
}
const beePath = path.join(contractsV1Dir, "bee.contract.json");
const beeInterfacePath = path.join(contractInterfacesV1Dir, "bee.interface.json");
if(fs.existsSync(beePath)) {
    const beeData = JSON.parse(
        fs.readFileSync(beePath, { encoding: 'utf-8' })
    );
    if(!beeData.source) {
        console.log(`No source found for Bee at ${ beePath }`)
        return;
    }
    delete beeData.source.wasm;
    fs.writeFileSync(beeInterfacePath, JSON.stringify(beeData, null, 4));
    console.log(`Extracted metadata for Bee to ${ beeInterfacePath }`)
} else {
    console.log(`No metadata found for Bee at ${ beePath }`)
}
const coinPath = path.join(contractsV1Dir, "coin.contract.json");
const coinInterfacePath = path.join(contractInterfacesV1Dir, "coin.interface.json");
if(fs.existsSync(coinPath)) {
    const coinData = JSON.parse(
        fs.readFileSync(coinPath, { encoding: 'utf-8' })
    );
    if(!coinData.source) {
        console.log(`No source found for Coin at ${ coinPath }`)
        return;
    }
    delete coinData.source.wasm;
    fs.writeFileSync(coinInterfacePath, JSON.stringify(coinData, null, 4));
    console.log(`Extracted metadata for Coin to ${ coinInterfacePath }`)
} else {
    console.log(`No metadata found for Coin at ${ coinPath }`)
}
const swarmPath = path.join(contractsV1Dir, "swarm.contract.json");
const swarmInterfacePath = path.join(contractInterfacesV1Dir, "swarm.interface.json");
if(fs.existsSync(swarmPath)) {
    const swarmData = JSON.parse(
        fs.readFileSync(swarmPath, { encoding: 'utf-8' })
    );
    if(!swarmData.source) {
        console.log(`No source found for SWARM at ${ swarmPath }`)
        return;
    }
    delete swarmData.source.wasm;
    fs.writeFileSync(swarmInterfacePath, JSON.stringify(swarmData, null, 4));
    console.log(`Extracted metadata for SWARM to ${ swarmInterfacePath }`)
} else {
    console.log(`No metadata found for SWARM at ${ swarmPath }`)
}
const hydraPath = path.join(contractsV1Dir, "hydra.contract.json");
const hydraInterfacePath = path.join(contractInterfacesV1Dir, "hydra.interface.json");
if(fs.existsSync(hydraPath)) {
    const hydraData = JSON.parse(
        fs.readFileSync(hydraPath, { encoding: 'utf-8' })
    );
    if(!hydraData.source) {
        console.log(`No source found for Hydra at ${ hydraPath }`)
        return;
    }
    delete hydraData.source.wasm;
    fs.writeFileSync(hydraInterfacePath, JSON.stringify(hydraData, null, 4));
    console.log(`Extracted metadata for Hydra to ${ hydraInterfacePath }`)
} else {
    console.log(`No metadata found for Hydra at ${ hydraPath }`)
}
const monkeyBranchPath = path.join(contractsV1Dir, "monkey_branch.contract.json");
const monkeyBranchInterfacePath = path.join(contractInterfacesV1Dir, "monkey_branch.interface.json");
if(fs.existsSync(monkeyBranchPath)) {
    const monkeyBranchData = JSON.parse(
        fs.readFileSync(monkeyBranchPath, { encoding: 'utf-8' })
    );
    if(!monkeyBranchData.source) {
        console.log(`No source found for MonkeyBranch at ${ monkeyBranchPath }`)
        return;
    }
    delete monkeyBranchData.source.wasm;
    fs.writeFileSync(monkeyBranchInterfacePath, JSON.stringify(monkeyBranchData, null, 4));
    console.log(`Extracted metadata for MonkeyBranch to ${ monkeyBranchInterfacePath }`)
} else {
    console.log(`No metadata found for MonkeyBranch at ${ monkeyBranchPath }`)
}
const bridgePath = path.join(contractsV1Dir, "bridge.contract.json");
const bridgeInterfacePath = path.join(contractInterfacesV1Dir, "bridge.interface.json");
if(fs.existsSync(bridgePath)) {
    const bridgeData = JSON.parse(
        fs.readFileSync(bridgePath, { encoding: 'utf-8' })
    );
    if(!bridgeData.source) {
        console.log(`No source found for Bridge at ${ bridgePath }`)
        return;
    }
    delete bridgeData.source.wasm;
    fs.writeFileSync(bridgeInterfacePath, JSON.stringify(bridgeData, null, 4));
    console.log(`Extracted metadata for Bridge to ${ bridgeInterfacePath }`)
} else {
    console.log(`No metadata found for Bridge at ${ bridgePath }`)
}
const goldenGatePath = path.join(contractsV1Dir, "golden_gate.contract.json");
const goldenGateInterfacePath = path.join(contractInterfacesV1Dir, "golden_gate.interface.json");
if(fs.existsSync(goldenGatePath)) {
    const goldenGateData = JSON.parse(
        fs.readFileSync(goldenGatePath, { encoding: 'utf-8' })
    );
    if(!goldenGateData.source) {
        console.log(`No source found for GoldenGate at ${ goldenGatePath }`)
        return;
    }
    delete goldenGateData.source.wasm;
    fs.writeFileSync(goldenGateInterfacePath, JSON.stringify(goldenGateData, null, 4));
    console.log(`Extracted metadata for GoldenGate to ${ goldenGateInterfacePath }`)
} else {
    console.log(`No metadata found for GoldenGate at ${ goldenGatePath }`)
}
const goldPath = path.join(contractsV1Dir, "gold.contract.json");
const goldInterfacePath = path.join(contractInterfacesV1Dir, "gold.interface.json");
if(fs.existsSync(goldPath)) {
    const goldData = JSON.parse(
        fs.readFileSync(goldPath, { encoding: 'utf-8' })
    );
    if(!goldData.source) {
        console.log(`No source found for Gold at ${ goldPath }`)
        return;
    }
    delete goldData.source.wasm;
    fs.writeFileSync(goldInterfacePath, JSON.stringify(goldData, null, 4));
    console.log(`Extracted metadata for Gold to ${ goldInterfacePath }`)
} else {
    console.log(`No metadata found for Gold at ${ goldPath }`)
}
const silverPath = path.join(contractsV1Dir, "silver.contract.json");
const silverInterfacePath = path.join(contractInterfacesV1Dir, "silver.interface.json");
if(fs.existsSync(silverPath)) {
    const silverData = JSON.parse(
        fs.readFileSync(silverPath, { encoding: 'utf-8' })
    );
    if(!silverData.source) {
        console.log(`No source found for Silver at ${ silverPath }`)
        return;
    }
    delete silverData.source.wasm;
    fs.writeFileSync(silverInterfacePath, JSON.stringify(silverData, null, 4));
    console.log(`Extracted metadata for Silver to ${ silverInterfacePath }`)
} else {
    console.log(`No metadata found for Silver at ${ silverPath }`)
}
const rhodiumPath = path.join(contractsV1Dir, "rhodium.contract.json");
const rhodiumInterfacePath = path.join(contractInterfacesV1Dir, "rhodium.interface.json");
if(fs.existsSync(rhodiumPath)) {
    const rhodiumData = JSON.parse(
        fs.readFileSync(rhodiumPath, { encoding: 'utf-8' })
    );
    if(!rhodiumData.source) {
        console.log(`No source found for Rhodium at ${ rhodiumPath }`)
        return;
    }
    delete rhodiumData.source.wasm;
    fs.writeFileSync(rhodiumInterfacePath, JSON.stringify(rhodiumData, null, 4));
    console.log(`Extracted metadata for Rhodium to ${ rhodiumInterfacePath }`)
} else {
    console.log(`No metadata found for Rhodium at ${ rhodiumPath }`)
}
const hivePath = path.join(contractsV1Dir, "hive.contract.json");
const hiveInterfacePath = path.join(contractInterfacesV1Dir, "hive.interface.json");
if(fs.existsSync(hivePath)) {
    const hiveData = JSON.parse(
        fs.readFileSync(hivePath, { encoding: 'utf-8' })
    );
    if(!hiveData.source) {
        console.log(`No source found for Hive at ${ hivePath }`)
        return;
    }
    delete hiveData.source.wasm;
    fs.writeFileSync(hiveInterfacePath, JSON.stringify(hiveData, null, 4));
    console.log(`Extracted metadata for Hive to ${ hiveInterfacePath }`)
} else {
    console.log(`No metadata found for Hive at ${ hivePath }`)
}
const transactionPath = path.join(contractsV1Dir, "transaction.contract.json");
const transactionInterfacePath = path.join(contractInterfacesV1Dir, "transaction.interface.json");
if(fs.existsSync(transactionPath)) {
    const transactionData = JSON.parse(
        fs.readFileSync(transactionPath, { encoding: 'utf-8' })
    );
    if(!transactionData.source) {
        console.log(`No source found for Transaction at ${ transactionPath }`)
        return;
    }
    delete transactionData.source.wasm;
    fs.writeFileSync(transactionInterfacePath, JSON.stringify(transactionData, null, 4));
    console.log(`Extracted metadata for Transaction to ${ transactionInterfacePath }`)
} else {
    console.log(`No metadata found for Transaction at ${ transactionPath }`)
}
const blockPath = path.join(contractsV1Dir, "block.contract.json");
const blockInterfacePath = path.join(contractInterfacesV1Dir, "block.interface.json");
if(fs.existsSync(blockPath)) {
    const blockData = JSON.parse(
        fs.readFileSync(blockPath, { encoding: 'utf-8' })
    );
    if(!blockData.source) {
        console.log(`No source found for Block at ${ blockPath }`)
        return;
    }
    delete blockData.source.wasm;
    fs.writeFileSync(blockInterfacePath, JSON.stringify(blockData, null, 4));
    console.log(`Extracted metadata for Block to ${ blockInterfacePath }`)
} else {
    console.log(`No metadata found for Block at ${ blockPath }`)
}
const blockchainPath = path.join(contractsV1Dir, "blockchain.contract.json");
const blockchainInterfacePath = path.join(contractInterfacesV1Dir, "blockchain.interface.json");
if(fs.existsSync(blockchainPath)) {
    const blockchainData = JSON.parse(
        fs.readFileSync(blockchainPath, { encoding: 'utf-8' })
    );
    if(!blockchainData.source) {
        console.log(`No source found for Blockchain at ${ blockchainPath }`)
        return;
    }
    delete blockchainData.source.wasm;
    fs.writeFileSync(blockchainInterfacePath, JSON.stringify(blockchainData, null, 4));
    console.log(`Extracted metadata for Blockchain to ${ blockchainInterfacePath }`)
} else {
    console.log(`No metadata found for Blockchain at ${ blockchainPath }`)
}
const polkadotPath = path.join(contractsV1Dir, "polkadot.contract.json");
const polkadotInterfacePath = path.join(contractInterfacesV1Dir, "polkadot.interface.json");
if(fs.existsSync(polkadotPath)) {
    const polkadotData = JSON.parse(
        fs.readFileSync(polkadotPath, { encoding: 'utf-8' })
    );
    if(!polkadotData.source) {
        console.log(`No source found for Polkadot at ${ polkadotPath }`)
        return;
    }
    delete polkadotData.source.wasm;
    fs.writeFileSync(polkadotInterfacePath, JSON.stringify(polkadotData, null, 4));
    console.log(`Extracted metadata for Polkadot to ${ polkadotInterfacePath }`)
} else {
    console.log(`No metadata found for Polkadot at ${ polkadotPath }`)
}
const peerReviewPath = path.join(contractsV1Dir, "peer_review.contract.json");
const peerReviewInterfacePath = path.join(contractInterfacesV1Dir, "peer_review.interface.json");
if(fs.existsSync(peerReviewPath)) {
    const peerReviewData = JSON.parse(
        fs.readFileSync(peerReviewPath, { encoding: 'utf-8' })
    );
    if(!peerReviewData.source) {
        console.log(`No source found for PeerReview at ${ peerReviewPath }`)
        return;
    }
    delete peerReviewData.source.wasm;
    fs.writeFileSync(peerReviewInterfacePath, JSON.stringify(peerReviewData, null, 4));
    console.log(`Extracted metadata for PeerReview to ${ peerReviewInterfacePath }`)
} else {
    console.log(`No metadata found for PeerReview at ${ peerReviewPath }`)
}
const cardanoPath = path.join(contractsV1Dir, "cardano.contract.json");
const cardanoInterfacePath = path.join(contractInterfacesV1Dir, "cardano.interface.json");
if(fs.existsSync(cardanoPath)) {
    const cardanoData = JSON.parse(
        fs.readFileSync(cardanoPath, { encoding: 'utf-8' })
    );
    if(!cardanoData.source) {
        console.log(`No source found for Cardano at ${ cardanoPath }`)
        return;
    }
    delete cardanoData.source.wasm;
    fs.writeFileSync(cardanoInterfacePath, JSON.stringify(cardanoData, null, 4));
    console.log(`Extracted metadata for Cardano to ${ cardanoInterfacePath }`)
} else {
    console.log(`No metadata found for Cardano at ${ cardanoPath }`)
}
const bearPath = path.join(contractsV1Dir, "bear.contract.json");
const bearInterfacePath = path.join(contractInterfacesV1Dir, "bear.interface.json");
if(fs.existsSync(bearPath)) {
    const bearData = JSON.parse(
        fs.readFileSync(bearPath, { encoding: 'utf-8' })
    );
    if(!bearData.source) {
        console.log(`No source found for Bear at ${ bearPath }`)
        return;
    }
    delete bearData.source.wasm;
    fs.writeFileSync(bearInterfacePath, JSON.stringify(bearData, null, 4));
    console.log(`Extracted metadata for Bear to ${ bearInterfacePath }`)
} else {
    console.log(`No metadata found for Bear at ${ bearPath }`)
}
const beerPath = path.join(contractsV1Dir, "beer.contract.json");
const beerInterfacePath = path.join(contractInterfacesV1Dir, "beer.interface.json");
if(fs.existsSync(beerPath)) {
    const beerData = JSON.parse(
        fs.readFileSync(beerPath, { encoding: 'utf-8' })
    );
    if(!beerData.source) {
        console.log(`No source found for Beer at ${ beerPath }`)
        return;
    }
    delete beerData.source.wasm;
    fs.writeFileSync(beerInterfacePath, JSON.stringify(beerData, null, 4));
    console.log(`Extracted metadata for Beer to ${ beerInterfacePath }`)
} else {
    console.log(`No metadata found for Beer at ${ beerPath }`)
}
const lockPath = path.join(contractsV1Dir, "lock.contract.json");
const lockInterfacePath = path.join(contractInterfacesV1Dir, "lock.interface.json");
if(fs.existsSync(lockPath)) {
    const lockData = JSON.parse(
        fs.readFileSync(lockPath, { encoding: 'utf-8' })
    );
    if(!lockData.source) {
        console.log(`No source found for Lock at ${ lockPath }`)
        return;
    }
    delete lockData.source.wasm;
    fs.writeFileSync(lockInterfacePath, JSON.stringify(lockData, null, 4));
    console.log(`Extracted metadata for Lock to ${ lockInterfacePath }`)
} else {
    console.log(`No metadata found for Lock at ${ lockPath }`)
}
const marmaladePath = path.join(contractsV1Dir, "marmalade.contract.json");
const marmaladeInterfacePath = path.join(contractInterfacesV1Dir, "marmalade.interface.json");
if(fs.existsSync(marmaladePath)) {
    const marmaladeData = JSON.parse(
        fs.readFileSync(marmaladePath, { encoding: 'utf-8' })
    );
    if(!marmaladeData.source) {
        console.log(`No source found for Marmalade at ${ marmaladePath }`)
        return;
    }
    delete marmaladeData.source.wasm;
    fs.writeFileSync(marmaladeInterfacePath, JSON.stringify(marmaladeData, null, 4));
    console.log(`Extracted metadata for Marmalade to ${ marmaladeInterfacePath }`)
} else {
    console.log(`No metadata found for Marmalade at ${ marmaladePath }`)
}
const superMarmaladePath = path.join(contractsV1Dir, "super_marmalade.contract.json");
const superMarmaladeInterfacePath = path.join(contractInterfacesV1Dir, "super_marmalade.interface.json");
if(fs.existsSync(superMarmaladePath)) {
    const superMarmaladeData = JSON.parse(
        fs.readFileSync(superMarmaladePath, { encoding: 'utf-8' })
    );
    if(!superMarmaladeData.source) {
        console.log(`No source found for SuperMarmalade at ${ superMarmaladePath }`)
        return;
    }
    delete superMarmaladeData.source.wasm;
    fs.writeFileSync(superMarmaladeInterfacePath, JSON.stringify(superMarmaladeData, null, 4));
    console.log(`Extracted metadata for SuperMarmalade to ${ superMarmaladeInterfacePath }`)
} else {
    console.log(`No metadata found for SuperMarmalade at ${ superMarmaladePath }`)
}
const hyperMarmaladePath = path.join(contractsV1Dir, "hyper_marmalade.contract.json");
const hyperMarmaladeInterfacePath = path.join(contractInterfacesV1Dir, "hyper_marmalade.interface.json");
if(fs.existsSync(hyperMarmaladePath)) {
    const hyperMarmaladeData = JSON.parse(
        fs.readFileSync(hyperMarmaladePath, { encoding: 'utf-8' })
    );
    if(!hyperMarmaladeData.source) {
        console.log(`No source found for HyperMarmalade at ${ hyperMarmaladePath }`)
        return;
    }
    delete hyperMarmaladeData.source.wasm;
    fs.writeFileSync(hyperMarmaladeInterfacePath, JSON.stringify(hyperMarmaladeData, null, 4));
    console.log(`Extracted metadata for HyperMarmalade to ${ hyperMarmaladeInterfacePath }`)
} else {
    console.log(`No metadata found for HyperMarmalade at ${ hyperMarmaladePath }`)
}
const waterPath = path.join(contractsV1Dir, "water.contract.json");
const waterInterfacePath = path.join(contractInterfacesV1Dir, "water.interface.json");
if(fs.existsSync(waterPath)) {
    const waterData = JSON.parse(
        fs.readFileSync(waterPath, { encoding: 'utf-8' })
    );
    if(!waterData.source) {
        console.log(`No source found for Water at ${ waterPath }`)
        return;
    }
    delete waterData.source.wasm;
    fs.writeFileSync(waterInterfacePath, JSON.stringify(waterData, null, 4));
    console.log(`Extracted metadata for Water to ${ waterInterfacePath }`)
} else {
    console.log(`No metadata found for Water at ${ waterPath }`)
}
const firePath = path.join(contractsV1Dir, "fire.contract.json");
const fireInterfacePath = path.join(contractInterfacesV1Dir, "fire.interface.json");
if(fs.existsSync(firePath)) {
    const fireData = JSON.parse(
        fs.readFileSync(firePath, { encoding: 'utf-8' })
    );
    if(!fireData.source) {
        console.log(`No source found for Fire at ${ firePath }`)
        return;
    }
    delete fireData.source.wasm;
    fs.writeFileSync(fireInterfacePath, JSON.stringify(fireData, null, 4));
    console.log(`Extracted metadata for Fire to ${ fireInterfacePath }`)
} else {
    console.log(`No metadata found for Fire at ${ firePath }`)
}
const steamPath = path.join(contractsV1Dir, "steam.contract.json");
const steamInterfacePath = path.join(contractInterfacesV1Dir, "steam.interface.json");
if(fs.existsSync(steamPath)) {
    const steamData = JSON.parse(
        fs.readFileSync(steamPath, { encoding: 'utf-8' })
    );
    if(!steamData.source) {
        console.log(`No source found for Steam at ${ steamPath }`)
        return;
    }
    delete steamData.source.wasm;
    fs.writeFileSync(steamInterfacePath, JSON.stringify(steamData, null, 4));
    console.log(`Extracted metadata for Steam to ${ steamInterfacePath }`)
} else {
    console.log(`No metadata found for Steam at ${ steamPath }`)
}
const earthPath = path.join(contractsV1Dir, "earth.contract.json");
const earthInterfacePath = path.join(contractInterfacesV1Dir, "earth.interface.json");
if(fs.existsSync(earthPath)) {
    const earthData = JSON.parse(
        fs.readFileSync(earthPath, { encoding: 'utf-8' })
    );
    if(!earthData.source) {
        console.log(`No source found for Earth at ${ earthPath }`)
        return;
    }
    delete earthData.source.wasm;
    fs.writeFileSync(earthInterfacePath, JSON.stringify(earthData, null, 4));
    console.log(`Extracted metadata for Earth to ${ earthInterfacePath }`)
} else {
    console.log(`No metadata found for Earth at ${ earthPath }`)
}
const mudPath = path.join(contractsV1Dir, "mud.contract.json");
const mudInterfacePath = path.join(contractInterfacesV1Dir, "mud.interface.json");
if(fs.existsSync(mudPath)) {
    const mudData = JSON.parse(
        fs.readFileSync(mudPath, { encoding: 'utf-8' })
    );
    if(!mudData.source) {
        console.log(`No source found for Mud at ${ mudPath }`)
        return;
    }
    delete mudData.source.wasm;
    fs.writeFileSync(mudInterfacePath, JSON.stringify(mudData, null, 4));
    console.log(`Extracted metadata for Mud to ${ mudInterfacePath }`)
} else {
    console.log(`No metadata found for Mud at ${ mudPath }`)
}
const lavaPath = path.join(contractsV1Dir, "lava.contract.json");
const lavaInterfacePath = path.join(contractInterfacesV1Dir, "lava.interface.json");
if(fs.existsSync(lavaPath)) {
    const lavaData = JSON.parse(
        fs.readFileSync(lavaPath, { encoding: 'utf-8' })
    );
    if(!lavaData.source) {
        console.log(`No source found for Lava at ${ lavaPath }`)
        return;
    }
    delete lavaData.source.wasm;
    fs.writeFileSync(lavaInterfacePath, JSON.stringify(lavaData, null, 4));
    console.log(`Extracted metadata for Lava to ${ lavaInterfacePath }`)
} else {
    console.log(`No metadata found for Lava at ${ lavaPath }`)
}
const windPath = path.join(contractsV1Dir, "wind.contract.json");
const windInterfacePath = path.join(contractInterfacesV1Dir, "wind.interface.json");
if(fs.existsSync(windPath)) {
    const windData = JSON.parse(
        fs.readFileSync(windPath, { encoding: 'utf-8' })
    );
    if(!windData.source) {
        console.log(`No source found for Wind at ${ windPath }`)
        return;
    }
    delete windData.source.wasm;
    fs.writeFileSync(windInterfacePath, JSON.stringify(windData, null, 4));
    console.log(`Extracted metadata for Wind to ${ windInterfacePath }`)
} else {
    console.log(`No metadata found for Wind at ${ windPath }`)
}
const dustPath = path.join(contractsV1Dir, "dust.contract.json");
const dustInterfacePath = path.join(contractInterfacesV1Dir, "dust.interface.json");
if(fs.existsSync(dustPath)) {
    const dustData = JSON.parse(
        fs.readFileSync(dustPath, { encoding: 'utf-8' })
    );
    if(!dustData.source) {
        console.log(`No source found for Dust at ${ dustPath }`)
        return;
    }
    delete dustData.source.wasm;
    fs.writeFileSync(dustInterfacePath, JSON.stringify(dustData, null, 4));
    console.log(`Extracted metadata for Dust to ${ dustInterfacePath }`)
} else {
    console.log(`No metadata found for Dust at ${ dustPath }`)
}
const rainPath = path.join(contractsV1Dir, "rain.contract.json");
const rainInterfacePath = path.join(contractInterfacesV1Dir, "rain.interface.json");
if(fs.existsSync(rainPath)) {
    const rainData = JSON.parse(
        fs.readFileSync(rainPath, { encoding: 'utf-8' })
    );
    if(!rainData.source) {
        console.log(`No source found for Rain at ${ rainPath }`)
        return;
    }
    delete rainData.source.wasm;
    fs.writeFileSync(rainInterfacePath, JSON.stringify(rainData, null, 4));
    console.log(`Extracted metadata for Rain to ${ rainInterfacePath }`)
} else {
    console.log(`No metadata found for Rain at ${ rainPath }`)
}
const smokePath = path.join(contractsV1Dir, "smoke.contract.json");
const smokeInterfacePath = path.join(contractInterfacesV1Dir, "smoke.interface.json");
if(fs.existsSync(smokePath)) {
    const smokeData = JSON.parse(
        fs.readFileSync(smokePath, { encoding: 'utf-8' })
    );
    if(!smokeData.source) {
        console.log(`No source found for Smoke at ${ smokePath }`)
        return;
    }
    delete smokeData.source.wasm;
    fs.writeFileSync(smokeInterfacePath, JSON.stringify(smokeData, null, 4));
    console.log(`Extracted metadata for Smoke to ${ smokeInterfacePath }`)
} else {
    console.log(`No metadata found for Smoke at ${ smokePath }`)
}
const geyserPath = path.join(contractsV1Dir, "geyser.contract.json");
const geyserInterfacePath = path.join(contractInterfacesV1Dir, "geyser.interface.json");
if(fs.existsSync(geyserPath)) {
    const geyserData = JSON.parse(
        fs.readFileSync(geyserPath, { encoding: 'utf-8' })
    );
    if(!geyserData.source) {
        console.log(`No source found for Geyser at ${ geyserPath }`)
        return;
    }
    delete geyserData.source.wasm;
    fs.writeFileSync(geyserInterfacePath, JSON.stringify(geyserData, null, 4));
    console.log(`Extracted metadata for Geyser to ${ geyserInterfacePath }`)
} else {
    console.log(`No metadata found for Geyser at ${ geyserPath }`)
}
const clayPath = path.join(contractsV1Dir, "clay.contract.json");
const clayInterfacePath = path.join(contractInterfacesV1Dir, "clay.interface.json");
if(fs.existsSync(clayPath)) {
    const clayData = JSON.parse(
        fs.readFileSync(clayPath, { encoding: 'utf-8' })
    );
    if(!clayData.source) {
        console.log(`No source found for Clay at ${ clayPath }`)
        return;
    }
    delete clayData.source.wasm;
    fs.writeFileSync(clayInterfacePath, JSON.stringify(clayData, null, 4));
    console.log(`Extracted metadata for Clay to ${ clayInterfacePath }`)
} else {
    console.log(`No metadata found for Clay at ${ clayPath }`)
}
const sandPath = path.join(contractsV1Dir, "sand.contract.json");
const sandInterfacePath = path.join(contractInterfacesV1Dir, "sand.interface.json");
if(fs.existsSync(sandPath)) {
    const sandData = JSON.parse(
        fs.readFileSync(sandPath, { encoding: 'utf-8' })
    );
    if(!sandData.source) {
        console.log(`No source found for Sand at ${ sandPath }`)
        return;
    }
    delete sandData.source.wasm;
    fs.writeFileSync(sandInterfacePath, JSON.stringify(sandData, null, 4));
    console.log(`Extracted metadata for Sand to ${ sandInterfacePath }`)
} else {
    console.log(`No metadata found for Sand at ${ sandPath }`)
}
const plantPath = path.join(contractsV1Dir, "plant.contract.json");
const plantInterfacePath = path.join(contractInterfacesV1Dir, "plant.interface.json");
if(fs.existsSync(plantPath)) {
    const plantData = JSON.parse(
        fs.readFileSync(plantPath, { encoding: 'utf-8' })
    );
    if(!plantData.source) {
        console.log(`No source found for Plant at ${ plantPath }`)
        return;
    }
    delete plantData.source.wasm;
    fs.writeFileSync(plantInterfacePath, JSON.stringify(plantData, null, 4));
    console.log(`Extracted metadata for Plant to ${ plantInterfacePath }`)
} else {
    console.log(`No metadata found for Plant at ${ plantPath }`)
}
const rainbowPath = path.join(contractsV1Dir, "rainbow.contract.json");
const rainbowInterfacePath = path.join(contractInterfacesV1Dir, "rainbow.interface.json");
if(fs.existsSync(rainbowPath)) {
    const rainbowData = JSON.parse(
        fs.readFileSync(rainbowPath, { encoding: 'utf-8' })
    );
    if(!rainbowData.source) {
        console.log(`No source found for Rainbow at ${ rainbowPath }`)
        return;
    }
    delete rainbowData.source.wasm;
    fs.writeFileSync(rainbowInterfacePath, JSON.stringify(rainbowData, null, 4));
    console.log(`Extracted metadata for Rainbow to ${ rainbowInterfacePath }`)
} else {
    console.log(`No metadata found for Rainbow at ${ rainbowPath }`)
}
const stormPath = path.join(contractsV1Dir, "storm.contract.json");
const stormInterfacePath = path.join(contractInterfacesV1Dir, "storm.interface.json");
if(fs.existsSync(stormPath)) {
    const stormData = JSON.parse(
        fs.readFileSync(stormPath, { encoding: 'utf-8' })
    );
    if(!stormData.source) {
        console.log(`No source found for Storm at ${ stormPath }`)
        return;
    }
    delete stormData.source.wasm;
    fs.writeFileSync(stormInterfacePath, JSON.stringify(stormData, null, 4));
    console.log(`Extracted metadata for Storm to ${ stormInterfacePath }`)
} else {
    console.log(`No metadata found for Storm at ${ stormPath }`)
}
const obsidianPath = path.join(contractsV1Dir, "obsidian.contract.json");
const obsidianInterfacePath = path.join(contractInterfacesV1Dir, "obsidian.interface.json");
if(fs.existsSync(obsidianPath)) {
    const obsidianData = JSON.parse(
        fs.readFileSync(obsidianPath, { encoding: 'utf-8' })
    );
    if(!obsidianData.source) {
        console.log(`No source found for Obsidian at ${ obsidianPath }`)
        return;
    }
    delete obsidianData.source.wasm;
    fs.writeFileSync(obsidianInterfacePath, JSON.stringify(obsidianData, null, 4));
    console.log(`Extracted metadata for Obsidian to ${ obsidianInterfacePath }`)
} else {
    console.log(`No metadata found for Obsidian at ${ obsidianPath }`)
}
const ashPath = path.join(contractsV1Dir, "ash.contract.json");
const ashInterfacePath = path.join(contractInterfacesV1Dir, "ash.interface.json");
if(fs.existsSync(ashPath)) {
    const ashData = JSON.parse(
        fs.readFileSync(ashPath, { encoding: 'utf-8' })
    );
    if(!ashData.source) {
        console.log(`No source found for Ash at ${ ashPath }`)
        return;
    }
    delete ashData.source.wasm;
    fs.writeFileSync(ashInterfacePath, JSON.stringify(ashData, null, 4));
    console.log(`Extracted metadata for Ash to ${ ashInterfacePath }`)
} else {
    console.log(`No metadata found for Ash at ${ ashPath }`)
}
const volcanoPath = path.join(contractsV1Dir, "volcano.contract.json");
const volcanoInterfacePath = path.join(contractInterfacesV1Dir, "volcano.interface.json");
if(fs.existsSync(volcanoPath)) {
    const volcanoData = JSON.parse(
        fs.readFileSync(volcanoPath, { encoding: 'utf-8' })
    );
    if(!volcanoData.source) {
        console.log(`No source found for Volcano at ${ volcanoPath }`)
        return;
    }
    delete volcanoData.source.wasm;
    fs.writeFileSync(volcanoInterfacePath, JSON.stringify(volcanoData, null, 4));
    console.log(`Extracted metadata for Volcano to ${ volcanoInterfacePath }`)
} else {
    console.log(`No metadata found for Volcano at ${ volcanoPath }`)
}
const sandstormPath = path.join(contractsV1Dir, "sandstorm.contract.json");
const sandstormInterfacePath = path.join(contractInterfacesV1Dir, "sandstorm.interface.json");
if(fs.existsSync(sandstormPath)) {
    const sandstormData = JSON.parse(
        fs.readFileSync(sandstormPath, { encoding: 'utf-8' })
    );
    if(!sandstormData.source) {
        console.log(`No source found for Sandstorm at ${ sandstormPath }`)
        return;
    }
    delete sandstormData.source.wasm;
    fs.writeFileSync(sandstormInterfacePath, JSON.stringify(sandstormData, null, 4));
    console.log(`Extracted metadata for Sandstorm to ${ sandstormInterfacePath }`)
} else {
    console.log(`No metadata found for Sandstorm at ${ sandstormPath }`)
}
const cloudPath = path.join(contractsV1Dir, "cloud.contract.json");
const cloudInterfacePath = path.join(contractInterfacesV1Dir, "cloud.interface.json");
if(fs.existsSync(cloudPath)) {
    const cloudData = JSON.parse(
        fs.readFileSync(cloudPath, { encoding: 'utf-8' })
    );
    if(!cloudData.source) {
        console.log(`No source found for Cloud at ${ cloudPath }`)
        return;
    }
    delete cloudData.source.wasm;
    fs.writeFileSync(cloudInterfacePath, JSON.stringify(cloudData, null, 4));
    console.log(`Extracted metadata for Cloud to ${ cloudInterfacePath }`)
} else {
    console.log(`No metadata found for Cloud at ${ cloudPath }`)
}
const fogPath = path.join(contractsV1Dir, "fog.contract.json");
const fogInterfacePath = path.join(contractInterfacesV1Dir, "fog.interface.json");
if(fs.existsSync(fogPath)) {
    const fogData = JSON.parse(
        fs.readFileSync(fogPath, { encoding: 'utf-8' })
    );
    if(!fogData.source) {
        console.log(`No source found for Fog at ${ fogPath }`)
        return;
    }
    delete fogData.source.wasm;
    fs.writeFileSync(fogInterfacePath, JSON.stringify(fogData, null, 4));
    console.log(`Extracted metadata for Fog to ${ fogInterfacePath }`)
} else {
    console.log(`No metadata found for Fog at ${ fogPath }`)
}
const treePath = path.join(contractsV1Dir, "tree.contract.json");
const treeInterfacePath = path.join(contractInterfacesV1Dir, "tree.interface.json");
if(fs.existsSync(treePath)) {
    const treeData = JSON.parse(
        fs.readFileSync(treePath, { encoding: 'utf-8' })
    );
    if(!treeData.source) {
        console.log(`No source found for Tree at ${ treePath }`)
        return;
    }
    delete treeData.source.wasm;
    fs.writeFileSync(treeInterfacePath, JSON.stringify(treeData, null, 4));
    console.log(`Extracted metadata for Tree to ${ treeInterfacePath }`)
} else {
    console.log(`No metadata found for Tree at ${ treePath }`)
}
const forestPath = path.join(contractsV1Dir, "forest.contract.json");
const forestInterfacePath = path.join(contractInterfacesV1Dir, "forest.interface.json");
if(fs.existsSync(forestPath)) {
    const forestData = JSON.parse(
        fs.readFileSync(forestPath, { encoding: 'utf-8' })
    );
    if(!forestData.source) {
        console.log(`No source found for Forest at ${ forestPath }`)
        return;
    }
    delete forestData.source.wasm;
    fs.writeFileSync(forestInterfacePath, JSON.stringify(forestData, null, 4));
    console.log(`Extracted metadata for Forest to ${ forestInterfacePath }`)
} else {
    console.log(`No metadata found for Forest at ${ forestPath }`)
}
const seedsPath = path.join(contractsV1Dir, "seeds.contract.json");
const seedsInterfacePath = path.join(contractInterfacesV1Dir, "seeds.interface.json");
if(fs.existsSync(seedsPath)) {
    const seedsData = JSON.parse(
        fs.readFileSync(seedsPath, { encoding: 'utf-8' })
    );
    if(!seedsData.source) {
        console.log(`No source found for Seeds at ${ seedsPath }`)
        return;
    }
    delete seedsData.source.wasm;
    fs.writeFileSync(seedsInterfacePath, JSON.stringify(seedsData, null, 4));
    console.log(`Extracted metadata for Seeds to ${ seedsInterfacePath }`)
} else {
    console.log(`No metadata found for Seeds at ${ seedsPath }`)
}
const potteryPath = path.join(contractsV1Dir, "pottery.contract.json");
const potteryInterfacePath = path.join(contractInterfacesV1Dir, "pottery.interface.json");
if(fs.existsSync(potteryPath)) {
    const potteryData = JSON.parse(
        fs.readFileSync(potteryPath, { encoding: 'utf-8' })
    );
    if(!potteryData.source) {
        console.log(`No source found for Pottery at ${ potteryPath }`)
        return;
    }
    delete potteryData.source.wasm;
    fs.writeFileSync(potteryInterfacePath, JSON.stringify(potteryData, null, 4));
    console.log(`Extracted metadata for Pottery to ${ potteryInterfacePath }`)
} else {
    console.log(`No metadata found for Pottery at ${ potteryPath }`)
}
const brickPath = path.join(contractsV1Dir, "brick.contract.json");
const brickInterfacePath = path.join(contractInterfacesV1Dir, "brick.interface.json");
if(fs.existsSync(brickPath)) {
    const brickData = JSON.parse(
        fs.readFileSync(brickPath, { encoding: 'utf-8' })
    );
    if(!brickData.source) {
        console.log(`No source found for Brick at ${ brickPath }`)
        return;
    }
    delete brickData.source.wasm;
    fs.writeFileSync(brickInterfacePath, JSON.stringify(brickData, null, 4));
    console.log(`Extracted metadata for Brick to ${ brickInterfacePath }`)
} else {
    console.log(`No metadata found for Brick at ${ brickPath }`)
}
const quicksandPath = path.join(contractsV1Dir, "quicksand.contract.json");
const quicksandInterfacePath = path.join(contractInterfacesV1Dir, "quicksand.interface.json");
if(fs.existsSync(quicksandPath)) {
    const quicksandData = JSON.parse(
        fs.readFileSync(quicksandPath, { encoding: 'utf-8' })
    );
    if(!quicksandData.source) {
        console.log(`No source found for Quicksand at ${ quicksandPath }`)
        return;
    }
    delete quicksandData.source.wasm;
    fs.writeFileSync(quicksandInterfacePath, JSON.stringify(quicksandData, null, 4));
    console.log(`Extracted metadata for Quicksand to ${ quicksandInterfacePath }`)
} else {
    console.log(`No metadata found for Quicksand at ${ quicksandPath }`)
}
const glassPath = path.join(contractsV1Dir, "glass.contract.json");
const glassInterfacePath = path.join(contractInterfacesV1Dir, "glass.interface.json");
if(fs.existsSync(glassPath)) {
    const glassData = JSON.parse(
        fs.readFileSync(glassPath, { encoding: 'utf-8' })
    );
    if(!glassData.source) {
        console.log(`No source found for Glass at ${ glassPath }`)
        return;
    }
    delete glassData.source.wasm;
    fs.writeFileSync(glassInterfacePath, JSON.stringify(glassData, null, 4));
    console.log(`Extracted metadata for Glass to ${ glassInterfacePath }`)
} else {
    console.log(`No metadata found for Glass at ${ glassPath }`)
}
const dunePath = path.join(contractsV1Dir, "dune.contract.json");
const duneInterfacePath = path.join(contractInterfacesV1Dir, "dune.interface.json");
if(fs.existsSync(dunePath)) {
    const duneData = JSON.parse(
        fs.readFileSync(dunePath, { encoding: 'utf-8' })
    );
    if(!duneData.source) {
        console.log(`No source found for Dune at ${ dunePath }`)
        return;
    }
    delete duneData.source.wasm;
    fs.writeFileSync(duneInterfacePath, JSON.stringify(duneData, null, 4));
    console.log(`Extracted metadata for Dune to ${ duneInterfacePath }`)
} else {
    console.log(`No metadata found for Dune at ${ dunePath }`)
}
const charcoalPath = path.join(contractsV1Dir, "charcoal.contract.json");
const charcoalInterfacePath = path.join(contractInterfacesV1Dir, "charcoal.interface.json");
if(fs.existsSync(charcoalPath)) {
    const charcoalData = JSON.parse(
        fs.readFileSync(charcoalPath, { encoding: 'utf-8' })
    );
    if(!charcoalData.source) {
        console.log(`No source found for Charcoal at ${ charcoalPath }`)
        return;
    }
    delete charcoalData.source.wasm;
    fs.writeFileSync(charcoalInterfacePath, JSON.stringify(charcoalData, null, 4));
    console.log(`Extracted metadata for Charcoal to ${ charcoalInterfacePath }`)
} else {
    console.log(`No metadata found for Charcoal at ${ charcoalPath }`)
}
const leavesPath = path.join(contractsV1Dir, "leaves.contract.json");
const leavesInterfacePath = path.join(contractInterfacesV1Dir, "leaves.interface.json");
if(fs.existsSync(leavesPath)) {
    const leavesData = JSON.parse(
        fs.readFileSync(leavesPath, { encoding: 'utf-8' })
    );
    if(!leavesData.source) {
        console.log(`No source found for Leaves at ${ leavesPath }`)
        return;
    }
    delete leavesData.source.wasm;
    fs.writeFileSync(leavesInterfacePath, JSON.stringify(leavesData, null, 4));
    console.log(`Extracted metadata for Leaves to ${ leavesInterfacePath }`)
} else {
    console.log(`No metadata found for Leaves at ${ leavesPath }`)
}
const wildfirePath = path.join(contractsV1Dir, "wildfire.contract.json");
const wildfireInterfacePath = path.join(contractInterfacesV1Dir, "wildfire.interface.json");
if(fs.existsSync(wildfirePath)) {
    const wildfireData = JSON.parse(
        fs.readFileSync(wildfirePath, { encoding: 'utf-8' })
    );
    if(!wildfireData.source) {
        console.log(`No source found for Wildfire at ${ wildfirePath }`)
        return;
    }
    delete wildfireData.source.wasm;
    fs.writeFileSync(wildfireInterfacePath, JSON.stringify(wildfireData, null, 4));
    console.log(`Extracted metadata for Wildfire to ${ wildfireInterfacePath }`)
} else {
    console.log(`No metadata found for Wildfire at ${ wildfirePath }`)
}
const junglePath = path.join(contractsV1Dir, "jungle.contract.json");
const jungleInterfacePath = path.join(contractInterfacesV1Dir, "jungle.interface.json");
if(fs.existsSync(junglePath)) {
    const jungleData = JSON.parse(
        fs.readFileSync(junglePath, { encoding: 'utf-8' })
    );
    if(!jungleData.source) {
        console.log(`No source found for Jungle at ${ junglePath }`)
        return;
    }
    delete jungleData.source.wasm;
    fs.writeFileSync(jungleInterfacePath, JSON.stringify(jungleData, null, 4));
    console.log(`Extracted metadata for Jungle to ${ jungleInterfacePath }`)
} else {
    console.log(`No metadata found for Jungle at ${ junglePath }`)
}
const frostedGlassPath = path.join(contractsV1Dir, "frosted_glass.contract.json");
const frostedGlassInterfacePath = path.join(contractInterfacesV1Dir, "frosted_glass.interface.json");
if(fs.existsSync(frostedGlassPath)) {
    const frostedGlassData = JSON.parse(
        fs.readFileSync(frostedGlassPath, { encoding: 'utf-8' })
    );
    if(!frostedGlassData.source) {
        console.log(`No source found for FrostedGlass at ${ frostedGlassPath }`)
        return;
    }
    delete frostedGlassData.source.wasm;
    fs.writeFileSync(frostedGlassInterfacePath, JSON.stringify(frostedGlassData, null, 4));
    console.log(`Extracted metadata for FrostedGlass to ${ frostedGlassInterfacePath }`)
} else {
    console.log(`No metadata found for FrostedGlass at ${ frostedGlassPath }`)
}
const crystalPath = path.join(contractsV1Dir, "crystal.contract.json");
const crystalInterfacePath = path.join(contractInterfacesV1Dir, "crystal.interface.json");
if(fs.existsSync(crystalPath)) {
    const crystalData = JSON.parse(
        fs.readFileSync(crystalPath, { encoding: 'utf-8' })
    );
    if(!crystalData.source) {
        console.log(`No source found for Crystal at ${ crystalPath }`)
        return;
    }
    delete crystalData.source.wasm;
    fs.writeFileSync(crystalInterfacePath, JSON.stringify(crystalData, null, 4));
    console.log(`Extracted metadata for Crystal to ${ crystalInterfacePath }`)
} else {
    console.log(`No metadata found for Crystal at ${ crystalPath }`)
}
const magmaPath = path.join(contractsV1Dir, "magma.contract.json");
const magmaInterfacePath = path.join(contractInterfacesV1Dir, "magma.interface.json");
if(fs.existsSync(magmaPath)) {
    const magmaData = JSON.parse(
        fs.readFileSync(magmaPath, { encoding: 'utf-8' })
    );
    if(!magmaData.source) {
        console.log(`No source found for Magma at ${ magmaPath }`)
        return;
    }
    delete magmaData.source.wasm;
    fs.writeFileSync(magmaInterfacePath, JSON.stringify(magmaData, null, 4));
    console.log(`Extracted metadata for Magma to ${ magmaInterfacePath }`)
} else {
    console.log(`No metadata found for Magma at ${ magmaPath }`)
}
const rockPath = path.join(contractsV1Dir, "rock.contract.json");
const rockInterfacePath = path.join(contractInterfacesV1Dir, "rock.interface.json");
if(fs.existsSync(rockPath)) {
    const rockData = JSON.parse(
        fs.readFileSync(rockPath, { encoding: 'utf-8' })
    );
    if(!rockData.source) {
        console.log(`No source found for Rock at ${ rockPath }`)
        return;
    }
    delete rockData.source.wasm;
    fs.writeFileSync(rockInterfacePath, JSON.stringify(rockData, null, 4));
    console.log(`Extracted metadata for Rock to ${ rockInterfacePath }`)
} else {
    console.log(`No metadata found for Rock at ${ rockPath }`)
}
const shardPath = path.join(contractsV1Dir, "shard.contract.json");
const shardInterfacePath = path.join(contractInterfacesV1Dir, "shard.interface.json");
if(fs.existsSync(shardPath)) {
    const shardData = JSON.parse(
        fs.readFileSync(shardPath, { encoding: 'utf-8' })
    );
    if(!shardData.source) {
        console.log(`No source found for Shard at ${ shardPath }`)
        return;
    }
    delete shardData.source.wasm;
    fs.writeFileSync(shardInterfacePath, JSON.stringify(shardData, null, 4));
    console.log(`Extracted metadata for Shard to ${ shardInterfacePath }`)
} else {
    console.log(`No metadata found for Shard at ${ shardPath }`)
}
const pebblePath = path.join(contractsV1Dir, "pebble.contract.json");
const pebbleInterfacePath = path.join(contractInterfacesV1Dir, "pebble.interface.json");
if(fs.existsSync(pebblePath)) {
    const pebbleData = JSON.parse(
        fs.readFileSync(pebblePath, { encoding: 'utf-8' })
    );
    if(!pebbleData.source) {
        console.log(`No source found for Pebble at ${ pebblePath }`)
        return;
    }
    delete pebbleData.source.wasm;
    fs.writeFileSync(pebbleInterfacePath, JSON.stringify(pebbleData, null, 4));
    console.log(`Extracted metadata for Pebble to ${ pebbleInterfacePath }`)
} else {
    console.log(`No metadata found for Pebble at ${ pebblePath }`)
}
const mountainPath = path.join(contractsV1Dir, "mountain.contract.json");
const mountainInterfacePath = path.join(contractInterfacesV1Dir, "mountain.interface.json");
if(fs.existsSync(mountainPath)) {
    const mountainData = JSON.parse(
        fs.readFileSync(mountainPath, { encoding: 'utf-8' })
    );
    if(!mountainData.source) {
        console.log(`No source found for Mountain at ${ mountainPath }`)
        return;
    }
    delete mountainData.source.wasm;
    fs.writeFileSync(mountainInterfacePath, JSON.stringify(mountainData, null, 4));
    console.log(`Extracted metadata for Mountain to ${ mountainInterfacePath }`)
} else {
    console.log(`No metadata found for Mountain at ${ mountainPath }`)
}
const fertilizerPath = path.join(contractsV1Dir, "fertilizer.contract.json");
const fertilizerInterfacePath = path.join(contractInterfacesV1Dir, "fertilizer.interface.json");
if(fs.existsSync(fertilizerPath)) {
    const fertilizerData = JSON.parse(
        fs.readFileSync(fertilizerPath, { encoding: 'utf-8' })
    );
    if(!fertilizerData.source) {
        console.log(`No source found for Fertilizer at ${ fertilizerPath }`)
        return;
    }
    delete fertilizerData.source.wasm;
    fs.writeFileSync(fertilizerInterfacePath, JSON.stringify(fertilizerData, null, 4));
    console.log(`Extracted metadata for Fertilizer to ${ fertilizerInterfacePath }`)
} else {
    console.log(`No metadata found for Fertilizer at ${ fertilizerPath }`)
}
const sootPath = path.join(contractsV1Dir, "soot.contract.json");
const sootInterfacePath = path.join(contractInterfacesV1Dir, "soot.interface.json");
if(fs.existsSync(sootPath)) {
    const sootData = JSON.parse(
        fs.readFileSync(sootPath, { encoding: 'utf-8' })
    );
    if(!sootData.source) {
        console.log(`No source found for Soot at ${ sootPath }`)
        return;
    }
    delete sootData.source.wasm;
    fs.writeFileSync(sootInterfacePath, JSON.stringify(sootData, null, 4));
    console.log(`Extracted metadata for Soot to ${ sootInterfacePath }`)
} else {
    console.log(`No metadata found for Soot at ${ sootPath }`)
}
const lightningPath = path.join(contractsV1Dir, "lightning.contract.json");
const lightningInterfacePath = path.join(contractInterfacesV1Dir, "lightning.interface.json");
if(fs.existsSync(lightningPath)) {
    const lightningData = JSON.parse(
        fs.readFileSync(lightningPath, { encoding: 'utf-8' })
    );
    if(!lightningData.source) {
        console.log(`No source found for Lightning at ${ lightningPath }`)
        return;
    }
    delete lightningData.source.wasm;
    fs.writeFileSync(lightningInterfacePath, JSON.stringify(lightningData, null, 4));
    console.log(`Extracted metadata for Lightning to ${ lightningInterfacePath }`)
} else {
    console.log(`No metadata found for Lightning at ${ lightningPath }`)
}
const mistPath = path.join(contractsV1Dir, "mist.contract.json");
const mistInterfacePath = path.join(contractInterfacesV1Dir, "mist.interface.json");
if(fs.existsSync(mistPath)) {
    const mistData = JSON.parse(
        fs.readFileSync(mistPath, { encoding: 'utf-8' })
    );
    if(!mistData.source) {
        console.log(`No source found for Mist at ${ mistPath }`)
        return;
    }
    delete mistData.source.wasm;
    fs.writeFileSync(mistInterfacePath, JSON.stringify(mistData, null, 4));
    console.log(`Extracted metadata for Mist to ${ mistInterfacePath }`)
} else {
    console.log(`No metadata found for Mist at ${ mistPath }`)
}
const hazePath = path.join(contractsV1Dir, "haze.contract.json");
const hazeInterfacePath = path.join(contractInterfacesV1Dir, "haze.interface.json");
if(fs.existsSync(hazePath)) {
    const hazeData = JSON.parse(
        fs.readFileSync(hazePath, { encoding: 'utf-8' })
    );
    if(!hazeData.source) {
        console.log(`No source found for Haze at ${ hazePath }`)
        return;
    }
    delete hazeData.source.wasm;
    fs.writeFileSync(hazeInterfacePath, JSON.stringify(hazeData, null, 4));
    console.log(`Extracted metadata for Haze to ${ hazeInterfacePath }`)
} else {
    console.log(`No metadata found for Haze at ${ hazePath }`)
}
const floodPath = path.join(contractsV1Dir, "flood.contract.json");
const floodInterfacePath = path.join(contractInterfacesV1Dir, "flood.interface.json");
if(fs.existsSync(floodPath)) {
    const floodData = JSON.parse(
        fs.readFileSync(floodPath, { encoding: 'utf-8' })
    );
    if(!floodData.source) {
        console.log(`No source found for Flood at ${ floodPath }`)
        return;
    }
    delete floodData.source.wasm;
    fs.writeFileSync(floodInterfacePath, JSON.stringify(floodData, null, 4));
    console.log(`Extracted metadata for Flood to ${ floodInterfacePath }`)
} else {
    console.log(`No metadata found for Flood at ${ floodPath }`)
}
const landslidePath = path.join(contractsV1Dir, "landslide.contract.json");
const landslideInterfacePath = path.join(contractInterfacesV1Dir, "landslide.interface.json");
if(fs.existsSync(landslidePath)) {
    const landslideData = JSON.parse(
        fs.readFileSync(landslidePath, { encoding: 'utf-8' })
    );
    if(!landslideData.source) {
        console.log(`No source found for Landslide at ${ landslidePath }`)
        return;
    }
    delete landslideData.source.wasm;
    fs.writeFileSync(landslideInterfacePath, JSON.stringify(landslideData, null, 4));
    console.log(`Extracted metadata for Landslide to ${ landslideInterfacePath }`)
} else {
    console.log(`No metadata found for Landslide at ${ landslidePath }`)
}
const thunderPath = path.join(contractsV1Dir, "thunder.contract.json");
const thunderInterfacePath = path.join(contractInterfacesV1Dir, "thunder.interface.json");
if(fs.existsSync(thunderPath)) {
    const thunderData = JSON.parse(
        fs.readFileSync(thunderPath, { encoding: 'utf-8' })
    );
    if(!thunderData.source) {
        console.log(`No source found for Thunder at ${ thunderPath }`)
        return;
    }
    delete thunderData.source.wasm;
    fs.writeFileSync(thunderInterfacePath, JSON.stringify(thunderData, null, 4));
    console.log(`Extracted metadata for Thunder to ${ thunderInterfacePath }`)
} else {
    console.log(`No metadata found for Thunder at ${ thunderPath }`)
}
const tornadoPath = path.join(contractsV1Dir, "tornado.contract.json");
const tornadoInterfacePath = path.join(contractInterfacesV1Dir, "tornado.interface.json");
if(fs.existsSync(tornadoPath)) {
    const tornadoData = JSON.parse(
        fs.readFileSync(tornadoPath, { encoding: 'utf-8' })
    );
    if(!tornadoData.source) {
        console.log(`No source found for Tornado at ${ tornadoPath }`)
        return;
    }
    delete tornadoData.source.wasm;
    fs.writeFileSync(tornadoInterfacePath, JSON.stringify(tornadoData, null, 4));
    console.log(`Extracted metadata for Tornado to ${ tornadoInterfacePath }`)
} else {
    console.log(`No metadata found for Tornado at ${ tornadoPath }`)
}
const gardenPath = path.join(contractsV1Dir, "garden.contract.json");
const gardenInterfacePath = path.join(contractInterfacesV1Dir, "garden.interface.json");
if(fs.existsSync(gardenPath)) {
    const gardenData = JSON.parse(
        fs.readFileSync(gardenPath, { encoding: 'utf-8' })
    );
    if(!gardenData.source) {
        console.log(`No source found for Garden at ${ gardenPath }`)
        return;
    }
    delete gardenData.source.wasm;
    fs.writeFileSync(gardenInterfacePath, JSON.stringify(gardenData, null, 4));
    console.log(`Extracted metadata for Garden to ${ gardenInterfacePath }`)
} else {
    console.log(`No metadata found for Garden at ${ gardenPath }`)
}
const emberPath = path.join(contractsV1Dir, "ember.contract.json");
const emberInterfacePath = path.join(contractInterfacesV1Dir, "ember.interface.json");
if(fs.existsSync(emberPath)) {
    const emberData = JSON.parse(
        fs.readFileSync(emberPath, { encoding: 'utf-8' })
    );
    if(!emberData.source) {
        console.log(`No source found for Ember at ${ emberPath }`)
        return;
    }
    delete emberData.source.wasm;
    fs.writeFileSync(emberInterfacePath, JSON.stringify(emberData, null, 4));
    console.log(`Extracted metadata for Ember to ${ emberInterfacePath }`)
} else {
    console.log(`No metadata found for Ember at ${ emberPath }`)
}
const kilnPath = path.join(contractsV1Dir, "kiln.contract.json");
const kilnInterfacePath = path.join(contractInterfacesV1Dir, "kiln.interface.json");
if(fs.existsSync(kilnPath)) {
    const kilnData = JSON.parse(
        fs.readFileSync(kilnPath, { encoding: 'utf-8' })
    );
    if(!kilnData.source) {
        console.log(`No source found for Kiln at ${ kilnPath }`)
        return;
    }
    delete kilnData.source.wasm;
    fs.writeFileSync(kilnInterfacePath, JSON.stringify(kilnData, null, 4));
    console.log(`Extracted metadata for Kiln to ${ kilnInterfacePath }`)
} else {
    console.log(`No metadata found for Kiln at ${ kilnPath }`)
}
const pollinationPath = path.join(contractsV1Dir, "pollination.contract.json");
const pollinationInterfacePath = path.join(contractInterfacesV1Dir, "pollination.interface.json");
if(fs.existsSync(pollinationPath)) {
    const pollinationData = JSON.parse(
        fs.readFileSync(pollinationPath, { encoding: 'utf-8' })
    );
    if(!pollinationData.source) {
        console.log(`No source found for Pollination at ${ pollinationPath }`)
        return;
    }
    delete pollinationData.source.wasm;
    fs.writeFileSync(pollinationInterfacePath, JSON.stringify(pollinationData, null, 4));
    console.log(`Extracted metadata for Pollination to ${ pollinationInterfacePath }`)
} else {
    console.log(`No metadata found for Pollination at ${ pollinationPath }`)
}
const sinkholePath = path.join(contractsV1Dir, "sinkhole.contract.json");
const sinkholeInterfacePath = path.join(contractInterfacesV1Dir, "sinkhole.interface.json");
if(fs.existsSync(sinkholePath)) {
    const sinkholeData = JSON.parse(
        fs.readFileSync(sinkholePath, { encoding: 'utf-8' })
    );
    if(!sinkholeData.source) {
        console.log(`No source found for Sinkhole at ${ sinkholePath }`)
        return;
    }
    delete sinkholeData.source.wasm;
    fs.writeFileSync(sinkholeInterfacePath, JSON.stringify(sinkholeData, null, 4));
    console.log(`Extracted metadata for Sinkhole to ${ sinkholeInterfacePath }`)
} else {
    console.log(`No metadata found for Sinkhole at ${ sinkholePath }`)
}
const beachPath = path.join(contractsV1Dir, "beach.contract.json");
const beachInterfacePath = path.join(contractInterfacesV1Dir, "beach.interface.json");
if(fs.existsSync(beachPath)) {
    const beachData = JSON.parse(
        fs.readFileSync(beachPath, { encoding: 'utf-8' })
    );
    if(!beachData.source) {
        console.log(`No source found for Beach at ${ beachPath }`)
        return;
    }
    delete beachData.source.wasm;
    fs.writeFileSync(beachInterfacePath, JSON.stringify(beachData, null, 4));
    console.log(`Extracted metadata for Beach to ${ beachInterfacePath }`)
} else {
    console.log(`No metadata found for Beach at ${ beachPath }`)
}
const wetstonePath = path.join(contractsV1Dir, "wetstone.contract.json");
const wetstoneInterfacePath = path.join(contractInterfacesV1Dir, "wetstone.interface.json");
if(fs.existsSync(wetstonePath)) {
    const wetstoneData = JSON.parse(
        fs.readFileSync(wetstonePath, { encoding: 'utf-8' })
    );
    if(!wetstoneData.source) {
        console.log(`No source found for Wetstone at ${ wetstonePath }`)
        return;
    }
    delete wetstoneData.source.wasm;
    fs.writeFileSync(wetstoneInterfacePath, JSON.stringify(wetstoneData, null, 4));
    console.log(`Extracted metadata for Wetstone to ${ wetstoneInterfacePath }`)
} else {
    console.log(`No metadata found for Wetstone at ${ wetstonePath }`)
}
const erosionPath = path.join(contractsV1Dir, "erosion.contract.json");
const erosionInterfacePath = path.join(contractInterfacesV1Dir, "erosion.interface.json");
if(fs.existsSync(erosionPath)) {
    const erosionData = JSON.parse(
        fs.readFileSync(erosionPath, { encoding: 'utf-8' })
    );
    if(!erosionData.source) {
        console.log(`No source found for Erosion at ${ erosionPath }`)
        return;
    }
    delete erosionData.source.wasm;
    fs.writeFileSync(erosionInterfacePath, JSON.stringify(erosionData, null, 4));
    console.log(`Extracted metadata for Erosion to ${ erosionInterfacePath }`)
} else {
    console.log(`No metadata found for Erosion at ${ erosionPath }`)
}
const basaltPath = path.join(contractsV1Dir, "basalt.contract.json");
const basaltInterfacePath = path.join(contractInterfacesV1Dir, "basalt.interface.json");
if(fs.existsSync(basaltPath)) {
    const basaltData = JSON.parse(
        fs.readFileSync(basaltPath, { encoding: 'utf-8' })
    );
    if(!basaltData.source) {
        console.log(`No source found for Basalt at ${ basaltPath }`)
        return;
    }
    delete basaltData.source.wasm;
    fs.writeFileSync(basaltInterfacePath, JSON.stringify(basaltData, null, 4));
    console.log(`Extracted metadata for Basalt to ${ basaltInterfacePath }`)
} else {
    console.log(`No metadata found for Basalt at ${ basaltPath }`)
}
const magmaChamberPath = path.join(contractsV1Dir, "magma_chamber.contract.json");
const magmaChamberInterfacePath = path.join(contractInterfacesV1Dir, "magma_chamber.interface.json");
if(fs.existsSync(magmaChamberPath)) {
    const magmaChamberData = JSON.parse(
        fs.readFileSync(magmaChamberPath, { encoding: 'utf-8' })
    );
    if(!magmaChamberData.source) {
        console.log(`No source found for MagmaChamber at ${ magmaChamberPath }`)
        return;
    }
    delete magmaChamberData.source.wasm;
    fs.writeFileSync(magmaChamberInterfacePath, JSON.stringify(magmaChamberData, null, 4));
    console.log(`Extracted metadata for MagmaChamber to ${ magmaChamberInterfacePath }`)
} else {
    console.log(`No metadata found for MagmaChamber at ${ magmaChamberPath }`)
}
const breezePath = path.join(contractsV1Dir, "breeze.contract.json");
const breezeInterfacePath = path.join(contractInterfacesV1Dir, "breeze.interface.json");
if(fs.existsSync(breezePath)) {
    const breezeData = JSON.parse(
        fs.readFileSync(breezePath, { encoding: 'utf-8' })
    );
    if(!breezeData.source) {
        console.log(`No source found for Breeze at ${ breezePath }`)
        return;
    }
    delete breezeData.source.wasm;
    fs.writeFileSync(breezeInterfacePath, JSON.stringify(breezeData, null, 4));
    console.log(`Extracted metadata for Breeze to ${ breezeInterfacePath }`)
} else {
    console.log(`No metadata found for Breeze at ${ breezePath }`)
}
const warmBreezePath = path.join(contractsV1Dir, "warm_breeze.contract.json");
const warmBreezeInterfacePath = path.join(contractInterfacesV1Dir, "warm_breeze.interface.json");
if(fs.existsSync(warmBreezePath)) {
    const warmBreezeData = JSON.parse(
        fs.readFileSync(warmBreezePath, { encoding: 'utf-8' })
    );
    if(!warmBreezeData.source) {
        console.log(`No source found for WarmBreeze at ${ warmBreezePath }`)
        return;
    }
    delete warmBreezeData.source.wasm;
    fs.writeFileSync(warmBreezeInterfacePath, JSON.stringify(warmBreezeData, null, 4));
    console.log(`Extracted metadata for WarmBreeze to ${ warmBreezeInterfacePath }`)
} else {
    console.log(`No metadata found for WarmBreeze at ${ warmBreezePath }`)
}
const soilPath = path.join(contractsV1Dir, "soil.contract.json");
const soilInterfacePath = path.join(contractInterfacesV1Dir, "soil.interface.json");
if(fs.existsSync(soilPath)) {
    const soilData = JSON.parse(
        fs.readFileSync(soilPath, { encoding: 'utf-8' })
    );
    if(!soilData.source) {
        console.log(`No source found for Soil at ${ soilPath }`)
        return;
    }
    delete soilData.source.wasm;
    fs.writeFileSync(soilInterfacePath, JSON.stringify(soilData, null, 4));
    console.log(`Extracted metadata for Soil to ${ soilInterfacePath }`)
} else {
    console.log(`No metadata found for Soil at ${ soilPath }`)
}
const canyonPath = path.join(contractsV1Dir, "canyon.contract.json");
const canyonInterfacePath = path.join(contractInterfacesV1Dir, "canyon.interface.json");
if(fs.existsSync(canyonPath)) {
    const canyonData = JSON.parse(
        fs.readFileSync(canyonPath, { encoding: 'utf-8' })
    );
    if(!canyonData.source) {
        console.log(`No source found for Canyon at ${ canyonPath }`)
        return;
    }
    delete canyonData.source.wasm;
    fs.writeFileSync(canyonInterfacePath, JSON.stringify(canyonData, null, 4));
    console.log(`Extracted metadata for Canyon to ${ canyonInterfacePath }`)
} else {
    console.log(`No metadata found for Canyon at ${ canyonPath }`)
}
const windmillPath = path.join(contractsV1Dir, "windmill.contract.json");
const windmillInterfacePath = path.join(contractInterfacesV1Dir, "windmill.interface.json");
if(fs.existsSync(windmillPath)) {
    const windmillData = JSON.parse(
        fs.readFileSync(windmillPath, { encoding: 'utf-8' })
    );
    if(!windmillData.source) {
        console.log(`No source found for Windmill at ${ windmillPath }`)
        return;
    }
    delete windmillData.source.wasm;
    fs.writeFileSync(windmillInterfacePath, JSON.stringify(windmillData, null, 4));
    console.log(`Extracted metadata for Windmill to ${ windmillInterfacePath }`)
} else {
    console.log(`No metadata found for Windmill at ${ windmillPath }`)
}
const adobePath = path.join(contractsV1Dir, "adobe.contract.json");
const adobeInterfacePath = path.join(contractInterfacesV1Dir, "adobe.interface.json");
if(fs.existsSync(adobePath)) {
    const adobeData = JSON.parse(
        fs.readFileSync(adobePath, { encoding: 'utf-8' })
    );
    if(!adobeData.source) {
        console.log(`No source found for Adobe at ${ adobePath }`)
        return;
    }
    delete adobeData.source.wasm;
    fs.writeFileSync(adobeInterfacePath, JSON.stringify(adobeData, null, 4));
    console.log(`Extracted metadata for Adobe to ${ adobeInterfacePath }`)
} else {
    console.log(`No metadata found for Adobe at ${ adobePath }`)
}
const wallPath = path.join(contractsV1Dir, "wall.contract.json");
const wallInterfacePath = path.join(contractInterfacesV1Dir, "wall.interface.json");
if(fs.existsSync(wallPath)) {
    const wallData = JSON.parse(
        fs.readFileSync(wallPath, { encoding: 'utf-8' })
    );
    if(!wallData.source) {
        console.log(`No source found for Wall at ${ wallPath }`)
        return;
    }
    delete wallData.source.wasm;
    fs.writeFileSync(wallInterfacePath, JSON.stringify(wallData, null, 4));
    console.log(`Extracted metadata for Wall to ${ wallInterfacePath }`)
} else {
    console.log(`No metadata found for Wall at ${ wallPath }`)
}
const pumicePath = path.join(contractsV1Dir, "pumice.contract.json");
const pumiceInterfacePath = path.join(contractInterfacesV1Dir, "pumice.interface.json");
if(fs.existsSync(pumicePath)) {
    const pumiceData = JSON.parse(
        fs.readFileSync(pumicePath, { encoding: 'utf-8' })
    );
    if(!pumiceData.source) {
        console.log(`No source found for Pumice at ${ pumicePath }`)
        return;
    }
    delete pumiceData.source.wasm;
    fs.writeFileSync(pumiceInterfacePath, JSON.stringify(pumiceData, null, 4));
    console.log(`Extracted metadata for Pumice to ${ pumiceInterfacePath }`)
} else {
    console.log(`No metadata found for Pumice at ${ pumicePath }`)
}
const barbecuePath = path.join(contractsV1Dir, "barbecue.contract.json");
const barbecueInterfacePath = path.join(contractInterfacesV1Dir, "barbecue.interface.json");
if(fs.existsSync(barbecuePath)) {
    const barbecueData = JSON.parse(
        fs.readFileSync(barbecuePath, { encoding: 'utf-8' })
    );
    if(!barbecueData.source) {
        console.log(`No source found for Barbecue at ${ barbecuePath }`)
        return;
    }
    delete barbecueData.source.wasm;
    fs.writeFileSync(barbecueInterfacePath, JSON.stringify(barbecueData, null, 4));
    console.log(`Extracted metadata for Barbecue to ${ barbecueInterfacePath }`)
} else {
    console.log(`No metadata found for Barbecue at ${ barbecuePath }`)
}
const farmPath = path.join(contractsV1Dir, "farm.contract.json");
const farmInterfacePath = path.join(contractInterfacesV1Dir, "farm.interface.json");
if(fs.existsSync(farmPath)) {
    const farmData = JSON.parse(
        fs.readFileSync(farmPath, { encoding: 'utf-8' })
    );
    if(!farmData.source) {
        console.log(`No source found for Farm at ${ farmPath }`)
        return;
    }
    delete farmData.source.wasm;
    fs.writeFileSync(farmInterfacePath, JSON.stringify(farmData, null, 4));
    console.log(`Extracted metadata for Farm to ${ farmInterfacePath }`)
} else {
    console.log(`No metadata found for Farm at ${ farmPath }`)
}
const shardsPath = path.join(contractsV1Dir, "shards.contract.json");
const shardsInterfacePath = path.join(contractInterfacesV1Dir, "shards.interface.json");
if(fs.existsSync(shardsPath)) {
    const shardsData = JSON.parse(
        fs.readFileSync(shardsPath, { encoding: 'utf-8' })
    );
    if(!shardsData.source) {
        console.log(`No source found for Shards at ${ shardsPath }`)
        return;
    }
    delete shardsData.source.wasm;
    fs.writeFileSync(shardsInterfacePath, JSON.stringify(shardsData, null, 4));
    console.log(`Extracted metadata for Shards to ${ shardsInterfacePath }`)
} else {
    console.log(`No metadata found for Shards at ${ shardsPath }`)
}
const moltenGlassPath = path.join(contractsV1Dir, "molten_glass.contract.json");
const moltenGlassInterfacePath = path.join(contractInterfacesV1Dir, "molten_glass.interface.json");
if(fs.existsSync(moltenGlassPath)) {
    const moltenGlassData = JSON.parse(
        fs.readFileSync(moltenGlassPath, { encoding: 'utf-8' })
    );
    if(!moltenGlassData.source) {
        console.log(`No source found for MoltenGlass at ${ moltenGlassPath }`)
        return;
    }
    delete moltenGlassData.source.wasm;
    fs.writeFileSync(moltenGlassInterfacePath, JSON.stringify(moltenGlassData, null, 4));
    console.log(`Extracted metadata for MoltenGlass to ${ moltenGlassInterfacePath }`)
} else {
    console.log(`No metadata found for MoltenGlass at ${ moltenGlassPath }`)
}
const prismPath = path.join(contractsV1Dir, "prism.contract.json");
const prismInterfacePath = path.join(contractInterfacesV1Dir, "prism.interface.json");
if(fs.existsSync(prismPath)) {
    const prismData = JSON.parse(
        fs.readFileSync(prismPath, { encoding: 'utf-8' })
    );
    if(!prismData.source) {
        console.log(`No source found for Prism at ${ prismPath }`)
        return;
    }
    delete prismData.source.wasm;
    fs.writeFileSync(prismInterfacePath, JSON.stringify(prismData, null, 4));
    console.log(`Extracted metadata for Prism to ${ prismInterfacePath }`)
} else {
    console.log(`No metadata found for Prism at ${ prismPath }`)
}
const sparklePath = path.join(contractsV1Dir, "sparkle.contract.json");
const sparkleInterfacePath = path.join(contractInterfacesV1Dir, "sparkle.interface.json");
if(fs.existsSync(sparklePath)) {
    const sparkleData = JSON.parse(
        fs.readFileSync(sparklePath, { encoding: 'utf-8' })
    );
    if(!sparkleData.source) {
        console.log(`No source found for Sparkle at ${ sparklePath }`)
        return;
    }
    delete sparkleData.source.wasm;
    fs.writeFileSync(sparkleInterfacePath, JSON.stringify(sparkleData, null, 4));
    console.log(`Extracted metadata for Sparkle to ${ sparkleInterfacePath }`)
} else {
    console.log(`No metadata found for Sparkle at ${ sparklePath }`)
}
const desertPath = path.join(contractsV1Dir, "desert.contract.json");
const desertInterfacePath = path.join(contractInterfacesV1Dir, "desert.interface.json");
if(fs.existsSync(desertPath)) {
    const desertData = JSON.parse(
        fs.readFileSync(desertPath, { encoding: 'utf-8' })
    );
    if(!desertData.source) {
        console.log(`No source found for Desert at ${ desertPath }`)
        return;
    }
    delete desertData.source.wasm;
    fs.writeFileSync(desertInterfacePath, JSON.stringify(desertData, null, 4));
    console.log(`Extracted metadata for Desert to ${ desertInterfacePath }`)
} else {
    console.log(`No metadata found for Desert at ${ desertPath }`)
}
const oasisPath = path.join(contractsV1Dir, "oasis.contract.json");
const oasisInterfacePath = path.join(contractInterfacesV1Dir, "oasis.interface.json");
if(fs.existsSync(oasisPath)) {
    const oasisData = JSON.parse(
        fs.readFileSync(oasisPath, { encoding: 'utf-8' })
    );
    if(!oasisData.source) {
        console.log(`No source found for Oasis at ${ oasisPath }`)
        return;
    }
    delete oasisData.source.wasm;
    fs.writeFileSync(oasisInterfacePath, JSON.stringify(oasisData, null, 4));
    console.log(`Extracted metadata for Oasis to ${ oasisInterfacePath }`)
} else {
    console.log(`No metadata found for Oasis at ${ oasisPath }`)
}
const miragePath = path.join(contractsV1Dir, "mirage.contract.json");
const mirageInterfacePath = path.join(contractInterfacesV1Dir, "mirage.interface.json");
if(fs.existsSync(miragePath)) {
    const mirageData = JSON.parse(
        fs.readFileSync(miragePath, { encoding: 'utf-8' })
    );
    if(!mirageData.source) {
        console.log(`No source found for Mirage at ${ miragePath }`)
        return;
    }
    delete mirageData.source.wasm;
    fs.writeFileSync(mirageInterfacePath, JSON.stringify(mirageData, null, 4));
    console.log(`Extracted metadata for Mirage to ${ mirageInterfacePath }`)
} else {
    console.log(`No metadata found for Mirage at ${ miragePath }`)
}
const sandDunePath = path.join(contractsV1Dir, "sand_dune.contract.json");
const sandDuneInterfacePath = path.join(contractInterfacesV1Dir, "sand_dune.interface.json");
if(fs.existsSync(sandDunePath)) {
    const sandDuneData = JSON.parse(
        fs.readFileSync(sandDunePath, { encoding: 'utf-8' })
    );
    if(!sandDuneData.source) {
        console.log(`No source found for SandDune at ${ sandDunePath }`)
        return;
    }
    delete sandDuneData.source.wasm;
    fs.writeFileSync(sandDuneInterfacePath, JSON.stringify(sandDuneData, null, 4));
    console.log(`Extracted metadata for SandDune to ${ sandDuneInterfacePath }`)
} else {
    console.log(`No metadata found for SandDune at ${ sandDunePath }`)
}
const damPath = path.join(contractsV1Dir, "dam.contract.json");
const damInterfacePath = path.join(contractInterfacesV1Dir, "dam.interface.json");
if(fs.existsSync(damPath)) {
    const damData = JSON.parse(
        fs.readFileSync(damPath, { encoding: 'utf-8' })
    );
    if(!damData.source) {
        console.log(`No source found for Dam at ${ damPath }`)
        return;
    }
    delete damData.source.wasm;
    fs.writeFileSync(damInterfacePath, JSON.stringify(damData, null, 4));
    console.log(`Extracted metadata for Dam to ${ damInterfacePath }`)
} else {
    console.log(`No metadata found for Dam at ${ damPath }`)
}
const firewallPath = path.join(contractsV1Dir, "firewall.contract.json");
const firewallInterfacePath = path.join(contractInterfacesV1Dir, "firewall.interface.json");
if(fs.existsSync(firewallPath)) {
    const firewallData = JSON.parse(
        fs.readFileSync(firewallPath, { encoding: 'utf-8' })
    );
    if(!firewallData.source) {
        console.log(`No source found for Firewall at ${ firewallPath }`)
        return;
    }
    delete firewallData.source.wasm;
    fs.writeFileSync(firewallInterfacePath, JSON.stringify(firewallData, null, 4));
    console.log(`Extracted metadata for Firewall to ${ firewallInterfacePath }`)
} else {
    console.log(`No metadata found for Firewall at ${ firewallPath }`)
}
const barricadePath = path.join(contractsV1Dir, "barricade.contract.json");
const barricadeInterfacePath = path.join(contractInterfacesV1Dir, "barricade.interface.json");
if(fs.existsSync(barricadePath)) {
    const barricadeData = JSON.parse(
        fs.readFileSync(barricadePath, { encoding: 'utf-8' })
    );
    if(!barricadeData.source) {
        console.log(`No source found for Barricade at ${ barricadePath }`)
        return;
    }
    delete barricadeData.source.wasm;
    fs.writeFileSync(barricadeInterfacePath, JSON.stringify(barricadeData, null, 4));
    console.log(`Extracted metadata for Barricade to ${ barricadeInterfacePath }`)
} else {
    console.log(`No metadata found for Barricade at ${ barricadePath }`)
}
const plateauPath = path.join(contractsV1Dir, "plateau.contract.json");
const plateauInterfacePath = path.join(contractInterfacesV1Dir, "plateau.interface.json");
if(fs.existsSync(plateauPath)) {
    const plateauData = JSON.parse(
        fs.readFileSync(plateauPath, { encoding: 'utf-8' })
    );
    if(!plateauData.source) {
        console.log(`No source found for Plateau at ${ plateauPath }`)
        return;
    }
    delete plateauData.source.wasm;
    fs.writeFileSync(plateauInterfacePath, JSON.stringify(plateauData, null, 4));
    console.log(`Extracted metadata for Plateau to ${ plateauInterfacePath }`)
} else {
    console.log(`No metadata found for Plateau at ${ plateauPath }`)
}
const pondPath = path.join(contractsV1Dir, "pond.contract.json");
const pondInterfacePath = path.join(contractInterfacesV1Dir, "pond.interface.json");
if(fs.existsSync(pondPath)) {
    const pondData = JSON.parse(
        fs.readFileSync(pondPath, { encoding: 'utf-8' })
    );
    if(!pondData.source) {
        console.log(`No source found for Pond at ${ pondPath }`)
        return;
    }
    delete pondData.source.wasm;
    fs.writeFileSync(pondInterfacePath, JSON.stringify(pondData, null, 4));
    console.log(`Extracted metadata for Pond to ${ pondInterfacePath }`)
} else {
    console.log(`No metadata found for Pond at ${ pondPath }`)
}
const aromasPath = path.join(contractsV1Dir, "aromas.contract.json");
const aromasInterfacePath = path.join(contractInterfacesV1Dir, "aromas.interface.json");
if(fs.existsSync(aromasPath)) {
    const aromasData = JSON.parse(
        fs.readFileSync(aromasPath, { encoding: 'utf-8' })
    );
    if(!aromasData.source) {
        console.log(`No source found for Aromas at ${ aromasPath }`)
        return;
    }
    delete aromasData.source.wasm;
    fs.writeFileSync(aromasInterfacePath, JSON.stringify(aromasData, null, 4));
    console.log(`Extracted metadata for Aromas to ${ aromasInterfacePath }`)
} else {
    console.log(`No metadata found for Aromas at ${ aromasPath }`)
}
const flowerPath = path.join(contractsV1Dir, "flower.contract.json");
const flowerInterfacePath = path.join(contractInterfacesV1Dir, "flower.interface.json");
if(fs.existsSync(flowerPath)) {
    const flowerData = JSON.parse(
        fs.readFileSync(flowerPath, { encoding: 'utf-8' })
    );
    if(!flowerData.source) {
        console.log(`No source found for Flower at ${ flowerPath }`)
        return;
    }
    delete flowerData.source.wasm;
    fs.writeFileSync(flowerInterfacePath, JSON.stringify(flowerData, null, 4));
    console.log(`Extracted metadata for Flower to ${ flowerInterfacePath }`)
} else {
    console.log(`No metadata found for Flower at ${ flowerPath }`)
}
const sporePath = path.join(contractsV1Dir, "spore.contract.json");
const sporeInterfacePath = path.join(contractInterfacesV1Dir, "spore.interface.json");
if(fs.existsSync(sporePath)) {
    const sporeData = JSON.parse(
        fs.readFileSync(sporePath, { encoding: 'utf-8' })
    );
    if(!sporeData.source) {
        console.log(`No source found for Spore at ${ sporePath }`)
        return;
    }
    delete sporeData.source.wasm;
    fs.writeFileSync(sporeInterfacePath, JSON.stringify(sporeData, null, 4));
    console.log(`Extracted metadata for Spore to ${ sporeInterfacePath }`)
} else {
    console.log(`No metadata found for Spore at ${ sporePath }`)
}
const spreadPath = path.join(contractsV1Dir, "spread.contract.json");
const spreadInterfacePath = path.join(contractInterfacesV1Dir, "spread.interface.json");
if(fs.existsSync(spreadPath)) {
    const spreadData = JSON.parse(
        fs.readFileSync(spreadPath, { encoding: 'utf-8' })
    );
    if(!spreadData.source) {
        console.log(`No source found for Spread at ${ spreadPath }`)
        return;
    }
    delete spreadData.source.wasm;
    fs.writeFileSync(spreadInterfacePath, JSON.stringify(spreadData, null, 4));
    console.log(`Extracted metadata for Spread to ${ spreadInterfacePath }`)
} else {
    console.log(`No metadata found for Spread at ${ spreadPath }`)
}
const fertileLandPath = path.join(contractsV1Dir, "fertile_land.contract.json");
const fertileLandInterfacePath = path.join(contractInterfacesV1Dir, "fertile_land.interface.json");
if(fs.existsSync(fertileLandPath)) {
    const fertileLandData = JSON.parse(
        fs.readFileSync(fertileLandPath, { encoding: 'utf-8' })
    );
    if(!fertileLandData.source) {
        console.log(`No source found for FertileLand at ${ fertileLandPath }`)
        return;
    }
    delete fertileLandData.source.wasm;
    fs.writeFileSync(fertileLandInterfacePath, JSON.stringify(fertileLandData, null, 4));
    console.log(`Extracted metadata for FertileLand to ${ fertileLandInterfacePath }`)
} else {
    console.log(`No metadata found for FertileLand at ${ fertileLandPath }`)
}
const wetlandPath = path.join(contractsV1Dir, "wetland.contract.json");
const wetlandInterfacePath = path.join(contractInterfacesV1Dir, "wetland.interface.json");
if(fs.existsSync(wetlandPath)) {
    const wetlandData = JSON.parse(
        fs.readFileSync(wetlandPath, { encoding: 'utf-8' })
    );
    if(!wetlandData.source) {
        console.log(`No source found for Wetland at ${ wetlandPath }`)
        return;
    }
    delete wetlandData.source.wasm;
    fs.writeFileSync(wetlandInterfacePath, JSON.stringify(wetlandData, null, 4));
    console.log(`Extracted metadata for Wetland to ${ wetlandInterfacePath }`)
} else {
    console.log(`No metadata found for Wetland at ${ wetlandPath }`)
}
const peatPath = path.join(contractsV1Dir, "peat.contract.json");
const peatInterfacePath = path.join(contractInterfacesV1Dir, "peat.interface.json");
if(fs.existsSync(peatPath)) {
    const peatData = JSON.parse(
        fs.readFileSync(peatPath, { encoding: 'utf-8' })
    );
    if(!peatData.source) {
        console.log(`No source found for Peat at ${ peatPath }`)
        return;
    }
    delete peatData.source.wasm;
    fs.writeFileSync(peatInterfacePath, JSON.stringify(peatData, null, 4));
    console.log(`Extracted metadata for Peat to ${ peatInterfacePath }`)
} else {
    console.log(`No metadata found for Peat at ${ peatPath }`)
}
const reedsPath = path.join(contractsV1Dir, "reeds.contract.json");
const reedsInterfacePath = path.join(contractInterfacesV1Dir, "reeds.interface.json");
if(fs.existsSync(reedsPath)) {
    const reedsData = JSON.parse(
        fs.readFileSync(reedsPath, { encoding: 'utf-8' })
    );
    if(!reedsData.source) {
        console.log(`No source found for Reeds at ${ reedsPath }`)
        return;
    }
    delete reedsData.source.wasm;
    fs.writeFileSync(reedsInterfacePath, JSON.stringify(reedsData, null, 4));
    console.log(`Extracted metadata for Reeds to ${ reedsInterfacePath }`)
} else {
    console.log(`No metadata found for Reeds at ${ reedsPath }`)
}
const valleyPath = path.join(contractsV1Dir, "valley.contract.json");
const valleyInterfacePath = path.join(contractInterfacesV1Dir, "valley.interface.json");
if(fs.existsSync(valleyPath)) {
    const valleyData = JSON.parse(
        fs.readFileSync(valleyPath, { encoding: 'utf-8' })
    );
    if(!valleyData.source) {
        console.log(`No source found for Valley at ${ valleyPath }`)
        return;
    }
    delete valleyData.source.wasm;
    fs.writeFileSync(valleyInterfacePath, JSON.stringify(valleyData, null, 4));
    console.log(`Extracted metadata for Valley to ${ valleyInterfacePath }`)
} else {
    console.log(`No metadata found for Valley at ${ valleyPath }`)
}
const riverPath = path.join(contractsV1Dir, "river.contract.json");
const riverInterfacePath = path.join(contractInterfacesV1Dir, "river.interface.json");
if(fs.existsSync(riverPath)) {
    const riverData = JSON.parse(
        fs.readFileSync(riverPath, { encoding: 'utf-8' })
    );
    if(!riverData.source) {
        console.log(`No source found for River at ${ riverPath }`)
        return;
    }
    delete riverData.source.wasm;
    fs.writeFileSync(riverInterfacePath, JSON.stringify(riverData, null, 4));
    console.log(`Extracted metadata for River to ${ riverInterfacePath }`)
} else {
    console.log(`No metadata found for River at ${ riverPath }`)
}
const scorchedEarthPath = path.join(contractsV1Dir, "scorched_earth.contract.json");
const scorchedEarthInterfacePath = path.join(contractInterfacesV1Dir, "scorched_earth.interface.json");
if(fs.existsSync(scorchedEarthPath)) {
    const scorchedEarthData = JSON.parse(
        fs.readFileSync(scorchedEarthPath, { encoding: 'utf-8' })
    );
    if(!scorchedEarthData.source) {
        console.log(`No source found for ScorchedEarth at ${ scorchedEarthPath }`)
        return;
    }
    delete scorchedEarthData.source.wasm;
    fs.writeFileSync(scorchedEarthInterfacePath, JSON.stringify(scorchedEarthData, null, 4));
    console.log(`Extracted metadata for ScorchedEarth to ${ scorchedEarthInterfacePath }`)
} else {
    console.log(`No metadata found for ScorchedEarth at ${ scorchedEarthPath }`)
}
const deltaPath = path.join(contractsV1Dir, "delta.contract.json");
const deltaInterfacePath = path.join(contractInterfacesV1Dir, "delta.interface.json");
if(fs.existsSync(deltaPath)) {
    const deltaData = JSON.parse(
        fs.readFileSync(deltaPath, { encoding: 'utf-8' })
    );
    if(!deltaData.source) {
        console.log(`No source found for Delta at ${ deltaPath }`)
        return;
    }
    delete deltaData.source.wasm;
    fs.writeFileSync(deltaInterfacePath, JSON.stringify(deltaData, null, 4));
    console.log(`Extracted metadata for Delta to ${ deltaInterfacePath }`)
} else {
    console.log(`No metadata found for Delta at ${ deltaPath }`)
}
const estuaryPath = path.join(contractsV1Dir, "estuary.contract.json");
const estuaryInterfacePath = path.join(contractInterfacesV1Dir, "estuary.interface.json");
if(fs.existsSync(estuaryPath)) {
    const estuaryData = JSON.parse(
        fs.readFileSync(estuaryPath, { encoding: 'utf-8' })
    );
    if(!estuaryData.source) {
        console.log(`No source found for Estuary at ${ estuaryPath }`)
        return;
    }
    delete estuaryData.source.wasm;
    fs.writeFileSync(estuaryInterfacePath, JSON.stringify(estuaryData, null, 4));
    console.log(`Extracted metadata for Estuary to ${ estuaryInterfacePath }`)
} else {
    console.log(`No metadata found for Estuary at ${ estuaryPath }`)
}
const fireSwampPath = path.join(contractsV1Dir, "fire_swamp.contract.json");
const fireSwampInterfacePath = path.join(contractInterfacesV1Dir, "fire_swamp.interface.json");
if(fs.existsSync(fireSwampPath)) {
    const fireSwampData = JSON.parse(
        fs.readFileSync(fireSwampPath, { encoding: 'utf-8' })
    );
    if(!fireSwampData.source) {
        console.log(`No source found for FireSwamp at ${ fireSwampPath }`)
        return;
    }
    delete fireSwampData.source.wasm;
    fs.writeFileSync(fireSwampInterfacePath, JSON.stringify(fireSwampData, null, 4));
    console.log(`Extracted metadata for FireSwamp to ${ fireSwampInterfacePath }`)
} else {
    console.log(`No metadata found for FireSwamp at ${ fireSwampPath }`)
}
const riverbankPath = path.join(contractsV1Dir, "riverbank.contract.json");
const riverbankInterfacePath = path.join(contractInterfacesV1Dir, "riverbank.interface.json");
if(fs.existsSync(riverbankPath)) {
    const riverbankData = JSON.parse(
        fs.readFileSync(riverbankPath, { encoding: 'utf-8' })
    );
    if(!riverbankData.source) {
        console.log(`No source found for Riverbank at ${ riverbankPath }`)
        return;
    }
    delete riverbankData.source.wasm;
    fs.writeFileSync(riverbankInterfacePath, JSON.stringify(riverbankData, null, 4));
    console.log(`Extracted metadata for Riverbank to ${ riverbankInterfacePath }`)
} else {
    console.log(`No metadata found for Riverbank at ${ riverbankPath }`)
}
const ravinePath = path.join(contractsV1Dir, "ravine.contract.json");
const ravineInterfacePath = path.join(contractInterfacesV1Dir, "ravine.interface.json");
if(fs.existsSync(ravinePath)) {
    const ravineData = JSON.parse(
        fs.readFileSync(ravinePath, { encoding: 'utf-8' })
    );
    if(!ravineData.source) {
        console.log(`No source found for Ravine at ${ ravinePath }`)
        return;
    }
    delete ravineData.source.wasm;
    fs.writeFileSync(ravineInterfacePath, JSON.stringify(ravineData, null, 4));
    console.log(`Extracted metadata for Ravine to ${ ravineInterfacePath }`)
} else {
    console.log(`No metadata found for Ravine at ${ ravinePath }`)
}
const gorgePath = path.join(contractsV1Dir, "gorge.contract.json");
const gorgeInterfacePath = path.join(contractInterfacesV1Dir, "gorge.interface.json");
if(fs.existsSync(gorgePath)) {
    const gorgeData = JSON.parse(
        fs.readFileSync(gorgePath, { encoding: 'utf-8' })
    );
    if(!gorgeData.source) {
        console.log(`No source found for Gorge at ${ gorgePath }`)
        return;
    }
    delete gorgeData.source.wasm;
    fs.writeFileSync(gorgeInterfacePath, JSON.stringify(gorgeData, null, 4));
    console.log(`Extracted metadata for Gorge to ${ gorgeInterfacePath }`)
} else {
    console.log(`No metadata found for Gorge at ${ gorgePath }`)
}
const charredRavinePath = path.join(contractsV1Dir, "charred_ravine.contract.json");
const charredRavineInterfacePath = path.join(contractInterfacesV1Dir, "charred_ravine.interface.json");
if(fs.existsSync(charredRavinePath)) {
    const charredRavineData = JSON.parse(
        fs.readFileSync(charredRavinePath, { encoding: 'utf-8' })
    );
    if(!charredRavineData.source) {
        console.log(`No source found for CharredRavine at ${ charredRavinePath }`)
        return;
    }
    delete charredRavineData.source.wasm;
    fs.writeFileSync(charredRavineInterfacePath, JSON.stringify(charredRavineData, null, 4));
    console.log(`Extracted metadata for CharredRavine to ${ charredRavineInterfacePath }`)
} else {
    console.log(`No metadata found for CharredRavine at ${ charredRavinePath }`)
}
const echoPath = path.join(contractsV1Dir, "echo.contract.json");
const echoInterfacePath = path.join(contractInterfacesV1Dir, "echo.interface.json");
if(fs.existsSync(echoPath)) {
    const echoData = JSON.parse(
        fs.readFileSync(echoPath, { encoding: 'utf-8' })
    );
    if(!echoData.source) {
        console.log(`No source found for Echo at ${ echoPath }`)
        return;
    }
    delete echoData.source.wasm;
    fs.writeFileSync(echoInterfacePath, JSON.stringify(echoData, null, 4));
    console.log(`Extracted metadata for Echo to ${ echoInterfacePath }`)
} else {
    console.log(`No metadata found for Echo at ${ echoPath }`)
}
const cavePath = path.join(contractsV1Dir, "cave.contract.json");
const caveInterfacePath = path.join(contractInterfacesV1Dir, "cave.interface.json");
if(fs.existsSync(cavePath)) {
    const caveData = JSON.parse(
        fs.readFileSync(cavePath, { encoding: 'utf-8' })
    );
    if(!caveData.source) {
        console.log(`No source found for Cave at ${ cavePath }`)
        return;
    }
    delete caveData.source.wasm;
    fs.writeFileSync(caveInterfacePath, JSON.stringify(caveData, null, 4));
    console.log(`Extracted metadata for Cave to ${ caveInterfacePath }`)
} else {
    console.log(`No metadata found for Cave at ${ cavePath }`)
}
const undergroundLakePath = path.join(contractsV1Dir, "underground_lake.contract.json");
const undergroundLakeInterfacePath = path.join(contractInterfacesV1Dir, "underground_lake.interface.json");
if(fs.existsSync(undergroundLakePath)) {
    const undergroundLakeData = JSON.parse(
        fs.readFileSync(undergroundLakePath, { encoding: 'utf-8' })
    );
    if(!undergroundLakeData.source) {
        console.log(`No source found for UndergroundLake at ${ undergroundLakePath }`)
        return;
    }
    delete undergroundLakeData.source.wasm;
    fs.writeFileSync(undergroundLakeInterfacePath, JSON.stringify(undergroundLakeData, null, 4));
    console.log(`Extracted metadata for UndergroundLake to ${ undergroundLakeInterfacePath }`)
} else {
    console.log(`No metadata found for UndergroundLake at ${ undergroundLakePath }`)
}
const lavaCavePath = path.join(contractsV1Dir, "lava_cave.contract.json");
const lavaCaveInterfacePath = path.join(contractInterfacesV1Dir, "lava_cave.interface.json");
if(fs.existsSync(lavaCavePath)) {
    const lavaCaveData = JSON.parse(
        fs.readFileSync(lavaCavePath, { encoding: 'utf-8' })
    );
    if(!lavaCaveData.source) {
        console.log(`No source found for LavaCave at ${ lavaCavePath }`)
        return;
    }
    delete lavaCaveData.source.wasm;
    fs.writeFileSync(lavaCaveInterfacePath, JSON.stringify(lavaCaveData, null, 4));
    console.log(`Extracted metadata for LavaCave to ${ lavaCaveInterfacePath }`)
} else {
    console.log(`No metadata found for LavaCave at ${ lavaCavePath }`)
}
const whisperingCavePath = path.join(contractsV1Dir, "whispering_cave.contract.json");
const whisperingCaveInterfacePath = path.join(contractInterfacesV1Dir, "whispering_cave.interface.json");
if(fs.existsSync(whisperingCavePath)) {
    const whisperingCaveData = JSON.parse(
        fs.readFileSync(whisperingCavePath, { encoding: 'utf-8' })
    );
    if(!whisperingCaveData.source) {
        console.log(`No source found for WhisperingCave at ${ whisperingCavePath }`)
        return;
    }
    delete whisperingCaveData.source.wasm;
    fs.writeFileSync(whisperingCaveInterfacePath, JSON.stringify(whisperingCaveData, null, 4));
    console.log(`Extracted metadata for WhisperingCave to ${ whisperingCaveInterfacePath }`)
} else {
    console.log(`No metadata found for WhisperingCave at ${ whisperingCavePath }`)
}
const subterraneanPoolPath = path.join(contractsV1Dir, "subterranean_pool.contract.json");
const subterraneanPoolInterfacePath = path.join(contractInterfacesV1Dir, "subterranean_pool.interface.json");
if(fs.existsSync(subterraneanPoolPath)) {
    const subterraneanPoolData = JSON.parse(
        fs.readFileSync(subterraneanPoolPath, { encoding: 'utf-8' })
    );
    if(!subterraneanPoolData.source) {
        console.log(`No source found for SubterraneanPool at ${ subterraneanPoolPath }`)
        return;
    }
    delete subterraneanPoolData.source.wasm;
    fs.writeFileSync(subterraneanPoolInterfacePath, JSON.stringify(subterraneanPoolData, null, 4));
    console.log(`Extracted metadata for SubterraneanPool to ${ subterraneanPoolInterfacePath }`)
} else {
    console.log(`No metadata found for SubterraneanPool at ${ subterraneanPoolPath }`)
}
const springPath = path.join(contractsV1Dir, "spring.contract.json");
const springInterfacePath = path.join(contractInterfacesV1Dir, "spring.interface.json");
if(fs.existsSync(springPath)) {
    const springData = JSON.parse(
        fs.readFileSync(springPath, { encoding: 'utf-8' })
    );
    if(!springData.source) {
        console.log(`No source found for Spring at ${ springPath }`)
        return;
    }
    delete springData.source.wasm;
    fs.writeFileSync(springInterfacePath, JSON.stringify(springData, null, 4));
    console.log(`Extracted metadata for Spring to ${ springInterfacePath }`)
} else {
    console.log(`No metadata found for Spring at ${ springPath }`)
}
const hotSpringPath = path.join(contractsV1Dir, "hot_spring.contract.json");
const hotSpringInterfacePath = path.join(contractInterfacesV1Dir, "hot_spring.interface.json");
if(fs.existsSync(hotSpringPath)) {
    const hotSpringData = JSON.parse(
        fs.readFileSync(hotSpringPath, { encoding: 'utf-8' })
    );
    if(!hotSpringData.source) {
        console.log(`No source found for HotSpring at ${ hotSpringPath }`)
        return;
    }
    delete hotSpringData.source.wasm;
    fs.writeFileSync(hotSpringInterfacePath, JSON.stringify(hotSpringData, null, 4));
    console.log(`Extracted metadata for HotSpring to ${ hotSpringInterfacePath }`)
} else {
    console.log(`No metadata found for HotSpring at ${ hotSpringPath }`)
}
const grottoPath = path.join(contractsV1Dir, "grotto.contract.json");
const grottoInterfacePath = path.join(contractInterfacesV1Dir, "grotto.interface.json");
if(fs.existsSync(grottoPath)) {
    const grottoData = JSON.parse(
        fs.readFileSync(grottoPath, { encoding: 'utf-8' })
    );
    if(!grottoData.source) {
        console.log(`No source found for Grotto at ${ grottoPath }`)
        return;
    }
    delete grottoData.source.wasm;
    fs.writeFileSync(grottoInterfacePath, JSON.stringify(grottoData, null, 4));
    console.log(`Extracted metadata for Grotto to ${ grottoInterfacePath }`)
} else {
    console.log(`No metadata found for Grotto at ${ grottoPath }`)
}
const fountainPath = path.join(contractsV1Dir, "fountain.contract.json");
const fountainInterfacePath = path.join(contractInterfacesV1Dir, "fountain.interface.json");
if(fs.existsSync(fountainPath)) {
    const fountainData = JSON.parse(
        fs.readFileSync(fountainPath, { encoding: 'utf-8' })
    );
    if(!fountainData.source) {
        console.log(`No source found for Fountain at ${ fountainPath }`)
        return;
    }
    delete fountainData.source.wasm;
    fs.writeFileSync(fountainInterfacePath, JSON.stringify(fountainData, null, 4));
    console.log(`Extracted metadata for Fountain to ${ fountainInterfacePath }`)
} else {
    console.log(`No metadata found for Fountain at ${ fountainPath }`)
}
const steamVentPath = path.join(contractsV1Dir, "steam_vent.contract.json");
const steamVentInterfacePath = path.join(contractInterfacesV1Dir, "steam_vent.interface.json");
if(fs.existsSync(steamVentPath)) {
    const steamVentData = JSON.parse(
        fs.readFileSync(steamVentPath, { encoding: 'utf-8' })
    );
    if(!steamVentData.source) {
        console.log(`No source found for SteamVent at ${ steamVentPath }`)
        return;
    }
    delete steamVentData.source.wasm;
    fs.writeFileSync(steamVentInterfacePath, JSON.stringify(steamVentData, null, 4));
    console.log(`Extracted metadata for SteamVent to ${ steamVentInterfacePath }`)
} else {
    console.log(`No metadata found for SteamVent at ${ steamVentPath }`)
}
const coolBreezePath = path.join(contractsV1Dir, "cool_breeze.contract.json");
const coolBreezeInterfacePath = path.join(contractInterfacesV1Dir, "cool_breeze.interface.json");
if(fs.existsSync(coolBreezePath)) {
    const coolBreezeData = JSON.parse(
        fs.readFileSync(coolBreezePath, { encoding: 'utf-8' })
    );
    if(!coolBreezeData.source) {
        console.log(`No source found for CoolBreeze at ${ coolBreezePath }`)
        return;
    }
    delete coolBreezeData.source.wasm;
    fs.writeFileSync(coolBreezeInterfacePath, JSON.stringify(coolBreezeData, null, 4));
    console.log(`Extracted metadata for CoolBreeze to ${ coolBreezeInterfacePath }`)
} else {
    console.log(`No metadata found for CoolBreeze at ${ coolBreezePath }`)
}
const monumentPath = path.join(contractsV1Dir, "monument.contract.json");
const monumentInterfacePath = path.join(contractInterfacesV1Dir, "monument.interface.json");
if(fs.existsSync(monumentPath)) {
    const monumentData = JSON.parse(
        fs.readFileSync(monumentPath, { encoding: 'utf-8' })
    );
    if(!monumentData.source) {
        console.log(`No source found for Monument at ${ monumentPath }`)
        return;
    }
    delete monumentData.source.wasm;
    fs.writeFileSync(monumentInterfacePath, JSON.stringify(monumentData, null, 4));
    console.log(`Extracted metadata for Monument to ${ monumentInterfacePath }`)
} else {
    console.log(`No metadata found for Monument at ${ monumentPath }`)
}
const waterfallPath = path.join(contractsV1Dir, "waterfall.contract.json");
const waterfallInterfacePath = path.join(contractInterfacesV1Dir, "waterfall.interface.json");
if(fs.existsSync(waterfallPath)) {
    const waterfallData = JSON.parse(
        fs.readFileSync(waterfallPath, { encoding: 'utf-8' })
    );
    if(!waterfallData.source) {
        console.log(`No source found for Waterfall at ${ waterfallPath }`)
        return;
    }
    delete waterfallData.source.wasm;
    fs.writeFileSync(waterfallInterfacePath, JSON.stringify(waterfallData, null, 4));
    console.log(`Extracted metadata for Waterfall to ${ waterfallInterfacePath }`)
} else {
    console.log(`No metadata found for Waterfall at ${ waterfallPath }`)
}
const eternalFlamePath = path.join(contractsV1Dir, "eternal_flame.contract.json");
const eternalFlameInterfacePath = path.join(contractInterfacesV1Dir, "eternal_flame.interface.json");
if(fs.existsSync(eternalFlamePath)) {
    const eternalFlameData = JSON.parse(
        fs.readFileSync(eternalFlamePath, { encoding: 'utf-8' })
    );
    if(!eternalFlameData.source) {
        console.log(`No source found for EternalFlame at ${ eternalFlamePath }`)
        return;
    }
    delete eternalFlameData.source.wasm;
    fs.writeFileSync(eternalFlameInterfacePath, JSON.stringify(eternalFlameData, null, 4));
    console.log(`Extracted metadata for EternalFlame to ${ eternalFlameInterfacePath }`)
} else {
    console.log(`No metadata found for EternalFlame at ${ eternalFlamePath }`)
}
const pillarOfWindPath = path.join(contractsV1Dir, "pillar_of_wind.contract.json");
const pillarOfWindInterfacePath = path.join(contractInterfacesV1Dir, "pillar_of_wind.interface.json");
if(fs.existsSync(pillarOfWindPath)) {
    const pillarOfWindData = JSON.parse(
        fs.readFileSync(pillarOfWindPath, { encoding: 'utf-8' })
    );
    if(!pillarOfWindData.source) {
        console.log(`No source found for PillarOfWind at ${ pillarOfWindPath }`)
        return;
    }
    delete pillarOfWindData.source.wasm;
    fs.writeFileSync(pillarOfWindInterfacePath, JSON.stringify(pillarOfWindData, null, 4));
    console.log(`Extracted metadata for PillarOfWind to ${ pillarOfWindInterfacePath }`)
} else {
    console.log(`No metadata found for PillarOfWind at ${ pillarOfWindPath }`)
}
const streamPath = path.join(contractsV1Dir, "stream.contract.json");
const streamInterfacePath = path.join(contractInterfacesV1Dir, "stream.interface.json");
if(fs.existsSync(streamPath)) {
    const streamData = JSON.parse(
        fs.readFileSync(streamPath, { encoding: 'utf-8' })
    );
    if(!streamData.source) {
        console.log(`No source found for Stream at ${ streamPath }`)
        return;
    }
    delete streamData.source.wasm;
    fs.writeFileSync(streamInterfacePath, JSON.stringify(streamData, null, 4));
    console.log(`Extracted metadata for Stream to ${ streamInterfacePath }`)
} else {
    console.log(`No metadata found for Stream at ${ streamPath }`)
}
const zephyrPath = path.join(contractsV1Dir, "zephyr.contract.json");
const zephyrInterfacePath = path.join(contractInterfacesV1Dir, "zephyr.interface.json");
if(fs.existsSync(zephyrPath)) {
    const zephyrData = JSON.parse(
        fs.readFileSync(zephyrPath, { encoding: 'utf-8' })
    );
    if(!zephyrData.source) {
        console.log(`No source found for Zephyr at ${ zephyrPath }`)
        return;
    }
    delete zephyrData.source.wasm;
    fs.writeFileSync(zephyrInterfacePath, JSON.stringify(zephyrData, null, 4));
    console.log(`Extracted metadata for Zephyr to ${ zephyrInterfacePath }`)
} else {
    console.log(`No metadata found for Zephyr at ${ zephyrPath }`)
}
const creekPath = path.join(contractsV1Dir, "creek.contract.json");
const creekInterfacePath = path.join(contractInterfacesV1Dir, "creek.interface.json");
if(fs.existsSync(creekPath)) {
    const creekData = JSON.parse(
        fs.readFileSync(creekPath, { encoding: 'utf-8' })
    );
    if(!creekData.source) {
        console.log(`No source found for Creek at ${ creekPath }`)
        return;
    }
    delete creekData.source.wasm;
    fs.writeFileSync(creekInterfacePath, JSON.stringify(creekData, null, 4));
    console.log(`Extracted metadata for Creek to ${ creekInterfacePath }`)
} else {
    console.log(`No metadata found for Creek at ${ creekPath }`)
}
const brookPath = path.join(contractsV1Dir, "brook.contract.json");
const brookInterfacePath = path.join(contractInterfacesV1Dir, "brook.interface.json");
if(fs.existsSync(brookPath)) {
    const brookData = JSON.parse(
        fs.readFileSync(brookPath, { encoding: 'utf-8' })
    );
    if(!brookData.source) {
        console.log(`No source found for Brook at ${ brookPath }`)
        return;
    }
    delete brookData.source.wasm;
    fs.writeFileSync(brookInterfacePath, JSON.stringify(brookData, null, 4));
    console.log(`Extracted metadata for Brook to ${ brookInterfacePath }`)
} else {
    console.log(`No metadata found for Brook at ${ brookPath }`)
}
const whisperPath = path.join(contractsV1Dir, "whisper.contract.json");
const whisperInterfacePath = path.join(contractInterfacesV1Dir, "whisper.interface.json");
if(fs.existsSync(whisperPath)) {
    const whisperData = JSON.parse(
        fs.readFileSync(whisperPath, { encoding: 'utf-8' })
    );
    if(!whisperData.source) {
        console.log(`No source found for Whisper at ${ whisperPath }`)
        return;
    }
    delete whisperData.source.wasm;
    fs.writeFileSync(whisperInterfacePath, JSON.stringify(whisperData, null, 4));
    console.log(`Extracted metadata for Whisper to ${ whisperInterfacePath }`)
} else {
    console.log(`No metadata found for Whisper at ${ whisperPath }`)
}
const rivuletPath = path.join(contractsV1Dir, "rivulet.contract.json");
const rivuletInterfacePath = path.join(contractInterfacesV1Dir, "rivulet.interface.json");
if(fs.existsSync(rivuletPath)) {
    const rivuletData = JSON.parse(
        fs.readFileSync(rivuletPath, { encoding: 'utf-8' })
    );
    if(!rivuletData.source) {
        console.log(`No source found for Rivulet at ${ rivuletPath }`)
        return;
    }
    delete rivuletData.source.wasm;
    fs.writeFileSync(rivuletInterfacePath, JSON.stringify(rivuletData, null, 4));
    console.log(`Extracted metadata for Rivulet to ${ rivuletInterfacePath }`)
} else {
    console.log(`No metadata found for Rivulet at ${ rivuletPath }`)
}
const tributaryPath = path.join(contractsV1Dir, "tributary.contract.json");
const tributaryInterfacePath = path.join(contractInterfacesV1Dir, "tributary.interface.json");
if(fs.existsSync(tributaryPath)) {
    const tributaryData = JSON.parse(
        fs.readFileSync(tributaryPath, { encoding: 'utf-8' })
    );
    if(!tributaryData.source) {
        console.log(`No source found for Tributary at ${ tributaryPath }`)
        return;
    }
    delete tributaryData.source.wasm;
    fs.writeFileSync(tributaryInterfacePath, JSON.stringify(tributaryData, null, 4));
    console.log(`Extracted metadata for Tributary to ${ tributaryInterfacePath }`)
} else {
    console.log(`No metadata found for Tributary at ${ tributaryPath }`)
}
const murmurPath = path.join(contractsV1Dir, "murmur.contract.json");
const murmurInterfacePath = path.join(contractInterfacesV1Dir, "murmur.interface.json");
if(fs.existsSync(murmurPath)) {
    const murmurData = JSON.parse(
        fs.readFileSync(murmurPath, { encoding: 'utf-8' })
    );
    if(!murmurData.source) {
        console.log(`No source found for Murmur at ${ murmurPath }`)
        return;
    }
    delete murmurData.source.wasm;
    fs.writeFileSync(murmurInterfacePath, JSON.stringify(murmurData, null, 4));
    console.log(`Extracted metadata for Murmur to ${ murmurInterfacePath }`)
} else {
    console.log(`No metadata found for Murmur at ${ murmurPath }`)
}
const watershedPath = path.join(contractsV1Dir, "watershed.contract.json");
const watershedInterfacePath = path.join(contractInterfacesV1Dir, "watershed.interface.json");
if(fs.existsSync(watershedPath)) {
    const watershedData = JSON.parse(
        fs.readFileSync(watershedPath, { encoding: 'utf-8' })
    );
    if(!watershedData.source) {
        console.log(`No source found for Watershed at ${ watershedPath }`)
        return;
    }
    delete watershedData.source.wasm;
    fs.writeFileSync(watershedInterfacePath, JSON.stringify(watershedData, null, 4));
    console.log(`Extracted metadata for Watershed to ${ watershedInterfacePath }`)
} else {
    console.log(`No metadata found for Watershed at ${ watershedPath }`)
}
const aquiferPath = path.join(contractsV1Dir, "aquifer.contract.json");
const aquiferInterfacePath = path.join(contractInterfacesV1Dir, "aquifer.interface.json");
if(fs.existsSync(aquiferPath)) {
    const aquiferData = JSON.parse(
        fs.readFileSync(aquiferPath, { encoding: 'utf-8' })
    );
    if(!aquiferData.source) {
        console.log(`No source found for Aquifer at ${ aquiferPath }`)
        return;
    }
    delete aquiferData.source.wasm;
    fs.writeFileSync(aquiferInterfacePath, JSON.stringify(aquiferData, null, 4));
    console.log(`Extracted metadata for Aquifer to ${ aquiferInterfacePath }`)
} else {
    console.log(`No metadata found for Aquifer at ${ aquiferPath }`)
}
const parchedEarthPath = path.join(contractsV1Dir, "parched_earth.contract.json");
const parchedEarthInterfacePath = path.join(contractInterfacesV1Dir, "parched_earth.interface.json");
if(fs.existsSync(parchedEarthPath)) {
    const parchedEarthData = JSON.parse(
        fs.readFileSync(parchedEarthPath, { encoding: 'utf-8' })
    );
    if(!parchedEarthData.source) {
        console.log(`No source found for ParchedEarth at ${ parchedEarthPath }`)
        return;
    }
    delete parchedEarthData.source.wasm;
    fs.writeFileSync(parchedEarthInterfacePath, JSON.stringify(parchedEarthData, null, 4));
    console.log(`Extracted metadata for ParchedEarth to ${ parchedEarthInterfacePath }`)
} else {
    console.log(`No metadata found for ParchedEarth at ${ parchedEarthPath }`)
}
const freshBreezePath = path.join(contractsV1Dir, "fresh_breeze.contract.json");
const freshBreezeInterfacePath = path.join(contractInterfacesV1Dir, "fresh_breeze.interface.json");
if(fs.existsSync(freshBreezePath)) {
    const freshBreezeData = JSON.parse(
        fs.readFileSync(freshBreezePath, { encoding: 'utf-8' })
    );
    if(!freshBreezeData.source) {
        console.log(`No source found for FreshBreeze at ${ freshBreezePath }`)
        return;
    }
    delete freshBreezeData.source.wasm;
    fs.writeFileSync(freshBreezeInterfacePath, JSON.stringify(freshBreezeData, null, 4));
    console.log(`Extracted metadata for FreshBreeze to ${ freshBreezeInterfacePath }`)
} else {
    console.log(`No metadata found for FreshBreeze at ${ freshBreezePath }`)
}
const groundwaterPath = path.join(contractsV1Dir, "groundwater.contract.json");
const groundwaterInterfacePath = path.join(contractInterfacesV1Dir, "groundwater.interface.json");
if(fs.existsSync(groundwaterPath)) {
    const groundwaterData = JSON.parse(
        fs.readFileSync(groundwaterPath, { encoding: 'utf-8' })
    );
    if(!groundwaterData.source) {
        console.log(`No source found for Groundwater at ${ groundwaterPath }`)
        return;
    }
    delete groundwaterData.source.wasm;
    fs.writeFileSync(groundwaterInterfacePath, JSON.stringify(groundwaterData, null, 4));
    console.log(`Extracted metadata for Groundwater to ${ groundwaterInterfacePath }`)
} else {
    console.log(`No metadata found for Groundwater at ${ groundwaterPath }`)
}
const reservoirPath = path.join(contractsV1Dir, "reservoir.contract.json");
const reservoirInterfacePath = path.join(contractInterfacesV1Dir, "reservoir.interface.json");
if(fs.existsSync(reservoirPath)) {
    const reservoirData = JSON.parse(
        fs.readFileSync(reservoirPath, { encoding: 'utf-8' })
    );
    if(!reservoirData.source) {
        console.log(`No source found for Reservoir at ${ reservoirPath }`)
        return;
    }
    delete reservoirData.source.wasm;
    fs.writeFileSync(reservoirInterfacePath, JSON.stringify(reservoirData, null, 4));
    console.log(`Extracted metadata for Reservoir to ${ reservoirInterfacePath }`)
} else {
    console.log(`No metadata found for Reservoir at ${ reservoirPath }`)
}
const geothermalSpringPath = path.join(contractsV1Dir, "geothermal_spring.contract.json");
const geothermalSpringInterfacePath = path.join(contractInterfacesV1Dir, "geothermal_spring.interface.json");
if(fs.existsSync(geothermalSpringPath)) {
    const geothermalSpringData = JSON.parse(
        fs.readFileSync(geothermalSpringPath, { encoding: 'utf-8' })
    );
    if(!geothermalSpringData.source) {
        console.log(`No source found for GeothermalSpring at ${ geothermalSpringPath }`)
        return;
    }
    delete geothermalSpringData.source.wasm;
    fs.writeFileSync(geothermalSpringInterfacePath, JSON.stringify(geothermalSpringData, null, 4));
    console.log(`Extracted metadata for GeothermalSpring to ${ geothermalSpringInterfacePath }`)
} else {
    console.log(`No metadata found for GeothermalSpring at ${ geothermalSpringPath }`)
}
const artesianWellPath = path.join(contractsV1Dir, "artesian_well.contract.json");
const artesianWellInterfacePath = path.join(contractInterfacesV1Dir, "artesian_well.interface.json");
if(fs.existsSync(artesianWellPath)) {
    const artesianWellData = JSON.parse(
        fs.readFileSync(artesianWellPath, { encoding: 'utf-8' })
    );
    if(!artesianWellData.source) {
        console.log(`No source found for ArtesianWell at ${ artesianWellPath }`)
        return;
    }
    delete artesianWellData.source.wasm;
    fs.writeFileSync(artesianWellInterfacePath, JSON.stringify(artesianWellData, null, 4));
    console.log(`Extracted metadata for ArtesianWell to ${ artesianWellInterfacePath }`)
} else {
    console.log(`No metadata found for ArtesianWell at ${ artesianWellPath }`)
}
const basinPath = path.join(contractsV1Dir, "basin.contract.json");
const basinInterfacePath = path.join(contractInterfacesV1Dir, "basin.interface.json");
if(fs.existsSync(basinPath)) {
    const basinData = JSON.parse(
        fs.readFileSync(basinPath, { encoding: 'utf-8' })
    );
    if(!basinData.source) {
        console.log(`No source found for Basin at ${ basinPath }`)
        return;
    }
    delete basinData.source.wasm;
    fs.writeFileSync(basinInterfacePath, JSON.stringify(basinData, null, 4));
    console.log(`Extracted metadata for Basin to ${ basinInterfacePath }`)
} else {
    console.log(`No metadata found for Basin at ${ basinPath }`)
}
const lakePath = path.join(contractsV1Dir, "lake.contract.json");
const lakeInterfacePath = path.join(contractInterfacesV1Dir, "lake.interface.json");
if(fs.existsSync(lakePath)) {
    const lakeData = JSON.parse(
        fs.readFileSync(lakePath, { encoding: 'utf-8' })
    );
    if(!lakeData.source) {
        console.log(`No source found for Lake at ${ lakePath }`)
        return;
    }
    delete lakeData.source.wasm;
    fs.writeFileSync(lakeInterfacePath, JSON.stringify(lakeData, null, 4));
    console.log(`Extracted metadata for Lake to ${ lakeInterfacePath }`)
} else {
    console.log(`No metadata found for Lake at ${ lakePath }`)
}
const dryBasinPath = path.join(contractsV1Dir, "dry_basin.contract.json");
const dryBasinInterfacePath = path.join(contractInterfacesV1Dir, "dry_basin.interface.json");
if(fs.existsSync(dryBasinPath)) {
    const dryBasinData = JSON.parse(
        fs.readFileSync(dryBasinPath, { encoding: 'utf-8' })
    );
    if(!dryBasinData.source) {
        console.log(`No source found for DryBasin at ${ dryBasinPath }`)
        return;
    }
    delete dryBasinData.source.wasm;
    fs.writeFileSync(dryBasinInterfacePath, JSON.stringify(dryBasinData, null, 4));
    console.log(`Extracted metadata for DryBasin to ${ dryBasinInterfacePath }`)
} else {
    console.log(`No metadata found for DryBasin at ${ dryBasinPath }`)
}
const depressionPath = path.join(contractsV1Dir, "depression.contract.json");
const depressionInterfacePath = path.join(contractInterfacesV1Dir, "depression.interface.json");
if(fs.existsSync(depressionPath)) {
    const depressionData = JSON.parse(
        fs.readFileSync(depressionPath, { encoding: 'utf-8' })
    );
    if(!depressionData.source) {
        console.log(`No source found for Depression at ${ depressionPath }`)
        return;
    }
    delete depressionData.source.wasm;
    fs.writeFileSync(depressionInterfacePath, JSON.stringify(depressionData, null, 4));
    console.log(`Extracted metadata for Depression to ${ depressionInterfacePath }`)
} else {
    console.log(`No metadata found for Depression at ${ depressionPath }`)
}
const islandPath = path.join(contractsV1Dir, "island.contract.json");
const islandInterfacePath = path.join(contractInterfacesV1Dir, "island.interface.json");
if(fs.existsSync(islandPath)) {
    const islandData = JSON.parse(
        fs.readFileSync(islandPath, { encoding: 'utf-8' })
    );
    if(!islandData.source) {
        console.log(`No source found for Island at ${ islandPath }`)
        return;
    }
    delete islandData.source.wasm;
    fs.writeFileSync(islandInterfacePath, JSON.stringify(islandData, null, 4));
    console.log(`Extracted metadata for Island to ${ islandInterfacePath }`)
} else {
    console.log(`No metadata found for Island at ${ islandPath }`)
}
const lagoonPath = path.join(contractsV1Dir, "lagoon.contract.json");
const lagoonInterfacePath = path.join(contractInterfacesV1Dir, "lagoon.interface.json");
if(fs.existsSync(lagoonPath)) {
    const lagoonData = JSON.parse(
        fs.readFileSync(lagoonPath, { encoding: 'utf-8' })
    );
    if(!lagoonData.source) {
        console.log(`No source found for Lagoon at ${ lagoonPath }`)
        return;
    }
    delete lagoonData.source.wasm;
    fs.writeFileSync(lagoonInterfacePath, JSON.stringify(lagoonData, null, 4));
    console.log(`Extracted metadata for Lagoon to ${ lagoonInterfacePath }`)
} else {
    console.log(`No metadata found for Lagoon at ${ lagoonPath }`)
}
const wavePath = path.join(contractsV1Dir, "wave.contract.json");
const waveInterfacePath = path.join(contractInterfacesV1Dir, "wave.interface.json");
if(fs.existsSync(wavePath)) {
    const waveData = JSON.parse(
        fs.readFileSync(wavePath, { encoding: 'utf-8' })
    );
    if(!waveData.source) {
        console.log(`No source found for Wave at ${ wavePath }`)
        return;
    }
    delete waveData.source.wasm;
    fs.writeFileSync(waveInterfacePath, JSON.stringify(waveData, null, 4));
    console.log(`Extracted metadata for Wave to ${ waveInterfacePath }`)
} else {
    console.log(`No metadata found for Wave at ${ wavePath }`)
}
const reefPath = path.join(contractsV1Dir, "reef.contract.json");
const reefInterfacePath = path.join(contractInterfacesV1Dir, "reef.interface.json");
if(fs.existsSync(reefPath)) {
    const reefData = JSON.parse(
        fs.readFileSync(reefPath, { encoding: 'utf-8' })
    );
    if(!reefData.source) {
        console.log(`No source found for Reef at ${ reefPath }`)
        return;
    }
    delete reefData.source.wasm;
    fs.writeFileSync(reefInterfacePath, JSON.stringify(reefData, null, 4));
    console.log(`Extracted metadata for Reef to ${ reefInterfacePath }`)
} else {
    console.log(`No metadata found for Reef at ${ reefPath }`)
}
const coralPath = path.join(contractsV1Dir, "coral.contract.json");
const coralInterfacePath = path.join(contractInterfacesV1Dir, "coral.interface.json");
if(fs.existsSync(coralPath)) {
    const coralData = JSON.parse(
        fs.readFileSync(coralPath, { encoding: 'utf-8' })
    );
    if(!coralData.source) {
        console.log(`No source found for Coral at ${ coralPath }`)
        return;
    }
    delete coralData.source.wasm;
    fs.writeFileSync(coralInterfacePath, JSON.stringify(coralData, null, 4));
    console.log(`Extracted metadata for Coral to ${ coralInterfacePath }`)
} else {
    console.log(`No metadata found for Coral at ${ coralPath }`)
}
const whirlPath = path.join(contractsV1Dir, "whirl.contract.json");
const whirlInterfacePath = path.join(contractInterfacesV1Dir, "whirl.interface.json");
if(fs.existsSync(whirlPath)) {
    const whirlData = JSON.parse(
        fs.readFileSync(whirlPath, { encoding: 'utf-8' })
    );
    if(!whirlData.source) {
        console.log(`No source found for Whirl at ${ whirlPath }`)
        return;
    }
    delete whirlData.source.wasm;
    fs.writeFileSync(whirlInterfacePath, JSON.stringify(whirlData, null, 4));
    console.log(`Extracted metadata for Whirl to ${ whirlInterfacePath }`)
} else {
    console.log(`No metadata found for Whirl at ${ whirlPath }`)
}
const limestonePath = path.join(contractsV1Dir, "limestone.contract.json");
const limestoneInterfacePath = path.join(contractInterfacesV1Dir, "limestone.interface.json");
if(fs.existsSync(limestonePath)) {
    const limestoneData = JSON.parse(
        fs.readFileSync(limestonePath, { encoding: 'utf-8' })
    );
    if(!limestoneData.source) {
        console.log(`No source found for Limestone at ${ limestonePath }`)
        return;
    }
    delete limestoneData.source.wasm;
    fs.writeFileSync(limestoneInterfacePath, JSON.stringify(limestoneData, null, 4));
    console.log(`Extracted metadata for Limestone to ${ limestoneInterfacePath }`)
} else {
    console.log(`No metadata found for Limestone at ${ limestonePath }`)
}
const karstPath = path.join(contractsV1Dir, "karst.contract.json");
const karstInterfacePath = path.join(contractInterfacesV1Dir, "karst.interface.json");
if(fs.existsSync(karstPath)) {
    const karstData = JSON.parse(
        fs.readFileSync(karstPath, { encoding: 'utf-8' })
    );
    if(!karstData.source) {
        console.log(`No source found for Karst at ${ karstPath }`)
        return;
    }
    delete karstData.source.wasm;
    fs.writeFileSync(karstInterfacePath, JSON.stringify(karstData, null, 4));
    console.log(`Extracted metadata for Karst to ${ karstInterfacePath }`)
} else {
    console.log(`No metadata found for Karst at ${ karstPath }`)
}
const quicklimePath = path.join(contractsV1Dir, "quicklime.contract.json");
const quicklimeInterfacePath = path.join(contractInterfacesV1Dir, "quicklime.interface.json");
if(fs.existsSync(quicklimePath)) {
    const quicklimeData = JSON.parse(
        fs.readFileSync(quicklimePath, { encoding: 'utf-8' })
    );
    if(!quicklimeData.source) {
        console.log(`No source found for Quicklime at ${ quicklimePath }`)
        return;
    }
    delete quicklimeData.source.wasm;
    fs.writeFileSync(quicklimeInterfacePath, JSON.stringify(quicklimeData, null, 4));
    console.log(`Extracted metadata for Quicklime to ${ quicklimeInterfacePath }`)
} else {
    console.log(`No metadata found for Quicklime at ${ quicklimePath }`)
}
const blowholePath = path.join(contractsV1Dir, "blowhole.contract.json");
const blowholeInterfacePath = path.join(contractInterfacesV1Dir, "blowhole.interface.json");
if(fs.existsSync(blowholePath)) {
    const blowholeData = JSON.parse(
        fs.readFileSync(blowholePath, { encoding: 'utf-8' })
    );
    if(!blowholeData.source) {
        console.log(`No source found for Blowhole at ${ blowholePath }`)
        return;
    }
    delete blowholeData.source.wasm;
    fs.writeFileSync(blowholeInterfacePath, JSON.stringify(blowholeData, null, 4));
    console.log(`Extracted metadata for Blowhole to ${ blowholeInterfacePath }`)
} else {
    console.log(`No metadata found for Blowhole at ${ blowholePath }`)
}

const unifiersPath = path.join(contractsV1Dir, "unifiers.contract.json");
const unifiersInterfacePath = path.join(contractInterfacesV1Dir, "unifiers.interface.json");
if(fs.existsSync(unifiersPath)) {
    const unifiersData = JSON.parse(
        fs.readFileSync(unifiersPath, { encoding: 'utf-8' })
    );
    if(!unifiersData.source) {
        console.log(`No source found for unifiers at ${ unifiersPath }`)
        return;
    }
    delete unifiersData.source.wasm;
    fs.writeFileSync(unifiersInterfacePath, JSON.stringify(unifiersData, null, 4));
    console.log(`Extracted metadata for unifiers to ${ unifiersInterfacePath }`)
} else {
    console.log(`No metadata found for unifiers at ${ unifiersPath }`)
}
