import { IItem } from './IItem';
import { IRecipe } from './IRecipe';
import { IGameContent } from './IGameContent';

import ITEM_MONKEY_CONTRACT_ABI from "../../../contracts.v1/interfaces/monkey.interface.json";
import ITEM_GIRAFFE_CONTRACT_ABI from "../../../contracts.v1/interfaces/giraffe.interface.json";
import ITEM_BEE_CONTRACT_ABI from "../../../contracts.v1/interfaces/bee.interface.json";
import ITEM_COIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/coin.interface.json";
import ITEM_SWARM_CONTRACT_ABI from "../../../contracts.v1/interfaces/swarm.interface.json";
import ITEM_HYDRA_CONTRACT_ABI from "../../../contracts.v1/interfaces/hydra.interface.json";
import ITEM_MONKEY_BRANCH_CONTRACT_ABI from "../../../contracts.v1/interfaces/monkey_branch.interface.json";
import ITEM_BRIDGE_CONTRACT_ABI from "../../../contracts.v1/interfaces/bridge.interface.json";
import ITEM_GOLDEN_GATE_CONTRACT_ABI from "../../../contracts.v1/interfaces/golden_gate.interface.json";
import ITEM_GOLD_CONTRACT_ABI from "../../../contracts.v1/interfaces/gold.interface.json";
import ITEM_SILVER_CONTRACT_ABI from "../../../contracts.v1/interfaces/silver.interface.json";
import ITEM_RHODIUM_CONTRACT_ABI from "../../../contracts.v1/interfaces/rhodium.interface.json";
import ITEM_HIVE_CONTRACT_ABI from "../../../contracts.v1/interfaces/hive.interface.json";
import ITEM_TRANSACTION_CONTRACT_ABI from "../../../contracts.v1/interfaces/transaction.interface.json";
import ITEM_BLOCK_CONTRACT_ABI from "../../../contracts.v1/interfaces/block.interface.json";
import ITEM_BLOCKCHAIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/blockchain.interface.json";
import ITEM_POLKADOT_CONTRACT_ABI from "../../../contracts.v1/interfaces/polkadot.interface.json";
import ITEM_PEER_REVIEW_CONTRACT_ABI from "../../../contracts.v1/interfaces/peer_review.interface.json";
import ITEM_CARDANO_CONTRACT_ABI from "../../../contracts.v1/interfaces/cardano.interface.json";
import ITEM_BEAR_CONTRACT_ABI from "../../../contracts.v1/interfaces/bear.interface.json";
import ITEM_BEER_CONTRACT_ABI from "../../../contracts.v1/interfaces/beer.interface.json";
import ITEM_LOCK_CONTRACT_ABI from "../../../contracts.v1/interfaces/lock.interface.json";
import ITEM_MARMALADE_CONTRACT_ABI from "../../../contracts.v1/interfaces/marmalade.interface.json";
import ITEM_SUPER_MARMALADE_CONTRACT_ABI from "../../../contracts.v1/interfaces/super_marmalade.interface.json";
import ITEM_HYPER_MARMALADE_CONTRACT_ABI from "../../../contracts.v1/interfaces/hyper_marmalade.interface.json";
import ITEM_WATER_CONTRACT_ABI from "../../../contracts.v1/interfaces/water.interface.json";
import ITEM_FIRE_CONTRACT_ABI from "../../../contracts.v1/interfaces/fire.interface.json";
import ITEM_STEAM_CONTRACT_ABI from "../../../contracts.v1/interfaces/steam.interface.json";
import ITEM_EARTH_CONTRACT_ABI from "../../../contracts.v1/interfaces/earth.interface.json";
import ITEM_MUD_CONTRACT_ABI from "../../../contracts.v1/interfaces/mud.interface.json";
import ITEM_LAVA_CONTRACT_ABI from "../../../contracts.v1/interfaces/lava.interface.json";
import ITEM_WIND_CONTRACT_ABI from "../../../contracts.v1/interfaces/wind.interface.json";
import ITEM_DUST_CONTRACT_ABI from "../../../contracts.v1/interfaces/dust.interface.json";
import ITEM_RAIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/rain.interface.json";
import ITEM_SMOKE_CONTRACT_ABI from "../../../contracts.v1/interfaces/smoke.interface.json";
import ITEM_GEYSER_CONTRACT_ABI from "../../../contracts.v1/interfaces/geyser.interface.json";
import ITEM_CLAY_CONTRACT_ABI from "../../../contracts.v1/interfaces/clay.interface.json";
import ITEM_SAND_CONTRACT_ABI from "../../../contracts.v1/interfaces/sand.interface.json";
import ITEM_PLANT_CONTRACT_ABI from "../../../contracts.v1/interfaces/plant.interface.json";
import ITEM_RAINBOW_CONTRACT_ABI from "../../../contracts.v1/interfaces/rainbow.interface.json";
import ITEM_STORM_CONTRACT_ABI from "../../../contracts.v1/interfaces/storm.interface.json";
import ITEM_OBSIDIAN_CONTRACT_ABI from "../../../contracts.v1/interfaces/obsidian.interface.json";
import ITEM_ASH_CONTRACT_ABI from "../../../contracts.v1/interfaces/ash.interface.json";
import ITEM_VOLCANO_CONTRACT_ABI from "../../../contracts.v1/interfaces/volcano.interface.json";
import ITEM_SANDSTORM_CONTRACT_ABI from "../../../contracts.v1/interfaces/sandstorm.interface.json";
import ITEM_CLOUD_CONTRACT_ABI from "../../../contracts.v1/interfaces/cloud.interface.json";
import ITEM_FOG_CONTRACT_ABI from "../../../contracts.v1/interfaces/fog.interface.json";
import ITEM_TREE_CONTRACT_ABI from "../../../contracts.v1/interfaces/tree.interface.json";
import ITEM_FOREST_CONTRACT_ABI from "../../../contracts.v1/interfaces/forest.interface.json";
import ITEM_SEEDS_CONTRACT_ABI from "../../../contracts.v1/interfaces/seeds.interface.json";
import ITEM_POTTERY_CONTRACT_ABI from "../../../contracts.v1/interfaces/pottery.interface.json";
import ITEM_BRICK_CONTRACT_ABI from "../../../contracts.v1/interfaces/brick.interface.json";
import ITEM_QUICKSAND_CONTRACT_ABI from "../../../contracts.v1/interfaces/quicksand.interface.json";
import ITEM_GLASS_CONTRACT_ABI from "../../../contracts.v1/interfaces/glass.interface.json";
import ITEM_DUNE_CONTRACT_ABI from "../../../contracts.v1/interfaces/dune.interface.json";
import ITEM_CHARCOAL_CONTRACT_ABI from "../../../contracts.v1/interfaces/charcoal.interface.json";
import ITEM_LEAVES_CONTRACT_ABI from "../../../contracts.v1/interfaces/leaves.interface.json";
import ITEM_WILDFIRE_CONTRACT_ABI from "../../../contracts.v1/interfaces/wildfire.interface.json";
import ITEM_JUNGLE_CONTRACT_ABI from "../../../contracts.v1/interfaces/jungle.interface.json";
import ITEM_FROSTED_GLASS_CONTRACT_ABI from "../../../contracts.v1/interfaces/frosted_glass.interface.json";
import ITEM_CRYSTAL_CONTRACT_ABI from "../../../contracts.v1/interfaces/crystal.interface.json";
import ITEM_MAGMA_CONTRACT_ABI from "../../../contracts.v1/interfaces/magma.interface.json";
import ITEM_ROCK_CONTRACT_ABI from "../../../contracts.v1/interfaces/rock.interface.json";
import ITEM_SHARD_CONTRACT_ABI from "../../../contracts.v1/interfaces/shard.interface.json";
import ITEM_PEBBLE_CONTRACT_ABI from "../../../contracts.v1/interfaces/pebble.interface.json";
import ITEM_MOUNTAIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/mountain.interface.json";
import ITEM_FERTILIZER_CONTRACT_ABI from "../../../contracts.v1/interfaces/fertilizer.interface.json";
import ITEM_SOOT_CONTRACT_ABI from "../../../contracts.v1/interfaces/soot.interface.json";
import ITEM_LIGHTNING_CONTRACT_ABI from "../../../contracts.v1/interfaces/lightning.interface.json";
import ITEM_MIST_CONTRACT_ABI from "../../../contracts.v1/interfaces/mist.interface.json";
import ITEM_HAZE_CONTRACT_ABI from "../../../contracts.v1/interfaces/haze.interface.json";
import ITEM_FLOOD_CONTRACT_ABI from "../../../contracts.v1/interfaces/flood.interface.json";
import ITEM_LANDSLIDE_CONTRACT_ABI from "../../../contracts.v1/interfaces/landslide.interface.json";
import ITEM_THUNDER_CONTRACT_ABI from "../../../contracts.v1/interfaces/thunder.interface.json";
import ITEM_TORNADO_CONTRACT_ABI from "../../../contracts.v1/interfaces/tornado.interface.json";
import ITEM_GARDEN_CONTRACT_ABI from "../../../contracts.v1/interfaces/garden.interface.json";
import ITEM_EMBER_CONTRACT_ABI from "../../../contracts.v1/interfaces/ember.interface.json";
import ITEM_KILN_CONTRACT_ABI from "../../../contracts.v1/interfaces/kiln.interface.json";
import ITEM_POLLINATION_CONTRACT_ABI from "../../../contracts.v1/interfaces/pollination.interface.json";
import ITEM_SINKHOLE_CONTRACT_ABI from "../../../contracts.v1/interfaces/sinkhole.interface.json";
import ITEM_BEACH_CONTRACT_ABI from "../../../contracts.v1/interfaces/beach.interface.json";
import ITEM_WETSTONE_CONTRACT_ABI from "../../../contracts.v1/interfaces/wetstone.interface.json";
import ITEM_EROSION_CONTRACT_ABI from "../../../contracts.v1/interfaces/erosion.interface.json";
import ITEM_BASALT_CONTRACT_ABI from "../../../contracts.v1/interfaces/basalt.interface.json";
import ITEM_MAGMA_CHAMBER_CONTRACT_ABI from "../../../contracts.v1/interfaces/magma_chamber.interface.json";
import ITEM_BREEZE_CONTRACT_ABI from "../../../contracts.v1/interfaces/breeze.interface.json";
import ITEM_WARM_BREEZE_CONTRACT_ABI from "../../../contracts.v1/interfaces/warm_breeze.interface.json";
import ITEM_SOIL_CONTRACT_ABI from "../../../contracts.v1/interfaces/soil.interface.json";
import ITEM_CANYON_CONTRACT_ABI from "../../../contracts.v1/interfaces/canyon.interface.json";
import ITEM_WINDMILL_CONTRACT_ABI from "../../../contracts.v1/interfaces/windmill.interface.json";
import ITEM_ADOBE_CONTRACT_ABI from "../../../contracts.v1/interfaces/adobe.interface.json";
import ITEM_WALL_CONTRACT_ABI from "../../../contracts.v1/interfaces/wall.interface.json";
import ITEM_PUMICE_CONTRACT_ABI from "../../../contracts.v1/interfaces/pumice.interface.json";
import ITEM_BARBECUE_CONTRACT_ABI from "../../../contracts.v1/interfaces/barbecue.interface.json";
import ITEM_FARM_CONTRACT_ABI from "../../../contracts.v1/interfaces/farm.interface.json";
import ITEM_SHARDS_CONTRACT_ABI from "../../../contracts.v1/interfaces/shards.interface.json";
import ITEM_MOLTEN_GLASS_CONTRACT_ABI from "../../../contracts.v1/interfaces/molten_glass.interface.json";
import ITEM_PRISM_CONTRACT_ABI from "../../../contracts.v1/interfaces/prism.interface.json";
import ITEM_SPARKLE_CONTRACT_ABI from "../../../contracts.v1/interfaces/sparkle.interface.json";
import ITEM_DESERT_CONTRACT_ABI from "../../../contracts.v1/interfaces/desert.interface.json";
import ITEM_OASIS_CONTRACT_ABI from "../../../contracts.v1/interfaces/oasis.interface.json";
import ITEM_MIRAGE_CONTRACT_ABI from "../../../contracts.v1/interfaces/mirage.interface.json";
import ITEM_SAND_DUNE_CONTRACT_ABI from "../../../contracts.v1/interfaces/sand_dune.interface.json";
import ITEM_DAM_CONTRACT_ABI from "../../../contracts.v1/interfaces/dam.interface.json";
import ITEM_FIREWALL_CONTRACT_ABI from "../../../contracts.v1/interfaces/firewall.interface.json";
import ITEM_BARRICADE_CONTRACT_ABI from "../../../contracts.v1/interfaces/barricade.interface.json";
import ITEM_PLATEAU_CONTRACT_ABI from "../../../contracts.v1/interfaces/plateau.interface.json";
import ITEM_POND_CONTRACT_ABI from "../../../contracts.v1/interfaces/pond.interface.json";
import ITEM_AROMAS_CONTRACT_ABI from "../../../contracts.v1/interfaces/aromas.interface.json";
import ITEM_FLOWER_CONTRACT_ABI from "../../../contracts.v1/interfaces/flower.interface.json";
import ITEM_SPORE_CONTRACT_ABI from "../../../contracts.v1/interfaces/spore.interface.json";
import ITEM_SPREAD_CONTRACT_ABI from "../../../contracts.v1/interfaces/spread.interface.json";
import ITEM_FERTILE_LAND_CONTRACT_ABI from "../../../contracts.v1/interfaces/fertile_land.interface.json";
import ITEM_WETLAND_CONTRACT_ABI from "../../../contracts.v1/interfaces/wetland.interface.json";
import ITEM_PEAT_CONTRACT_ABI from "../../../contracts.v1/interfaces/peat.interface.json";
import ITEM_REEDS_CONTRACT_ABI from "../../../contracts.v1/interfaces/reeds.interface.json";
import ITEM_VALLEY_CONTRACT_ABI from "../../../contracts.v1/interfaces/valley.interface.json";
import ITEM_RIVER_CONTRACT_ABI from "../../../contracts.v1/interfaces/river.interface.json";
import ITEM_SCORCHED_EARTH_CONTRACT_ABI from "../../../contracts.v1/interfaces/scorched_earth.interface.json";
import ITEM_DELTA_CONTRACT_ABI from "../../../contracts.v1/interfaces/delta.interface.json";
import ITEM_ESTUARY_CONTRACT_ABI from "../../../contracts.v1/interfaces/estuary.interface.json";
import ITEM_FIRE_SWAMP_CONTRACT_ABI from "../../../contracts.v1/interfaces/fire_swamp.interface.json";
import ITEM_RIVERBANK_CONTRACT_ABI from "../../../contracts.v1/interfaces/riverbank.interface.json";
import ITEM_RAVINE_CONTRACT_ABI from "../../../contracts.v1/interfaces/ravine.interface.json";
import ITEM_GORGE_CONTRACT_ABI from "../../../contracts.v1/interfaces/gorge.interface.json";
import ITEM_CHARRED_RAVINE_CONTRACT_ABI from "../../../contracts.v1/interfaces/charred_ravine.interface.json";
import ITEM_ECHO_CONTRACT_ABI from "../../../contracts.v1/interfaces/echo.interface.json";
import ITEM_CAVE_CONTRACT_ABI from "../../../contracts.v1/interfaces/cave.interface.json";
import ITEM_UNDERGROUND_LAKE_CONTRACT_ABI from "../../../contracts.v1/interfaces/underground_lake.interface.json";
import ITEM_LAVA_CAVE_CONTRACT_ABI from "../../../contracts.v1/interfaces/lava_cave.interface.json";
import ITEM_WHISPERING_CAVE_CONTRACT_ABI from "../../../contracts.v1/interfaces/whispering_cave.interface.json";
import ITEM_SUBTERRANEAN_POOL_CONTRACT_ABI from "../../../contracts.v1/interfaces/subterranean_pool.interface.json";
import ITEM_SPRING_CONTRACT_ABI from "../../../contracts.v1/interfaces/spring.interface.json";
import ITEM_HOT_SPRING_CONTRACT_ABI from "../../../contracts.v1/interfaces/hot_spring.interface.json";
import ITEM_GROTTO_CONTRACT_ABI from "../../../contracts.v1/interfaces/grotto.interface.json";
import ITEM_FOUNTAIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/fountain.interface.json";
import ITEM_STEAM_VENT_CONTRACT_ABI from "../../../contracts.v1/interfaces/steam_vent.interface.json";
import ITEM_COOL_BREEZE_CONTRACT_ABI from "../../../contracts.v1/interfaces/cool_breeze.interface.json";
import ITEM_MONUMENT_CONTRACT_ABI from "../../../contracts.v1/interfaces/monument.interface.json";
import ITEM_WATERFALL_CONTRACT_ABI from "../../../contracts.v1/interfaces/waterfall.interface.json";
import ITEM_ETERNAL_FLAME_CONTRACT_ABI from "../../../contracts.v1/interfaces/eternal_flame.interface.json";
import ITEM_PILLAR_OF_WIND_CONTRACT_ABI from "../../../contracts.v1/interfaces/pillar_of_wind.interface.json";
import ITEM_STREAM_CONTRACT_ABI from "../../../contracts.v1/interfaces/stream.interface.json";
import ITEM_ZEPHYR_CONTRACT_ABI from "../../../contracts.v1/interfaces/zephyr.interface.json";
import ITEM_CREEK_CONTRACT_ABI from "../../../contracts.v1/interfaces/creek.interface.json";
import ITEM_BROOK_CONTRACT_ABI from "../../../contracts.v1/interfaces/brook.interface.json";
import ITEM_WHISPER_CONTRACT_ABI from "../../../contracts.v1/interfaces/whisper.interface.json";
import ITEM_RIVULET_CONTRACT_ABI from "../../../contracts.v1/interfaces/rivulet.interface.json";
import ITEM_TRIBUTARY_CONTRACT_ABI from "../../../contracts.v1/interfaces/tributary.interface.json";
import ITEM_MURMUR_CONTRACT_ABI from "../../../contracts.v1/interfaces/murmur.interface.json";
import ITEM_WATERSHED_CONTRACT_ABI from "../../../contracts.v1/interfaces/watershed.interface.json";
import ITEM_AQUIFER_CONTRACT_ABI from "../../../contracts.v1/interfaces/aquifer.interface.json";
import ITEM_PARCHED_EARTH_CONTRACT_ABI from "../../../contracts.v1/interfaces/parched_earth.interface.json";
import ITEM_FRESH_BREEZE_CONTRACT_ABI from "../../../contracts.v1/interfaces/fresh_breeze.interface.json";
import ITEM_GROUNDWATER_CONTRACT_ABI from "../../../contracts.v1/interfaces/groundwater.interface.json";
import ITEM_RESERVOIR_CONTRACT_ABI from "../../../contracts.v1/interfaces/reservoir.interface.json";
import ITEM_GEOTHERMAL_SPRING_CONTRACT_ABI from "../../../contracts.v1/interfaces/geothermal_spring.interface.json";
import ITEM_ARTESIAN_WELL_CONTRACT_ABI from "../../../contracts.v1/interfaces/artesian_well.interface.json";
import ITEM_BASIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/basin.interface.json";
import ITEM_LAKE_CONTRACT_ABI from "../../../contracts.v1/interfaces/lake.interface.json";
import ITEM_DRY_BASIN_CONTRACT_ABI from "../../../contracts.v1/interfaces/dry_basin.interface.json";
import ITEM_DEPRESSION_CONTRACT_ABI from "../../../contracts.v1/interfaces/depression.interface.json";
import ITEM_ISLAND_CONTRACT_ABI from "../../../contracts.v1/interfaces/island.interface.json";
import ITEM_LAGOON_CONTRACT_ABI from "../../../contracts.v1/interfaces/lagoon.interface.json";
import ITEM_WAVE_CONTRACT_ABI from "../../../contracts.v1/interfaces/wave.interface.json";
import ITEM_REEF_CONTRACT_ABI from "../../../contracts.v1/interfaces/reef.interface.json";
import ITEM_CORAL_CONTRACT_ABI from "../../../contracts.v1/interfaces/coral.interface.json";
import ITEM_WHIRL_CONTRACT_ABI from "../../../contracts.v1/interfaces/whirl.interface.json";
import ITEM_LIMESTONE_CONTRACT_ABI from "../../../contracts.v1/interfaces/limestone.interface.json";
import ITEM_KARST_CONTRACT_ABI from "../../../contracts.v1/interfaces/karst.interface.json";
import ITEM_QUICKLIME_CONTRACT_ABI from "../../../contracts.v1/interfaces/quicklime.interface.json";
import ITEM_BLOWHOLE_CONTRACT_ABI from "../../../contracts.v1/interfaces/blowhole.interface.json";

import GAME_UNIFIERS_CONTRACT_ABI from "../../../contracts.v1/interfaces/unifiers.interface.json";

export const ITEM_MONKEY: IItem = {
    id: 0,
    name: 'Monkey',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MONKEY_CONTRACT_ABI,
};
export const ITEM_GIRAFFE: IItem = {
    id: 1,
    name: 'Giraffe',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GIRAFFE_CONTRACT_ABI,
};
export const ITEM_BEE: IItem = {
    id: 2,
    name: 'Bee',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BEE_CONTRACT_ABI,
};
export const ITEM_COIN: IItem = {
    id: 3,
    name: 'Coin',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_COIN_CONTRACT_ABI,
};
export const ITEM_SWARM: IItem = {
    id: 4,
    name: 'Swarm',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_SWARM_CONTRACT_ABI,
};
export const ITEM_HYDRA: IItem = {
    id: 5,
    name: 'Hydra',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_HYDRA_CONTRACT_ABI,
};
export const ITEM_MONKEY_BRANCH: IItem = {
    id: 6,
    name: 'Monkey Branch',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_MONKEY_BRANCH_CONTRACT_ABI,
};
export const ITEM_BRIDGE: IItem = {
    id: 7,
    name: 'Bridge',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_BRIDGE_CONTRACT_ABI,
};
export const ITEM_GOLDEN_GATE: IItem = {
    id: 8,
    name: 'Golden Gate',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_GOLDEN_GATE_CONTRACT_ABI,
};
export const ITEM_GOLD: IItem = {
    id: 9,
    name: 'Gold',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GOLD_CONTRACT_ABI,
};
export const ITEM_SILVER: IItem = {
    id: 10,
    name: 'Silver',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SILVER_CONTRACT_ABI,
};
export const ITEM_RHODIUM: IItem = {
    id: 11,
    name: 'Rhodium',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RHODIUM_CONTRACT_ABI,
};
export const ITEM_HIVE: IItem = {
    id: 12,
    name: 'Hive',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_HIVE_CONTRACT_ABI,
};
export const ITEM_TRANSACTION: IItem = {
    id: 13,
    name: 'Transaction',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_TRANSACTION_CONTRACT_ABI,
};
export const ITEM_BLOCK: IItem = {
    id: 14,
    name: 'Block',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BLOCK_CONTRACT_ABI,
};
export const ITEM_BLOCKCHAIN: IItem = {
    id: 15,
    name: 'Blockchain',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BLOCKCHAIN_CONTRACT_ABI,
};
export const ITEM_POLKADOT: IItem = {
    id: 16,
    name: 'Polkadot',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_POLKADOT_CONTRACT_ABI,
};
export const ITEM_PEER_REVIEW: IItem = {
    id: 17,
    name: 'Peer Review',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PEER_REVIEW_CONTRACT_ABI,
};
export const ITEM_CARDANO: IItem = {
    id: 18,
    name: 'Cardano',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_CARDANO_CONTRACT_ABI,
};
export const ITEM_BEAR: IItem = {
    id: 19,
    name: 'Bear',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BEAR_CONTRACT_ABI,
};
export const ITEM_BEER: IItem = {
    id: 20,
    name: 'Beer',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_BEER_CONTRACT_ABI,
};
export const ITEM_LOCK: IItem = {
    id: 21,
    name: 'Lock',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_LOCK_CONTRACT_ABI,
};
export const ITEM_MARMALADE: IItem = {
    id: 22,
    name: 'Marmalade',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MARMALADE_CONTRACT_ABI,
};
export const ITEM_SUPER_MARMALADE: IItem = {
    id: 23,
    name: 'Super Marmalade',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_SUPER_MARMALADE_CONTRACT_ABI,
};
export const ITEM_HYPER_MARMALADE: IItem = {
    id: 24,
    name: 'Hyper Marmalade',
    description: 'We need a description here',
    tier: 2,
    contractAbi: ITEM_HYPER_MARMALADE_CONTRACT_ABI,
};
export const ITEM_WATER: IItem = {
    id: 25,
    name: 'Water',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WATER_CONTRACT_ABI,
};
export const ITEM_FIRE: IItem = {
    id: 26,
    name: 'Fire',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FIRE_CONTRACT_ABI,
};
export const ITEM_STEAM: IItem = {
    id: 27,
    name: 'Steam',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_STEAM_CONTRACT_ABI,
};
export const ITEM_EARTH: IItem = {
    id: 28,
    name: 'Earth',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_EARTH_CONTRACT_ABI,
};
export const ITEM_MUD: IItem = {
    id: 29,
    name: 'Mud',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MUD_CONTRACT_ABI,
};
export const ITEM_LAVA: IItem = {
    id: 30,
    name: 'Lava',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LAVA_CONTRACT_ABI,
};
export const ITEM_WIND: IItem = {
    id: 31,
    name: 'Wind',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WIND_CONTRACT_ABI,
};
export const ITEM_DUST: IItem = {
    id: 32,
    name: 'Dust',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DUST_CONTRACT_ABI,
};
export const ITEM_RAIN: IItem = {
    id: 33,
    name: 'Rain',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RAIN_CONTRACT_ABI,
};
export const ITEM_SMOKE: IItem = {
    id: 34,
    name: 'Smoke',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SMOKE_CONTRACT_ABI,
};
export const ITEM_GEYSER: IItem = {
    id: 35,
    name: 'Geyser',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GEYSER_CONTRACT_ABI,
};
export const ITEM_CLAY: IItem = {
    id: 36,
    name: 'Clay',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CLAY_CONTRACT_ABI,
};
export const ITEM_SAND: IItem = {
    id: 37,
    name: 'Sand',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SAND_CONTRACT_ABI,
};
export const ITEM_PLANT: IItem = {
    id: 38,
    name: 'Plant',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PLANT_CONTRACT_ABI,
};
export const ITEM_RAINBOW: IItem = {
    id: 39,
    name: 'Rainbow',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RAINBOW_CONTRACT_ABI,
};
export const ITEM_STORM: IItem = {
    id: 40,
    name: 'Storm',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_STORM_CONTRACT_ABI,
};
export const ITEM_OBSIDIAN: IItem = {
    id: 41,
    name: 'Obsidian',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_OBSIDIAN_CONTRACT_ABI,
};
export const ITEM_ASH: IItem = {
    id: 42,
    name: 'Ash',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ASH_CONTRACT_ABI,
};
export const ITEM_VOLCANO: IItem = {
    id: 43,
    name: 'Volcano',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_VOLCANO_CONTRACT_ABI,
};
export const ITEM_SANDSTORM: IItem = {
    id: 44,
    name: 'Sandstorm',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SANDSTORM_CONTRACT_ABI,
};
export const ITEM_CLOUD: IItem = {
    id: 45,
    name: 'Cloud',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CLOUD_CONTRACT_ABI,
};
export const ITEM_FOG: IItem = {
    id: 46,
    name: 'Fog',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FOG_CONTRACT_ABI,
};
export const ITEM_TREE: IItem = {
    id: 47,
    name: 'Tree',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_TREE_CONTRACT_ABI,
};
export const ITEM_FOREST: IItem = {
    id: 48,
    name: 'Forest',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FOREST_CONTRACT_ABI,
};
export const ITEM_SEEDS: IItem = {
    id: 49,
    name: 'Seeds',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SEEDS_CONTRACT_ABI,
};
export const ITEM_POTTERY: IItem = {
    id: 50,
    name: 'Pottery',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_POTTERY_CONTRACT_ABI,
};
export const ITEM_BRICK: IItem = {
    id: 51,
    name: 'Brick',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BRICK_CONTRACT_ABI,
};
export const ITEM_QUICKSAND: IItem = {
    id: 52,
    name: 'Quicksand',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_QUICKSAND_CONTRACT_ABI,
};
export const ITEM_GLASS: IItem = {
    id: 53,
    name: 'Glass',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GLASS_CONTRACT_ABI,
};
export const ITEM_DUNE: IItem = {
    id: 54,
    name: 'Dune',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DUNE_CONTRACT_ABI,
};
export const ITEM_CHARCOAL: IItem = {
    id: 55,
    name: 'Charcoal',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CHARCOAL_CONTRACT_ABI,
};
export const ITEM_LEAVES: IItem = {
    id: 56,
    name: 'Leaves',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LEAVES_CONTRACT_ABI,
};
export const ITEM_WILDFIRE: IItem = {
    id: 57,
    name: 'Wildfire',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WILDFIRE_CONTRACT_ABI,
};
export const ITEM_JUNGLE: IItem = {
    id: 58,
    name: 'Jungle',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_JUNGLE_CONTRACT_ABI,
};
export const ITEM_FROSTED_GLASS: IItem = {
    id: 59,
    name: 'Frosted Glass',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FROSTED_GLASS_CONTRACT_ABI,
};
export const ITEM_CRYSTAL: IItem = {
    id: 60,
    name: 'Crystal',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CRYSTAL_CONTRACT_ABI,
};
export const ITEM_MAGMA: IItem = {
    id: 61,
    name: 'Magma',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MAGMA_CONTRACT_ABI,
};
export const ITEM_ROCK: IItem = {
    id: 62,
    name: 'Rock',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ROCK_CONTRACT_ABI,
};
export const ITEM_SHARD: IItem = {
    id: 63,
    name: 'Shard',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SHARD_CONTRACT_ABI,
};
export const ITEM_PEBBLE: IItem = {
    id: 64,
    name: 'Pebble',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PEBBLE_CONTRACT_ABI,
};
export const ITEM_MOUNTAIN: IItem = {
    id: 65,
    name: 'Mountain',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MOUNTAIN_CONTRACT_ABI,
};
export const ITEM_FERTILIZER: IItem = {
    id: 66,
    name: 'Fertilizer',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FERTILIZER_CONTRACT_ABI,
};
export const ITEM_SOOT: IItem = {
    id: 67,
    name: 'Soot',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SOOT_CONTRACT_ABI,
};
export const ITEM_LIGHTNING: IItem = {
    id: 68,
    name: 'Lightning',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LIGHTNING_CONTRACT_ABI,
};
export const ITEM_MIST: IItem = {
    id: 69,
    name: 'Mist',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MIST_CONTRACT_ABI,
};
export const ITEM_HAZE: IItem = {
    id: 70,
    name: 'Haze',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_HAZE_CONTRACT_ABI,
};
export const ITEM_FLOOD: IItem = {
    id: 71,
    name: 'Flood',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FLOOD_CONTRACT_ABI,
};
export const ITEM_LANDSLIDE: IItem = {
    id: 72,
    name: 'Landslide',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LANDSLIDE_CONTRACT_ABI,
};
export const ITEM_THUNDER: IItem = {
    id: 73,
    name: 'Thunder',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_THUNDER_CONTRACT_ABI,
};
export const ITEM_TORNADO: IItem = {
    id: 74,
    name: 'Tornado',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_TORNADO_CONTRACT_ABI,
};
export const ITEM_GARDEN: IItem = {
    id: 75,
    name: 'Garden',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GARDEN_CONTRACT_ABI,
};
export const ITEM_EMBER: IItem = {
    id: 76,
    name: 'Ember',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_EMBER_CONTRACT_ABI,
};
export const ITEM_KILN: IItem = {
    id: 77,
    name: 'Kiln',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_KILN_CONTRACT_ABI,
};
export const ITEM_POLLINATION: IItem = {
    id: 78,
    name: 'Pollination',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_POLLINATION_CONTRACT_ABI,
};
export const ITEM_SINKHOLE: IItem = {
    id: 79,
    name: 'Sinkhole',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SINKHOLE_CONTRACT_ABI,
};
export const ITEM_BEACH: IItem = {
    id: 80,
    name: 'Beach',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BEACH_CONTRACT_ABI,
};
export const ITEM_WETSTONE: IItem = {
    id: 81,
    name: 'Wetstone',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WETSTONE_CONTRACT_ABI,
};
export const ITEM_EROSION: IItem = {
    id: 82,
    name: 'Erosion',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_EROSION_CONTRACT_ABI,
};
export const ITEM_BASALT: IItem = {
    id: 83,
    name: 'Basalt',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BASALT_CONTRACT_ABI,
};
export const ITEM_MAGMA_CHAMBER: IItem = {
    id: 84,
    name: 'Magma Chamber',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MAGMA_CHAMBER_CONTRACT_ABI,
};
export const ITEM_BREEZE: IItem = {
    id: 85,
    name: 'Breeze',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BREEZE_CONTRACT_ABI,
};
export const ITEM_WARM_BREEZE: IItem = {
    id: 86,
    name: 'Warm Breeze',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WARM_BREEZE_CONTRACT_ABI,
};
export const ITEM_SOIL: IItem = {
    id: 87,
    name: 'Soil',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SOIL_CONTRACT_ABI,
};
export const ITEM_CANYON: IItem = {
    id: 88,
    name: 'Canyon',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CANYON_CONTRACT_ABI,
};
export const ITEM_WINDMILL: IItem = {
    id: 89,
    name: 'Windmill',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WINDMILL_CONTRACT_ABI,
};
export const ITEM_ADOBE: IItem = {
    id: 90,
    name: 'Adobe',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ADOBE_CONTRACT_ABI,
};
export const ITEM_WALL: IItem = {
    id: 91,
    name: 'Wall',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WALL_CONTRACT_ABI,
};
export const ITEM_PUMICE: IItem = {
    id: 92,
    name: 'Pumice',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PUMICE_CONTRACT_ABI,
};
export const ITEM_BARBECUE: IItem = {
    id: 93,
    name: 'Barbecue',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BARBECUE_CONTRACT_ABI,
};
export const ITEM_FARM: IItem = {
    id: 94,
    name: 'Farm',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FARM_CONTRACT_ABI,
};
export const ITEM_SHARDS: IItem = {
    id: 95,
    name: 'Shards',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SHARDS_CONTRACT_ABI,
};
export const ITEM_MOLTEN_GLASS: IItem = {
    id: 96,
    name: 'Molten Glass',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MOLTEN_GLASS_CONTRACT_ABI,
};
export const ITEM_PRISM: IItem = {
    id: 97,
    name: 'Prism',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PRISM_CONTRACT_ABI,
};
export const ITEM_SPARKLE: IItem = {
    id: 98,
    name: 'Sparkle',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SPARKLE_CONTRACT_ABI,
};
export const ITEM_DESERT: IItem = {
    id: 99,
    name: 'Desert',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DESERT_CONTRACT_ABI,
};
export const ITEM_OASIS: IItem = {
    id: 100,
    name: 'Oasis',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_OASIS_CONTRACT_ABI,
};
export const ITEM_MIRAGE: IItem = {
    id: 101,
    name: 'Mirage',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MIRAGE_CONTRACT_ABI,
};
export const ITEM_SAND_DUNE: IItem = {
    id: 102,
    name: 'Sand Dune',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SAND_DUNE_CONTRACT_ABI,
};
export const ITEM_DAM: IItem = {
    id: 103,
    name: 'Dam',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DAM_CONTRACT_ABI,
};
export const ITEM_FIREWALL: IItem = {
    id: 104,
    name: 'Firewall',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FIREWALL_CONTRACT_ABI,
};
export const ITEM_BARRICADE: IItem = {
    id: 105,
    name: 'Barricade',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BARRICADE_CONTRACT_ABI,
};
export const ITEM_PLATEAU: IItem = {
    id: 106,
    name: 'Plateau',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PLATEAU_CONTRACT_ABI,
};
export const ITEM_POND: IItem = {
    id: 107,
    name: 'Pond',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_POND_CONTRACT_ABI,
};
export const ITEM_AROMAS: IItem = {
    id: 108,
    name: 'Aromas',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_AROMAS_CONTRACT_ABI,
};
export const ITEM_FLOWER: IItem = {
    id: 109,
    name: 'Flower',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FLOWER_CONTRACT_ABI,
};
export const ITEM_SPORE: IItem = {
    id: 110,
    name: 'Spore',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SPORE_CONTRACT_ABI,
};
export const ITEM_SPREAD: IItem = {
    id: 111,
    name: 'Spread',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SPREAD_CONTRACT_ABI,
};
export const ITEM_FERTILE_LAND: IItem = {
    id: 112,
    name: 'Fertile Land',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FERTILE_LAND_CONTRACT_ABI,
};
export const ITEM_WETLAND: IItem = {
    id: 113,
    name: 'Wetland',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WETLAND_CONTRACT_ABI,
};
export const ITEM_PEAT: IItem = {
    id: 114,
    name: 'Peat',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PEAT_CONTRACT_ABI,
};
export const ITEM_REEDS: IItem = {
    id: 115,
    name: 'Reeds',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_REEDS_CONTRACT_ABI,
};
export const ITEM_VALLEY: IItem = {
    id: 116,
    name: 'Valley',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_VALLEY_CONTRACT_ABI,
};
export const ITEM_RIVER: IItem = {
    id: 117,
    name: 'River',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RIVER_CONTRACT_ABI,
};
export const ITEM_SCORCHED_EARTH: IItem = {
    id: 118,
    name: 'Scorched Earth',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SCORCHED_EARTH_CONTRACT_ABI,
};
export const ITEM_DELTA: IItem = {
    id: 119,
    name: 'Delta',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DELTA_CONTRACT_ABI,
};
export const ITEM_ESTUARY: IItem = {
    id: 120,
    name: 'Estuary',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ESTUARY_CONTRACT_ABI,
};
export const ITEM_FIRE_SWAMP: IItem = {
    id: 121,
    name: 'Fire Swamp',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FIRE_SWAMP_CONTRACT_ABI,
};
export const ITEM_RIVERBANK: IItem = {
    id: 122,
    name: 'Riverbank',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RIVERBANK_CONTRACT_ABI,
};
export const ITEM_RAVINE: IItem = {
    id: 123,
    name: 'Ravine',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RAVINE_CONTRACT_ABI,
};
export const ITEM_GORGE: IItem = {
    id: 124,
    name: 'Gorge',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GORGE_CONTRACT_ABI,
};
export const ITEM_CHARRED_RAVINE: IItem = {
    id: 125,
    name: 'Charred Ravine',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CHARRED_RAVINE_CONTRACT_ABI,
};
export const ITEM_ECHO: IItem = {
    id: 126,
    name: 'Echo',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ECHO_CONTRACT_ABI,
};
export const ITEM_CAVE: IItem = {
    id: 127,
    name: 'Cave',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CAVE_CONTRACT_ABI,
};
export const ITEM_UNDERGROUND_LAKE: IItem = {
    id: 128,
    name: 'Underground Lake',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_UNDERGROUND_LAKE_CONTRACT_ABI,
};
export const ITEM_LAVA_CAVE: IItem = {
    id: 129,
    name: 'Lava Cave',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LAVA_CAVE_CONTRACT_ABI,
};
export const ITEM_WHISPERING_CAVE: IItem = {
    id: 130,
    name: 'Whispering Cave',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WHISPERING_CAVE_CONTRACT_ABI,
};
export const ITEM_SUBTERRANEAN_POOL: IItem = {
    id: 131,
    name: 'Subterranean Pool',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SUBTERRANEAN_POOL_CONTRACT_ABI,
};
export const ITEM_SPRING: IItem = {
    id: 132,
    name: 'Spring',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_SPRING_CONTRACT_ABI,
};
export const ITEM_HOT_SPRING: IItem = {
    id: 133,
    name: 'Hot Spring',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_HOT_SPRING_CONTRACT_ABI,
};
export const ITEM_GROTTO: IItem = {
    id: 134,
    name: 'Grotto',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GROTTO_CONTRACT_ABI,
};
export const ITEM_FOUNTAIN: IItem = {
    id: 135,
    name: 'Fountain',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FOUNTAIN_CONTRACT_ABI,
};
export const ITEM_STEAM_VENT: IItem = {
    id: 136,
    name: 'Steam Vent',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_STEAM_VENT_CONTRACT_ABI,
};
export const ITEM_COOL_BREEZE: IItem = {
    id: 137,
    name: 'Cool Breeze',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_COOL_BREEZE_CONTRACT_ABI,
};
export const ITEM_MONUMENT: IItem = {
    id: 138,
    name: 'Monument',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MONUMENT_CONTRACT_ABI,
};
export const ITEM_WATERFALL: IItem = {
    id: 139,
    name: 'Waterfall',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WATERFALL_CONTRACT_ABI,
};
export const ITEM_ETERNAL_FLAME: IItem = {
    id: 140,
    name: 'Eternal Flame',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ETERNAL_FLAME_CONTRACT_ABI,
};
export const ITEM_PILLAR_OF_WIND: IItem = {
    id: 141,
    name: 'Pillar Of Wind',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PILLAR_OF_WIND_CONTRACT_ABI,
};
export const ITEM_STREAM: IItem = {
    id: 142,
    name: 'Stream',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_STREAM_CONTRACT_ABI,
};
export const ITEM_ZEPHYR: IItem = {
    id: 143,
    name: 'Zephyr',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ZEPHYR_CONTRACT_ABI,
};
export const ITEM_CREEK: IItem = {
    id: 144,
    name: 'Creek',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CREEK_CONTRACT_ABI,
};
export const ITEM_BROOK: IItem = {
    id: 145,
    name: 'Brook',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BROOK_CONTRACT_ABI,
};
export const ITEM_WHISPER: IItem = {
    id: 146,
    name: 'Whisper',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WHISPER_CONTRACT_ABI,
};
export const ITEM_RIVULET: IItem = {
    id: 147,
    name: 'Rivulet',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RIVULET_CONTRACT_ABI,
};
export const ITEM_TRIBUTARY: IItem = {
    id: 148,
    name: 'Tributary',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_TRIBUTARY_CONTRACT_ABI,
};
export const ITEM_MURMUR: IItem = {
    id: 149,
    name: 'Murmur',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_MURMUR_CONTRACT_ABI,
};
export const ITEM_WATERSHED: IItem = {
    id: 150,
    name: 'Watershed',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WATERSHED_CONTRACT_ABI,
};
export const ITEM_AQUIFER: IItem = {
    id: 151,
    name: 'Aquifer',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_AQUIFER_CONTRACT_ABI,
};
export const ITEM_PARCHED_EARTH: IItem = {
    id: 152,
    name: 'Parched Earth',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_PARCHED_EARTH_CONTRACT_ABI,
};
export const ITEM_FRESH_BREEZE: IItem = {
    id: 153,
    name: 'Fresh Breeze',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_FRESH_BREEZE_CONTRACT_ABI,
};
export const ITEM_GROUNDWATER: IItem = {
    id: 154,
    name: 'Groundwater',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GROUNDWATER_CONTRACT_ABI,
};
export const ITEM_RESERVOIR: IItem = {
    id: 155,
    name: 'Reservoir',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_RESERVOIR_CONTRACT_ABI,
};
export const ITEM_GEOTHERMAL_SPRING: IItem = {
    id: 156,
    name: 'Geothermal Spring',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_GEOTHERMAL_SPRING_CONTRACT_ABI,
};
export const ITEM_ARTESIAN_WELL: IItem = {
    id: 157,
    name: 'Artesian Well',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ARTESIAN_WELL_CONTRACT_ABI,
};
export const ITEM_BASIN: IItem = {
    id: 158,
    name: 'Basin',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BASIN_CONTRACT_ABI,
};
export const ITEM_LAKE: IItem = {
    id: 159,
    name: 'Lake',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LAKE_CONTRACT_ABI,
};
export const ITEM_DRY_BASIN: IItem = {
    id: 160,
    name: 'Dry Basin',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DRY_BASIN_CONTRACT_ABI,
};
export const ITEM_DEPRESSION: IItem = {
    id: 161,
    name: 'Depression',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_DEPRESSION_CONTRACT_ABI,
};
export const ITEM_ISLAND: IItem = {
    id: 162,
    name: 'Island',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_ISLAND_CONTRACT_ABI,
};
export const ITEM_LAGOON: IItem = {
    id: 163,
    name: 'Lagoon',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LAGOON_CONTRACT_ABI,
};
export const ITEM_WAVE: IItem = {
    id: 164,
    name: 'Wave',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WAVE_CONTRACT_ABI,
};
export const ITEM_REEF: IItem = {
    id: 165,
    name: 'Reef',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_REEF_CONTRACT_ABI,
};
export const ITEM_CORAL: IItem = {
    id: 166,
    name: 'Coral',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_CORAL_CONTRACT_ABI,
};
export const ITEM_WHIRL: IItem = {
    id: 167,
    name: 'Whirl',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_WHIRL_CONTRACT_ABI,
};
export const ITEM_LIMESTONE: IItem = {
    id: 168,
    name: 'Limestone',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_LIMESTONE_CONTRACT_ABI,
};
export const ITEM_KARST: IItem = {
    id: 169,
    name: 'Karst',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_KARST_CONTRACT_ABI,
};
export const ITEM_QUICKLIME: IItem = {
    id: 170,
    name: 'Quicklime',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_QUICKLIME_CONTRACT_ABI,
};
export const ITEM_BLOWHOLE: IItem = {
    id: 171,
    name: 'Blowhole',
    description: 'We need a description here',
    tier: 1,
    contractAbi: ITEM_BLOWHOLE_CONTRACT_ABI,
};

export const ALL_ITEMS: IItem[] = [
    ITEM_MONKEY,
    ITEM_GIRAFFE,
    ITEM_BEE,
    ITEM_COIN,
    ITEM_SWARM,
    ITEM_HYDRA,
    ITEM_MONKEY_BRANCH,
    ITEM_BRIDGE,
    ITEM_GOLDEN_GATE,
    ITEM_GOLD,
    ITEM_SILVER,
    ITEM_RHODIUM,
    ITEM_HIVE,
    ITEM_TRANSACTION,
    ITEM_BLOCK,
    ITEM_BLOCKCHAIN,
    ITEM_POLKADOT,
    ITEM_PEER_REVIEW,
    ITEM_CARDANO,
    ITEM_BEAR,
    ITEM_BEER,
    ITEM_LOCK,
    ITEM_MARMALADE,
    ITEM_SUPER_MARMALADE,
    ITEM_HYPER_MARMALADE,
    ITEM_WATER,
    ITEM_FIRE,
    ITEM_STEAM,
    ITEM_EARTH,
    ITEM_MUD,
    ITEM_LAVA,
    ITEM_WIND,
    ITEM_DUST,
    ITEM_RAIN,
    ITEM_SMOKE,
    ITEM_GEYSER,
    ITEM_CLAY,
    ITEM_SAND,
    ITEM_PLANT,
    ITEM_RAINBOW,
    ITEM_STORM,
    ITEM_OBSIDIAN,
    ITEM_ASH,
    ITEM_VOLCANO,
    ITEM_SANDSTORM,
    ITEM_CLOUD,
    ITEM_FOG,
    ITEM_TREE,
    ITEM_FOREST,
    ITEM_SEEDS,
    ITEM_POTTERY,
    ITEM_BRICK,
    ITEM_QUICKSAND,
    ITEM_GLASS,
    ITEM_DUNE,
    ITEM_CHARCOAL,
    ITEM_LEAVES,
    ITEM_WILDFIRE,
    ITEM_JUNGLE,
    ITEM_FROSTED_GLASS,
    ITEM_CRYSTAL,
    ITEM_MAGMA,
    ITEM_ROCK,
    ITEM_SHARD,
    ITEM_PEBBLE,
    ITEM_MOUNTAIN,
    ITEM_FERTILIZER,
    ITEM_SOOT,
    ITEM_LIGHTNING,
    ITEM_MIST,
    ITEM_HAZE,
    ITEM_FLOOD,
    ITEM_LANDSLIDE,
    ITEM_THUNDER,
    ITEM_TORNADO,
    ITEM_GARDEN,
    ITEM_EMBER,
    ITEM_KILN,
    ITEM_POLLINATION,
    ITEM_SINKHOLE,
    ITEM_BEACH,
    ITEM_WETSTONE,
    ITEM_EROSION,
    ITEM_BASALT,
    ITEM_MAGMA_CHAMBER,
    ITEM_BREEZE,
    ITEM_WARM_BREEZE,
    ITEM_SOIL,
    ITEM_CANYON,
    ITEM_WINDMILL,
    ITEM_ADOBE,
    ITEM_WALL,
    ITEM_PUMICE,
    ITEM_BARBECUE,
    ITEM_FARM,
    ITEM_SHARDS,
    ITEM_MOLTEN_GLASS,
    ITEM_PRISM,
    ITEM_SPARKLE,
    ITEM_DESERT,
    ITEM_OASIS,
    ITEM_MIRAGE,
    ITEM_SAND_DUNE,
    ITEM_DAM,
    ITEM_FIREWALL,
    ITEM_BARRICADE,
    ITEM_PLATEAU,
    ITEM_POND,
    ITEM_AROMAS,
    ITEM_FLOWER,
    ITEM_SPORE,
    ITEM_SPREAD,
    ITEM_FERTILE_LAND,
    ITEM_WETLAND,
    ITEM_PEAT,
    ITEM_REEDS,
    ITEM_VALLEY,
    ITEM_RIVER,
    ITEM_SCORCHED_EARTH,
    ITEM_DELTA,
    ITEM_ESTUARY,
    ITEM_FIRE_SWAMP,
    ITEM_RIVERBANK,
    ITEM_RAVINE,
    ITEM_GORGE,
    ITEM_CHARRED_RAVINE,
    ITEM_ECHO,
    ITEM_CAVE,
    ITEM_UNDERGROUND_LAKE,
    ITEM_LAVA_CAVE,
    ITEM_WHISPERING_CAVE,
    ITEM_SUBTERRANEAN_POOL,
    ITEM_SPRING,
    ITEM_HOT_SPRING,
    ITEM_GROTTO,
    ITEM_FOUNTAIN,
    ITEM_STEAM_VENT,
    ITEM_COOL_BREEZE,
    ITEM_MONUMENT,
    ITEM_WATERFALL,
    ITEM_ETERNAL_FLAME,
    ITEM_PILLAR_OF_WIND,
    ITEM_STREAM,
    ITEM_ZEPHYR,
    ITEM_CREEK,
    ITEM_BROOK,
    ITEM_WHISPER,
    ITEM_RIVULET,
    ITEM_TRIBUTARY,
    ITEM_MURMUR,
    ITEM_WATERSHED,
    ITEM_AQUIFER,
    ITEM_PARCHED_EARTH,
    ITEM_FRESH_BREEZE,
    ITEM_GROUNDWATER,
    ITEM_RESERVOIR,
    ITEM_GEOTHERMAL_SPRING,
    ITEM_ARTESIAN_WELL,
    ITEM_BASIN,
    ITEM_LAKE,
    ITEM_DRY_BASIN,
    ITEM_DEPRESSION,
    ITEM_ISLAND,
    ITEM_LAGOON,
    ITEM_WAVE,
    ITEM_REEF,
    ITEM_CORAL,
    ITEM_WHIRL,
    ITEM_LIMESTONE,
    ITEM_KARST,
    ITEM_QUICKLIME,
    ITEM_BLOWHOLE,
];

export const RECIPE_MAKE_SWARM: IRecipe = {
    id: 0,
    a: ITEM_BEE,
    b: ITEM_BEE,
    result: ITEM_SWARM,
};
export const RECIPE_MAKE_HYDRA: IRecipe = {
    id: 1,
    a: ITEM_GIRAFFE,
    b: ITEM_GIRAFFE,
    result: ITEM_HYDRA,
};
export const RECIPE_MAKE_MONKEYBRANCH: IRecipe = {
    id: 2,
    a: ITEM_MONKEY,
    b: ITEM_HYDRA,
    result: ITEM_MONKEY_BRANCH,
};
export const RECIPE_MAKE_BRIDGE: IRecipe = {
    id: 3,
    a: ITEM_MONKEY_BRANCH,
    b: ITEM_MONKEY_BRANCH,
    result: ITEM_BRIDGE,
};
export const RECIPE_MAKE_GOLDENGATE: IRecipe = {
    id: 4,
    a: ITEM_COIN,
    b: ITEM_BRIDGE,
    result: ITEM_GOLDEN_GATE,
};
export const RECIPE_MAKE_CARDANO: IRecipe = {
    id: 5,
    a: ITEM_BLOCKCHAIN,
    b: ITEM_PEER_REVIEW,
    result: ITEM_CARDANO,
};
export const RECIPE_MAKE_BEER: IRecipe = {
    id: 6,
    a: ITEM_BEE,
    b: ITEM_BEAR,
    result: ITEM_BEER,
};
export const RECIPE_MAKE_LOCK: IRecipe = {
    id: 7,
    a: ITEM_SILVER,
    b: ITEM_SILVER,
    result: ITEM_LOCK,
};
export const RECIPE_MAKE_SUPERMARMALADE: IRecipe = {
    id: 8,
    a: ITEM_MARMALADE,
    b: ITEM_MARMALADE,
    result: ITEM_SUPER_MARMALADE,
};
export const RECIPE_MAKE_HYPERMARMALADE: IRecipe = {
    id: 9,
    a: ITEM_SUPER_MARMALADE,
    b: ITEM_SUPER_MARMALADE,
    result: ITEM_HYPER_MARMALADE,
};

export const ALL_RECIPES: IRecipe[] = [
    RECIPE_MAKE_SWARM,
    RECIPE_MAKE_HYDRA,
    RECIPE_MAKE_MONKEYBRANCH,
    RECIPE_MAKE_BRIDGE,
    RECIPE_MAKE_GOLDENGATE,
    RECIPE_MAKE_CARDANO,
    RECIPE_MAKE_BEER,
    RECIPE_MAKE_LOCK,
    RECIPE_MAKE_SUPERMARMALADE,
    RECIPE_MAKE_HYPERMARMALADE,
];

export const GAME_UNIFIERS_ITEMS: Array<IItem> = [
    ITEM_MONKEY,
    ITEM_GIRAFFE,
    ITEM_BEE,
    ITEM_COIN,
    ITEM_SWARM,
    ITEM_HYDRA,
    ITEM_MONKEY_BRANCH,
    ITEM_BRIDGE,
    ITEM_GOLDEN_GATE,
    ITEM_GOLD,
    ITEM_SILVER,
    ITEM_RHODIUM,
    ITEM_HIVE,
    ITEM_TRANSACTION,
    ITEM_BLOCK,
    ITEM_BLOCKCHAIN,
    ITEM_POLKADOT,
    ITEM_PEER_REVIEW,
    ITEM_CARDANO,
    ITEM_BEAR,
    ITEM_BEER,
    ITEM_LOCK,
    ITEM_MARMALADE,
    ITEM_SUPER_MARMALADE,
    ITEM_HYPER_MARMALADE,
];
export const GAME_UNIFIERS_RECIPES: Array<IRecipe> = [
    RECIPE_MAKE_SWARM,
    RECIPE_MAKE_HYDRA,
    RECIPE_MAKE_MONKEYBRANCH,
    RECIPE_MAKE_BRIDGE,
    RECIPE_MAKE_GOLDENGATE,
    RECIPE_MAKE_CARDANO,
    RECIPE_MAKE_BEER,
    RECIPE_MAKE_LOCK,
    RECIPE_MAKE_SUPERMARMALADE,
    RECIPE_MAKE_HYPERMARMALADE,
];
export const GAME_UNIFIERS: IGameContent = {
    name: "Unifiers",
    description: "A game created with the help of the Unifiers group",
    items: GAME_UNIFIERS_ITEMS,
    recipes: GAME_UNIFIERS_RECIPES,
    contractAbi: GAME_UNIFIERS_CONTRACT_ABI,
};
export const ALL_GAMES: Array<IGameContent> = [
    GAME_UNIFIERS,
];