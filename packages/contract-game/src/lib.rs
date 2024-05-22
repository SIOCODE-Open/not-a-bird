#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod game {
    pub use ink::prelude::string::String;
    pub use ink::prelude::format;
    pub use ink::storage::Mapping;
    use ink::{
        env::{
            call::{build_call, ExecutionInput, Selector},
            CallFlags, DefaultEnvironment,
        },
    };

    /** Error type for PSP-22 compatible contract for element 'lava' */
    #[derive(Debug, PartialEq, Eq)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Error {
        Custom(String),
        ElementContractError(String),
        InkError(ink::primitives::LangError),
        FatalError(String),
        ElementContractIsNotLocked,
        ElementContractAlreadyLocked,
        NotTheOwner,
        OwnerAlreadySet,
        BuyOfferIsNotSet,
        InsufficientBuyTransferredValue,
        InvalidRecipe,
        NotEnoughElements,
        InvalidElement,
    }

    #[ink(storage)]
    pub struct GameContract {
        owner_account_id: AccountId,
        owner_is_set: bool,
        element_contract_ids: Mapping<u32, AccountId>,
        buy_offer_price_native_tokens: u128,
        buy_offer_reward_tier_points: u128,
        buy_offer_is_set: bool,
    }

    struct Element {
        id: u32,
        name: &'static str,
        description: &'static str,
        tier: u32,
    }

    struct Recipe {
        id: u32,
        a: u32,
        b: u32,
        c: u32,
    }

/** Begin game contract items generated code */const ELEMENT_MONKEY: Element = Element {
    id: 0,
    name: "Monkey",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GIRAFFE: Element = Element {
    id: 1,
    name: "Giraffe",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BEE: Element = Element {
    id: 2,
    name: "Bee",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_COIN: Element = Element {
    id: 3,
    name: "Coin",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SWARM: Element = Element {
    id: 4,
    name: "SWARM",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_HYDRA: Element = Element {
    id: 5,
    name: "Hydra",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_MONKEY_BRANCH: Element = Element {
    id: 6,
    name: "MonkeyBranch",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_BRIDGE: Element = Element {
    id: 7,
    name: "Bridge",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_GOLDEN_GATE: Element = Element {
    id: 8,
    name: "GoldenGate",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_GOLD: Element = Element {
    id: 9,
    name: "Gold",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SILVER: Element = Element {
    id: 10,
    name: "Silver",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RHODIUM: Element = Element {
    id: 11,
    name: "Rhodium",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_HIVE: Element = Element {
    id: 12,
    name: "Hive",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_TRANSACTION: Element = Element {
    id: 13,
    name: "Transaction",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BLOCK: Element = Element {
    id: 14,
    name: "Block",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BLOCKCHAIN: Element = Element {
    id: 15,
    name: "Blockchain",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_POLKADOT: Element = Element {
    id: 16,
    name: "Polkadot",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PEER_REVIEW: Element = Element {
    id: 17,
    name: "PeerReview",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CARDANO: Element = Element {
    id: 18,
    name: "Cardano",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_BEAR: Element = Element {
    id: 19,
    name: "Bear",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BEER: Element = Element {
    id: 20,
    name: "Beer",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_LOCK: Element = Element {
    id: 21,
    name: "Lock",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_MARMALADE: Element = Element {
    id: 22,
    name: "Marmalade",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SUPER_MARMALADE: Element = Element {
    id: 23,
    name: "SuperMarmalade",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_HYPER_MARMALADE: Element = Element {
    id: 24,
    name: "HyperMarmalade",
    description: "We need a description here",
    tier: 2,
};
const ELEMENT_WATER: Element = Element {
    id: 25,
    name: "Water",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FIRE: Element = Element {
    id: 26,
    name: "Fire",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_STEAM: Element = Element {
    id: 27,
    name: "Steam",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_EARTH: Element = Element {
    id: 28,
    name: "Earth",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MUD: Element = Element {
    id: 29,
    name: "Mud",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LAVA: Element = Element {
    id: 30,
    name: "Lava",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WIND: Element = Element {
    id: 31,
    name: "Wind",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DUST: Element = Element {
    id: 32,
    name: "Dust",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RAIN: Element = Element {
    id: 33,
    name: "Rain",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SMOKE: Element = Element {
    id: 34,
    name: "Smoke",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GEYSER: Element = Element {
    id: 35,
    name: "Geyser",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CLAY: Element = Element {
    id: 36,
    name: "Clay",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SAND: Element = Element {
    id: 37,
    name: "Sand",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PLANT: Element = Element {
    id: 38,
    name: "Plant",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RAINBOW: Element = Element {
    id: 39,
    name: "Rainbow",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_STORM: Element = Element {
    id: 40,
    name: "Storm",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_OBSIDIAN: Element = Element {
    id: 41,
    name: "Obsidian",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ASH: Element = Element {
    id: 42,
    name: "Ash",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_VOLCANO: Element = Element {
    id: 43,
    name: "Volcano",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SANDSTORM: Element = Element {
    id: 44,
    name: "Sandstorm",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CLOUD: Element = Element {
    id: 45,
    name: "Cloud",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FOG: Element = Element {
    id: 46,
    name: "Fog",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_TREE: Element = Element {
    id: 47,
    name: "Tree",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FOREST: Element = Element {
    id: 48,
    name: "Forest",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SEEDS: Element = Element {
    id: 49,
    name: "Seeds",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_POTTERY: Element = Element {
    id: 50,
    name: "Pottery",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BRICK: Element = Element {
    id: 51,
    name: "Brick",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_QUICKSAND: Element = Element {
    id: 52,
    name: "Quicksand",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GLASS: Element = Element {
    id: 53,
    name: "Glass",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DUNE: Element = Element {
    id: 54,
    name: "Dune",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CHARCOAL: Element = Element {
    id: 55,
    name: "Charcoal",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LEAVES: Element = Element {
    id: 56,
    name: "Leaves",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WILDFIRE: Element = Element {
    id: 57,
    name: "Wildfire",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_JUNGLE: Element = Element {
    id: 58,
    name: "Jungle",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FROSTED_GLASS: Element = Element {
    id: 59,
    name: "Frosted Glass",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CRYSTAL: Element = Element {
    id: 60,
    name: "Crystal",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MAGMA: Element = Element {
    id: 61,
    name: "Magma",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ROCK: Element = Element {
    id: 62,
    name: "Rock",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SHARD: Element = Element {
    id: 63,
    name: "Shard",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PEBBLE: Element = Element {
    id: 64,
    name: "Pebble",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MOUNTAIN: Element = Element {
    id: 65,
    name: "Mountain",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FERTILIZER: Element = Element {
    id: 66,
    name: "Fertilizer",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SOOT: Element = Element {
    id: 67,
    name: "Soot",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LIGHTNING: Element = Element {
    id: 68,
    name: "Lightning",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MIST: Element = Element {
    id: 69,
    name: "Mist",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_HAZE: Element = Element {
    id: 70,
    name: "Haze",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FLOOD: Element = Element {
    id: 71,
    name: "Flood",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LANDSLIDE: Element = Element {
    id: 72,
    name: "Landslide",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_THUNDER: Element = Element {
    id: 73,
    name: "Thunder",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_TORNADO: Element = Element {
    id: 74,
    name: "Tornado",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GARDEN: Element = Element {
    id: 75,
    name: "Garden",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_EMBER: Element = Element {
    id: 76,
    name: "Ember",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_KILN: Element = Element {
    id: 77,
    name: "Kiln",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_POLLINATION: Element = Element {
    id: 78,
    name: "Pollination",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SINKHOLE: Element = Element {
    id: 79,
    name: "Sinkhole",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BEACH: Element = Element {
    id: 80,
    name: "Beach",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WETSTONE: Element = Element {
    id: 81,
    name: "Wetstone",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_EROSION: Element = Element {
    id: 82,
    name: "Erosion",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BASALT: Element = Element {
    id: 83,
    name: "Basalt",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MAGMA_CHAMBER: Element = Element {
    id: 84,
    name: "Magma Chamber",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BREEZE: Element = Element {
    id: 85,
    name: "Breeze",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WARM_BREEZE: Element = Element {
    id: 86,
    name: "Warm Breeze",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SOIL: Element = Element {
    id: 87,
    name: "Soil",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CANYON: Element = Element {
    id: 88,
    name: "Canyon",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WINDMILL: Element = Element {
    id: 89,
    name: "Windmill",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ADOBE: Element = Element {
    id: 90,
    name: "Adobe",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WALL: Element = Element {
    id: 91,
    name: "Wall",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PUMICE: Element = Element {
    id: 92,
    name: "Pumice",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BARBECUE: Element = Element {
    id: 93,
    name: "Barbecue",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FARM: Element = Element {
    id: 94,
    name: "Farm",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SHARDS: Element = Element {
    id: 95,
    name: "Shards",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MOLTEN_GLASS: Element = Element {
    id: 96,
    name: "Molten Glass",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PRISM: Element = Element {
    id: 97,
    name: "Prism",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SPARKLE: Element = Element {
    id: 98,
    name: "Sparkle",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DESERT: Element = Element {
    id: 99,
    name: "Desert",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_OASIS: Element = Element {
    id: 100,
    name: "Oasis",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MIRAGE: Element = Element {
    id: 101,
    name: "Mirage",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SAND_DUNE: Element = Element {
    id: 102,
    name: "Sand Dune",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DAM: Element = Element {
    id: 103,
    name: "Dam",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FIREWALL: Element = Element {
    id: 104,
    name: "Firewall",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BARRICADE: Element = Element {
    id: 105,
    name: "Barricade",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PLATEAU: Element = Element {
    id: 106,
    name: "Plateau",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_POND: Element = Element {
    id: 107,
    name: "Pond",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_AROMAS: Element = Element {
    id: 108,
    name: "Aromas",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FLOWER: Element = Element {
    id: 109,
    name: "Flower",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SPORE: Element = Element {
    id: 110,
    name: "Spore",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SPREAD: Element = Element {
    id: 111,
    name: "Spread",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FERTILE_LAND: Element = Element {
    id: 112,
    name: "Fertile Land",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WETLAND: Element = Element {
    id: 113,
    name: "Wetland",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PEAT: Element = Element {
    id: 114,
    name: "Peat",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_REEDS: Element = Element {
    id: 115,
    name: "Reeds",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_VALLEY: Element = Element {
    id: 116,
    name: "Valley",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RIVER: Element = Element {
    id: 117,
    name: "River",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SCORCHED_EARTH: Element = Element {
    id: 118,
    name: "Scorched Earth",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DELTA: Element = Element {
    id: 119,
    name: "Delta",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ESTUARY: Element = Element {
    id: 120,
    name: "Estuary",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FIRE_SWAMP: Element = Element {
    id: 121,
    name: "Fire Swamp",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RIVERBANK: Element = Element {
    id: 122,
    name: "Riverbank",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RAVINE: Element = Element {
    id: 123,
    name: "Ravine",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GORGE: Element = Element {
    id: 124,
    name: "Gorge",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CHARRED_RAVINE: Element = Element {
    id: 125,
    name: "Charred Ravine",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ECHO: Element = Element {
    id: 126,
    name: "Echo",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CAVE: Element = Element {
    id: 127,
    name: "Cave",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_UNDERGROUND_LAKE: Element = Element {
    id: 128,
    name: "Underground Lake",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LAVA_CAVE: Element = Element {
    id: 129,
    name: "Lava Cave",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WHISPERING_CAVE: Element = Element {
    id: 130,
    name: "Whispering Cave",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SUBTERRANEAN_POOL: Element = Element {
    id: 131,
    name: "Subterranean Pool",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_SPRING: Element = Element {
    id: 132,
    name: "Spring",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_HOT_SPRING: Element = Element {
    id: 133,
    name: "Hot Spring",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GROTTO: Element = Element {
    id: 134,
    name: "Grotto",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FOUNTAIN: Element = Element {
    id: 135,
    name: "Fountain",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_STEAM_VENT: Element = Element {
    id: 136,
    name: "Steam Vent",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_COOL_BREEZE: Element = Element {
    id: 137,
    name: "Cool Breeze",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MONUMENT: Element = Element {
    id: 138,
    name: "Monument",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WATERFALL: Element = Element {
    id: 139,
    name: "Waterfall",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ETERNAL_FLAME: Element = Element {
    id: 140,
    name: "Eternal Flame",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PILLAR_OF_WIND: Element = Element {
    id: 141,
    name: "Pillar of Wind",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_STREAM: Element = Element {
    id: 142,
    name: "Stream",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ZEPHYR: Element = Element {
    id: 143,
    name: "Zephyr",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CREEK: Element = Element {
    id: 144,
    name: "Creek",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BROOK: Element = Element {
    id: 145,
    name: "Brook",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WHISPER: Element = Element {
    id: 146,
    name: "Whisper",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RIVULET: Element = Element {
    id: 147,
    name: "Rivulet",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_TRIBUTARY: Element = Element {
    id: 148,
    name: "Tributary",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_MURMUR: Element = Element {
    id: 149,
    name: "Murmur",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WATERSHED: Element = Element {
    id: 150,
    name: "Watershed",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_AQUIFER: Element = Element {
    id: 151,
    name: "Aquifer",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_PARCHED_EARTH: Element = Element {
    id: 152,
    name: "Parched Earth",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_FRESH_BREEZE: Element = Element {
    id: 153,
    name: "Fresh Breeze",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GROUNDWATER: Element = Element {
    id: 154,
    name: "Groundwater",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_RESERVOIR: Element = Element {
    id: 155,
    name: "Reservoir",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_GEOTHERMAL_SPRING: Element = Element {
    id: 156,
    name: "Geothermal Spring",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ARTESIAN_WELL: Element = Element {
    id: 157,
    name: "Artesian Well",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BASIN: Element = Element {
    id: 158,
    name: "Basin",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LAKE: Element = Element {
    id: 159,
    name: "Lake",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DRY_BASIN: Element = Element {
    id: 160,
    name: "Dry Basin",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_DEPRESSION: Element = Element {
    id: 161,
    name: "Depression",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_ISLAND: Element = Element {
    id: 162,
    name: "Island",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LAGOON: Element = Element {
    id: 163,
    name: "Lagoon",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WAVE: Element = Element {
    id: 164,
    name: "Wave",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_REEF: Element = Element {
    id: 165,
    name: "Reef",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_CORAL: Element = Element {
    id: 166,
    name: "Coral",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_WHIRL: Element = Element {
    id: 167,
    name: "Whirl",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_LIMESTONE: Element = Element {
    id: 168,
    name: "Limestone",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_KARST: Element = Element {
    id: 169,
    name: "Karst",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_QUICKLIME: Element = Element {
    id: 170,
    name: "Quicklime",
    description: "We need a description here",
    tier: 1,
};
const ELEMENT_BLOWHOLE: Element = Element {
    id: 171,
    name: "Blowhole",
    description: "We need a description here",
    tier: 1,
};
const RECIPE_MAKE_SWARM: Recipe = Recipe {
    id: 0,
    a: 2,
    b: 2,
    c: 4,
};
const RECIPE_MAKE_HYDRA: Recipe = Recipe {
    id: 1,
    a: 1,
    b: 1,
    c: 5,
};
const RECIPE_MAKE_MONKEYBRANCH: Recipe = Recipe {
    id: 2,
    a: 0,
    b: 5,
    c: 6,
};
const RECIPE_MAKE_BRIDGE: Recipe = Recipe {
    id: 3,
    a: 6,
    b: 6,
    c: 7,
};
const RECIPE_MAKE_GOLDENGATE: Recipe = Recipe {
    id: 4,
    a: 3,
    b: 7,
    c: 8,
};
const RECIPE_MAKE_CARDANO: Recipe = Recipe {
    id: 5,
    a: 15,
    b: 17,
    c: 18,
};
const RECIPE_MAKE_BEER: Recipe = Recipe {
    id: 6,
    a: 2,
    b: 19,
    c: 20,
};
const RECIPE_MAKE_LOCK: Recipe = Recipe {
    id: 7,
    a: 10,
    b: 10,
    c: 21,
};
const RECIPE_MAKE_SUPERMARMALADE: Recipe = Recipe {
    id: 8,
    a: 22,
    b: 22,
    c: 23,
};
const RECIPE_MAKE_HYPERMARMALADE: Recipe = Recipe {
    id: 9,
    a: 23,
    b: 23,
    c: 24,
};

fn find_item(index: u32) -> Option<Element> {
    if index == 0 {
        return Some(ELEMENT_MONKEY);
    }
    if index == 1 {
        return Some(ELEMENT_GIRAFFE);
    }
    if index == 2 {
        return Some(ELEMENT_BEE);
    }
    if index == 3 {
        return Some(ELEMENT_COIN);
    }
    if index == 4 {
        return Some(ELEMENT_SWARM);
    }
    if index == 5 {
        return Some(ELEMENT_HYDRA);
    }
    if index == 6 {
        return Some(ELEMENT_MONKEY_BRANCH);
    }
    if index == 7 {
        return Some(ELEMENT_BRIDGE);
    }
    if index == 8 {
        return Some(ELEMENT_GOLDEN_GATE);
    }
    if index == 9 {
        return Some(ELEMENT_GOLD);
    }
    if index == 10 {
        return Some(ELEMENT_SILVER);
    }
    if index == 11 {
        return Some(ELEMENT_RHODIUM);
    }
    if index == 12 {
        return Some(ELEMENT_HIVE);
    }
    if index == 13 {
        return Some(ELEMENT_TRANSACTION);
    }
    if index == 14 {
        return Some(ELEMENT_BLOCK);
    }
    if index == 15 {
        return Some(ELEMENT_BLOCKCHAIN);
    }
    if index == 16 {
        return Some(ELEMENT_POLKADOT);
    }
    if index == 17 {
        return Some(ELEMENT_PEER_REVIEW);
    }
    if index == 18 {
        return Some(ELEMENT_CARDANO);
    }
    if index == 19 {
        return Some(ELEMENT_BEAR);
    }
    if index == 20 {
        return Some(ELEMENT_BEER);
    }
    if index == 21 {
        return Some(ELEMENT_LOCK);
    }
    if index == 22 {
        return Some(ELEMENT_MARMALADE);
    }
    if index == 23 {
        return Some(ELEMENT_SUPER_MARMALADE);
    }
    if index == 24 {
        return Some(ELEMENT_HYPER_MARMALADE);
    }
    if index == 25 {
        return Some(ELEMENT_WATER);
    }
    if index == 26 {
        return Some(ELEMENT_FIRE);
    }
    if index == 27 {
        return Some(ELEMENT_STEAM);
    }
    if index == 28 {
        return Some(ELEMENT_EARTH);
    }
    if index == 29 {
        return Some(ELEMENT_MUD);
    }
    if index == 30 {
        return Some(ELEMENT_LAVA);
    }
    if index == 31 {
        return Some(ELEMENT_WIND);
    }
    if index == 32 {
        return Some(ELEMENT_DUST);
    }
    if index == 33 {
        return Some(ELEMENT_RAIN);
    }
    if index == 34 {
        return Some(ELEMENT_SMOKE);
    }
    if index == 35 {
        return Some(ELEMENT_GEYSER);
    }
    if index == 36 {
        return Some(ELEMENT_CLAY);
    }
    if index == 37 {
        return Some(ELEMENT_SAND);
    }
    if index == 38 {
        return Some(ELEMENT_PLANT);
    }
    if index == 39 {
        return Some(ELEMENT_RAINBOW);
    }
    if index == 40 {
        return Some(ELEMENT_STORM);
    }
    if index == 41 {
        return Some(ELEMENT_OBSIDIAN);
    }
    if index == 42 {
        return Some(ELEMENT_ASH);
    }
    if index == 43 {
        return Some(ELEMENT_VOLCANO);
    }
    if index == 44 {
        return Some(ELEMENT_SANDSTORM);
    }
    if index == 45 {
        return Some(ELEMENT_CLOUD);
    }
    if index == 46 {
        return Some(ELEMENT_FOG);
    }
    if index == 47 {
        return Some(ELEMENT_TREE);
    }
    if index == 48 {
        return Some(ELEMENT_FOREST);
    }
    if index == 49 {
        return Some(ELEMENT_SEEDS);
    }
    if index == 50 {
        return Some(ELEMENT_POTTERY);
    }
    if index == 51 {
        return Some(ELEMENT_BRICK);
    }
    if index == 52 {
        return Some(ELEMENT_QUICKSAND);
    }
    if index == 53 {
        return Some(ELEMENT_GLASS);
    }
    if index == 54 {
        return Some(ELEMENT_DUNE);
    }
    if index == 55 {
        return Some(ELEMENT_CHARCOAL);
    }
    if index == 56 {
        return Some(ELEMENT_LEAVES);
    }
    if index == 57 {
        return Some(ELEMENT_WILDFIRE);
    }
    if index == 58 {
        return Some(ELEMENT_JUNGLE);
    }
    if index == 59 {
        return Some(ELEMENT_FROSTED_GLASS);
    }
    if index == 60 {
        return Some(ELEMENT_CRYSTAL);
    }
    if index == 61 {
        return Some(ELEMENT_MAGMA);
    }
    if index == 62 {
        return Some(ELEMENT_ROCK);
    }
    if index == 63 {
        return Some(ELEMENT_SHARD);
    }
    if index == 64 {
        return Some(ELEMENT_PEBBLE);
    }
    if index == 65 {
        return Some(ELEMENT_MOUNTAIN);
    }
    if index == 66 {
        return Some(ELEMENT_FERTILIZER);
    }
    if index == 67 {
        return Some(ELEMENT_SOOT);
    }
    if index == 68 {
        return Some(ELEMENT_LIGHTNING);
    }
    if index == 69 {
        return Some(ELEMENT_MIST);
    }
    if index == 70 {
        return Some(ELEMENT_HAZE);
    }
    if index == 71 {
        return Some(ELEMENT_FLOOD);
    }
    if index == 72 {
        return Some(ELEMENT_LANDSLIDE);
    }
    if index == 73 {
        return Some(ELEMENT_THUNDER);
    }
    if index == 74 {
        return Some(ELEMENT_TORNADO);
    }
    if index == 75 {
        return Some(ELEMENT_GARDEN);
    }
    if index == 76 {
        return Some(ELEMENT_EMBER);
    }
    if index == 77 {
        return Some(ELEMENT_KILN);
    }
    if index == 78 {
        return Some(ELEMENT_POLLINATION);
    }
    if index == 79 {
        return Some(ELEMENT_SINKHOLE);
    }
    if index == 80 {
        return Some(ELEMENT_BEACH);
    }
    if index == 81 {
        return Some(ELEMENT_WETSTONE);
    }
    if index == 82 {
        return Some(ELEMENT_EROSION);
    }
    if index == 83 {
        return Some(ELEMENT_BASALT);
    }
    if index == 84 {
        return Some(ELEMENT_MAGMA_CHAMBER);
    }
    if index == 85 {
        return Some(ELEMENT_BREEZE);
    }
    if index == 86 {
        return Some(ELEMENT_WARM_BREEZE);
    }
    if index == 87 {
        return Some(ELEMENT_SOIL);
    }
    if index == 88 {
        return Some(ELEMENT_CANYON);
    }
    if index == 89 {
        return Some(ELEMENT_WINDMILL);
    }
    if index == 90 {
        return Some(ELEMENT_ADOBE);
    }
    if index == 91 {
        return Some(ELEMENT_WALL);
    }
    if index == 92 {
        return Some(ELEMENT_PUMICE);
    }
    if index == 93 {
        return Some(ELEMENT_BARBECUE);
    }
    if index == 94 {
        return Some(ELEMENT_FARM);
    }
    if index == 95 {
        return Some(ELEMENT_SHARDS);
    }
    if index == 96 {
        return Some(ELEMENT_MOLTEN_GLASS);
    }
    if index == 97 {
        return Some(ELEMENT_PRISM);
    }
    if index == 98 {
        return Some(ELEMENT_SPARKLE);
    }
    if index == 99 {
        return Some(ELEMENT_DESERT);
    }
    if index == 100 {
        return Some(ELEMENT_OASIS);
    }
    if index == 101 {
        return Some(ELEMENT_MIRAGE);
    }
    if index == 102 {
        return Some(ELEMENT_SAND_DUNE);
    }
    if index == 103 {
        return Some(ELEMENT_DAM);
    }
    if index == 104 {
        return Some(ELEMENT_FIREWALL);
    }
    if index == 105 {
        return Some(ELEMENT_BARRICADE);
    }
    if index == 106 {
        return Some(ELEMENT_PLATEAU);
    }
    if index == 107 {
        return Some(ELEMENT_POND);
    }
    if index == 108 {
        return Some(ELEMENT_AROMAS);
    }
    if index == 109 {
        return Some(ELEMENT_FLOWER);
    }
    if index == 110 {
        return Some(ELEMENT_SPORE);
    }
    if index == 111 {
        return Some(ELEMENT_SPREAD);
    }
    if index == 112 {
        return Some(ELEMENT_FERTILE_LAND);
    }
    if index == 113 {
        return Some(ELEMENT_WETLAND);
    }
    if index == 114 {
        return Some(ELEMENT_PEAT);
    }
    if index == 115 {
        return Some(ELEMENT_REEDS);
    }
    if index == 116 {
        return Some(ELEMENT_VALLEY);
    }
    if index == 117 {
        return Some(ELEMENT_RIVER);
    }
    if index == 118 {
        return Some(ELEMENT_SCORCHED_EARTH);
    }
    if index == 119 {
        return Some(ELEMENT_DELTA);
    }
    if index == 120 {
        return Some(ELEMENT_ESTUARY);
    }
    if index == 121 {
        return Some(ELEMENT_FIRE_SWAMP);
    }
    if index == 122 {
        return Some(ELEMENT_RIVERBANK);
    }
    if index == 123 {
        return Some(ELEMENT_RAVINE);
    }
    if index == 124 {
        return Some(ELEMENT_GORGE);
    }
    if index == 125 {
        return Some(ELEMENT_CHARRED_RAVINE);
    }
    if index == 126 {
        return Some(ELEMENT_ECHO);
    }
    if index == 127 {
        return Some(ELEMENT_CAVE);
    }
    if index == 128 {
        return Some(ELEMENT_UNDERGROUND_LAKE);
    }
    if index == 129 {
        return Some(ELEMENT_LAVA_CAVE);
    }
    if index == 130 {
        return Some(ELEMENT_WHISPERING_CAVE);
    }
    if index == 131 {
        return Some(ELEMENT_SUBTERRANEAN_POOL);
    }
    if index == 132 {
        return Some(ELEMENT_SPRING);
    }
    if index == 133 {
        return Some(ELEMENT_HOT_SPRING);
    }
    if index == 134 {
        return Some(ELEMENT_GROTTO);
    }
    if index == 135 {
        return Some(ELEMENT_FOUNTAIN);
    }
    if index == 136 {
        return Some(ELEMENT_STEAM_VENT);
    }
    if index == 137 {
        return Some(ELEMENT_COOL_BREEZE);
    }
    if index == 138 {
        return Some(ELEMENT_MONUMENT);
    }
    if index == 139 {
        return Some(ELEMENT_WATERFALL);
    }
    if index == 140 {
        return Some(ELEMENT_ETERNAL_FLAME);
    }
    if index == 141 {
        return Some(ELEMENT_PILLAR_OF_WIND);
    }
    if index == 142 {
        return Some(ELEMENT_STREAM);
    }
    if index == 143 {
        return Some(ELEMENT_ZEPHYR);
    }
    if index == 144 {
        return Some(ELEMENT_CREEK);
    }
    if index == 145 {
        return Some(ELEMENT_BROOK);
    }
    if index == 146 {
        return Some(ELEMENT_WHISPER);
    }
    if index == 147 {
        return Some(ELEMENT_RIVULET);
    }
    if index == 148 {
        return Some(ELEMENT_TRIBUTARY);
    }
    if index == 149 {
        return Some(ELEMENT_MURMUR);
    }
    if index == 150 {
        return Some(ELEMENT_WATERSHED);
    }
    if index == 151 {
        return Some(ELEMENT_AQUIFER);
    }
    if index == 152 {
        return Some(ELEMENT_PARCHED_EARTH);
    }
    if index == 153 {
        return Some(ELEMENT_FRESH_BREEZE);
    }
    if index == 154 {
        return Some(ELEMENT_GROUNDWATER);
    }
    if index == 155 {
        return Some(ELEMENT_RESERVOIR);
    }
    if index == 156 {
        return Some(ELEMENT_GEOTHERMAL_SPRING);
    }
    if index == 157 {
        return Some(ELEMENT_ARTESIAN_WELL);
    }
    if index == 158 {
        return Some(ELEMENT_BASIN);
    }
    if index == 159 {
        return Some(ELEMENT_LAKE);
    }
    if index == 160 {
        return Some(ELEMENT_DRY_BASIN);
    }
    if index == 161 {
        return Some(ELEMENT_DEPRESSION);
    }
    if index == 162 {
        return Some(ELEMENT_ISLAND);
    }
    if index == 163 {
        return Some(ELEMENT_LAGOON);
    }
    if index == 164 {
        return Some(ELEMENT_WAVE);
    }
    if index == 165 {
        return Some(ELEMENT_REEF);
    }
    if index == 166 {
        return Some(ELEMENT_CORAL);
    }
    if index == 167 {
        return Some(ELEMENT_WHIRL);
    }
    if index == 168 {
        return Some(ELEMENT_LIMESTONE);
    }
    if index == 169 {
        return Some(ELEMENT_KARST);
    }
    if index == 170 {
        return Some(ELEMENT_QUICKLIME);
    }
    if index == 171 {
        return Some(ELEMENT_BLOWHOLE);
    }
    None
}

fn find_recipe(index: u32) -> Option<Recipe> {
    if index == 0 {
        return Some(RECIPE_MAKE_SWARM);
    }
    if index == 1 {
        return Some(RECIPE_MAKE_HYDRA);
    }
    if index == 2 {
        return Some(RECIPE_MAKE_MONKEYBRANCH);
    }
    if index == 3 {
        return Some(RECIPE_MAKE_BRIDGE);
    }
    if index == 4 {
        return Some(RECIPE_MAKE_GOLDENGATE);
    }
    if index == 5 {
        return Some(RECIPE_MAKE_CARDANO);
    }
    if index == 6 {
        return Some(RECIPE_MAKE_BEER);
    }
    if index == 7 {
        return Some(RECIPE_MAKE_LOCK);
    }
    if index == 8 {
        return Some(RECIPE_MAKE_SUPERMARMALADE);
    }
    if index == 9 {
        return Some(RECIPE_MAKE_HYPERMARMALADE);
    }
    None
}/** End game contract items generated code */

    impl Default for GameContract {
        fn default() -> Self {
            let element_contract_ids = Mapping::new();
            Self {
                owner_account_id: AccountId::from([0xFF; 32]),
                owner_is_set: false,
                element_contract_ids,
                buy_offer_price_native_tokens: 0,
                buy_offer_reward_tier_points: 0,
                buy_offer_is_set: false,
            }
        }
    }

    impl GameContract {
        /// Creates a new PSP-22 compatible Lava Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        /// Sets the owner of the contract
        #[ink(message)]
        pub fn claim_ownership(&mut self) -> Result<(), Error> {
            if self.owner_is_set {
                return Err(Error::OwnerAlreadySet);
            }
            self.owner_account_id = self.env().caller();
            self.owner_is_set = true;
            Ok(())
        }

        /// Locks the contract id of an element
        #[ink(message)]
        pub fn lock_element_contract(&mut self, element_id: u32, element_contract_id: AccountId) -> Result<(), Error> {
            if self.owner_account_id != self.env().caller() {
                return Err(Error::NotTheOwner);
            }
            if self.element_contract_ids.contains(element_id) {
                return Err(Error::ElementContractAlreadyLocked);
            }
            self.element_contract_ids.insert(element_id, &element_contract_id);
            Ok(())
        }

        #[ink(message)]
        pub fn balance_of_element(&self, element_id: u32) -> Result<u128, Error> {
            let element_contract_id = self.element_contract_ids.get(element_id).unwrap_or(AccountId::from([0xFF; 32]));
            if element_contract_id == AccountId::from([0xFF; 32]) {
                return Err(Error::ElementContractIsNotLocked);
            }
            let call_result = build_call::<DefaultEnvironment>()
                .call(element_contract_id)
                .exec_input(
                    ExecutionInput::new(Selector::new(
                            // Selector of PSP22::balance_of -> 0x6568382f
                            [0x65, 0x68, 0x38, 0x2f]
                        ))
                        .push_arg(&self.env().caller()) // owner: AccountId parameter
                )
                .returns::<u128>()
                .try_invoke();
            match call_result {
                Ok(okresult) => match okresult {
                    Ok(result) => Ok(result),
                    Err(reserr) => Err(Error::InkError(reserr))
                },
                Err(_) => Err(Error::FatalError(String::from("Error invoking PSP22::balance_of")))
            }
        }

        #[ink(message)]
        pub fn set_buy_offer(&mut self, price: u128, reward_tier_points: u128) -> Result<(), Error> {
            if self.owner_account_id != self.env().caller() {
                return Err(Error::NotTheOwner);
            }
            self.buy_offer_price_native_tokens = price;
            self.buy_offer_reward_tier_points = reward_tier_points;
            self.buy_offer_is_set = true;
            Ok(())
        }
        
        #[ink(message)]
        pub fn buy_offer(&self) -> Result<(u128, u128), Error> {
            Ok((self.buy_offer_price_native_tokens, self.buy_offer_reward_tier_points))
        }

        #[ink(message, payable)]
        pub fn buy(&mut self, element_id: u32) -> Result<(), Error> {
            if !self.buy_offer_is_set {
                return Err(Error::BuyOfferIsNotSet);
            }

            let val = self.env().transferred_value();

            if val < self.buy_offer_price_native_tokens {
                return Err(Error::InsufficientBuyTransferredValue);
            }

            let buy_count = val.checked_div(self.buy_offer_price_native_tokens).unwrap_or(0);

            if buy_count == 0 {
                return Err(Error::InsufficientBuyTransferredValue);
            }

            // TODO: Add element tiers and calculate number of received items based on that
            let reward_tier_points = self.buy_offer_reward_tier_points.checked_mul(buy_count).unwrap_or(0);

            if reward_tier_points == 0 {
                return Err(Error::FatalError(String::from("Error calculating reward tier points, possible overflow")));
            }

            let element_contract_id = self.element_contract_ids.get(element_id).unwrap_or(AccountId::from([0xFF; 32]));

            if element_contract_id == AccountId::from([0xFF; 32]) {
                return Err(Error::ElementContractIsNotLocked);
            }

            let element = find_item(element_id);

            if element.is_none() {
                return Err(Error::InvalidElement);
            }

            let el = element.unwrap();

            let reward_items: u128 = reward_tier_points.checked_div(el.tier.into()).unwrap_or(0);

            if reward_items == 0 {
                return Err(Error::InsufficientBuyTransferredValue);
            }

            let call_result = build_call::<DefaultEnvironment>()
                .call(element_contract_id)
                .call_flags(CallFlags::TAIL_CALL)
                .exec_input(
                    ExecutionInput::new(Selector::new(
                            // Selector of ElementContract::mint -> 0x21615d0f
                            [0x21, 0x61, 0x5d, 0x0f]
                        ))
                        .push_arg::<AccountId>(self.env().caller()) // owner: AccountId parameter
                        .push_arg::<u128>(reward_items) // value: u128 parameter
                )
                .returns::<()>()
                .try_invoke();
            match call_result {
                Ok(okresult) => match okresult {
                    Ok(_) => Ok(()),
                    Err(reserr) => Err(Error::InkError(reserr))
                },
                Err(fatalerr) => Err(Error::FatalError(format!("Error invoking ElementContract::mint: {:?}", fatalerr)))
            }
        }

        #[ink(message)]
        pub fn craft(&mut self, recipe_id: u32) -> Result<(), Error> {
            let recipe = find_recipe(recipe_id);

            if recipe.is_none() {
                return Err(Error::InvalidRecipe);
            }

            let rec = recipe.unwrap();

            let element_a_index = rec.a;
            let element_b_index = rec.b;
            let element_c_index = rec.c;

            let element_a_contract_id = self.element_contract_ids.get(element_a_index).unwrap_or(AccountId::from([0xFF; 32]));
            let element_b_contract_id = self.element_contract_ids.get(element_b_index).unwrap_or(AccountId::from([0xFF; 32]));
            let element_c_contract_id = self.element_contract_ids.get(element_c_index).unwrap_or(AccountId::from([0xFF; 32]));

            let element_a_balance = self.balance_of_element(element_a_index).unwrap_or(0);
            let element_b_balance = self.balance_of_element(element_b_index).unwrap_or(0);

            if element_a_contract_id == AccountId::from([0xFF; 32]) || element_b_contract_id == AccountId::from([0xFF; 32]) || element_c_contract_id == AccountId::from([0xFF; 32]) {
                return Err(Error::ElementContractIsNotLocked);
            }

            if element_a_balance == 0 || element_b_balance == 0 {
                return Err(Error::NotEnoughElements);
            }

            // Burn calls to element contracts
            let call_result_a = build_call::<DefaultEnvironment>()
                .call(element_a_contract_id)
                .call_flags(CallFlags::ALLOW_REENTRY)
                .exec_input(
                    ExecutionInput::new(Selector::new(
                            // Selector of ElementContract::burn -> 0x100fa9ca
                            [0x10, 0x0f, 0xa9, 0xca]
                        ))
                        .push_arg::<AccountId>(self.env().caller()) // owner: AccountId parameter
                        .push_arg::<u128>(1) // value: u128 parameter
                )
                .returns::<Result<(), Error>>()
                .try_invoke();
            
            let call_result_b = build_call::<DefaultEnvironment>()
                .call(element_b_contract_id)
                .call_flags(CallFlags::ALLOW_REENTRY)
                .exec_input(
                    ExecutionInput::new(Selector::new(
                            // Selector of ElementContract::burn -> 0x100fa9ca
                            [0x10, 0x0f, 0xa9, 0xca]
                        ))
                        .push_arg::<AccountId>(self.env().caller()) // owner: AccountId parameter
                        .push_arg::<u128>(1) // value: u128 parameter
                )
                .returns::<Result<(), Error>>()
                .try_invoke();
            
            match call_result_a {
                Ok(okresult1) => match okresult1 {
                    Ok(_) => (),
                    Err(reserr1) => return Err(Error::InkError(reserr1))
                },
                Err(fatalerr1) => return Err(Error::FatalError(format!("Error invoking ElementContract::burn (1 / 3): {:?}", fatalerr1)))
            }

            match call_result_b {
                Ok(okresult2) => match okresult2 {
                    Ok(_) => (),
                    Err(reserr2) => return Err(Error::InkError(reserr2))
                },
                Err(fatalerr2) => return Err(Error::FatalError(format!("Error invoking ElementContract::burn (2 / 3): {:?}", fatalerr2)))
            }
            
            // Mint call to element contract
            let call_result_c = build_call::<DefaultEnvironment>()
                .call(element_c_contract_id)
                .call_flags(CallFlags::TAIL_CALL)
                .exec_input(
                    ExecutionInput::new(Selector::new(
                            // Selector of ElementContract::mint -> 0x21615d0f
                            [0x21, 0x61, 0x5d, 0x0f]
                        ))
                        .push_arg::<AccountId>(self.env().caller()) // owner: AccountId parameter
                        .push_arg::<u128>(1) // value: u128 parameter
                )
                .returns::<Result<(), Error>>()
                .try_invoke();
    
            match call_result_c {
                Ok(okresult3) => match okresult3 {
                    Ok(_) => Ok(()),
                    Err(reserr3) => Err(Error::InkError(reserr3))
                },
                Err(fatalerr3) => Err(Error::FatalError(format!("Error invoking ElementContract::mint (3 / 3): {:?}", fatalerr3)))
            }
            
        }
    }

}