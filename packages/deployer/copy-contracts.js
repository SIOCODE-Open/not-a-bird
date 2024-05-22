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
const itemMonkeyBranchPath = path.join(targetInkDir, 'monkey_branch/monkey_branch.contract');
const itemBridgePath = path.join(targetInkDir, 'bridge/bridge.contract');
const itemGoldenGatePath = path.join(targetInkDir, 'golden_gate/golden_gate.contract');
const itemGoldPath = path.join(targetInkDir, 'gold/gold.contract');
const itemSilverPath = path.join(targetInkDir, 'silver/silver.contract');
const itemRhodiumPath = path.join(targetInkDir, 'rhodium/rhodium.contract');
const itemHivePath = path.join(targetInkDir, 'hive/hive.contract');
const itemTransactionPath = path.join(targetInkDir, 'transaction/transaction.contract');
const itemBlockPath = path.join(targetInkDir, 'block/block.contract');
const itemBlockchainPath = path.join(targetInkDir, 'blockchain/blockchain.contract');
const itemPolkadotPath = path.join(targetInkDir, 'polkadot/polkadot.contract');
const itemPeerReviewPath = path.join(targetInkDir, 'peer_review/peer_review.contract');
const itemCardanoPath = path.join(targetInkDir, 'cardano/cardano.contract');
const itemBearPath = path.join(targetInkDir, 'bear/bear.contract');
const itemBeerPath = path.join(targetInkDir, 'beer/beer.contract');
const itemLockPath = path.join(targetInkDir, 'lock/lock.contract');
const itemMarmaladePath = path.join(targetInkDir, 'marmalade/marmalade.contract');
const itemSuperMarmaladePath = path.join(targetInkDir, 'super_marmalade/super_marmalade.contract');
const itemHyperMarmaladePath = path.join(targetInkDir, 'hyper_marmalade/hyper_marmalade.contract');
const itemWaterPath = path.join(targetInkDir, 'water/water.contract');
const itemFirePath = path.join(targetInkDir, 'fire/fire.contract');
const itemSteamPath = path.join(targetInkDir, 'steam/steam.contract');
const itemEarthPath = path.join(targetInkDir, 'earth/earth.contract');
const itemMudPath = path.join(targetInkDir, 'mud/mud.contract');
const itemLavaPath = path.join(targetInkDir, 'lava/lava.contract');
const itemWindPath = path.join(targetInkDir, 'wind/wind.contract');
const itemDustPath = path.join(targetInkDir, 'dust/dust.contract');
const itemRainPath = path.join(targetInkDir, 'rain/rain.contract');
const itemSmokePath = path.join(targetInkDir, 'smoke/smoke.contract');
const itemGeyserPath = path.join(targetInkDir, 'geyser/geyser.contract');
const itemClayPath = path.join(targetInkDir, 'clay/clay.contract');
const itemSandPath = path.join(targetInkDir, 'sand/sand.contract');
const itemPlantPath = path.join(targetInkDir, 'plant/plant.contract');
const itemRainbowPath = path.join(targetInkDir, 'rainbow/rainbow.contract');
const itemStormPath = path.join(targetInkDir, 'storm/storm.contract');
const itemObsidianPath = path.join(targetInkDir, 'obsidian/obsidian.contract');
const itemAshPath = path.join(targetInkDir, 'ash/ash.contract');
const itemVolcanoPath = path.join(targetInkDir, 'volcano/volcano.contract');
const itemSandstormPath = path.join(targetInkDir, 'sandstorm/sandstorm.contract');
const itemCloudPath = path.join(targetInkDir, 'cloud/cloud.contract');
const itemFogPath = path.join(targetInkDir, 'fog/fog.contract');
const itemTreePath = path.join(targetInkDir, 'tree/tree.contract');
const itemForestPath = path.join(targetInkDir, 'forest/forest.contract');
const itemSeedsPath = path.join(targetInkDir, 'seeds/seeds.contract');
const itemPotteryPath = path.join(targetInkDir, 'pottery/pottery.contract');
const itemBrickPath = path.join(targetInkDir, 'brick/brick.contract');
const itemQuicksandPath = path.join(targetInkDir, 'quicksand/quicksand.contract');
const itemGlassPath = path.join(targetInkDir, 'glass/glass.contract');
const itemDunePath = path.join(targetInkDir, 'dune/dune.contract');
const itemCharcoalPath = path.join(targetInkDir, 'charcoal/charcoal.contract');
const itemLeavesPath = path.join(targetInkDir, 'leaves/leaves.contract');
const itemWildfirePath = path.join(targetInkDir, 'wildfire/wildfire.contract');
const itemJunglePath = path.join(targetInkDir, 'jungle/jungle.contract');
const itemFrostedGlassPath = path.join(targetInkDir, 'frosted_glass/frosted_glass.contract');
const itemCrystalPath = path.join(targetInkDir, 'crystal/crystal.contract');
const itemMagmaPath = path.join(targetInkDir, 'magma/magma.contract');
const itemRockPath = path.join(targetInkDir, 'rock/rock.contract');
const itemShardPath = path.join(targetInkDir, 'shard/shard.contract');
const itemPebblePath = path.join(targetInkDir, 'pebble/pebble.contract');
const itemMountainPath = path.join(targetInkDir, 'mountain/mountain.contract');
const itemFertilizerPath = path.join(targetInkDir, 'fertilizer/fertilizer.contract');
const itemSootPath = path.join(targetInkDir, 'soot/soot.contract');
const itemLightningPath = path.join(targetInkDir, 'lightning/lightning.contract');
const itemMistPath = path.join(targetInkDir, 'mist/mist.contract');
const itemHazePath = path.join(targetInkDir, 'haze/haze.contract');
const itemFloodPath = path.join(targetInkDir, 'flood/flood.contract');
const itemLandslidePath = path.join(targetInkDir, 'landslide/landslide.contract');
const itemThunderPath = path.join(targetInkDir, 'thunder/thunder.contract');
const itemTornadoPath = path.join(targetInkDir, 'tornado/tornado.contract');
const itemGardenPath = path.join(targetInkDir, 'garden/garden.contract');
const itemEmberPath = path.join(targetInkDir, 'ember/ember.contract');
const itemKilnPath = path.join(targetInkDir, 'kiln/kiln.contract');
const itemPollinationPath = path.join(targetInkDir, 'pollination/pollination.contract');
const itemSinkholePath = path.join(targetInkDir, 'sinkhole/sinkhole.contract');
const itemBeachPath = path.join(targetInkDir, 'beach/beach.contract');
const itemWetstonePath = path.join(targetInkDir, 'wetstone/wetstone.contract');
const itemErosionPath = path.join(targetInkDir, 'erosion/erosion.contract');
const itemBasaltPath = path.join(targetInkDir, 'basalt/basalt.contract');
const itemMagmaChamberPath = path.join(targetInkDir, 'magma_chamber/magma_chamber.contract');
const itemBreezePath = path.join(targetInkDir, 'breeze/breeze.contract');
const itemWarmBreezePath = path.join(targetInkDir, 'warm_breeze/warm_breeze.contract');
const itemSoilPath = path.join(targetInkDir, 'soil/soil.contract');
const itemCanyonPath = path.join(targetInkDir, 'canyon/canyon.contract');
const itemWindmillPath = path.join(targetInkDir, 'windmill/windmill.contract');
const itemAdobePath = path.join(targetInkDir, 'adobe/adobe.contract');
const itemWallPath = path.join(targetInkDir, 'wall/wall.contract');
const itemPumicePath = path.join(targetInkDir, 'pumice/pumice.contract');
const itemBarbecuePath = path.join(targetInkDir, 'barbecue/barbecue.contract');
const itemFarmPath = path.join(targetInkDir, 'farm/farm.contract');
const itemShardsPath = path.join(targetInkDir, 'shards/shards.contract');
const itemMoltenGlassPath = path.join(targetInkDir, 'molten_glass/molten_glass.contract');
const itemPrismPath = path.join(targetInkDir, 'prism/prism.contract');
const itemSparklePath = path.join(targetInkDir, 'sparkle/sparkle.contract');
const itemDesertPath = path.join(targetInkDir, 'desert/desert.contract');
const itemOasisPath = path.join(targetInkDir, 'oasis/oasis.contract');
const itemMiragePath = path.join(targetInkDir, 'mirage/mirage.contract');
const itemSandDunePath = path.join(targetInkDir, 'sand_dune/sand_dune.contract');
const itemDamPath = path.join(targetInkDir, 'dam/dam.contract');
const itemFirewallPath = path.join(targetInkDir, 'firewall/firewall.contract');
const itemBarricadePath = path.join(targetInkDir, 'barricade/barricade.contract');
const itemPlateauPath = path.join(targetInkDir, 'plateau/plateau.contract');
const itemPondPath = path.join(targetInkDir, 'pond/pond.contract');
const itemAromasPath = path.join(targetInkDir, 'aromas/aromas.contract');
const itemFlowerPath = path.join(targetInkDir, 'flower/flower.contract');
const itemSporePath = path.join(targetInkDir, 'spore/spore.contract');
const itemSpreadPath = path.join(targetInkDir, 'spread/spread.contract');
const itemFertileLandPath = path.join(targetInkDir, 'fertile_land/fertile_land.contract');
const itemWetlandPath = path.join(targetInkDir, 'wetland/wetland.contract');
const itemPeatPath = path.join(targetInkDir, 'peat/peat.contract');
const itemReedsPath = path.join(targetInkDir, 'reeds/reeds.contract');
const itemValleyPath = path.join(targetInkDir, 'valley/valley.contract');
const itemRiverPath = path.join(targetInkDir, 'river/river.contract');
const itemScorchedEarthPath = path.join(targetInkDir, 'scorched_earth/scorched_earth.contract');
const itemDeltaPath = path.join(targetInkDir, 'delta/delta.contract');
const itemEstuaryPath = path.join(targetInkDir, 'estuary/estuary.contract');
const itemFireSwampPath = path.join(targetInkDir, 'fire_swamp/fire_swamp.contract');
const itemRiverbankPath = path.join(targetInkDir, 'riverbank/riverbank.contract');
const itemRavinePath = path.join(targetInkDir, 'ravine/ravine.contract');
const itemGorgePath = path.join(targetInkDir, 'gorge/gorge.contract');
const itemCharredRavinePath = path.join(targetInkDir, 'charred_ravine/charred_ravine.contract');
const itemEchoPath = path.join(targetInkDir, 'echo/echo.contract');
const itemCavePath = path.join(targetInkDir, 'cave/cave.contract');
const itemUndergroundLakePath = path.join(targetInkDir, 'underground_lake/underground_lake.contract');
const itemLavaCavePath = path.join(targetInkDir, 'lava_cave/lava_cave.contract');
const itemWhisperingCavePath = path.join(targetInkDir, 'whispering_cave/whispering_cave.contract');
const itemSubterraneanPoolPath = path.join(targetInkDir, 'subterranean_pool/subterranean_pool.contract');
const itemSpringPath = path.join(targetInkDir, 'spring/spring.contract');
const itemHotSpringPath = path.join(targetInkDir, 'hot_spring/hot_spring.contract');
const itemGrottoPath = path.join(targetInkDir, 'grotto/grotto.contract');
const itemFountainPath = path.join(targetInkDir, 'fountain/fountain.contract');
const itemSteamVentPath = path.join(targetInkDir, 'steam_vent/steam_vent.contract');
const itemCoolBreezePath = path.join(targetInkDir, 'cool_breeze/cool_breeze.contract');
const itemMonumentPath = path.join(targetInkDir, 'monument/monument.contract');
const itemWaterfallPath = path.join(targetInkDir, 'waterfall/waterfall.contract');
const itemEternalFlamePath = path.join(targetInkDir, 'eternal_flame/eternal_flame.contract');
const itemPillarOfWindPath = path.join(targetInkDir, 'pillar_of_wind/pillar_of_wind.contract');
const itemStreamPath = path.join(targetInkDir, 'stream/stream.contract');
const itemZephyrPath = path.join(targetInkDir, 'zephyr/zephyr.contract');
const itemCreekPath = path.join(targetInkDir, 'creek/creek.contract');
const itemBrookPath = path.join(targetInkDir, 'brook/brook.contract');
const itemWhisperPath = path.join(targetInkDir, 'whisper/whisper.contract');
const itemRivuletPath = path.join(targetInkDir, 'rivulet/rivulet.contract');
const itemTributaryPath = path.join(targetInkDir, 'tributary/tributary.contract');
const itemMurmurPath = path.join(targetInkDir, 'murmur/murmur.contract');
const itemWatershedPath = path.join(targetInkDir, 'watershed/watershed.contract');
const itemAquiferPath = path.join(targetInkDir, 'aquifer/aquifer.contract');
const itemParchedEarthPath = path.join(targetInkDir, 'parched_earth/parched_earth.contract');
const itemFreshBreezePath = path.join(targetInkDir, 'fresh_breeze/fresh_breeze.contract');
const itemGroundwaterPath = path.join(targetInkDir, 'groundwater/groundwater.contract');
const itemReservoirPath = path.join(targetInkDir, 'reservoir/reservoir.contract');
const itemGeothermalSpringPath = path.join(targetInkDir, 'geothermal_spring/geothermal_spring.contract');
const itemArtesianWellPath = path.join(targetInkDir, 'artesian_well/artesian_well.contract');
const itemBasinPath = path.join(targetInkDir, 'basin/basin.contract');
const itemLakePath = path.join(targetInkDir, 'lake/lake.contract');
const itemDryBasinPath = path.join(targetInkDir, 'dry_basin/dry_basin.contract');
const itemDepressionPath = path.join(targetInkDir, 'depression/depression.contract');
const itemIslandPath = path.join(targetInkDir, 'island/island.contract');
const itemLagoonPath = path.join(targetInkDir, 'lagoon/lagoon.contract');
const itemWavePath = path.join(targetInkDir, 'wave/wave.contract');
const itemReefPath = path.join(targetInkDir, 'reef/reef.contract');
const itemCoralPath = path.join(targetInkDir, 'coral/coral.contract');
const itemWhirlPath = path.join(targetInkDir, 'whirl/whirl.contract');
const itemLimestonePath = path.join(targetInkDir, 'limestone/limestone.contract');
const itemKarstPath = path.join(targetInkDir, 'karst/karst.contract');
const itemQuicklimePath = path.join(targetInkDir, 'quicklime/quicklime.contract');
const itemBlowholePath = path.join(targetInkDir, 'blowhole/blowhole.contract');
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
    console.log(`Copying monkey_branch ...`);
    fs.copyFileSync(itemMonkeyBranchPath, path.join(contractsV1Dir, 'monkey_branch.contract.json'));
} else {
    console.log(`monkey_branch not found`);
}
if(fs.existsSync(itemBridgePath)) {
    console.log(`Copying bridge ...`);
    fs.copyFileSync(itemBridgePath, path.join(contractsV1Dir, 'bridge.contract.json'));
} else {
    console.log(`bridge not found`);
}
if(fs.existsSync(itemGoldenGatePath)) {
    console.log(`Copying golden_gate ...`);
    fs.copyFileSync(itemGoldenGatePath, path.join(contractsV1Dir, 'golden_gate.contract.json'));
} else {
    console.log(`golden_gate not found`);
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
    console.log(`Copying peer_review ...`);
    fs.copyFileSync(itemPeerReviewPath, path.join(contractsV1Dir, 'peer_review.contract.json'));
} else {
    console.log(`peer_review not found`);
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
    console.log(`Copying super_marmalade ...`);
    fs.copyFileSync(itemSuperMarmaladePath, path.join(contractsV1Dir, 'super_marmalade.contract.json'));
} else {
    console.log(`super_marmalade not found`);
}
if(fs.existsSync(itemHyperMarmaladePath)) {
    console.log(`Copying hyper_marmalade ...`);
    fs.copyFileSync(itemHyperMarmaladePath, path.join(contractsV1Dir, 'hyper_marmalade.contract.json'));
} else {
    console.log(`hyper_marmalade not found`);
}
if(fs.existsSync(itemWaterPath)) {
    console.log(`Copying water ...`);
    fs.copyFileSync(itemWaterPath, path.join(contractsV1Dir, 'water.contract.json'));
} else {
    console.log(`water not found`);
}
if(fs.existsSync(itemFirePath)) {
    console.log(`Copying fire ...`);
    fs.copyFileSync(itemFirePath, path.join(contractsV1Dir, 'fire.contract.json'));
} else {
    console.log(`fire not found`);
}
if(fs.existsSync(itemSteamPath)) {
    console.log(`Copying steam ...`);
    fs.copyFileSync(itemSteamPath, path.join(contractsV1Dir, 'steam.contract.json'));
} else {
    console.log(`steam not found`);
}
if(fs.existsSync(itemEarthPath)) {
    console.log(`Copying earth ...`);
    fs.copyFileSync(itemEarthPath, path.join(contractsV1Dir, 'earth.contract.json'));
} else {
    console.log(`earth not found`);
}
if(fs.existsSync(itemMudPath)) {
    console.log(`Copying mud ...`);
    fs.copyFileSync(itemMudPath, path.join(contractsV1Dir, 'mud.contract.json'));
} else {
    console.log(`mud not found`);
}
if(fs.existsSync(itemLavaPath)) {
    console.log(`Copying lava ...`);
    fs.copyFileSync(itemLavaPath, path.join(contractsV1Dir, 'lava.contract.json'));
} else {
    console.log(`lava not found`);
}
if(fs.existsSync(itemWindPath)) {
    console.log(`Copying wind ...`);
    fs.copyFileSync(itemWindPath, path.join(contractsV1Dir, 'wind.contract.json'));
} else {
    console.log(`wind not found`);
}
if(fs.existsSync(itemDustPath)) {
    console.log(`Copying dust ...`);
    fs.copyFileSync(itemDustPath, path.join(contractsV1Dir, 'dust.contract.json'));
} else {
    console.log(`dust not found`);
}
if(fs.existsSync(itemRainPath)) {
    console.log(`Copying rain ...`);
    fs.copyFileSync(itemRainPath, path.join(contractsV1Dir, 'rain.contract.json'));
} else {
    console.log(`rain not found`);
}
if(fs.existsSync(itemSmokePath)) {
    console.log(`Copying smoke ...`);
    fs.copyFileSync(itemSmokePath, path.join(contractsV1Dir, 'smoke.contract.json'));
} else {
    console.log(`smoke not found`);
}
if(fs.existsSync(itemGeyserPath)) {
    console.log(`Copying geyser ...`);
    fs.copyFileSync(itemGeyserPath, path.join(contractsV1Dir, 'geyser.contract.json'));
} else {
    console.log(`geyser not found`);
}
if(fs.existsSync(itemClayPath)) {
    console.log(`Copying clay ...`);
    fs.copyFileSync(itemClayPath, path.join(contractsV1Dir, 'clay.contract.json'));
} else {
    console.log(`clay not found`);
}
if(fs.existsSync(itemSandPath)) {
    console.log(`Copying sand ...`);
    fs.copyFileSync(itemSandPath, path.join(contractsV1Dir, 'sand.contract.json'));
} else {
    console.log(`sand not found`);
}
if(fs.existsSync(itemPlantPath)) {
    console.log(`Copying plant ...`);
    fs.copyFileSync(itemPlantPath, path.join(contractsV1Dir, 'plant.contract.json'));
} else {
    console.log(`plant not found`);
}
if(fs.existsSync(itemRainbowPath)) {
    console.log(`Copying rainbow ...`);
    fs.copyFileSync(itemRainbowPath, path.join(contractsV1Dir, 'rainbow.contract.json'));
} else {
    console.log(`rainbow not found`);
}
if(fs.existsSync(itemStormPath)) {
    console.log(`Copying storm ...`);
    fs.copyFileSync(itemStormPath, path.join(contractsV1Dir, 'storm.contract.json'));
} else {
    console.log(`storm not found`);
}
if(fs.existsSync(itemObsidianPath)) {
    console.log(`Copying obsidian ...`);
    fs.copyFileSync(itemObsidianPath, path.join(contractsV1Dir, 'obsidian.contract.json'));
} else {
    console.log(`obsidian not found`);
}
if(fs.existsSync(itemAshPath)) {
    console.log(`Copying ash ...`);
    fs.copyFileSync(itemAshPath, path.join(contractsV1Dir, 'ash.contract.json'));
} else {
    console.log(`ash not found`);
}
if(fs.existsSync(itemVolcanoPath)) {
    console.log(`Copying volcano ...`);
    fs.copyFileSync(itemVolcanoPath, path.join(contractsV1Dir, 'volcano.contract.json'));
} else {
    console.log(`volcano not found`);
}
if(fs.existsSync(itemSandstormPath)) {
    console.log(`Copying sandstorm ...`);
    fs.copyFileSync(itemSandstormPath, path.join(contractsV1Dir, 'sandstorm.contract.json'));
} else {
    console.log(`sandstorm not found`);
}
if(fs.existsSync(itemCloudPath)) {
    console.log(`Copying cloud ...`);
    fs.copyFileSync(itemCloudPath, path.join(contractsV1Dir, 'cloud.contract.json'));
} else {
    console.log(`cloud not found`);
}
if(fs.existsSync(itemFogPath)) {
    console.log(`Copying fog ...`);
    fs.copyFileSync(itemFogPath, path.join(contractsV1Dir, 'fog.contract.json'));
} else {
    console.log(`fog not found`);
}
if(fs.existsSync(itemTreePath)) {
    console.log(`Copying tree ...`);
    fs.copyFileSync(itemTreePath, path.join(contractsV1Dir, 'tree.contract.json'));
} else {
    console.log(`tree not found`);
}
if(fs.existsSync(itemForestPath)) {
    console.log(`Copying forest ...`);
    fs.copyFileSync(itemForestPath, path.join(contractsV1Dir, 'forest.contract.json'));
} else {
    console.log(`forest not found`);
}
if(fs.existsSync(itemSeedsPath)) {
    console.log(`Copying seeds ...`);
    fs.copyFileSync(itemSeedsPath, path.join(contractsV1Dir, 'seeds.contract.json'));
} else {
    console.log(`seeds not found`);
}
if(fs.existsSync(itemPotteryPath)) {
    console.log(`Copying pottery ...`);
    fs.copyFileSync(itemPotteryPath, path.join(contractsV1Dir, 'pottery.contract.json'));
} else {
    console.log(`pottery not found`);
}
if(fs.existsSync(itemBrickPath)) {
    console.log(`Copying brick ...`);
    fs.copyFileSync(itemBrickPath, path.join(contractsV1Dir, 'brick.contract.json'));
} else {
    console.log(`brick not found`);
}
if(fs.existsSync(itemQuicksandPath)) {
    console.log(`Copying quicksand ...`);
    fs.copyFileSync(itemQuicksandPath, path.join(contractsV1Dir, 'quicksand.contract.json'));
} else {
    console.log(`quicksand not found`);
}
if(fs.existsSync(itemGlassPath)) {
    console.log(`Copying glass ...`);
    fs.copyFileSync(itemGlassPath, path.join(contractsV1Dir, 'glass.contract.json'));
} else {
    console.log(`glass not found`);
}
if(fs.existsSync(itemDunePath)) {
    console.log(`Copying dune ...`);
    fs.copyFileSync(itemDunePath, path.join(contractsV1Dir, 'dune.contract.json'));
} else {
    console.log(`dune not found`);
}
if(fs.existsSync(itemCharcoalPath)) {
    console.log(`Copying charcoal ...`);
    fs.copyFileSync(itemCharcoalPath, path.join(contractsV1Dir, 'charcoal.contract.json'));
} else {
    console.log(`charcoal not found`);
}
if(fs.existsSync(itemLeavesPath)) {
    console.log(`Copying leaves ...`);
    fs.copyFileSync(itemLeavesPath, path.join(contractsV1Dir, 'leaves.contract.json'));
} else {
    console.log(`leaves not found`);
}
if(fs.existsSync(itemWildfirePath)) {
    console.log(`Copying wildfire ...`);
    fs.copyFileSync(itemWildfirePath, path.join(contractsV1Dir, 'wildfire.contract.json'));
} else {
    console.log(`wildfire not found`);
}
if(fs.existsSync(itemJunglePath)) {
    console.log(`Copying jungle ...`);
    fs.copyFileSync(itemJunglePath, path.join(contractsV1Dir, 'jungle.contract.json'));
} else {
    console.log(`jungle not found`);
}
if(fs.existsSync(itemFrostedGlassPath)) {
    console.log(`Copying frosted_glass ...`);
    fs.copyFileSync(itemFrostedGlassPath, path.join(contractsV1Dir, 'frosted_glass.contract.json'));
} else {
    console.log(`frosted_glass not found`);
}
if(fs.existsSync(itemCrystalPath)) {
    console.log(`Copying crystal ...`);
    fs.copyFileSync(itemCrystalPath, path.join(contractsV1Dir, 'crystal.contract.json'));
} else {
    console.log(`crystal not found`);
}
if(fs.existsSync(itemMagmaPath)) {
    console.log(`Copying magma ...`);
    fs.copyFileSync(itemMagmaPath, path.join(contractsV1Dir, 'magma.contract.json'));
} else {
    console.log(`magma not found`);
}
if(fs.existsSync(itemRockPath)) {
    console.log(`Copying rock ...`);
    fs.copyFileSync(itemRockPath, path.join(contractsV1Dir, 'rock.contract.json'));
} else {
    console.log(`rock not found`);
}
if(fs.existsSync(itemShardPath)) {
    console.log(`Copying shard ...`);
    fs.copyFileSync(itemShardPath, path.join(contractsV1Dir, 'shard.contract.json'));
} else {
    console.log(`shard not found`);
}
if(fs.existsSync(itemPebblePath)) {
    console.log(`Copying pebble ...`);
    fs.copyFileSync(itemPebblePath, path.join(contractsV1Dir, 'pebble.contract.json'));
} else {
    console.log(`pebble not found`);
}
if(fs.existsSync(itemMountainPath)) {
    console.log(`Copying mountain ...`);
    fs.copyFileSync(itemMountainPath, path.join(contractsV1Dir, 'mountain.contract.json'));
} else {
    console.log(`mountain not found`);
}
if(fs.existsSync(itemFertilizerPath)) {
    console.log(`Copying fertilizer ...`);
    fs.copyFileSync(itemFertilizerPath, path.join(contractsV1Dir, 'fertilizer.contract.json'));
} else {
    console.log(`fertilizer not found`);
}
if(fs.existsSync(itemSootPath)) {
    console.log(`Copying soot ...`);
    fs.copyFileSync(itemSootPath, path.join(contractsV1Dir, 'soot.contract.json'));
} else {
    console.log(`soot not found`);
}
if(fs.existsSync(itemLightningPath)) {
    console.log(`Copying lightning ...`);
    fs.copyFileSync(itemLightningPath, path.join(contractsV1Dir, 'lightning.contract.json'));
} else {
    console.log(`lightning not found`);
}
if(fs.existsSync(itemMistPath)) {
    console.log(`Copying mist ...`);
    fs.copyFileSync(itemMistPath, path.join(contractsV1Dir, 'mist.contract.json'));
} else {
    console.log(`mist not found`);
}
if(fs.existsSync(itemHazePath)) {
    console.log(`Copying haze ...`);
    fs.copyFileSync(itemHazePath, path.join(contractsV1Dir, 'haze.contract.json'));
} else {
    console.log(`haze not found`);
}
if(fs.existsSync(itemFloodPath)) {
    console.log(`Copying flood ...`);
    fs.copyFileSync(itemFloodPath, path.join(contractsV1Dir, 'flood.contract.json'));
} else {
    console.log(`flood not found`);
}
if(fs.existsSync(itemLandslidePath)) {
    console.log(`Copying landslide ...`);
    fs.copyFileSync(itemLandslidePath, path.join(contractsV1Dir, 'landslide.contract.json'));
} else {
    console.log(`landslide not found`);
}
if(fs.existsSync(itemThunderPath)) {
    console.log(`Copying thunder ...`);
    fs.copyFileSync(itemThunderPath, path.join(contractsV1Dir, 'thunder.contract.json'));
} else {
    console.log(`thunder not found`);
}
if(fs.existsSync(itemTornadoPath)) {
    console.log(`Copying tornado ...`);
    fs.copyFileSync(itemTornadoPath, path.join(contractsV1Dir, 'tornado.contract.json'));
} else {
    console.log(`tornado not found`);
}
if(fs.existsSync(itemGardenPath)) {
    console.log(`Copying garden ...`);
    fs.copyFileSync(itemGardenPath, path.join(contractsV1Dir, 'garden.contract.json'));
} else {
    console.log(`garden not found`);
}
if(fs.existsSync(itemEmberPath)) {
    console.log(`Copying ember ...`);
    fs.copyFileSync(itemEmberPath, path.join(contractsV1Dir, 'ember.contract.json'));
} else {
    console.log(`ember not found`);
}
if(fs.existsSync(itemKilnPath)) {
    console.log(`Copying kiln ...`);
    fs.copyFileSync(itemKilnPath, path.join(contractsV1Dir, 'kiln.contract.json'));
} else {
    console.log(`kiln not found`);
}
if(fs.existsSync(itemPollinationPath)) {
    console.log(`Copying pollination ...`);
    fs.copyFileSync(itemPollinationPath, path.join(contractsV1Dir, 'pollination.contract.json'));
} else {
    console.log(`pollination not found`);
}
if(fs.existsSync(itemSinkholePath)) {
    console.log(`Copying sinkhole ...`);
    fs.copyFileSync(itemSinkholePath, path.join(contractsV1Dir, 'sinkhole.contract.json'));
} else {
    console.log(`sinkhole not found`);
}
if(fs.existsSync(itemBeachPath)) {
    console.log(`Copying beach ...`);
    fs.copyFileSync(itemBeachPath, path.join(contractsV1Dir, 'beach.contract.json'));
} else {
    console.log(`beach not found`);
}
if(fs.existsSync(itemWetstonePath)) {
    console.log(`Copying wetstone ...`);
    fs.copyFileSync(itemWetstonePath, path.join(contractsV1Dir, 'wetstone.contract.json'));
} else {
    console.log(`wetstone not found`);
}
if(fs.existsSync(itemErosionPath)) {
    console.log(`Copying erosion ...`);
    fs.copyFileSync(itemErosionPath, path.join(contractsV1Dir, 'erosion.contract.json'));
} else {
    console.log(`erosion not found`);
}
if(fs.existsSync(itemBasaltPath)) {
    console.log(`Copying basalt ...`);
    fs.copyFileSync(itemBasaltPath, path.join(contractsV1Dir, 'basalt.contract.json'));
} else {
    console.log(`basalt not found`);
}
if(fs.existsSync(itemMagmaChamberPath)) {
    console.log(`Copying magma_chamber ...`);
    fs.copyFileSync(itemMagmaChamberPath, path.join(contractsV1Dir, 'magma_chamber.contract.json'));
} else {
    console.log(`magma_chamber not found`);
}
if(fs.existsSync(itemBreezePath)) {
    console.log(`Copying breeze ...`);
    fs.copyFileSync(itemBreezePath, path.join(contractsV1Dir, 'breeze.contract.json'));
} else {
    console.log(`breeze not found`);
}
if(fs.existsSync(itemWarmBreezePath)) {
    console.log(`Copying warm_breeze ...`);
    fs.copyFileSync(itemWarmBreezePath, path.join(contractsV1Dir, 'warm_breeze.contract.json'));
} else {
    console.log(`warm_breeze not found`);
}
if(fs.existsSync(itemSoilPath)) {
    console.log(`Copying soil ...`);
    fs.copyFileSync(itemSoilPath, path.join(contractsV1Dir, 'soil.contract.json'));
} else {
    console.log(`soil not found`);
}
if(fs.existsSync(itemCanyonPath)) {
    console.log(`Copying canyon ...`);
    fs.copyFileSync(itemCanyonPath, path.join(contractsV1Dir, 'canyon.contract.json'));
} else {
    console.log(`canyon not found`);
}
if(fs.existsSync(itemWindmillPath)) {
    console.log(`Copying windmill ...`);
    fs.copyFileSync(itemWindmillPath, path.join(contractsV1Dir, 'windmill.contract.json'));
} else {
    console.log(`windmill not found`);
}
if(fs.existsSync(itemAdobePath)) {
    console.log(`Copying adobe ...`);
    fs.copyFileSync(itemAdobePath, path.join(contractsV1Dir, 'adobe.contract.json'));
} else {
    console.log(`adobe not found`);
}
if(fs.existsSync(itemWallPath)) {
    console.log(`Copying wall ...`);
    fs.copyFileSync(itemWallPath, path.join(contractsV1Dir, 'wall.contract.json'));
} else {
    console.log(`wall not found`);
}
if(fs.existsSync(itemPumicePath)) {
    console.log(`Copying pumice ...`);
    fs.copyFileSync(itemPumicePath, path.join(contractsV1Dir, 'pumice.contract.json'));
} else {
    console.log(`pumice not found`);
}
if(fs.existsSync(itemBarbecuePath)) {
    console.log(`Copying barbecue ...`);
    fs.copyFileSync(itemBarbecuePath, path.join(contractsV1Dir, 'barbecue.contract.json'));
} else {
    console.log(`barbecue not found`);
}
if(fs.existsSync(itemFarmPath)) {
    console.log(`Copying farm ...`);
    fs.copyFileSync(itemFarmPath, path.join(contractsV1Dir, 'farm.contract.json'));
} else {
    console.log(`farm not found`);
}
if(fs.existsSync(itemShardsPath)) {
    console.log(`Copying shards ...`);
    fs.copyFileSync(itemShardsPath, path.join(contractsV1Dir, 'shards.contract.json'));
} else {
    console.log(`shards not found`);
}
if(fs.existsSync(itemMoltenGlassPath)) {
    console.log(`Copying molten_glass ...`);
    fs.copyFileSync(itemMoltenGlassPath, path.join(contractsV1Dir, 'molten_glass.contract.json'));
} else {
    console.log(`molten_glass not found`);
}
if(fs.existsSync(itemPrismPath)) {
    console.log(`Copying prism ...`);
    fs.copyFileSync(itemPrismPath, path.join(contractsV1Dir, 'prism.contract.json'));
} else {
    console.log(`prism not found`);
}
if(fs.existsSync(itemSparklePath)) {
    console.log(`Copying sparkle ...`);
    fs.copyFileSync(itemSparklePath, path.join(contractsV1Dir, 'sparkle.contract.json'));
} else {
    console.log(`sparkle not found`);
}
if(fs.existsSync(itemDesertPath)) {
    console.log(`Copying desert ...`);
    fs.copyFileSync(itemDesertPath, path.join(contractsV1Dir, 'desert.contract.json'));
} else {
    console.log(`desert not found`);
}
if(fs.existsSync(itemOasisPath)) {
    console.log(`Copying oasis ...`);
    fs.copyFileSync(itemOasisPath, path.join(contractsV1Dir, 'oasis.contract.json'));
} else {
    console.log(`oasis not found`);
}
if(fs.existsSync(itemMiragePath)) {
    console.log(`Copying mirage ...`);
    fs.copyFileSync(itemMiragePath, path.join(contractsV1Dir, 'mirage.contract.json'));
} else {
    console.log(`mirage not found`);
}
if(fs.existsSync(itemSandDunePath)) {
    console.log(`Copying sand_dune ...`);
    fs.copyFileSync(itemSandDunePath, path.join(contractsV1Dir, 'sand_dune.contract.json'));
} else {
    console.log(`sand_dune not found`);
}
if(fs.existsSync(itemDamPath)) {
    console.log(`Copying dam ...`);
    fs.copyFileSync(itemDamPath, path.join(contractsV1Dir, 'dam.contract.json'));
} else {
    console.log(`dam not found`);
}
if(fs.existsSync(itemFirewallPath)) {
    console.log(`Copying firewall ...`);
    fs.copyFileSync(itemFirewallPath, path.join(contractsV1Dir, 'firewall.contract.json'));
} else {
    console.log(`firewall not found`);
}
if(fs.existsSync(itemBarricadePath)) {
    console.log(`Copying barricade ...`);
    fs.copyFileSync(itemBarricadePath, path.join(contractsV1Dir, 'barricade.contract.json'));
} else {
    console.log(`barricade not found`);
}
if(fs.existsSync(itemPlateauPath)) {
    console.log(`Copying plateau ...`);
    fs.copyFileSync(itemPlateauPath, path.join(contractsV1Dir, 'plateau.contract.json'));
} else {
    console.log(`plateau not found`);
}
if(fs.existsSync(itemPondPath)) {
    console.log(`Copying pond ...`);
    fs.copyFileSync(itemPondPath, path.join(contractsV1Dir, 'pond.contract.json'));
} else {
    console.log(`pond not found`);
}
if(fs.existsSync(itemAromasPath)) {
    console.log(`Copying aromas ...`);
    fs.copyFileSync(itemAromasPath, path.join(contractsV1Dir, 'aromas.contract.json'));
} else {
    console.log(`aromas not found`);
}
if(fs.existsSync(itemFlowerPath)) {
    console.log(`Copying flower ...`);
    fs.copyFileSync(itemFlowerPath, path.join(contractsV1Dir, 'flower.contract.json'));
} else {
    console.log(`flower not found`);
}
if(fs.existsSync(itemSporePath)) {
    console.log(`Copying spore ...`);
    fs.copyFileSync(itemSporePath, path.join(contractsV1Dir, 'spore.contract.json'));
} else {
    console.log(`spore not found`);
}
if(fs.existsSync(itemSpreadPath)) {
    console.log(`Copying spread ...`);
    fs.copyFileSync(itemSpreadPath, path.join(contractsV1Dir, 'spread.contract.json'));
} else {
    console.log(`spread not found`);
}
if(fs.existsSync(itemFertileLandPath)) {
    console.log(`Copying fertile_land ...`);
    fs.copyFileSync(itemFertileLandPath, path.join(contractsV1Dir, 'fertile_land.contract.json'));
} else {
    console.log(`fertile_land not found`);
}
if(fs.existsSync(itemWetlandPath)) {
    console.log(`Copying wetland ...`);
    fs.copyFileSync(itemWetlandPath, path.join(contractsV1Dir, 'wetland.contract.json'));
} else {
    console.log(`wetland not found`);
}
if(fs.existsSync(itemPeatPath)) {
    console.log(`Copying peat ...`);
    fs.copyFileSync(itemPeatPath, path.join(contractsV1Dir, 'peat.contract.json'));
} else {
    console.log(`peat not found`);
}
if(fs.existsSync(itemReedsPath)) {
    console.log(`Copying reeds ...`);
    fs.copyFileSync(itemReedsPath, path.join(contractsV1Dir, 'reeds.contract.json'));
} else {
    console.log(`reeds not found`);
}
if(fs.existsSync(itemValleyPath)) {
    console.log(`Copying valley ...`);
    fs.copyFileSync(itemValleyPath, path.join(contractsV1Dir, 'valley.contract.json'));
} else {
    console.log(`valley not found`);
}
if(fs.existsSync(itemRiverPath)) {
    console.log(`Copying river ...`);
    fs.copyFileSync(itemRiverPath, path.join(contractsV1Dir, 'river.contract.json'));
} else {
    console.log(`river not found`);
}
if(fs.existsSync(itemScorchedEarthPath)) {
    console.log(`Copying scorched_earth ...`);
    fs.copyFileSync(itemScorchedEarthPath, path.join(contractsV1Dir, 'scorched_earth.contract.json'));
} else {
    console.log(`scorched_earth not found`);
}
if(fs.existsSync(itemDeltaPath)) {
    console.log(`Copying delta ...`);
    fs.copyFileSync(itemDeltaPath, path.join(contractsV1Dir, 'delta.contract.json'));
} else {
    console.log(`delta not found`);
}
if(fs.existsSync(itemEstuaryPath)) {
    console.log(`Copying estuary ...`);
    fs.copyFileSync(itemEstuaryPath, path.join(contractsV1Dir, 'estuary.contract.json'));
} else {
    console.log(`estuary not found`);
}
if(fs.existsSync(itemFireSwampPath)) {
    console.log(`Copying fire_swamp ...`);
    fs.copyFileSync(itemFireSwampPath, path.join(contractsV1Dir, 'fire_swamp.contract.json'));
} else {
    console.log(`fire_swamp not found`);
}
if(fs.existsSync(itemRiverbankPath)) {
    console.log(`Copying riverbank ...`);
    fs.copyFileSync(itemRiverbankPath, path.join(contractsV1Dir, 'riverbank.contract.json'));
} else {
    console.log(`riverbank not found`);
}
if(fs.existsSync(itemRavinePath)) {
    console.log(`Copying ravine ...`);
    fs.copyFileSync(itemRavinePath, path.join(contractsV1Dir, 'ravine.contract.json'));
} else {
    console.log(`ravine not found`);
}
if(fs.existsSync(itemGorgePath)) {
    console.log(`Copying gorge ...`);
    fs.copyFileSync(itemGorgePath, path.join(contractsV1Dir, 'gorge.contract.json'));
} else {
    console.log(`gorge not found`);
}
if(fs.existsSync(itemCharredRavinePath)) {
    console.log(`Copying charred_ravine ...`);
    fs.copyFileSync(itemCharredRavinePath, path.join(contractsV1Dir, 'charred_ravine.contract.json'));
} else {
    console.log(`charred_ravine not found`);
}
if(fs.existsSync(itemEchoPath)) {
    console.log(`Copying echo ...`);
    fs.copyFileSync(itemEchoPath, path.join(contractsV1Dir, 'echo.contract.json'));
} else {
    console.log(`echo not found`);
}
if(fs.existsSync(itemCavePath)) {
    console.log(`Copying cave ...`);
    fs.copyFileSync(itemCavePath, path.join(contractsV1Dir, 'cave.contract.json'));
} else {
    console.log(`cave not found`);
}
if(fs.existsSync(itemUndergroundLakePath)) {
    console.log(`Copying underground_lake ...`);
    fs.copyFileSync(itemUndergroundLakePath, path.join(contractsV1Dir, 'underground_lake.contract.json'));
} else {
    console.log(`underground_lake not found`);
}
if(fs.existsSync(itemLavaCavePath)) {
    console.log(`Copying lava_cave ...`);
    fs.copyFileSync(itemLavaCavePath, path.join(contractsV1Dir, 'lava_cave.contract.json'));
} else {
    console.log(`lava_cave not found`);
}
if(fs.existsSync(itemWhisperingCavePath)) {
    console.log(`Copying whispering_cave ...`);
    fs.copyFileSync(itemWhisperingCavePath, path.join(contractsV1Dir, 'whispering_cave.contract.json'));
} else {
    console.log(`whispering_cave not found`);
}
if(fs.existsSync(itemSubterraneanPoolPath)) {
    console.log(`Copying subterranean_pool ...`);
    fs.copyFileSync(itemSubterraneanPoolPath, path.join(contractsV1Dir, 'subterranean_pool.contract.json'));
} else {
    console.log(`subterranean_pool not found`);
}
if(fs.existsSync(itemSpringPath)) {
    console.log(`Copying spring ...`);
    fs.copyFileSync(itemSpringPath, path.join(contractsV1Dir, 'spring.contract.json'));
} else {
    console.log(`spring not found`);
}
if(fs.existsSync(itemHotSpringPath)) {
    console.log(`Copying hot_spring ...`);
    fs.copyFileSync(itemHotSpringPath, path.join(contractsV1Dir, 'hot_spring.contract.json'));
} else {
    console.log(`hot_spring not found`);
}
if(fs.existsSync(itemGrottoPath)) {
    console.log(`Copying grotto ...`);
    fs.copyFileSync(itemGrottoPath, path.join(contractsV1Dir, 'grotto.contract.json'));
} else {
    console.log(`grotto not found`);
}
if(fs.existsSync(itemFountainPath)) {
    console.log(`Copying fountain ...`);
    fs.copyFileSync(itemFountainPath, path.join(contractsV1Dir, 'fountain.contract.json'));
} else {
    console.log(`fountain not found`);
}
if(fs.existsSync(itemSteamVentPath)) {
    console.log(`Copying steam_vent ...`);
    fs.copyFileSync(itemSteamVentPath, path.join(contractsV1Dir, 'steam_vent.contract.json'));
} else {
    console.log(`steam_vent not found`);
}
if(fs.existsSync(itemCoolBreezePath)) {
    console.log(`Copying cool_breeze ...`);
    fs.copyFileSync(itemCoolBreezePath, path.join(contractsV1Dir, 'cool_breeze.contract.json'));
} else {
    console.log(`cool_breeze not found`);
}
if(fs.existsSync(itemMonumentPath)) {
    console.log(`Copying monument ...`);
    fs.copyFileSync(itemMonumentPath, path.join(contractsV1Dir, 'monument.contract.json'));
} else {
    console.log(`monument not found`);
}
if(fs.existsSync(itemWaterfallPath)) {
    console.log(`Copying waterfall ...`);
    fs.copyFileSync(itemWaterfallPath, path.join(contractsV1Dir, 'waterfall.contract.json'));
} else {
    console.log(`waterfall not found`);
}
if(fs.existsSync(itemEternalFlamePath)) {
    console.log(`Copying eternal_flame ...`);
    fs.copyFileSync(itemEternalFlamePath, path.join(contractsV1Dir, 'eternal_flame.contract.json'));
} else {
    console.log(`eternal_flame not found`);
}
if(fs.existsSync(itemPillarOfWindPath)) {
    console.log(`Copying pillar_of_wind ...`);
    fs.copyFileSync(itemPillarOfWindPath, path.join(contractsV1Dir, 'pillar_of_wind.contract.json'));
} else {
    console.log(`pillar_of_wind not found`);
}
if(fs.existsSync(itemStreamPath)) {
    console.log(`Copying stream ...`);
    fs.copyFileSync(itemStreamPath, path.join(contractsV1Dir, 'stream.contract.json'));
} else {
    console.log(`stream not found`);
}
if(fs.existsSync(itemZephyrPath)) {
    console.log(`Copying zephyr ...`);
    fs.copyFileSync(itemZephyrPath, path.join(contractsV1Dir, 'zephyr.contract.json'));
} else {
    console.log(`zephyr not found`);
}
if(fs.existsSync(itemCreekPath)) {
    console.log(`Copying creek ...`);
    fs.copyFileSync(itemCreekPath, path.join(contractsV1Dir, 'creek.contract.json'));
} else {
    console.log(`creek not found`);
}
if(fs.existsSync(itemBrookPath)) {
    console.log(`Copying brook ...`);
    fs.copyFileSync(itemBrookPath, path.join(contractsV1Dir, 'brook.contract.json'));
} else {
    console.log(`brook not found`);
}
if(fs.existsSync(itemWhisperPath)) {
    console.log(`Copying whisper ...`);
    fs.copyFileSync(itemWhisperPath, path.join(contractsV1Dir, 'whisper.contract.json'));
} else {
    console.log(`whisper not found`);
}
if(fs.existsSync(itemRivuletPath)) {
    console.log(`Copying rivulet ...`);
    fs.copyFileSync(itemRivuletPath, path.join(contractsV1Dir, 'rivulet.contract.json'));
} else {
    console.log(`rivulet not found`);
}
if(fs.existsSync(itemTributaryPath)) {
    console.log(`Copying tributary ...`);
    fs.copyFileSync(itemTributaryPath, path.join(contractsV1Dir, 'tributary.contract.json'));
} else {
    console.log(`tributary not found`);
}
if(fs.existsSync(itemMurmurPath)) {
    console.log(`Copying murmur ...`);
    fs.copyFileSync(itemMurmurPath, path.join(contractsV1Dir, 'murmur.contract.json'));
} else {
    console.log(`murmur not found`);
}
if(fs.existsSync(itemWatershedPath)) {
    console.log(`Copying watershed ...`);
    fs.copyFileSync(itemWatershedPath, path.join(contractsV1Dir, 'watershed.contract.json'));
} else {
    console.log(`watershed not found`);
}
if(fs.existsSync(itemAquiferPath)) {
    console.log(`Copying aquifer ...`);
    fs.copyFileSync(itemAquiferPath, path.join(contractsV1Dir, 'aquifer.contract.json'));
} else {
    console.log(`aquifer not found`);
}
if(fs.existsSync(itemParchedEarthPath)) {
    console.log(`Copying parched_earth ...`);
    fs.copyFileSync(itemParchedEarthPath, path.join(contractsV1Dir, 'parched_earth.contract.json'));
} else {
    console.log(`parched_earth not found`);
}
if(fs.existsSync(itemFreshBreezePath)) {
    console.log(`Copying fresh_breeze ...`);
    fs.copyFileSync(itemFreshBreezePath, path.join(contractsV1Dir, 'fresh_breeze.contract.json'));
} else {
    console.log(`fresh_breeze not found`);
}
if(fs.existsSync(itemGroundwaterPath)) {
    console.log(`Copying groundwater ...`);
    fs.copyFileSync(itemGroundwaterPath, path.join(contractsV1Dir, 'groundwater.contract.json'));
} else {
    console.log(`groundwater not found`);
}
if(fs.existsSync(itemReservoirPath)) {
    console.log(`Copying reservoir ...`);
    fs.copyFileSync(itemReservoirPath, path.join(contractsV1Dir, 'reservoir.contract.json'));
} else {
    console.log(`reservoir not found`);
}
if(fs.existsSync(itemGeothermalSpringPath)) {
    console.log(`Copying geothermal_spring ...`);
    fs.copyFileSync(itemGeothermalSpringPath, path.join(contractsV1Dir, 'geothermal_spring.contract.json'));
} else {
    console.log(`geothermal_spring not found`);
}
if(fs.existsSync(itemArtesianWellPath)) {
    console.log(`Copying artesian_well ...`);
    fs.copyFileSync(itemArtesianWellPath, path.join(contractsV1Dir, 'artesian_well.contract.json'));
} else {
    console.log(`artesian_well not found`);
}
if(fs.existsSync(itemBasinPath)) {
    console.log(`Copying basin ...`);
    fs.copyFileSync(itemBasinPath, path.join(contractsV1Dir, 'basin.contract.json'));
} else {
    console.log(`basin not found`);
}
if(fs.existsSync(itemLakePath)) {
    console.log(`Copying lake ...`);
    fs.copyFileSync(itemLakePath, path.join(contractsV1Dir, 'lake.contract.json'));
} else {
    console.log(`lake not found`);
}
if(fs.existsSync(itemDryBasinPath)) {
    console.log(`Copying dry_basin ...`);
    fs.copyFileSync(itemDryBasinPath, path.join(contractsV1Dir, 'dry_basin.contract.json'));
} else {
    console.log(`dry_basin not found`);
}
if(fs.existsSync(itemDepressionPath)) {
    console.log(`Copying depression ...`);
    fs.copyFileSync(itemDepressionPath, path.join(contractsV1Dir, 'depression.contract.json'));
} else {
    console.log(`depression not found`);
}
if(fs.existsSync(itemIslandPath)) {
    console.log(`Copying island ...`);
    fs.copyFileSync(itemIslandPath, path.join(contractsV1Dir, 'island.contract.json'));
} else {
    console.log(`island not found`);
}
if(fs.existsSync(itemLagoonPath)) {
    console.log(`Copying lagoon ...`);
    fs.copyFileSync(itemLagoonPath, path.join(contractsV1Dir, 'lagoon.contract.json'));
} else {
    console.log(`lagoon not found`);
}
if(fs.existsSync(itemWavePath)) {
    console.log(`Copying wave ...`);
    fs.copyFileSync(itemWavePath, path.join(contractsV1Dir, 'wave.contract.json'));
} else {
    console.log(`wave not found`);
}
if(fs.existsSync(itemReefPath)) {
    console.log(`Copying reef ...`);
    fs.copyFileSync(itemReefPath, path.join(contractsV1Dir, 'reef.contract.json'));
} else {
    console.log(`reef not found`);
}
if(fs.existsSync(itemCoralPath)) {
    console.log(`Copying coral ...`);
    fs.copyFileSync(itemCoralPath, path.join(contractsV1Dir, 'coral.contract.json'));
} else {
    console.log(`coral not found`);
}
if(fs.existsSync(itemWhirlPath)) {
    console.log(`Copying whirl ...`);
    fs.copyFileSync(itemWhirlPath, path.join(contractsV1Dir, 'whirl.contract.json'));
} else {
    console.log(`whirl not found`);
}
if(fs.existsSync(itemLimestonePath)) {
    console.log(`Copying limestone ...`);
    fs.copyFileSync(itemLimestonePath, path.join(contractsV1Dir, 'limestone.contract.json'));
} else {
    console.log(`limestone not found`);
}
if(fs.existsSync(itemKarstPath)) {
    console.log(`Copying karst ...`);
    fs.copyFileSync(itemKarstPath, path.join(contractsV1Dir, 'karst.contract.json'));
} else {
    console.log(`karst not found`);
}
if(fs.existsSync(itemQuicklimePath)) {
    console.log(`Copying quicklime ...`);
    fs.copyFileSync(itemQuicklimePath, path.join(contractsV1Dir, 'quicklime.contract.json'));
} else {
    console.log(`quicklime not found`);
}
if(fs.existsSync(itemBlowholePath)) {
    console.log(`Copying blowhole ...`);
    fs.copyFileSync(itemBlowholePath, path.join(contractsV1Dir, 'blowhole.contract.json'));
} else {
    console.log(`blowhole not found`);
}

if(fs.existsSync(gameUnifiersPath)) {
    console.log(`Copying unifiers ...`);
    fs.copyFileSync(gameUnifiersPath, path.join(contractsV1Dir, 'unifiers.contract.json'));
} else {
    console.log(`unifiers not found`);
}
