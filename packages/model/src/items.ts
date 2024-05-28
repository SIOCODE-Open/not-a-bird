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
import GAME_ELEMENTY_CONTRACT_ABI from "../../../contracts.v1/interfaces/elementy.interface.json";

export const ITEM_MONKEY: IItem = {
    id: 0,
    name: 'Monkey',
    description: `This banana-loving acrobat is like if Tarzan had a caffeine addiction!`,
    tier: 1,
    contractAbi: ITEM_MONKEY_CONTRACT_ABI,
};
export const ITEM_GIRAFFE: IItem = {
    id: 1,
    name: 'Giraffe',
    description: `The long-necked, leafy buffet enthusiast that would make even a stepladder feel short.`,
    tier: 1,
    contractAbi: ITEM_GIRAFFE_CONTRACT_ABI,
};
export const ITEM_BEE: IItem = {
    id: 2,
    name: 'Bee',
    description: `The buzzing little cousin of Buzzie Lightyear, Defender of the Flora and Champion of Sweetness!`,
    tier: 1,
    contractAbi: ITEM_BEE_CONTRACT_ABI,
};
export const ITEM_COIN: IItem = {
    id: 3,
    name: 'Coin',
    description: `More valuable than a chest full of dragon's gold, this shiny round thing makes NPCs do your bidding.`,
    tier: 1,
    contractAbi: ITEM_COIN_CONTRACT_ABI,
};
export const ITEM_SWARM: IItem = {
    id: 4,
    name: 'Swarm',
    description: `Unleash a tiny, buzzing army that makes you feel like the villain in a superhero movie.`,
    tier: 2,
    contractAbi: ITEM_SWARM_CONTRACT_ABI,
};
export const ITEM_HYDRA: IItem = {
    id: 5,
    name: 'Hydra',
    description: `When one head isn't enough to argue with you, this multi-headed reptilian nightmare is ready to rumble!`,
    tier: 2,
    contractAbi: ITEM_HYDRA_CONTRACT_ABI,
};
export const ITEM_MONKEY_BRANCH: IItem = {
    id: 6,
    name: 'Monkey Branch',
    description: `Swing through the jungle like Tarzan with this monkey-approved vine, perfect for dramatic escapes and awkward landings.`,
    tier: 2,
    contractAbi: ITEM_MONKEY_BRANCH_CONTRACT_ABI,
};
export const ITEM_BRIDGE: IItem = {
    id: 7,
    name: 'Bridge',
    description: `The majestic road-over-nothing, perfect for trolls and billy goats alike.`,
    tier: 2,
    contractAbi: ITEM_BRIDGE_CONTRACT_ABI,
};
export const ITEM_GOLDEN_GATE: IItem = {
    id: 8,
    name: 'Golden Gate',
    description: `The mystical bridge that Gandalf would totally approve of, connecting realms and charging tolls in riddles.`,
    tier: 2,
    contractAbi: ITEM_GOLDEN_GATE_CONTRACT_ABI,
};
export const ITEM_GOLD: IItem = {
    id: 9,
    name: 'Gold',
    description: `Shinier than a disco ball at Studio 54, this glistening treasure will make Scrooge McDuck jealous!`,
    tier: 1,
    contractAbi: ITEM_GOLD_CONTRACT_ABI,
};
export const ITEM_SILVER: IItem = {
    id: 10,
    name: 'Silver',
    description: `Shinier than a vampire at a disco party, it's what werewolves dread and jewelry lovers adore.`,
    tier: 1,
    contractAbi: ITEM_SILVER_CONTRACT_ABI,
};
export const ITEM_RHODIUM: IItem = {
    id: 11,
    name: 'Rhodium',
    description: `The bling-bling metal of the periodic table: shinier than your future, harder than your math homework.`,
    tier: 1,
    contractAbi: ITEM_RHODIUM_CONTRACT_ABI,
};
export const ITEM_HIVE: IItem = {
    id: 12,
    name: 'Hive',
    description: `Welcome to the buzzfeed mansion, where every room has a bee-convincing argument!`,
    tier: 1,
    contractAbi: ITEM_HIVE_CONTRACT_ABI,
};
export const ITEM_TRANSACTION: IItem = {
    id: 13,
    name: 'Transaction',
    description: `The magical moment when your gold coins vanish and you're left wondering if you've been pickpocketed by a ninja or just bought a shiny new sword.`,
    tier: 1,
    contractAbi: ITEM_TRANSACTION_CONTRACT_ABI,
};
export const ITEM_BLOCK: IItem = {
    id: 14,
    name: 'Block',
    description: `Like adult Legos, but less fun and more about stopping that lava from ruining your day!`,
    tier: 1,
    contractAbi: ITEM_BLOCK_CONTRACT_ABI,
};
export const ITEM_BLOCKCHAIN: IItem = {
    id: 15,
    name: 'Blockchain',
    description: `The magical internet ledger of destiny that Satoshi dreamt up, where everything is transparent, immutable, and forever entwined like the plot of a Christopher Nolan movie.`,
    tier: 1,
    contractAbi: ITEM_BLOCKCHAIN_CONTRACT_ABI,
};
export const ITEM_POLKADOT: IItem = {
    id: 16,
    name: 'Polkadot',
    description: `Think Bitcoin's eccentric cousin who shows up at parties in a spotted suit and shocks everyone with their dazzlingly efficient dancing.`,
    tier: 1,
    contractAbi: ITEM_POLKADOT_CONTRACT_ABI,
};
export const ITEM_PEER_REVIEW: IItem = {
    id: 17,
    name: 'Peer Review',
    description: `A scroll that makes your friends question their life choices and your enemies spit out their coffee in disbelief.`,
    tier: 1,
    contractAbi: ITEM_PEER_REVIEW_CONTRACT_ABI,
};
export const ITEM_CARDANO: IItem = {
    id: 18,
    name: 'Cardano',
    description: `Time to unleash the blockchain beast that's more confusing than an IKEA assembly manual!`,
    tier: 2,
    contractAbi: ITEM_CARDANO_CONTRACT_ABI,
};
export const ITEM_BEAR: IItem = {
    id: 19,
    name: 'Bear',
    description: `This fuzzy giant decided to move out of the forest and into your nightmares on the advice of its therapist, Yogi.`,
    tier: 1,
    contractAbi: ITEM_BEAR_CONTRACT_ABI,
};
export const ITEM_BEER: IItem = {
    id: 20,
    name: 'Beer',
    description: `The golden elixir of the gods, best enjoyed when your quest log is empty and your dance moves are questionable.`,
    tier: 2,
    contractAbi: ITEM_BEER_CONTRACT_ABI,
};
export const ITEM_LOCK: IItem = {
    id: 21,
    name: 'Lock',
    description: `Who needs a dragon when you've got this security boss blocking your treasure chest?`,
    tier: 2,
    contractAbi: ITEM_LOCK_CONTRACT_ABI,
};
export const ITEM_MARMALADE: IItem = {
    id: 22,
    name: 'Marmalade',
    description: `The sticky, fruity concoction that Paddington Bear would trade his hat for.`,
    tier: 1,
    contractAbi: ITEM_MARMALADE_CONTRACT_ABI,
};
export const ITEM_SUPER_MARMALADE: IItem = {
    id: 23,
    name: 'Super Marmalade',
    description: `As if Spider-Man and your grandma's secret jam recipe had a citrusy baby that swings through breakfast toast saving your taste buds one bite at a time!`,
    tier: 2,
    contractAbi: ITEM_SUPER_MARMALADE_CONTRACT_ABI,
};
export const ITEM_HYPER_MARMALADE: IItem = {
    id: 24,
    name: 'Hyper Marmalade',
    description: `Like regular marmalade, but it makes you feel like you've had a double shot of espresso and a lightning bolt to the brain!`,
    tier: 2,
    contractAbi: ITEM_HYPER_MARMALADE_CONTRACT_ABI,
};
export const ITEM_WATER: IItem = {
    id: 25,
    name: 'Water',
    description: `H2-Oh no, you spilled it again!`,
    tier: 1,
    contractAbi: ITEM_WATER_CONTRACT_ABI,
};
export const ITEM_FIRE: IItem = {
    id: 26,
    name: 'Fire',
    description: `Summon a flickering tongue of destruction that makes dragons envious and marshmallows tremble in awe!`,
    tier: 1,
    contractAbi: ITEM_FIRE_CONTRACT_ABI,
};
export const ITEM_STEAM: IItem = {
    id: 27,
    name: 'Steam',
    description: `It's water's sassy teen phase before it cools down and becomes boring again.`,
    tier: 1,
    contractAbi: ITEM_STEAM_CONTRACT_ABI,
};
export const ITEM_EARTH: IItem = {
    id: 28,
    name: 'Earth',
    description: `Because who doesn't want a handful of dirt from Mother Nature's handbag?`,
    tier: 1,
    contractAbi: ITEM_EARTH_CONTRACT_ABI,
};
export const ITEM_MUD: IItem = {
    id: 29,
    name: 'Mud',
    description: `Mother Nature's messy smoothie, perfect for impromptu spa days or sabotaging the hero's clean shoes!`,
    tier: 1,
    contractAbi: ITEM_MUD_CONTRACT_ABI,
};
export const ITEM_LAVA: IItem = {
    id: 30,
    name: 'Lava',
    description: `Spicy earth salsa that guarantees an insta-tan and some crispy new shoes!`,
    tier: 1,
    contractAbi: ITEM_LAVA_CONTRACT_ABI,
};
export const ITEM_WIND: IItem = {
    id: 31,
    name: 'Wind',
    description: `The invisible ninja that gives trees a good hair day.`,
    tier: 1,
    contractAbi: ITEM_WIND_CONTRACT_ABI,
};
export const ITEM_DUST: IItem = {
    id: 32,
    name: 'Dust',
    description: `The forgotten remains of battles long past, or your enemy when you forget to clean under the sofa.`,
    tier: 1,
    contractAbi: ITEM_DUST_CONTRACT_ABI,
};
export const ITEM_RAIN: IItem = {
    id: 33,
    name: 'Rain',
    description: `Sky's attempt at a group shower: brings hydration and dramatic window views!`,
    tier: 1,
    contractAbi: ITEM_RAIN_CONTRACT_ABI,
};
export const ITEM_SMOKE: IItem = {
    id: 34,
    name: 'Smoke',
    description: `As elusive as your New Year's resolutions, it vanishes faster than free Wi-Fi at a coffee shop.`,
    tier: 1,
    contractAbi: ITEM_SMOKE_CONTRACT_ABI,
};
export const ITEM_GEYSER: IItem = {
    id: 35,
    name: 'Geyser',
    description: `Mother Nature's boiling hot water cannon, now available as a decorative backyard feature!`,
    tier: 1,
    contractAbi: ITEM_GEYSER_CONTRACT_ABI,
};
export const ITEM_CLAY: IItem = {
    id: 36,
    name: 'Clay',
    description: `Mold this earthy Play-Doh into something magical, or just make yourself a new best friend, Wilson style!`,
    tier: 1,
    contractAbi: ITEM_CLAY_CONTRACT_ABI,
};
export const ITEM_SAND: IItem = {
    id: 37,
    name: 'Sand',
    description: `Pocketful of tiny wizards' teeth, creating beaches and cat litter archeology!`,
    tier: 1,
    contractAbi: ITEM_SAND_CONTRACT_ABI,
};
export const ITEM_PLANT: IItem = {
    id: 38,
    name: 'Plant',
    description: `The botanical equivalent of Wi-Fi for oxygen, providing full bars since prehistoric times.`,
    tier: 1,
    contractAbi: ITEM_PLANT_CONTRACT_ABI,
};
export const ITEM_RAINBOW: IItem = {
    id: 39,
    name: 'Rainbow',
    description: `The sky's post-rain refurbishment job, brought to you by Mother Nature's favorite highlighter pack.`,
    tier: 1,
    contractAbi: ITEM_RAINBOW_CONTRACT_ABI,
};
export const ITEM_STORM: IItem = {
    id: 40,
    name: 'Storm',
    description: `Angry sky kittens throwing tantrums and lightning bolts like Thor after a double espresso.`,
    tier: 1,
    contractAbi: ITEM_STORM_CONTRACT_ABI,
};
export const ITEM_OBSIDIAN: IItem = {
    id: 41,
    name: 'Obsidian',
    description: `Crafted by the earth's angriest volcano, it's tougher than your grandma's fruitcake and twice as unforgiving.`,
    tier: 1,
    contractAbi: ITEM_OBSIDIAN_CONTRACT_ABI,
};
export const ITEM_ASH: IItem = {
    id: 42,
    name: 'Ash',
    description: `The remains of your epic campfire story that burned out faster than your WiFi during a binge session.`,
    tier: 1,
    contractAbi: ITEM_ASH_CONTRACT_ABI,
};
export const ITEM_VOLCANO: IItem = {
    id: 43,
    name: 'Volcano',
    description: `Mount Doom's flamboyant cousin who's always ready to throw a tantrum and belch fiery salsa.`,
    tier: 1,
    contractAbi: ITEM_VOLCANO_CONTRACT_ABI,
};
export const ITEM_SANDSTORM: IItem = {
    id: 44,
    name: 'Sandstorm',
    description: `It's like Mother Nature's version of a blender set to 'desert' mode, without the fruity cocktail at the end.`,
    tier: 1,
    contractAbi: ITEM_SANDSTORM_CONTRACT_ABI,
};
export const ITEM_CLOUD: IItem = {
    id: 45,
    name: 'Cloud',
    description: `Fluffier than marshmallows and moodier than a teenager, this sky cotton candy hides the secrets of the weather gods.`,
    tier: 1,
    contractAbi: ITEM_CLOUD_CONTRACT_ABI,
};
export const ITEM_FOG: IItem = {
    id: 46,
    name: 'Fog',
    description: `It’s like someone took all the clouds, shredded them, and set them loose to play hide and seek with your vision.`,
    tier: 1,
    contractAbi: ITEM_FOG_CONTRACT_ABI,
};
export const ITEM_TREE: IItem = {
    id: 47,
    name: 'Tree',
    description: `The original WiFi router for squirrels, providing shade and nuts with zero bars of signal!`,
    tier: 1,
    contractAbi: ITEM_TREE_CONTRACT_ABI,
};
export const ITEM_FOREST: IItem = {
    id: 48,
    name: 'Forest',
    description: `A dense collection of trees where even squirrels hire GPS, home of the mythical Wi-Fi-repellent green zone.`,
    tier: 1,
    contractAbi: ITEM_FOREST_CONTRACT_ABI,
};
export const ITEM_SEEDS: IItem = {
    id: 49,
    name: 'Seeds',
    description: `Nature's popcorn kernels, just add dirt and patience for a flourishing snack!`,
    tier: 1,
    contractAbi: ITEM_SEEDS_CONTRACT_ABI,
};
export const ITEM_POTTERY: IItem = {
    id: 50,
    name: 'Pottery',
    description: `Perfect for storing all your grandma's secret cookie recipes and ancient legendary treasures, one chip at a time!`,
    tier: 1,
    contractAbi: ITEM_POTTERY_CONTRACT_ABI,
};
export const ITEM_BRICK: IItem = {
    id: 51,
    name: 'Brick',
    description: `As indestructible as your WiFi on a good day, this brick could build a mansion or your Minecraft empire.`,
    tier: 1,
    contractAbi: ITEM_BRICK_CONTRACT_ABI,
};
export const ITEM_QUICKSAND: IItem = {
    id: 52,
    name: 'Quicksand',
    description: `The Earth's way of saying 'GOTCHA!' when you thought a leisurely stroll through the desert sounded appealing.`,
    tier: 1,
    contractAbi: ITEM_QUICKSAND_CONTRACT_ABI,
};
export const ITEM_GLASS: IItem = {
    id: 53,
    name: 'Glass',
    description: `As delicate as your ego after a bad break-up, but see-through like your best friend's terrible poker face.`,
    tier: 1,
    contractAbi: ITEM_GLASS_CONTRACT_ABI,
};
export const ITEM_DUNE: IItem = {
    id: 54,
    name: 'Dune',
    description: `Get ready to channel your inner Muad'Dib and rule the sandy seas while dodging giant worms and political plots!`,
    tier: 1,
    contractAbi: ITEM_DUNE_CONTRACT_ABI,
};
export const ITEM_CHARCOAL: IItem = {
    id: 55,
    name: 'Charcoal',
    description: `The BBQ Master's secret ingredient for transforming your steaks from zero to hero faster than you can say 'Grill-Zilla!'`,
    tier: 1,
    contractAbi: ITEM_CHARCOAL_CONTRACT_ABI,
};
export const ITEM_LEAVES: IItem = {
    id: 56,
    name: 'Leaves',
    description: `Green confetti for Mother Nature's never-ending party, with a hint of chlorophyll chic!`,
    tier: 1,
    contractAbi: ITEM_LEAVES_CONTRACT_ABI,
};
export const ITEM_WILDFIRE: IItem = {
    id: 57,
    name: 'Wildfire',
    description: `Spicier than your ex's DMs, this blaze turns forests into toast and marshmallows into napalm.`,
    tier: 1,
    contractAbi: ITEM_WILDFIRE_CONTRACT_ABI,
};
export const ITEM_JUNGLE: IItem = {
    id: 58,
    name: 'Jungle',
    description: `Like Tarzan's playground but with 99% more bugs and 100% less Wi-Fi.`,
    tier: 1,
    contractAbi: ITEM_JUNGLE_CONTRACT_ABI,
};
export const ITEM_FROSTED_GLASS: IItem = {
    id: 59,
    name: 'Frosted Glass',
    description: `Clearer than your intentions after a night out, but still elusive as your friend who promises to show up on time.`,
    tier: 1,
    contractAbi: ITEM_FROSTED_GLASS_CONTRACT_ABI,
};
export const ITEM_CRYSTAL: IItem = {
    id: 60,
    name: 'Crystal',
    description: `Shiny as Edward Cullen and twice as sparkly in the moonlight!`,
    tier: 1,
    contractAbi: ITEM_CRYSTAL_CONTRACT_ABI,
};
export const ITEM_MAGMA: IItem = {
    id: 61,
    name: 'Magma',
    description: `Hotter than your ex's last text, this molten rock sauce will turn enemies into toast.`,
    tier: 1,
    contractAbi: ITEM_MAGMA_CONTRACT_ABI,
};
export const ITEM_ROCK: IItem = {
    id: 62,
    name: 'Rock',
    description: `It's Dwayne Johnson's stony cousin, perfect for smashing enemies or just sitting there, being all geology-like.`,
    tier: 1,
    contractAbi: ITEM_ROCK_CONTRACT_ABI,
};
export const ITEM_SHARD: IItem = {
    id: 63,
    name: 'Shard',
    description: `This is the majestic piece of glitter, sharper than your ex-girlfriend's comebacks!`,
    tier: 1,
    contractAbi: ITEM_SHARD_CONTRACT_ABI,
};
export const ITEM_PEBBLE: IItem = {
    id: 64,
    name: 'Pebble',
    description: `As insignificant as the pebble you kicked on your way to saving the world.`,
    tier: 1,
    contractAbi: ITEM_PEBBLE_CONTRACT_ABI,
};
export const ITEM_MOUNTAIN: IItem = {
    id: 65,
    name: 'Mountain',
    description: `The colossal nature bump that's basically Earth's awkward zit.`,
    tier: 1,
    contractAbi: ITEM_MOUNTAIN_CONTRACT_ABI,
};
export const ITEM_FERTILIZER: IItem = {
    id: 66,
    name: 'Fertilizer',
    description: `Sprinkle a little of this magic dust and watch your plants grow faster than a YouTube tutorial on 'getting rich quick!'`,
    tier: 1,
    contractAbi: ITEM_FERTILIZER_CONTRACT_ABI,
};
export const ITEM_SOOT: IItem = {
    id: 67,
    name: 'Soot',
    description: `Dust bunnies' granddaddy who moonlights as a chimney sweep in a Dickens novel.`,
    tier: 1,
    contractAbi: ITEM_SOOT_CONTRACT_ABI,
};
export const ITEM_LIGHTNING: IItem = {
    id: 68,
    name: 'Lightning',
    description: `Like Thor's tantrum in a bottle, ready to zap your foes into crispy critters!`,
    tier: 1,
    contractAbi: ITEM_LIGHTNING_CONTRACT_ABI,
};
export const ITEM_MIST: IItem = {
    id: 69,
    name: 'Mist',
    description: `Like a ghost doing the moonwalk, it slips through your fingers and cloaks the world in mystery!`,
    tier: 1,
    contractAbi: ITEM_MIST_CONTRACT_ABI,
};
export const ITEM_HAZE: IItem = {
    id: 70,
    name: 'Haze',
    description: `Like Gandalf's vape party, but a lot less fun and way more confusing.`,
    tier: 1,
    contractAbi: ITEM_HAZE_CONTRACT_ABI,
};
export const ITEM_FLOOD: IItem = {
    id: 71,
    name: 'Flood',
    description: `When Mother Nature throws the ultimate pool party and forgets to send the 'BYO life jacket' memo.`,
    tier: 1,
    contractAbi: ITEM_FLOOD_CONTRACT_ABI,
};
export const ITEM_LANDSLIDE: IItem = {
    id: 72,
    name: 'Landslide',
    description: `A geological temper tantrum that sends boulders downhill faster than a caffeine-crazed squirrel on roller skates!`,
    tier: 1,
    contractAbi: ITEM_LANDSLIDE_CONTRACT_ABI,
};
export const ITEM_THUNDER: IItem = {
    id: 73,
    name: 'Thunder',
    description: `Like Thor's mixtape at full volume, this electrifying zap will leave your enemies shocked and awed!`,
    tier: 1,
    contractAbi: ITEM_THUNDER_CONTRACT_ABI,
};
export const ITEM_TORNADO: IItem = {
    id: 74,
    name: 'Tornado',
    description: `Nature's blender on steroids, mixing up cows, houses, and your afternoon picnic.`,
    tier: 1,
    contractAbi: ITEM_TORNADO_CONTRACT_ABI,
};
export const ITEM_GARDEN: IItem = {
    id: 75,
    name: 'Garden',
    description: `Nature's sunlit Wi-Fi free zone, and the original farm-to-table restaurant!`,
    tier: 1,
    contractAbi: ITEM_GARDEN_CONTRACT_ABI,
};
export const ITEM_EMBER: IItem = {
    id: 76,
    name: 'Ember',
    description: `Like a tiny dragon's sneeze, this little spark packs a fiery punch!`,
    tier: 1,
    contractAbi: ITEM_EMBER_CONTRACT_ABI,
};
export const ITEM_KILN: IItem = {
    id: 77,
    name: 'Kiln',
    description: `The oven that turns your pottery dreams into reality, just like Hogwarts turns kids into wizards.`,
    tier: 1,
    contractAbi: ITEM_KILN_CONTRACT_ABI,
};
export const ITEM_POLLINATION: IItem = {
    id: 78,
    name: 'Pollination',
    description: `Nature's Tinder for plants, where bees are the swiping right matchmakers.`,
    tier: 1,
    contractAbi: ITEM_POLLINATION_CONTRACT_ABI,
};
export const ITEM_SINKHOLE: IItem = {
    id: 79,
    name: 'Sinkhole',
    description: `Suddenly feeling like you starred in a Looney Tunes cartoon, minus the anvil and roadrunner.`,
    tier: 1,
    contractAbi: ITEM_SINKHOLE_CONTRACT_ABI,
};
export const ITEM_BEACH: IItem = {
    id: 80,
    name: 'Beach',
    description: `A sun-kissed playground where sand gets everywhere, like glitter but from hell.`,
    tier: 1,
    contractAbi: ITEM_BEACH_CONTRACT_ABI,
};
export const ITEM_WETSTONE: IItem = {
    id: 81,
    name: 'Wetstone',
    description: `Sharpen your blades while pondering life's mysteries with this slippery soapy rock, straight from the stones of Soapland!`,
    tier: 1,
    contractAbi: ITEM_WETSTONE_CONTRACT_ABI,
};
export const ITEM_EROSION: IItem = {
    id: 82,
    name: 'Erosion',
    description: `Nature's slow-motion magic trick, turning mighty mountains into beach sand one grain at a time.`,
    tier: 1,
    contractAbi: ITEM_EROSION_CONTRACT_ABI,
};
export const ITEM_BASALT: IItem = {
    id: 83,
    name: 'Basalt',
    description: `Forged in the depths of the earth, harder than your ex's heart and cooler than the underside of your pillow.`,
    tier: 1,
    contractAbi: ITEM_BASALT_CONTRACT_ABI,
};
export const ITEM_MAGMA_CHAMBER: IItem = {
    id: 84,
    name: 'Magma Chamber',
    description: `Hotter than a dragon's sneeze, this is the spicy jacuzzi of the underworld.`,
    tier: 1,
    contractAbi: ITEM_MAGMA_CHAMBER_CONTRACT_ABI,
};
export const ITEM_BREEZE: IItem = {
    id: 85,
    name: 'Breeze',
    description: `Like Gandalf's whisper, this gentle wind will casually rearrange your bad hair day.`,
    tier: 1,
    contractAbi: ITEM_BREEZE_CONTRACT_ABI,
};
export const ITEM_WARM_BREEZE: IItem = {
    id: 86,
    name: 'Warm Breeze',
    description: `It's like Mother Nature left the hairdryer on; embrace the cozy winds of summer hugs!`,
    tier: 1,
    contractAbi: ITEM_WARM_BREEZE_CONTRACT_ABI,
};
export const ITEM_SOIL: IItem = {
    id: 87,
    name: 'Soil',
    description: `Dirt-napped cousin of terra-firma, perfect for your eco-friendly carpet installations!`,
    tier: 1,
    contractAbi: ITEM_SOIL_CONTRACT_ABI,
};
export const ITEM_CANYON: IItem = {
    id: 88,
    name: 'Canyon',
    description: `Nature's gigantic frown; perfect for epic echoes and bottomless pratfalls.`,
    tier: 1,
    contractAbi: ITEM_CANYON_CONTRACT_ABI,
};
export const ITEM_WINDMILL: IItem = {
    id: 89,
    name: 'Windmill',
    description: `Spinning like your favorite DJ, this eco-friendly giant turns breezes into electrical symphonies.`,
    tier: 1,
    contractAbi: ITEM_WINDMILL_CONTRACT_ABI,
};
export const ITEM_ADOBE: IItem = {
    id: 90,
    name: 'Adobe',
    description: `The ancient Minecraft enchantment that grants you the power to build desert dream homes with just a handful of dirt and some water!`,
    tier: 1,
    contractAbi: ITEM_ADOBE_CONTRACT_ABI,
};
export const ITEM_WALL: IItem = {
    id: 91,
    name: 'Wall',
    description: `The Gentleman Bouncer of your castle, politely informing intruders that the party's over.`,
    tier: 1,
    contractAbi: ITEM_WALL_CONTRACT_ABI,
};
export const ITEM_PUMICE: IItem = {
    id: 92,
    name: 'Pumice',
    description: `Floats like a butterfly, scrubs like Mr. Clean - the Swiss cheese of rocks!`,
    tier: 1,
    contractAbi: ITEM_PUMICE_CONTRACT_ABI,
};
export const ITEM_BARBECUE: IItem = {
    id: 93,
    name: 'Barbecue',
    description: `Unleash your inner pitmaster with this meat sizzle maker, as seen on grill-enthusiast reality shows!`,
    tier: 1,
    contractAbi: ITEM_BARBECUE_CONTRACT_ABI,
};
export const ITEM_FARM: IItem = {
    id: 94,
    name: 'Farm',
    description: `The ultimate pre-industrial protein shake factory, where plants and animals live in suspenseful harmony waiting to be useful.`,
    tier: 1,
    contractAbi: ITEM_FARM_CONTRACT_ABI,
};
export const ITEM_SHARDS: IItem = {
    id: 95,
    name: 'Shards',
    description: `Fragments of a broken heart? Or just pieces of yesterday's piñata—either way, they're sharp!`,
    tier: 1,
    contractAbi: ITEM_SHARDS_CONTRACT_ABI,
};
export const ITEM_MOLTEN_GLASS: IItem = {
    id: 96,
    name: 'Molten Glass',
    description: `Hotter than a dragon's breath after Taco Tuesday, this molten glass can melt through your problems... literally.`,
    tier: 1,
    contractAbi: ITEM_MOLTEN_GLASS_CONTRACT_ABI,
};
export const ITEM_PRISM: IItem = {
    id: 97,
    name: 'Prism',
    description: `Divide light like a 70's disco ball at a Saturday night fever party.`,
    tier: 1,
    contractAbi: ITEM_PRISM_CONTRACT_ABI,
};
export const ITEM_SPARKLE: IItem = {
    id: 98,
    name: 'Sparkle',
    description: `Glitter brighter than a unicorn's tears at a K-pop concert.`,
    tier: 1,
    contractAbi: ITEM_SPARKLE_CONTRACT_ABI,
};
export const ITEM_DESERT: IItem = {
    id: 99,
    name: 'Desert',
    description: `A vast sandbox of banishment where even cacti consider sunblock.`,
    tier: 1,
    contractAbi: ITEM_DESERT_CONTRACT_ABI,
};
export const ITEM_OASIS: IItem = {
    id: 100,
    name: 'Oasis',
    description: `The desert's VIP lounge, complete with complimentary palm trees and mirage-resistant seating!`,
    tier: 1,
    contractAbi: ITEM_OASIS_CONTRACT_ABI,
};
export const ITEM_MIRAGE: IItem = {
    id: 101,
    name: 'Mirage',
    description: `As elusive as your mom's Wi-Fi password and twice as frustrating to catch!`,
    tier: 1,
    contractAbi: ITEM_MIRAGE_CONTRACT_ABI,
};
export const ITEM_SAND_DUNE: IItem = {
    id: 102,
    name: 'Sand Dune',
    description: `As majestic as a stack of pancakes, but far more abrasive and less syrupy.`,
    tier: 1,
    contractAbi: ITEM_SAND_DUNE_CONTRACT_ABI,
};
export const ITEM_DAM: IItem = {
    id: 103,
    name: 'Dam',
    description: `The Dwayne 'The Rock' Johnson of water barriers, holding back the wet with sheer muscle.`,
    tier: 1,
    contractAbi: ITEM_DAM_CONTRACT_ABI,
};
export const ITEM_FIREWALL: IItem = {
    id: 104,
    name: 'Firewall',
    description: `The Gandalf of cybersecurity: 'You shall not pass!'`,
    tier: 1,
    contractAbi: ITEM_FIREWALL_CONTRACT_ABI,
};
export const ITEM_BARRICADE: IItem = {
    id: 105,
    name: 'Barricade',
    description: `Like Gandalf facing a Balrog, it's the 'You shall not pass!' of fortifications.`,
    tier: 1,
    contractAbi: ITEM_BARRICADE_CONTRACT_ABI,
};
export const ITEM_PLATEAU: IItem = {
    id: 106,
    name: 'Plateau',
    description: `A flat piece of land that got tired of climbing mountains and decided to chill forever.`,
    tier: 1,
    contractAbi: ITEM_PLATEAU_CONTRACT_ABI,
};
export const ITEM_POND: IItem = {
    id: 107,
    name: 'Pond',
    description: `Where ducks hold their secret aquatic raves and lily pads plot world domination.`,
    tier: 1,
    contractAbi: ITEM_POND_CONTRACT_ABI,
};
export const ITEM_AROMAS: IItem = {
    id: 108,
    name: 'Aromas',
    description: `Sprinkle a bit of Hogwarts' magic under your nose and breathe in the essence of enchanted forests and dragon's breath!`,
    tier: 1,
    contractAbi: ITEM_AROMAS_CONTRACT_ABI,
};
export const ITEM_FLOWER: IItem = {
    id: 109,
    name: 'Flower',
    description: `The colorful Wi-Fi signal for bees; smells better than your ex's perfume!`,
    tier: 1,
    contractAbi: ITEM_FLOWER_CONTRACT_ABI,
};
export const ITEM_SPORE: IItem = {
    id: 110,
    name: 'Spore',
    description: `Tiny, invisible disco balls of doom, ready to throw a rave in your sinuses!`,
    tier: 1,
    contractAbi: ITEM_SPORE_CONTRACT_ABI,
};
export const ITEM_SPREAD: IItem = {
    id: 111,
    name: 'Spread',
    description: `As versatile as a Swiss army knife, it's the social butterfly of condiments!`,
    tier: 1,
    contractAbi: ITEM_SPREAD_CONTRACT_ABI,
};
export const ITEM_FERTILE_LAND: IItem = {
    id: 112,
    name: 'Fertile Land',
    description: `As luxurious and bountiful as Bob Ross’s paint palette, it's the MVP of Mother Nature's garden party.`,
    tier: 1,
    contractAbi: ITEM_FERTILE_LAND_CONTRACT_ABI,
};
export const ITEM_WETLAND: IItem = {
    id: 113,
    name: 'Wetland',
    description: `As if Mother Nature decided to recreate the set of Jumanji with extra humidity and a smorgasbord of mosquitoes!`,
    tier: 1,
    contractAbi: ITEM_WETLAND_CONTRACT_ABI,
};
export const ITEM_PEAT: IItem = {
    id: 114,
    name: 'Peat',
    description: `It's like the cozy blanket of soil—excellent for plants, terrible for couch potatoes.`,
    tier: 1,
    contractAbi: ITEM_PEAT_CONTRACT_ABI,
};
export const ITEM_REEDS: IItem = {
    id: 115,
    name: 'Reeds',
    description: `The nature-made cocktail straws that just might call Gandalf from Middle-earth; beware of hobbits sneaking around!`,
    tier: 1,
    contractAbi: ITEM_REEDS_CONTRACT_ABI,
};
export const ITEM_VALLEY: IItem = {
    id: 116,
    name: 'Valley',
    description: `The place where hills take a break and gossip about mountains.`,
    tier: 1,
    contractAbi: ITEM_VALLEY_CONTRACT_ABI,
};
export const ITEM_RIVER: IItem = {
    id: 117,
    name: 'River',
    description: `The highway for fish and the misplaced bathtubs of nature, flowing with more twists than a soap opera plotline.`,
    tier: 1,
    contractAbi: ITEM_RIVER_CONTRACT_ABI,
};
export const ITEM_SCORCHED_EARTH: IItem = {
    id: 118,
    name: 'Scorched Earth',
    description: `More devastating than an expired hot sauce binge, it turns fertile land into a Mad Max wasteland!`,
    tier: 1,
    contractAbi: ITEM_SCORCHED_EARTH_CONTRACT_ABI,
};
export const ITEM_DELTA: IItem = {
    id: 119,
    name: 'Delta',
    description: `The river’s final boss battle, where water splits like an indecisive rom-com character in the season finale.`,
    tier: 1,
    contractAbi: ITEM_DELTA_CONTRACT_ABI,
};
export const ITEM_ESTUARY: IItem = {
    id: 120,
    name: 'Estuary',
    description: `Where the river meets the sea, like the ultimate mashup album nobody asked for but everyone loves.`,
    tier: 1,
    contractAbi: ITEM_ESTUARY_CONTRACT_ABI,
};
export const ITEM_FIRE_SWAMP: IItem = {
    id: 121,
    name: 'Fire Swamp',
    description: `Enter at your own risk and remember, the trees have a fiery personality akin to dragons after a spicy taco night!`,
    tier: 1,
    contractAbi: ITEM_FIRE_SWAMP_CONTRACT_ABI,
};
export const ITEM_RIVERBANK: IItem = {
    id: 122,
    name: 'Riverbank',
    description: `Where Gandalf would come for a picnic with his hobbit homies if Middle-earth had longer vacations.`,
    tier: 1,
    contractAbi: ITEM_RIVERBANK_CONTRACT_ABI,
};
export const ITEM_RAVINE: IItem = {
    id: 123,
    name: 'Ravine',
    description: `The Grand Canyon's emo teenager cousin, endless depths of angsty chasms.`,
    tier: 1,
    contractAbi: ITEM_RAVINE_CONTRACT_ABI,
};
export const ITEM_GORGE: IItem = {
    id: 124,
    name: 'Gorge',
    description: `When wandering through this natural wonder, remember: it's like Mother Earth's really dramatic cleavage.`,
    tier: 1,
    contractAbi: ITEM_GORGE_CONTRACT_ABI,
};
export const ITEM_CHARRED_RAVINE: IItem = {
    id: 125,
    name: 'Charred Ravine',
    description: `A spicy hot potato chip of doom, hotter than a dragon's sneeze in a volcano.`,
    tier: 1,
    contractAbi: ITEM_CHARRED_RAVINE_CONTRACT_ABI,
};
export const ITEM_ECHO: IItem = {
    id: 126,
    name: 'Echo',
    description: `It's like shouting into a canyon, but the canyon actually cares about what you said and keeps repeating it back.`,
    tier: 1,
    contractAbi: ITEM_ECHO_CONTRACT_ABI,
};
export const ITEM_CAVE: IItem = {
    id: 127,
    name: 'Cave',
    description: `A dark, damp Airbnb for bats and trolls, with zero Wi-Fi signal but plenty of natural 'rockitecture'.`,
    tier: 1,
    contractAbi: ITEM_CAVE_CONTRACT_ABI,
};
export const ITEM_UNDERGROUND_LAKE: IItem = {
    id: 128,
    name: 'Underground Lake',
    description: `The Batcave of aquatic hideaways, home to timid fish and overly ambitious spelunkers alike.`,
    tier: 1,
    contractAbi: ITEM_UNDERGROUND_LAKE_CONTRACT_ABI,
};
export const ITEM_LAVA_CAVE: IItem = {
    id: 129,
    name: 'Lava Cave',
    description: `A fiery Airbnb for fire-breathing dragons and grilled marshmallows.`,
    tier: 1,
    contractAbi: ITEM_LAVA_CAVE_CONTRACT_ABI,
};
export const ITEM_WHISPERING_CAVE: IItem = {
    id: 130,
    name: 'Whispering Cave',
    description: `A cave so chatty it makes high school gossip sound like monk's meditation.`,
    tier: 1,
    contractAbi: ITEM_WHISPERING_CAVE_CONTRACT_ABI,
};
export const ITEM_SUBTERRANEAN_POOL: IItem = {
    id: 131,
    name: 'Subterranean Pool',
    description: `Where the Teenage Mutant Ninja Turtles learned to swim and rediscover lost rubber duckies!`,
    tier: 1,
    contractAbi: ITEM_SUBTERRANEAN_POOL_CONTRACT_ABI,
};
export const ITEM_SPRING: IItem = {
    id: 132,
    name: 'Spring',
    description: `Jump higher than your dreams, or at least higher than your disappointments, with this bouncy boing-boing.`,
    tier: 1,
    contractAbi: ITEM_SPRING_CONTRACT_ABI,
};
export const ITEM_HOT_SPRING: IItem = {
    id: 133,
    name: 'Hot Spring',
    description: `Like soaking in a jacuzzi made by Mother Nature, but without the awkward vacation photos!`,
    tier: 1,
    contractAbi: ITEM_HOT_SPRING_CONTRACT_ABI,
};
export const ITEM_GROTTO: IItem = {
    id: 134,
    name: 'Grotto',
    description: `The ultimate bachelor pad for goblins—think of it as a man cave, but with actual caves.`,
    tier: 1,
    contractAbi: ITEM_GROTTO_CONTRACT_ABI,
};
export const ITEM_FOUNTAIN: IItem = {
    id: 135,
    name: 'Fountain',
    description: `Where wishes and coins go on a wild water slide together.`,
    tier: 1,
    contractAbi: ITEM_FOUNTAIN_CONTRACT_ABI,
};
export const ITEM_STEAM_VENT: IItem = {
    id: 136,
    name: 'Steam Vent',
    description: `When regular air conditioning just won't cut it, unleash this spicy hot air geyser and channel your inner Old Faithful!`,
    tier: 1,
    contractAbi: ITEM_STEAM_VENT_CONTRACT_ABI,
};
export const ITEM_COOL_BREEZE: IItem = {
    id: 137,
    name: 'Cool Breeze',
    description: `As refreshing as a surprise pizza party in summer, but with zero calories!`,
    tier: 1,
    contractAbi: ITEM_COOL_BREEZE_CONTRACT_ABI,
};
export const ITEM_MONUMENT: IItem = {
    id: 138,
    name: 'Monument',
    description: `A stone tribute that's so towering, it could give the Statue of Liberty vertigo!`,
    tier: 1,
    contractAbi: ITEM_MONUMENT_CONTRACT_ABI,
};
export const ITEM_WATERFALL: IItem = {
    id: 139,
    name: 'Waterfall',
    description: `Niagara's younger, slightly less impressive cousin that still turns heads like a supermodel on a catwalk.`,
    tier: 1,
    contractAbi: ITEM_WATERFALL_CONTRACT_ABI,
};
export const ITEM_ETERNAL_FLAME: IItem = {
    id: 140,
    name: 'Eternal Flame',
    description: `Hotter than a dragon's sneeze, this flame burns with the angst of a thousand rejected pop stars!`,
    tier: 1,
    contractAbi: ITEM_ETERNAL_FLAME_CONTRACT_ABI,
};
export const ITEM_PILLAR_OF_WIND: IItem = {
    id: 141,
    name: 'Pillar Of Wind',
    description: `A swirling cyclone of air that even the Weather Channel fears to forecast.`,
    tier: 1,
    contractAbi: ITEM_PILLAR_OF_WIND_CONTRACT_ABI,
};
export const ITEM_STREAM: IItem = {
    id: 142,
    name: 'Stream',
    description: `Like Netflix for fish, this babbling brook is constantly streaming new episodes of nature’s playlist!`,
    tier: 1,
    contractAbi: ITEM_STREAM_CONTRACT_ABI,
};
export const ITEM_ZEPHYR: IItem = {
    id: 143,
    name: 'Zephyr',
    description: `A breeze so gentle, it could whisper lullabies to butterflies while moonwalking through daisies.`,
    tier: 1,
    contractAbi: ITEM_ZEPHYR_CONTRACT_ABI,
};
export const ITEM_CREEK: IItem = {
    id: 144,
    name: 'Creek',
    description: `Tiny river, think of it as a baby Amazon just learning to meme.`,
    tier: 1,
    contractAbi: ITEM_CREEK_CONTRACT_ABI,
};
export const ITEM_BROOK: IItem = {
    id: 145,
    name: 'Brook',
    description: `Where baby rivers are born and sent to Hogwarts.`,
    tier: 1,
    contractAbi: ITEM_BROOK_CONTRACT_ABI,
};
export const ITEM_WHISPER: IItem = {
    id: 146,
    name: 'Whisper',
    description: `The secret handshake of the wind and your ear, as if a gossiping fairy had a megaphone.`,
    tier: 1,
    contractAbi: ITEM_WHISPER_CONTRACT_ABI,
};
export const ITEM_RIVULET: IItem = {
    id: 147,
    name: 'Rivulet',
    description: `A tiny stream so small that even ants use it as their personal slip-n-slide.`,
    tier: 1,
    contractAbi: ITEM_RIVULET_CONTRACT_ABI,
};
export const ITEM_TRIBUTARY: IItem = {
    id: 148,
    name: 'Tributary',
    description: `A glorified water delivery service, bringing aqua goodness to bigger, bossier rivers.`,
    tier: 1,
    contractAbi: ITEM_TRIBUTARY_CONTRACT_ABI,
};
export const ITEM_MURMUR: IItem = {
    id: 149,
    name: 'Murmur',
    description: `Like the whisper of a ninja, Murmur is the sound your enemies will never hear until it’s too late.`,
    tier: 1,
    contractAbi: ITEM_MURMUR_CONTRACT_ABI,
};
export const ITEM_WATERSHED: IItem = {
    id: 150,
    name: 'Watershed',
    description: `A pivotal plot twist in the landscape where water decides which way it wants to go for the grand finale!`,
    tier: 1,
    contractAbi: ITEM_WATERSHED_CONTRACT_ABI,
};
export const ITEM_AQUIFER: IItem = {
    id: 151,
    name: 'Aquifer',
    description: `Nature's secret underground swimming pool, perfect for when groundwater wants to chill out.`,
    tier: 1,
    contractAbi: ITEM_AQUIFER_CONTRACT_ABI,
};
export const ITEM_PARCHED_EARTH: IItem = {
    id: 152,
    name: 'Parched Earth',
    description: `More thirst-quenching than a backstage pass at a Beyoncé concert!`,
    tier: 1,
    contractAbi: ITEM_PARCHED_EARTH_CONTRACT_ABI,
};
export const ITEM_FRESH_BREEZE: IItem = {
    id: 153,
    name: 'Fresh Breeze',
    description: `A zephyr so crisp it could convince even Darth Vader to join a yoga retreat!`,
    tier: 1,
    contractAbi: ITEM_FRESH_BREEZE_CONTRACT_ABI,
};
export const ITEM_GROUNDWATER: IItem = {
    id: 154,
    name: 'Groundwater',
    description: `Mother Earth's secret stash, hidden beneath her rocky garments like a hip flask at a dry wedding.`,
    tier: 1,
    contractAbi: ITEM_GROUNDWATER_CONTRACT_ABI,
};
export const ITEM_RESERVOIR: IItem = {
    id: 155,
    name: 'Reservoir',
    description: `Hoarder of H2O: Where all the local water droplets hang out and gossip about breaking dams and making waves!`,
    tier: 1,
    contractAbi: ITEM_RESERVOIR_CONTRACT_ABI,
};
export const ITEM_GEOTHERMAL_SPRING: IItem = {
    id: 156,
    name: 'Geothermal Spring',
    description: `Mother Nature's jacuzzi, hotter than the coffee your soul relies on.`,
    tier: 1,
    contractAbi: ITEM_GEOTHERMAL_SPRING_CONTRACT_ABI,
};
export const ITEM_ARTESIAN_WELL: IItem = {
    id: 157,
    name: 'Artesian Well',
    description: `The bottomless mimosa bar of water sources, constantly refilling without you lifting a finger - cheers!`,
    tier: 1,
    contractAbi: ITEM_ARTESIAN_WELL_CONTRACT_ABI,
};
export const ITEM_BASIN: IItem = {
    id: 158,
    name: 'Basin',
    description: `The Holy Grail of your bathroom, where soap bubbles dream of escape and rubber duckies rule!`,
    tier: 1,
    contractAbi: ITEM_BASIN_CONTRACT_ABI,
};
export const ITEM_LAKE: IItem = {
    id: 159,
    name: 'Lake',
    description: `Nature's giant puddle, perfect for lazy fish, and where mythical creatures might just throw tea parties.`,
    tier: 1,
    contractAbi: ITEM_LAKE_CONTRACT_ABI,
};
export const ITEM_DRY_BASIN: IItem = {
    id: 160,
    name: 'Dry Basin',
    description: `A bowl so devoid of moisture, even SpongeBob would dry up in here.`,
    tier: 1,
    contractAbi: ITEM_DRY_BASIN_CONTRACT_ABI,
};
export const ITEM_DEPRESSION: IItem = {
    id: 161,
    name: 'Depression',
    description: `Feeling like Eeyore in a world full of Tiggers.`,
    tier: 1,
    contractAbi: ITEM_DEPRESSION_CONTRACT_ABI,
};
export const ITEM_ISLAND: IItem = {
    id: 162,
    name: 'Island',
    description: `A chunk of land adrift in the ocean, like a slice of pizza floating in tomato soup.`,
    tier: 1,
    contractAbi: ITEM_ISLAND_CONTRACT_ABI,
};
export const ITEM_LAGOON: IItem = {
    id: 163,
    name: 'Lagoon',
    description: `A lazy lake who's too cool to hang with the ocean, featuring more zen than a yoga retreat for dolphins.`,
    tier: 1,
    contractAbi: ITEM_LAGOON_CONTRACT_ABI,
};
export const ITEM_WAVE: IItem = {
    id: 164,
    name: 'Wave',
    description: `Surf's up, dude–ride this aquatic rollercoaster like a water wizard!`,
    tier: 1,
    contractAbi: ITEM_WAVE_CONTRACT_ABI,
};
export const ITEM_REEF: IItem = {
    id: 165,
    name: 'Reef',
    description: `The underwater rock concert where fish party harder than rockstars!`,
    tier: 1,
    contractAbi: ITEM_REEF_CONTRACT_ABI,
};
export const ITEM_CORAL: IItem = {
    id: 166,
    name: 'Coral',
    description: `Nature's underwater apartment complex—complete with quirky neighbors!`,
    tier: 1,
    contractAbi: ITEM_CORAL_CONTRACT_ABI,
};
export const ITEM_WHIRL: IItem = {
    id: 167,
    name: 'Whirl',
    description: `Like a blender on steroids, this mini-maelstrom promises to mix up your enemies' day!`,
    tier: 1,
    contractAbi: ITEM_WHIRL_CONTRACT_ABI,
};
export const ITEM_LIMESTONE: IItem = {
    id: 168,
    name: 'Limestone',
    description: `The rock Dwayne Johnson wished he was named after - capable of building empires and perfect for caveman graffiti.`,
    tier: 1,
    contractAbi: ITEM_LIMESTONE_CONTRACT_ABI,
};
export const ITEM_KARST: IItem = {
    id: 169,
    name: 'Karst',
    description: `The Swiss cheese of landscapes—full of holes, surprises, and probably a hidden treasure if you look close enough!`,
    tier: 1,
    contractAbi: ITEM_KARST_CONTRACT_ABI,
};
export const ITEM_QUICKLIME: IItem = {
    id: 170,
    name: 'Quicklime',
    description: `Just add water and watch this rock go all 'Hulk Smash' on your hydration dreams!`,
    tier: 1,
    contractAbi: ITEM_QUICKLIME_CONTRACT_ABI,
};
export const ITEM_BLOWHOLE: IItem = {
    id: 171,
    name: 'Blowhole',
    description: `The marine mammal's N64 controller button for an epic H2O power-up!`,
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
export const RECIPE_MAKE_STEAM: IRecipe = {
    id: 10,
    a: ITEM_WATER,
    b: ITEM_FIRE,
    result: ITEM_STEAM,
};
export const RECIPE_MAKE_MUD: IRecipe = {
    id: 11,
    a: ITEM_WATER,
    b: ITEM_EARTH,
    result: ITEM_MUD,
};
export const RECIPE_MAKE_LAVA: IRecipe = {
    id: 12,
    a: ITEM_FIRE,
    b: ITEM_EARTH,
    result: ITEM_LAVA,
};
export const RECIPE_MAKE_DUST: IRecipe = {
    id: 13,
    a: ITEM_WIND,
    b: ITEM_EARTH,
    result: ITEM_DUST,
};
export const RECIPE_MAKE_RAIN: IRecipe = {
    id: 14,
    a: ITEM_WATER,
    b: ITEM_WIND,
    result: ITEM_RAIN,
};
export const RECIPE_MAKE_SMOKE: IRecipe = {
    id: 15,
    a: ITEM_FIRE,
    b: ITEM_WIND,
    result: ITEM_SMOKE,
};
export const RECIPE_MAKE_GEYSER: IRecipe = {
    id: 16,
    a: ITEM_STEAM,
    b: ITEM_EARTH,
    result: ITEM_GEYSER,
};
export const RECIPE_MAKE_CLAY: IRecipe = {
    id: 17,
    a: ITEM_MUD,
    b: ITEM_FIRE,
    result: ITEM_CLAY,
};
export const RECIPE_MAKE_SAND: IRecipe = {
    id: 18,
    a: ITEM_MUD,
    b: ITEM_WIND,
    result: ITEM_SAND,
};
export const RECIPE_MAKE_PLANT: IRecipe = {
    id: 19,
    a: ITEM_RAIN,
    b: ITEM_EARTH,
    result: ITEM_PLANT,
};
export const RECIPE_MAKE_RAINBOW: IRecipe = {
    id: 20,
    a: ITEM_RAIN,
    b: ITEM_FIRE,
    result: ITEM_RAINBOW,
};
export const RECIPE_MAKE_STORM: IRecipe = {
    id: 21,
    a: ITEM_RAIN,
    b: ITEM_WIND,
    result: ITEM_STORM,
};
export const RECIPE_MAKE_OBSIDIAN: IRecipe = {
    id: 22,
    a: ITEM_LAVA,
    b: ITEM_WATER,
    result: ITEM_OBSIDIAN,
};
export const RECIPE_MAKE_ASH: IRecipe = {
    id: 23,
    a: ITEM_LAVA,
    b: ITEM_WIND,
    result: ITEM_ASH,
};
export const RECIPE_MAKE_VOLCANO: IRecipe = {
    id: 24,
    a: ITEM_LAVA,
    b: ITEM_EARTH,
    result: ITEM_VOLCANO,
};
export const RECIPE_MAKE_SANDSTORM: IRecipe = {
    id: 25,
    a: ITEM_DUST,
    b: ITEM_WIND,
    result: ITEM_SANDSTORM,
};
export const RECIPE_MAKE_CLOUD: IRecipe = {
    id: 26,
    a: ITEM_SMOKE,
    b: ITEM_WATER,
    result: ITEM_CLOUD,
};
export const RECIPE_MAKE_FOG: IRecipe = {
    id: 27,
    a: ITEM_SMOKE,
    b: ITEM_WIND,
    result: ITEM_FOG,
};
export const RECIPE_MAKE_TREE: IRecipe = {
    id: 28,
    a: ITEM_PLANT,
    b: ITEM_WATER,
    result: ITEM_TREE,
};
export const RECIPE_MAKE_FOREST: IRecipe = {
    id: 29,
    a: ITEM_PLANT,
    b: ITEM_EARTH,
    result: ITEM_FOREST,
};
export const RECIPE_MAKE_SEEDS: IRecipe = {
    id: 30,
    a: ITEM_PLANT,
    b: ITEM_WIND,
    result: ITEM_SEEDS,
};
export const RECIPE_MAKE_POTTERY: IRecipe = {
    id: 31,
    a: ITEM_CLAY,
    b: ITEM_FIRE,
    result: ITEM_POTTERY,
};
export const RECIPE_MAKE_BRICK: IRecipe = {
    id: 32,
    a: ITEM_CLAY,
    b: ITEM_EARTH,
    result: ITEM_BRICK,
};
export const RECIPE_MAKE_QUICKSAND: IRecipe = {
    id: 33,
    a: ITEM_SAND,
    b: ITEM_WATER,
    result: ITEM_QUICKSAND,
};
export const RECIPE_MAKE_GLASS: IRecipe = {
    id: 34,
    a: ITEM_SAND,
    b: ITEM_FIRE,
    result: ITEM_GLASS,
};
export const RECIPE_MAKE_DUNE: IRecipe = {
    id: 35,
    a: ITEM_SAND,
    b: ITEM_WIND,
    result: ITEM_DUNE,
};
export const RECIPE_MAKE_CHARCOAL: IRecipe = {
    id: 36,
    a: ITEM_TREE,
    b: ITEM_FIRE,
    result: ITEM_CHARCOAL,
};
export const RECIPE_MAKE_LEAVES: IRecipe = {
    id: 37,
    a: ITEM_TREE,
    b: ITEM_WIND,
    result: ITEM_LEAVES,
};
export const RECIPE_MAKE_WILDFIRE: IRecipe = {
    id: 38,
    a: ITEM_FOREST,
    b: ITEM_FIRE,
    result: ITEM_WILDFIRE,
};
export const RECIPE_MAKE_JUNGLE: IRecipe = {
    id: 39,
    a: ITEM_FOREST,
    b: ITEM_EARTH,
    result: ITEM_JUNGLE,
};
export const RECIPE_MAKE_FROSTED_GLASS: IRecipe = {
    id: 40,
    a: ITEM_GLASS,
    b: ITEM_WATER,
    result: ITEM_FROSTED_GLASS,
};
export const RECIPE_MAKE_CRYSTAL: IRecipe = {
    id: 41,
    a: ITEM_GLASS,
    b: ITEM_EARTH,
    result: ITEM_CRYSTAL,
};
export const RECIPE_MAKE_MAGMA: IRecipe = {
    id: 42,
    a: ITEM_OBSIDIAN,
    b: ITEM_FIRE,
    result: ITEM_MAGMA,
};
export const RECIPE_MAKE_ROCK: IRecipe = {
    id: 43,
    a: ITEM_OBSIDIAN,
    b: ITEM_EARTH,
    result: ITEM_ROCK,
};
export const RECIPE_MAKE_SHARD: IRecipe = {
    id: 44,
    a: ITEM_OBSIDIAN,
    b: ITEM_WIND,
    result: ITEM_SHARD,
};
export const RECIPE_MAKE_PEBBLE: IRecipe = {
    id: 45,
    a: ITEM_ROCK,
    b: ITEM_WATER,
    result: ITEM_PEBBLE,
};
export const RECIPE_MAKE_MOUNTAIN: IRecipe = {
    id: 46,
    a: ITEM_ROCK,
    b: ITEM_EARTH,
    result: ITEM_MOUNTAIN,
};
export const RECIPE_MAKE_FERTILIZER: IRecipe = {
    id: 47,
    a: ITEM_ASH,
    b: ITEM_EARTH,
    result: ITEM_FERTILIZER,
};
export const RECIPE_MAKE_SOOT: IRecipe = {
    id: 48,
    a: ITEM_ASH,
    b: ITEM_WIND,
    result: ITEM_SOOT,
};
export const RECIPE_MAKE_LIGHTNING: IRecipe = {
    id: 49,
    a: ITEM_CLOUD,
    b: ITEM_FIRE,
    result: ITEM_LIGHTNING,
};
export const RECIPE_MAKE_MIST: IRecipe = {
    id: 50,
    a: ITEM_FOG,
    b: ITEM_EARTH,
    result: ITEM_MIST,
};
export const RECIPE_MAKE_HAZE: IRecipe = {
    id: 51,
    a: ITEM_FOG,
    b: ITEM_WIND,
    result: ITEM_HAZE,
};
export const RECIPE_MAKE_FLOOD: IRecipe = {
    id: 52,
    a: ITEM_STORM,
    b: ITEM_WATER,
    result: ITEM_FLOOD,
};
export const RECIPE_MAKE_LANDSLIDE: IRecipe = {
    id: 53,
    a: ITEM_STORM,
    b: ITEM_EARTH,
    result: ITEM_LANDSLIDE,
};
export const RECIPE_MAKE_THUNDER: IRecipe = {
    id: 54,
    a: ITEM_STORM,
    b: ITEM_FIRE,
    result: ITEM_THUNDER,
};
export const RECIPE_MAKE_TORNADO: IRecipe = {
    id: 55,
    a: ITEM_STORM,
    b: ITEM_WIND,
    result: ITEM_TORNADO,
};
export const RECIPE_MAKE_GARDEN: IRecipe = {
    id: 56,
    a: ITEM_EARTH,
    b: ITEM_PLANT,
    result: ITEM_GARDEN,
};
export const RECIPE_MAKE_EMBER: IRecipe = {
    id: 57,
    a: ITEM_FIRE,
    b: ITEM_ASH,
    result: ITEM_EMBER,
};
export const RECIPE_MAKE_KILN: IRecipe = {
    id: 58,
    a: ITEM_FIRE,
    b: ITEM_POTTERY,
    result: ITEM_KILN,
};
export const RECIPE_MAKE_POLLINATION: IRecipe = {
    id: 59,
    a: ITEM_WIND,
    b: ITEM_PLANT,
    result: ITEM_POLLINATION,
};
export const RECIPE_MAKE_SINKHOLE: IRecipe = {
    id: 60,
    a: ITEM_EARTH,
    b: ITEM_QUICKSAND,
    result: ITEM_SINKHOLE,
};
export const RECIPE_MAKE_BEACH: IRecipe = {
    id: 61,
    a: ITEM_WATER,
    b: ITEM_SAND,
    result: ITEM_BEACH,
};
export const RECIPE_MAKE_WETSTONE: IRecipe = {
    id: 62,
    a: ITEM_WATER,
    b: ITEM_OBSIDIAN,
    result: ITEM_WETSTONE,
};
export const RECIPE_MAKE_EROSION: IRecipe = {
    id: 63,
    a: ITEM_WIND,
    b: ITEM_ROCK,
    result: ITEM_EROSION,
};
export const RECIPE_MAKE_BASALT: IRecipe = {
    id: 64,
    a: ITEM_WATER,
    b: ITEM_LAVA,
    result: ITEM_BASALT,
};
export const RECIPE_MAKE_MAGMA_CHAMBER: IRecipe = {
    id: 65,
    a: ITEM_EARTH,
    b: ITEM_LAVA,
    result: ITEM_MAGMA_CHAMBER,
};
export const RECIPE_MAKE_BREEZE: IRecipe = {
    id: 66,
    a: ITEM_WIND,
    b: ITEM_DUST,
    result: ITEM_BREEZE,
};
export const RECIPE_MAKE_WARM_BREEZE: IRecipe = {
    id: 67,
    a: ITEM_FIRE,
    b: ITEM_BREEZE,
    result: ITEM_WARM_BREEZE,
};
export const RECIPE_MAKE_SOIL: IRecipe = {
    id: 68,
    a: ITEM_EARTH,
    b: ITEM_PLANT,
    result: ITEM_SOIL,
};
export const RECIPE_MAKE_CANYON: IRecipe = {
    id: 69,
    a: ITEM_WATER,
    b: ITEM_EROSION,
    result: ITEM_CANYON,
};
export const RECIPE_MAKE_WINDMILL: IRecipe = {
    id: 70,
    a: ITEM_WIND,
    b: ITEM_PLANT,
    result: ITEM_WINDMILL,
};
export const RECIPE_MAKE_ADOBE: IRecipe = {
    id: 71,
    a: ITEM_EARTH,
    b: ITEM_CLAY,
    result: ITEM_ADOBE,
};
export const RECIPE_MAKE_WALL: IRecipe = {
    id: 72,
    a: ITEM_EARTH,
    b: ITEM_BRICK,
    result: ITEM_WALL,
};
export const RECIPE_MAKE_PUMICE: IRecipe = {
    id: 73,
    a: ITEM_WATER,
    b: ITEM_ASH,
    result: ITEM_PUMICE,
};
export const RECIPE_MAKE_BARBECUE: IRecipe = {
    id: 74,
    a: ITEM_FIRE,
    b: ITEM_CHARCOAL,
    result: ITEM_BARBECUE,
};
export const RECIPE_MAKE_FARM: IRecipe = {
    id: 75,
    a: ITEM_EARTH,
    b: ITEM_SEEDS,
    result: ITEM_FARM,
};
export const RECIPE_MAKE_SHARDS: IRecipe = {
    id: 76,
    a: ITEM_WIND,
    b: ITEM_OBSIDIAN,
    result: ITEM_SHARDS,
};
export const RECIPE_MAKE_MOLTEN_GLASS: IRecipe = {
    id: 77,
    a: ITEM_FIRE,
    b: ITEM_CRYSTAL,
    result: ITEM_MOLTEN_GLASS,
};
export const RECIPE_MAKE_PRISM: IRecipe = {
    id: 78,
    a: ITEM_WATER,
    b: ITEM_CRYSTAL,
    result: ITEM_PRISM,
};
export const RECIPE_MAKE_SPARKLE: IRecipe = {
    id: 79,
    a: ITEM_WIND,
    b: ITEM_CRYSTAL,
    result: ITEM_SPARKLE,
};
export const RECIPE_MAKE_DESERT: IRecipe = {
    id: 80,
    a: ITEM_EARTH,
    b: ITEM_BEACH,
    result: ITEM_DESERT,
};
export const RECIPE_MAKE_OASIS: IRecipe = {
    id: 81,
    a: ITEM_WATER,
    b: ITEM_DESERT,
    result: ITEM_OASIS,
};
export const RECIPE_MAKE_MIRAGE: IRecipe = {
    id: 82,
    a: ITEM_FIRE,
    b: ITEM_DESERT,
    result: ITEM_MIRAGE,
};
export const RECIPE_MAKE_SAND_DUNE: IRecipe = {
    id: 83,
    a: ITEM_WIND,
    b: ITEM_DESERT,
    result: ITEM_SAND_DUNE,
};
export const RECIPE_MAKE_DAM: IRecipe = {
    id: 84,
    a: ITEM_WATER,
    b: ITEM_WALL,
    result: ITEM_DAM,
};
export const RECIPE_MAKE_FIREWALL: IRecipe = {
    id: 85,
    a: ITEM_FIRE,
    b: ITEM_WALL,
    result: ITEM_FIREWALL,
};
export const RECIPE_MAKE_BARRICADE: IRecipe = {
    id: 86,
    a: ITEM_WIND,
    b: ITEM_WALL,
    result: ITEM_BARRICADE,
};
export const RECIPE_MAKE_PLATEAU: IRecipe = {
    id: 87,
    a: ITEM_EARTH,
    b: ITEM_CANYON,
    result: ITEM_PLATEAU,
};
export const RECIPE_MAKE_POND: IRecipe = {
    id: 88,
    a: ITEM_WATER,
    b: ITEM_GARDEN,
    result: ITEM_POND,
};
export const RECIPE_MAKE_AROMAS: IRecipe = {
    id: 89,
    a: ITEM_WIND,
    b: ITEM_GARDEN,
    result: ITEM_AROMAS,
};
export const RECIPE_MAKE_FLOWER: IRecipe = {
    id: 90,
    a: ITEM_WATER,
    b: ITEM_POLLINATION,
    result: ITEM_FLOWER,
};
export const RECIPE_MAKE_SPORE: IRecipe = {
    id: 91,
    a: ITEM_FIRE,
    b: ITEM_POLLINATION,
    result: ITEM_SPORE,
};
export const RECIPE_MAKE_SPREAD: IRecipe = {
    id: 92,
    a: ITEM_WIND,
    b: ITEM_POLLINATION,
    result: ITEM_SPREAD,
};
export const RECIPE_MAKE_FERTILE_LAND: IRecipe = {
    id: 93,
    a: ITEM_EARTH,
    b: ITEM_SOIL,
    result: ITEM_FERTILE_LAND,
};
export const RECIPE_MAKE_WETLAND: IRecipe = {
    id: 94,
    a: ITEM_WATER,
    b: ITEM_FERTILE_LAND,
    result: ITEM_WETLAND,
};
export const RECIPE_MAKE_PEAT: IRecipe = {
    id: 95,
    a: ITEM_FIRE,
    b: ITEM_WETLAND,
    result: ITEM_PEAT,
};
export const RECIPE_MAKE_REEDS: IRecipe = {
    id: 96,
    a: ITEM_WIND,
    b: ITEM_WETLAND,
    result: ITEM_REEDS,
};
export const RECIPE_MAKE_VALLEY: IRecipe = {
    id: 97,
    a: ITEM_EARTH,
    b: ITEM_CANYON,
    result: ITEM_VALLEY,
};
export const RECIPE_MAKE_RIVER: IRecipe = {
    id: 98,
    a: ITEM_WATER,
    b: ITEM_VALLEY,
    result: ITEM_RIVER,
};
export const RECIPE_MAKE_SCORCHED_EARTH: IRecipe = {
    id: 99,
    a: ITEM_FIRE,
    b: ITEM_VALLEY,
    result: ITEM_SCORCHED_EARTH,
};
export const RECIPE_MAKE_DELTA: IRecipe = {
    id: 100,
    a: ITEM_EARTH,
    b: ITEM_RIVER,
    result: ITEM_DELTA,
};
export const RECIPE_MAKE_ESTUARY: IRecipe = {
    id: 101,
    a: ITEM_WATER,
    b: ITEM_DELTA,
    result: ITEM_ESTUARY,
};
export const RECIPE_MAKE_FIRE_SWAMP: IRecipe = {
    id: 102,
    a: ITEM_FIRE,
    b: ITEM_DELTA,
    result: ITEM_FIRE_SWAMP,
};
export const RECIPE_MAKE_RIVERBANK: IRecipe = {
    id: 103,
    a: ITEM_WIND,
    b: ITEM_DELTA,
    result: ITEM_RIVERBANK,
};
export const RECIPE_MAKE_RAVINE: IRecipe = {
    id: 104,
    a: ITEM_EARTH,
    b: ITEM_EROSION,
    result: ITEM_RAVINE,
};
export const RECIPE_MAKE_GORGE: IRecipe = {
    id: 105,
    a: ITEM_WATER,
    b: ITEM_RAVINE,
    result: ITEM_GORGE,
};
export const RECIPE_MAKE_CHARRED_RAVINE: IRecipe = {
    id: 106,
    a: ITEM_FIRE,
    b: ITEM_RAVINE,
    result: ITEM_CHARRED_RAVINE,
};
export const RECIPE_MAKE_ECHO: IRecipe = {
    id: 107,
    a: ITEM_WIND,
    b: ITEM_RAVINE,
    result: ITEM_ECHO,
};
export const RECIPE_MAKE_CAVE: IRecipe = {
    id: 108,
    a: ITEM_EARTH,
    b: ITEM_ECHO,
    result: ITEM_CAVE,
};
export const RECIPE_MAKE_UNDERGROUND_LAKE: IRecipe = {
    id: 109,
    a: ITEM_WATER,
    b: ITEM_CAVE,
    result: ITEM_UNDERGROUND_LAKE,
};
export const RECIPE_MAKE_LAVA_CAVE: IRecipe = {
    id: 110,
    a: ITEM_FIRE,
    b: ITEM_CAVE,
    result: ITEM_LAVA_CAVE,
};
export const RECIPE_MAKE_WHISPERING_CAVE: IRecipe = {
    id: 111,
    a: ITEM_WIND,
    b: ITEM_CAVE,
    result: ITEM_WHISPERING_CAVE,
};
export const RECIPE_MAKE_SUBTERRANEAN_POOL: IRecipe = {
    id: 112,
    a: ITEM_EARTH,
    b: ITEM_UNDERGROUND_LAKE,
    result: ITEM_SUBTERRANEAN_POOL,
};
export const RECIPE_MAKE_SPRING: IRecipe = {
    id: 113,
    a: ITEM_WATER,
    b: ITEM_SUBTERRANEAN_POOL,
    result: ITEM_SPRING,
};
export const RECIPE_MAKE_HOT_SPRING: IRecipe = {
    id: 114,
    a: ITEM_FIRE,
    b: ITEM_SUBTERRANEAN_POOL,
    result: ITEM_HOT_SPRING,
};
export const RECIPE_MAKE_GROTTO: IRecipe = {
    id: 115,
    a: ITEM_WIND,
    b: ITEM_SUBTERRANEAN_POOL,
    result: ITEM_GROTTO,
};
export const RECIPE_MAKE_FOUNTAIN: IRecipe = {
    id: 116,
    a: ITEM_WATER,
    b: ITEM_SPRING,
    result: ITEM_FOUNTAIN,
};
export const RECIPE_MAKE_STEAM_VENT: IRecipe = {
    id: 117,
    a: ITEM_FIRE,
    b: ITEM_SPRING,
    result: ITEM_STEAM_VENT,
};
export const RECIPE_MAKE_COOL_BREEZE: IRecipe = {
    id: 118,
    a: ITEM_WIND,
    b: ITEM_SPRING,
    result: ITEM_COOL_BREEZE,
};
export const RECIPE_MAKE_MONUMENT: IRecipe = {
    id: 119,
    a: ITEM_EARTH,
    b: ITEM_FOUNTAIN,
    result: ITEM_MONUMENT,
};
export const RECIPE_MAKE_WATERFALL: IRecipe = {
    id: 120,
    a: ITEM_WATER,
    b: ITEM_MONUMENT,
    result: ITEM_WATERFALL,
};
export const RECIPE_MAKE_ETERNAL_FLAME: IRecipe = {
    id: 121,
    a: ITEM_FIRE,
    b: ITEM_MONUMENT,
    result: ITEM_ETERNAL_FLAME,
};
export const RECIPE_MAKE_PILLAR_OF_WIND: IRecipe = {
    id: 122,
    a: ITEM_WIND,
    b: ITEM_MONUMENT,
    result: ITEM_PILLAR_OF_WIND,
};
export const RECIPE_MAKE_STREAM: IRecipe = {
    id: 123,
    a: ITEM_WATER,
    b: ITEM_RIVER,
    result: ITEM_STREAM,
};
export const RECIPE_MAKE_ZEPHYR: IRecipe = {
    id: 124,
    a: ITEM_WIND,
    b: ITEM_RIVER,
    result: ITEM_ZEPHYR,
};
export const RECIPE_MAKE_CREEK: IRecipe = {
    id: 125,
    a: ITEM_EARTH,
    b: ITEM_STREAM,
    result: ITEM_CREEK,
};
export const RECIPE_MAKE_BROOK: IRecipe = {
    id: 126,
    a: ITEM_WATER,
    b: ITEM_CREEK,
    result: ITEM_BROOK,
};
export const RECIPE_MAKE_WHISPER: IRecipe = {
    id: 127,
    a: ITEM_WIND,
    b: ITEM_CREEK,
    result: ITEM_WHISPER,
};
export const RECIPE_MAKE_RIVULET: IRecipe = {
    id: 128,
    a: ITEM_EARTH,
    b: ITEM_BROOK,
    result: ITEM_RIVULET,
};
export const RECIPE_MAKE_TRIBUTARY: IRecipe = {
    id: 129,
    a: ITEM_WATER,
    b: ITEM_RIVULET,
    result: ITEM_TRIBUTARY,
};
export const RECIPE_MAKE_MURMUR: IRecipe = {
    id: 130,
    a: ITEM_WIND,
    b: ITEM_RIVULET,
    result: ITEM_MURMUR,
};
export const RECIPE_MAKE_WATERSHED: IRecipe = {
    id: 131,
    a: ITEM_EARTH,
    b: ITEM_TRIBUTARY,
    result: ITEM_WATERSHED,
};
export const RECIPE_MAKE_AQUIFER: IRecipe = {
    id: 132,
    a: ITEM_WATER,
    b: ITEM_WATERSHED,
    result: ITEM_AQUIFER,
};
export const RECIPE_MAKE_PARCHED_EARTH: IRecipe = {
    id: 133,
    a: ITEM_FIRE,
    b: ITEM_WATERSHED,
    result: ITEM_PARCHED_EARTH,
};
export const RECIPE_MAKE_FRESH_BREEZE: IRecipe = {
    id: 134,
    a: ITEM_WIND,
    b: ITEM_WATERSHED,
    result: ITEM_FRESH_BREEZE,
};
export const RECIPE_MAKE_GROUNDWATER: IRecipe = {
    id: 135,
    a: ITEM_EARTH,
    b: ITEM_AQUIFER,
    result: ITEM_GROUNDWATER,
};
export const RECIPE_MAKE_RESERVOIR: IRecipe = {
    id: 136,
    a: ITEM_WATER,
    b: ITEM_GROUNDWATER,
    result: ITEM_RESERVOIR,
};
export const RECIPE_MAKE_GEOTHERMAL_SPRING: IRecipe = {
    id: 137,
    a: ITEM_FIRE,
    b: ITEM_GROUNDWATER,
    result: ITEM_GEOTHERMAL_SPRING,
};
export const RECIPE_MAKE_ARTESIAN_WELL: IRecipe = {
    id: 138,
    a: ITEM_WIND,
    b: ITEM_GROUNDWATER,
    result: ITEM_ARTESIAN_WELL,
};
export const RECIPE_MAKE_BASIN: IRecipe = {
    id: 139,
    a: ITEM_EARTH,
    b: ITEM_RESERVOIR,
    result: ITEM_BASIN,
};
export const RECIPE_MAKE_LAKE: IRecipe = {
    id: 140,
    a: ITEM_WATER,
    b: ITEM_BASIN,
    result: ITEM_LAKE,
};
export const RECIPE_MAKE_DRY_BASIN: IRecipe = {
    id: 141,
    a: ITEM_FIRE,
    b: ITEM_BASIN,
    result: ITEM_DRY_BASIN,
};
export const RECIPE_MAKE_DEPRESSION: IRecipe = {
    id: 142,
    a: ITEM_WIND,
    b: ITEM_BASIN,
    result: ITEM_DEPRESSION,
};
export const RECIPE_MAKE_ISLAND: IRecipe = {
    id: 143,
    a: ITEM_EARTH,
    b: ITEM_LAKE,
    result: ITEM_ISLAND,
};
export const RECIPE_MAKE_LAGOON: IRecipe = {
    id: 144,
    a: ITEM_WATER,
    b: ITEM_LAKE,
    result: ITEM_LAGOON,
};
export const RECIPE_MAKE_WAVE: IRecipe = {
    id: 145,
    a: ITEM_WIND,
    b: ITEM_LAKE,
    result: ITEM_WAVE,
};
export const RECIPE_MAKE_REEF: IRecipe = {
    id: 146,
    a: ITEM_EARTH,
    b: ITEM_LAGOON,
    result: ITEM_REEF,
};
export const RECIPE_MAKE_CORAL: IRecipe = {
    id: 147,
    a: ITEM_WATER,
    b: ITEM_REEF,
    result: ITEM_CORAL,
};
export const RECIPE_MAKE_WHIRL: IRecipe = {
    id: 148,
    a: ITEM_WIND,
    b: ITEM_REEF,
    result: ITEM_WHIRL,
};
export const RECIPE_MAKE_LIMESTONE: IRecipe = {
    id: 149,
    a: ITEM_EARTH,
    b: ITEM_CORAL,
    result: ITEM_LIMESTONE,
};
export const RECIPE_MAKE_KARST: IRecipe = {
    id: 150,
    a: ITEM_WATER,
    b: ITEM_LIMESTONE,
    result: ITEM_KARST,
};
export const RECIPE_MAKE_QUICKLIME: IRecipe = {
    id: 151,
    a: ITEM_FIRE,
    b: ITEM_LIMESTONE,
    result: ITEM_QUICKLIME,
};
export const RECIPE_MAKE_BLOWHOLE: IRecipe = {
    id: 152,
    a: ITEM_WIND,
    b: ITEM_KARST,
    result: ITEM_BLOWHOLE,
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
    RECIPE_MAKE_STEAM,
    RECIPE_MAKE_MUD,
    RECIPE_MAKE_LAVA,
    RECIPE_MAKE_DUST,
    RECIPE_MAKE_RAIN,
    RECIPE_MAKE_SMOKE,
    RECIPE_MAKE_GEYSER,
    RECIPE_MAKE_CLAY,
    RECIPE_MAKE_SAND,
    RECIPE_MAKE_PLANT,
    RECIPE_MAKE_RAINBOW,
    RECIPE_MAKE_STORM,
    RECIPE_MAKE_OBSIDIAN,
    RECIPE_MAKE_ASH,
    RECIPE_MAKE_VOLCANO,
    RECIPE_MAKE_SANDSTORM,
    RECIPE_MAKE_CLOUD,
    RECIPE_MAKE_FOG,
    RECIPE_MAKE_TREE,
    RECIPE_MAKE_FOREST,
    RECIPE_MAKE_SEEDS,
    RECIPE_MAKE_POTTERY,
    RECIPE_MAKE_BRICK,
    RECIPE_MAKE_QUICKSAND,
    RECIPE_MAKE_GLASS,
    RECIPE_MAKE_DUNE,
    RECIPE_MAKE_CHARCOAL,
    RECIPE_MAKE_LEAVES,
    RECIPE_MAKE_WILDFIRE,
    RECIPE_MAKE_JUNGLE,
    RECIPE_MAKE_FROSTED_GLASS,
    RECIPE_MAKE_CRYSTAL,
    RECIPE_MAKE_MAGMA,
    RECIPE_MAKE_ROCK,
    RECIPE_MAKE_SHARD,
    RECIPE_MAKE_PEBBLE,
    RECIPE_MAKE_MOUNTAIN,
    RECIPE_MAKE_FERTILIZER,
    RECIPE_MAKE_SOOT,
    RECIPE_MAKE_LIGHTNING,
    RECIPE_MAKE_MIST,
    RECIPE_MAKE_HAZE,
    RECIPE_MAKE_FLOOD,
    RECIPE_MAKE_LANDSLIDE,
    RECIPE_MAKE_THUNDER,
    RECIPE_MAKE_TORNADO,
    RECIPE_MAKE_GARDEN,
    RECIPE_MAKE_EMBER,
    RECIPE_MAKE_KILN,
    RECIPE_MAKE_POLLINATION,
    RECIPE_MAKE_SINKHOLE,
    RECIPE_MAKE_BEACH,
    RECIPE_MAKE_WETSTONE,
    RECIPE_MAKE_EROSION,
    RECIPE_MAKE_BASALT,
    RECIPE_MAKE_MAGMA_CHAMBER,
    RECIPE_MAKE_BREEZE,
    RECIPE_MAKE_WARM_BREEZE,
    RECIPE_MAKE_SOIL,
    RECIPE_MAKE_CANYON,
    RECIPE_MAKE_WINDMILL,
    RECIPE_MAKE_ADOBE,
    RECIPE_MAKE_WALL,
    RECIPE_MAKE_PUMICE,
    RECIPE_MAKE_BARBECUE,
    RECIPE_MAKE_FARM,
    RECIPE_MAKE_SHARDS,
    RECIPE_MAKE_MOLTEN_GLASS,
    RECIPE_MAKE_PRISM,
    RECIPE_MAKE_SPARKLE,
    RECIPE_MAKE_DESERT,
    RECIPE_MAKE_OASIS,
    RECIPE_MAKE_MIRAGE,
    RECIPE_MAKE_SAND_DUNE,
    RECIPE_MAKE_DAM,
    RECIPE_MAKE_FIREWALL,
    RECIPE_MAKE_BARRICADE,
    RECIPE_MAKE_PLATEAU,
    RECIPE_MAKE_POND,
    RECIPE_MAKE_AROMAS,
    RECIPE_MAKE_FLOWER,
    RECIPE_MAKE_SPORE,
    RECIPE_MAKE_SPREAD,
    RECIPE_MAKE_FERTILE_LAND,
    RECIPE_MAKE_WETLAND,
    RECIPE_MAKE_PEAT,
    RECIPE_MAKE_REEDS,
    RECIPE_MAKE_VALLEY,
    RECIPE_MAKE_RIVER,
    RECIPE_MAKE_SCORCHED_EARTH,
    RECIPE_MAKE_DELTA,
    RECIPE_MAKE_ESTUARY,
    RECIPE_MAKE_FIRE_SWAMP,
    RECIPE_MAKE_RIVERBANK,
    RECIPE_MAKE_RAVINE,
    RECIPE_MAKE_GORGE,
    RECIPE_MAKE_CHARRED_RAVINE,
    RECIPE_MAKE_ECHO,
    RECIPE_MAKE_CAVE,
    RECIPE_MAKE_UNDERGROUND_LAKE,
    RECIPE_MAKE_LAVA_CAVE,
    RECIPE_MAKE_WHISPERING_CAVE,
    RECIPE_MAKE_SUBTERRANEAN_POOL,
    RECIPE_MAKE_SPRING,
    RECIPE_MAKE_HOT_SPRING,
    RECIPE_MAKE_GROTTO,
    RECIPE_MAKE_FOUNTAIN,
    RECIPE_MAKE_STEAM_VENT,
    RECIPE_MAKE_COOL_BREEZE,
    RECIPE_MAKE_MONUMENT,
    RECIPE_MAKE_WATERFALL,
    RECIPE_MAKE_ETERNAL_FLAME,
    RECIPE_MAKE_PILLAR_OF_WIND,
    RECIPE_MAKE_STREAM,
    RECIPE_MAKE_ZEPHYR,
    RECIPE_MAKE_CREEK,
    RECIPE_MAKE_BROOK,
    RECIPE_MAKE_WHISPER,
    RECIPE_MAKE_RIVULET,
    RECIPE_MAKE_TRIBUTARY,
    RECIPE_MAKE_MURMUR,
    RECIPE_MAKE_WATERSHED,
    RECIPE_MAKE_AQUIFER,
    RECIPE_MAKE_PARCHED_EARTH,
    RECIPE_MAKE_FRESH_BREEZE,
    RECIPE_MAKE_GROUNDWATER,
    RECIPE_MAKE_RESERVOIR,
    RECIPE_MAKE_GEOTHERMAL_SPRING,
    RECIPE_MAKE_ARTESIAN_WELL,
    RECIPE_MAKE_BASIN,
    RECIPE_MAKE_LAKE,
    RECIPE_MAKE_DRY_BASIN,
    RECIPE_MAKE_DEPRESSION,
    RECIPE_MAKE_ISLAND,
    RECIPE_MAKE_LAGOON,
    RECIPE_MAKE_WAVE,
    RECIPE_MAKE_REEF,
    RECIPE_MAKE_CORAL,
    RECIPE_MAKE_WHIRL,
    RECIPE_MAKE_LIMESTONE,
    RECIPE_MAKE_KARST,
    RECIPE_MAKE_QUICKLIME,
    RECIPE_MAKE_BLOWHOLE,
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
export const GAME_ELEMENTY_ITEMS: Array<IItem> = [
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
export const GAME_ELEMENTY_RECIPES: Array<IRecipe> = [
    RECIPE_MAKE_STEAM,
    RECIPE_MAKE_MUD,
    RECIPE_MAKE_LAVA,
    RECIPE_MAKE_DUST,
    RECIPE_MAKE_RAIN,
    RECIPE_MAKE_SMOKE,
    RECIPE_MAKE_GEYSER,
    RECIPE_MAKE_CLAY,
    RECIPE_MAKE_SAND,
    RECIPE_MAKE_PLANT,
    RECIPE_MAKE_RAINBOW,
    RECIPE_MAKE_STORM,
    RECIPE_MAKE_OBSIDIAN,
    RECIPE_MAKE_ASH,
    RECIPE_MAKE_VOLCANO,
    RECIPE_MAKE_SANDSTORM,
    RECIPE_MAKE_CLOUD,
    RECIPE_MAKE_FOG,
    RECIPE_MAKE_TREE,
    RECIPE_MAKE_FOREST,
    RECIPE_MAKE_SEEDS,
    RECIPE_MAKE_POTTERY,
    RECIPE_MAKE_BRICK,
    RECIPE_MAKE_QUICKSAND,
    RECIPE_MAKE_GLASS,
    RECIPE_MAKE_DUNE,
    RECIPE_MAKE_CHARCOAL,
    RECIPE_MAKE_LEAVES,
    RECIPE_MAKE_WILDFIRE,
    RECIPE_MAKE_JUNGLE,
    RECIPE_MAKE_FROSTED_GLASS,
    RECIPE_MAKE_CRYSTAL,
    RECIPE_MAKE_MAGMA,
    RECIPE_MAKE_ROCK,
    RECIPE_MAKE_SHARD,
    RECIPE_MAKE_PEBBLE,
    RECIPE_MAKE_MOUNTAIN,
    RECIPE_MAKE_FERTILIZER,
    RECIPE_MAKE_SOOT,
    RECIPE_MAKE_LIGHTNING,
    RECIPE_MAKE_MIST,
    RECIPE_MAKE_HAZE,
    RECIPE_MAKE_FLOOD,
    RECIPE_MAKE_LANDSLIDE,
    RECIPE_MAKE_THUNDER,
    RECIPE_MAKE_TORNADO,
    RECIPE_MAKE_GARDEN,
    RECIPE_MAKE_EMBER,
    RECIPE_MAKE_KILN,
    RECIPE_MAKE_POLLINATION,
    RECIPE_MAKE_SINKHOLE,
    RECIPE_MAKE_BEACH,
    RECIPE_MAKE_WETSTONE,
    RECIPE_MAKE_EROSION,
    RECIPE_MAKE_BASALT,
    RECIPE_MAKE_MAGMA_CHAMBER,
    RECIPE_MAKE_BREEZE,
    RECIPE_MAKE_WARM_BREEZE,
    RECIPE_MAKE_SOIL,
    RECIPE_MAKE_CANYON,
    RECIPE_MAKE_WINDMILL,
    RECIPE_MAKE_ADOBE,
    RECIPE_MAKE_WALL,
    RECIPE_MAKE_PUMICE,
    RECIPE_MAKE_BARBECUE,
    RECIPE_MAKE_FARM,
    RECIPE_MAKE_SHARDS,
    RECIPE_MAKE_MOLTEN_GLASS,
    RECIPE_MAKE_PRISM,
    RECIPE_MAKE_SPARKLE,
    RECIPE_MAKE_DESERT,
    RECIPE_MAKE_OASIS,
    RECIPE_MAKE_MIRAGE,
    RECIPE_MAKE_SAND_DUNE,
    RECIPE_MAKE_DAM,
    RECIPE_MAKE_FIREWALL,
    RECIPE_MAKE_BARRICADE,
    RECIPE_MAKE_PLATEAU,
    RECIPE_MAKE_POND,
    RECIPE_MAKE_AROMAS,
    RECIPE_MAKE_FLOWER,
    RECIPE_MAKE_SPORE,
    RECIPE_MAKE_SPREAD,
    RECIPE_MAKE_FERTILE_LAND,
    RECIPE_MAKE_WETLAND,
    RECIPE_MAKE_PEAT,
    RECIPE_MAKE_REEDS,
    RECIPE_MAKE_VALLEY,
    RECIPE_MAKE_RIVER,
    RECIPE_MAKE_SCORCHED_EARTH,
    RECIPE_MAKE_DELTA,
    RECIPE_MAKE_ESTUARY,
    RECIPE_MAKE_FIRE_SWAMP,
    RECIPE_MAKE_RIVERBANK,
    RECIPE_MAKE_RAVINE,
    RECIPE_MAKE_GORGE,
    RECIPE_MAKE_CHARRED_RAVINE,
    RECIPE_MAKE_ECHO,
    RECIPE_MAKE_CAVE,
    RECIPE_MAKE_UNDERGROUND_LAKE,
    RECIPE_MAKE_LAVA_CAVE,
    RECIPE_MAKE_WHISPERING_CAVE,
    RECIPE_MAKE_SUBTERRANEAN_POOL,
    RECIPE_MAKE_SPRING,
    RECIPE_MAKE_HOT_SPRING,
    RECIPE_MAKE_GROTTO,
    RECIPE_MAKE_FOUNTAIN,
    RECIPE_MAKE_STEAM_VENT,
    RECIPE_MAKE_COOL_BREEZE,
    RECIPE_MAKE_MONUMENT,
    RECIPE_MAKE_WATERFALL,
    RECIPE_MAKE_ETERNAL_FLAME,
    RECIPE_MAKE_PILLAR_OF_WIND,
    RECIPE_MAKE_STREAM,
    RECIPE_MAKE_ZEPHYR,
    RECIPE_MAKE_CREEK,
    RECIPE_MAKE_BROOK,
    RECIPE_MAKE_WHISPER,
    RECIPE_MAKE_RIVULET,
    RECIPE_MAKE_TRIBUTARY,
    RECIPE_MAKE_MURMUR,
    RECIPE_MAKE_WATERSHED,
    RECIPE_MAKE_AQUIFER,
    RECIPE_MAKE_PARCHED_EARTH,
    RECIPE_MAKE_FRESH_BREEZE,
    RECIPE_MAKE_GROUNDWATER,
    RECIPE_MAKE_RESERVOIR,
    RECIPE_MAKE_GEOTHERMAL_SPRING,
    RECIPE_MAKE_ARTESIAN_WELL,
    RECIPE_MAKE_BASIN,
    RECIPE_MAKE_LAKE,
    RECIPE_MAKE_DRY_BASIN,
    RECIPE_MAKE_DEPRESSION,
    RECIPE_MAKE_ISLAND,
    RECIPE_MAKE_LAGOON,
    RECIPE_MAKE_WAVE,
    RECIPE_MAKE_REEF,
    RECIPE_MAKE_CORAL,
    RECIPE_MAKE_WHIRL,
    RECIPE_MAKE_LIMESTONE,
    RECIPE_MAKE_KARST,
    RECIPE_MAKE_QUICKLIME,
    RECIPE_MAKE_BLOWHOLE,
];
export const GAME_ELEMENTY: IGameContent = {
    name: "Elementy",
    description: "A game in which you combine elements to create new ones.",
    items: GAME_ELEMENTY_ITEMS,
    recipes: GAME_ELEMENTY_RECIPES,
    contractAbi: GAME_ELEMENTY_CONTRACT_ABI,
};
export const ALL_GAMES: Array<IGameContent> = [
    GAME_UNIFIERS,
    GAME_ELEMENTY,
];