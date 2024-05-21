const fs = require('fs');
const path = require('path');

const POSSIBLE_TARGET_INK_DIRS = [
    "../../target/ink",
    "../../../target/ink",
    "target/ink",
];
const POSSIBLE_CONTRACTS_V1_README_MD_FILES = [
    "../../contracts.v1/README.md",
    "../../../contracts.v1/README.md",
    "contracts.v1/README.md",
]

const realTargetInkIndex = POSSIBLE_TARGET_INK_DIRS.findIndex((dir) => fs.existsSync(dir));
const targetInkDir = POSSIBLE_TARGET_INK_DIRS[realTargetInkIndex];

console.log(`Copying contracts from ${POSSIBLE_TARGET_INK_DIRS[realTargetInkIndex]} ...`);

const realContractsV1ReadmeMdIndex = POSSIBLE_CONTRACTS_V1_README_MD_FILES.findIndex((file) => fs.existsSync(file));
const contractsV1ReadmeMd = POSSIBLE_CONTRACTS_V1_README_MD_FILES[realContractsV1ReadmeMdIndex];
const contractsV1Dir = path.join(path.dirname(contractsV1ReadmeMd), "artifacts");

console.log(`Copying contracts into ${contractsV1Dir} ...`);

if(!fs.existsSync(contractsV1Dir)) {
    fs.mkdirSync(contractsV1Dir, { recursive: true });
}

const itemMonkeyPath = path.join(targetInkDir, 'monkey/monkey.contract');
const itemGiraffePath = path.join(targetInkDir, 'giraffe/giraffe.contract');
const itemBeePath = path.join(targetInkDir, 'bee/bee.contract');
const itemCoinPath = path.join(targetInkDir, 'coin/coin.contract');
const itemSwarmPath = path.join(targetInkDir, 'swarm/swarm.contract');
const itemHydraPath = path.join(targetInkDir, 'hydra/hydra.contract');
const itemMonkeyBranchPath = path.join(targetInkDir, 'monkey-branch/monkey-branch.contract');
const itemBridgePath = path.join(targetInkDir, 'bridge/bridge.contract');
const itemGoldenGatePath = path.join(targetInkDir, 'golden-gate/golden-gate.contract');
const itemGoldPath = path.join(targetInkDir, 'gold/gold.contract');
const itemSilverPath = path.join(targetInkDir, 'silver/silver.contract');
const itemRhodiumPath = path.join(targetInkDir, 'rhodium/rhodium.contract');
const itemHivePath = path.join(targetInkDir, 'hive/hive.contract');
const itemTransactionPath = path.join(targetInkDir, 'transaction/transaction.contract');
const itemBlockPath = path.join(targetInkDir, 'block/block.contract');
const itemBlockchainPath = path.join(targetInkDir, 'blockchain/blockchain.contract');
const itemPolkadotPath = path.join(targetInkDir, 'polkadot/polkadot.contract');
const itemPeerReviewPath = path.join(targetInkDir, 'peer-review/peer-review.contract');
const itemCardanoPath = path.join(targetInkDir, 'cardano/cardano.contract');
const itemBearPath = path.join(targetInkDir, 'bear/bear.contract');
const itemBeerPath = path.join(targetInkDir, 'beer/beer.contract');
const itemLockPath = path.join(targetInkDir, 'lock/lock.contract');
const itemMarmaladePath = path.join(targetInkDir, 'marmalade/marmalade.contract');
const itemSuperMarmaladePath = path.join(targetInkDir, 'super-marmalade/super-marmalade.contract');
const itemHyperMarmaladePath = path.join(targetInkDir, 'hyper-marmalade/hyper-marmalade.contract');
const gameUnifiersPath = path.join(targetInkDir, 'unifiers/unifiers.contract');

if(fs.existsSync(itemMonkeyPath)) {
    console.log(`Copying monkey ...`);
    fs.copyFileSync(itemMonkeyPath, path.join(contractsV1Dir, 'monkey.contract.json'));
} else {
    console.log(`monkey not found`);
}
if(fs.existsSync(itemGiraffePath)) {
    console.log(`Copying giraffe ...`);
    fs.copyFileSync(itemGiraffePath, path.join(contractsV1Dir, 'giraffe.contract.json'));
} else {
    console.log(`giraffe not found`);
}
if(fs.existsSync(itemBeePath)) {
    console.log(`Copying bee ...`);
    fs.copyFileSync(itemBeePath, path.join(contractsV1Dir, 'bee.contract.json'));
} else {
    console.log(`bee not found`);
}
if(fs.existsSync(itemCoinPath)) {
    console.log(`Copying coin ...`);
    fs.copyFileSync(itemCoinPath, path.join(contractsV1Dir, 'coin.contract.json'));
} else {
    console.log(`coin not found`);
}
if(fs.existsSync(itemSwarmPath)) {
    console.log(`Copying swarm ...`);
    fs.copyFileSync(itemSwarmPath, path.join(contractsV1Dir, 'swarm.contract.json'));
} else {
    console.log(`swarm not found`);
}
if(fs.existsSync(itemHydraPath)) {
    console.log(`Copying hydra ...`);
    fs.copyFileSync(itemHydraPath, path.join(contractsV1Dir, 'hydra.contract.json'));
} else {
    console.log(`hydra not found`);
}
if(fs.existsSync(itemMonkeyBranchPath)) {
    console.log(`Copying monkey-branch ...`);
    fs.copyFileSync(itemMonkeyBranchPath, path.join(contractsV1Dir, 'monkey-branch.contract.json'));
} else {
    console.log(`monkey-branch not found`);
}
if(fs.existsSync(itemBridgePath)) {
    console.log(`Copying bridge ...`);
    fs.copyFileSync(itemBridgePath, path.join(contractsV1Dir, 'bridge.contract.json'));
} else {
    console.log(`bridge not found`);
}
if(fs.existsSync(itemGoldenGatePath)) {
    console.log(`Copying golden-gate ...`);
    fs.copyFileSync(itemGoldenGatePath, path.join(contractsV1Dir, 'golden-gate.contract.json'));
} else {
    console.log(`golden-gate not found`);
}
if(fs.existsSync(itemGoldPath)) {
    console.log(`Copying gold ...`);
    fs.copyFileSync(itemGoldPath, path.join(contractsV1Dir, 'gold.contract.json'));
} else {
    console.log(`gold not found`);
}
if(fs.existsSync(itemSilverPath)) {
    console.log(`Copying silver ...`);
    fs.copyFileSync(itemSilverPath, path.join(contractsV1Dir, 'silver.contract.json'));
} else {
    console.log(`silver not found`);
}
if(fs.existsSync(itemRhodiumPath)) {
    console.log(`Copying rhodium ...`);
    fs.copyFileSync(itemRhodiumPath, path.join(contractsV1Dir, 'rhodium.contract.json'));
} else {
    console.log(`rhodium not found`);
}
if(fs.existsSync(itemHivePath)) {
    console.log(`Copying hive ...`);
    fs.copyFileSync(itemHivePath, path.join(contractsV1Dir, 'hive.contract.json'));
} else {
    console.log(`hive not found`);
}
if(fs.existsSync(itemTransactionPath)) {
    console.log(`Copying transaction ...`);
    fs.copyFileSync(itemTransactionPath, path.join(contractsV1Dir, 'transaction.contract.json'));
} else {
    console.log(`transaction not found`);
}
if(fs.existsSync(itemBlockPath)) {
    console.log(`Copying block ...`);
    fs.copyFileSync(itemBlockPath, path.join(contractsV1Dir, 'block.contract.json'));
} else {
    console.log(`block not found`);
}
if(fs.existsSync(itemBlockchainPath)) {
    console.log(`Copying blockchain ...`);
    fs.copyFileSync(itemBlockchainPath, path.join(contractsV1Dir, 'blockchain.contract.json'));
} else {
    console.log(`blockchain not found`);
}
if(fs.existsSync(itemPolkadotPath)) {
    console.log(`Copying polkadot ...`);
    fs.copyFileSync(itemPolkadotPath, path.join(contractsV1Dir, 'polkadot.contract.json'));
} else {
    console.log(`polkadot not found`);
}
if(fs.existsSync(itemPeerReviewPath)) {
    console.log(`Copying peer-review ...`);
    fs.copyFileSync(itemPeerReviewPath, path.join(contractsV1Dir, 'peer-review.contract.json'));
} else {
    console.log(`peer-review not found`);
}
if(fs.existsSync(itemCardanoPath)) {
    console.log(`Copying cardano ...`);
    fs.copyFileSync(itemCardanoPath, path.join(contractsV1Dir, 'cardano.contract.json'));
} else {
    console.log(`cardano not found`);
}
if(fs.existsSync(itemBearPath)) {
    console.log(`Copying bear ...`);
    fs.copyFileSync(itemBearPath, path.join(contractsV1Dir, 'bear.contract.json'));
} else {
    console.log(`bear not found`);
}
if(fs.existsSync(itemBeerPath)) {
    console.log(`Copying beer ...`);
    fs.copyFileSync(itemBeerPath, path.join(contractsV1Dir, 'beer.contract.json'));
} else {
    console.log(`beer not found`);
}
if(fs.existsSync(itemLockPath)) {
    console.log(`Copying lock ...`);
    fs.copyFileSync(itemLockPath, path.join(contractsV1Dir, 'lock.contract.json'));
} else {
    console.log(`lock not found`);
}
if(fs.existsSync(itemMarmaladePath)) {
    console.log(`Copying marmalade ...`);
    fs.copyFileSync(itemMarmaladePath, path.join(contractsV1Dir, 'marmalade.contract.json'));
} else {
    console.log(`marmalade not found`);
}
if(fs.existsSync(itemSuperMarmaladePath)) {
    console.log(`Copying super-marmalade ...`);
    fs.copyFileSync(itemSuperMarmaladePath, path.join(contractsV1Dir, 'super-marmalade.contract.json'));
} else {
    console.log(`super-marmalade not found`);
}
if(fs.existsSync(itemHyperMarmaladePath)) {
    console.log(`Copying hyper-marmalade ...`);
    fs.copyFileSync(itemHyperMarmaladePath, path.join(contractsV1Dir, 'hyper-marmalade.contract.json'));
} else {
    console.log(`hyper-marmalade not found`);
}

if(fs.existsSync(gameUnifiersPath)) {
    console.log(`Copying unifiers ...`);
    fs.copyFileSync(gameUnifiersPath, path.join(contractsV1Dir, 'unifiers.contract.json'));
} else {
    console.log(`unifiers not found`);
}
