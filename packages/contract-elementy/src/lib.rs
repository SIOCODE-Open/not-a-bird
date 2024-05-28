#![cfg_attr(not(feature = "std"), no_std, no_main)]

/// A game in which you combine elements to create new ones.
#[ink::contract]
pub mod elementy {
    pub use ink::prelude::string::String;
    pub use ink::prelude::format;
    pub use ink::storage::Mapping;
    use ink::{
        env::{
            call::{build_call, ExecutionInput, Selector},
            CallFlags, DefaultEnvironment,
        },
    };

    /** Error type for the game contract for Elementy */
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
        pool_round: u128,
        pool_target: u128,
        pool_value: u128,
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

    const ELEMENT_WATER: Element = Element {
        id: 25,
        name: "Water",
        description: "H2-Oh no, you spilled it again!",
        tier: 1,
    };
    const ELEMENT_FIRE: Element = Element {
        id: 26,
        name: "Fire",
        description: "Summon a flickering tongue of destruction that makes dragons envious and marshmallows tremble in awe!",
        tier: 1,
    };
    const ELEMENT_STEAM: Element = Element {
        id: 27,
        name: "Steam",
        description: "It&#x27;s water&#x27;s sassy teen phase before it cools down and becomes boring again.",
        tier: 1,
    };
    const ELEMENT_EARTH: Element = Element {
        id: 28,
        name: "Earth",
        description: "Because who doesn&#x27;t want a handful of dirt from Mother Nature&#x27;s handbag?",
        tier: 1,
    };
    const ELEMENT_MUD: Element = Element {
        id: 29,
        name: "Mud",
        description: "Mother Nature&#x27;s messy smoothie, perfect for impromptu spa days or sabotaging the hero&#x27;s clean shoes!",
        tier: 1,
    };
    const ELEMENT_LAVA: Element = Element {
        id: 30,
        name: "Lava",
        description: "Spicy earth salsa that guarantees an insta-tan and some crispy new shoes!",
        tier: 1,
    };
    const ELEMENT_WIND: Element = Element {
        id: 31,
        name: "Wind",
        description: "The invisible ninja that gives trees a good hair day.",
        tier: 1,
    };
    const ELEMENT_DUST: Element = Element {
        id: 32,
        name: "Dust",
        description: "The forgotten remains of battles long past, or your enemy when you forget to clean under the sofa.",
        tier: 1,
    };
    const ELEMENT_RAIN: Element = Element {
        id: 33,
        name: "Rain",
        description: "Sky&#x27;s attempt at a group shower: brings hydration and dramatic window views!",
        tier: 1,
    };
    const ELEMENT_SMOKE: Element = Element {
        id: 34,
        name: "Smoke",
        description: "As elusive as your New Year&#x27;s resolutions, it vanishes faster than free Wi-Fi at a coffee shop.",
        tier: 1,
    };
    const ELEMENT_GEYSER: Element = Element {
        id: 35,
        name: "Geyser",
        description: "Mother Nature&#x27;s boiling hot water cannon, now available as a decorative backyard feature!",
        tier: 1,
    };
    const ELEMENT_CLAY: Element = Element {
        id: 36,
        name: "Clay",
        description: "Mold this earthy Play-Doh into something magical, or just make yourself a new best friend, Wilson style!",
        tier: 1,
    };
    const ELEMENT_SAND: Element = Element {
        id: 37,
        name: "Sand",
        description: "Pocketful of tiny wizards&#x27; teeth, creating beaches and cat litter archeology!",
        tier: 1,
    };
    const ELEMENT_PLANT: Element = Element {
        id: 38,
        name: "Plant",
        description: "The botanical equivalent of Wi-Fi for oxygen, providing full bars since prehistoric times.",
        tier: 1,
    };
    const ELEMENT_RAINBOW: Element = Element {
        id: 39,
        name: "Rainbow",
        description: "The sky&#x27;s post-rain refurbishment job, brought to you by Mother Nature&#x27;s favorite highlighter pack.",
        tier: 1,
    };
    const ELEMENT_STORM: Element = Element {
        id: 40,
        name: "Storm",
        description: "Angry sky kittens throwing tantrums and lightning bolts like Thor after a double espresso.",
        tier: 1,
    };
    const ELEMENT_OBSIDIAN: Element = Element {
        id: 41,
        name: "Obsidian",
        description: "Crafted by the earth&#x27;s angriest volcano, it&#x27;s tougher than your grandma&#x27;s fruitcake and twice as unforgiving.",
        tier: 1,
    };
    const ELEMENT_ASH: Element = Element {
        id: 42,
        name: "Ash",
        description: "The remains of your epic campfire story that burned out faster than your WiFi during a binge session.",
        tier: 1,
    };
    const ELEMENT_VOLCANO: Element = Element {
        id: 43,
        name: "Volcano",
        description: "Mount Doom&#x27;s flamboyant cousin who&#x27;s always ready to throw a tantrum and belch fiery salsa.",
        tier: 1,
    };
    const ELEMENT_SANDSTORM: Element = Element {
        id: 44,
        name: "Sandstorm",
        description: "It&#x27;s like Mother Nature&#x27;s version of a blender set to &#x27;desert&#x27; mode, without the fruity cocktail at the end.",
        tier: 1,
    };
    const ELEMENT_CLOUD: Element = Element {
        id: 45,
        name: "Cloud",
        description: "Fluffier than marshmallows and moodier than a teenager, this sky cotton candy hides the secrets of the weather gods.",
        tier: 1,
    };
    const ELEMENT_FOG: Element = Element {
        id: 46,
        name: "Fog",
        description: "It’s like someone took all the clouds, shredded them, and set them loose to play hide and seek with your vision.",
        tier: 1,
    };
    const ELEMENT_TREE: Element = Element {
        id: 47,
        name: "Tree",
        description: "The original WiFi router for squirrels, providing shade and nuts with zero bars of signal!",
        tier: 1,
    };
    const ELEMENT_FOREST: Element = Element {
        id: 48,
        name: "Forest",
        description: "A dense collection of trees where even squirrels hire GPS, home of the mythical Wi-Fi-repellent green zone.",
        tier: 1,
    };
    const ELEMENT_SEEDS: Element = Element {
        id: 49,
        name: "Seeds",
        description: "Nature&#x27;s popcorn kernels, just add dirt and patience for a flourishing snack!",
        tier: 1,
    };
    const ELEMENT_POTTERY: Element = Element {
        id: 50,
        name: "Pottery",
        description: "Perfect for storing all your grandma&#x27;s secret cookie recipes and ancient legendary treasures, one chip at a time!",
        tier: 1,
    };
    const ELEMENT_BRICK: Element = Element {
        id: 51,
        name: "Brick",
        description: "As indestructible as your WiFi on a good day, this brick could build a mansion or your Minecraft empire.",
        tier: 1,
    };
    const ELEMENT_QUICKSAND: Element = Element {
        id: 52,
        name: "Quicksand",
        description: "The Earth&#x27;s way of saying &#x27;GOTCHA!&#x27; when you thought a leisurely stroll through the desert sounded appealing.",
        tier: 1,
    };
    const ELEMENT_GLASS: Element = Element {
        id: 53,
        name: "Glass",
        description: "As delicate as your ego after a bad break-up, but see-through like your best friend&#x27;s terrible poker face.",
        tier: 1,
    };
    const ELEMENT_DUNE: Element = Element {
        id: 54,
        name: "Dune",
        description: "Get ready to channel your inner Muad&#x27;Dib and rule the sandy seas while dodging giant worms and political plots!",
        tier: 1,
    };
    const ELEMENT_CHARCOAL: Element = Element {
        id: 55,
        name: "Charcoal",
        description: "The BBQ Master&#x27;s secret ingredient for transforming your steaks from zero to hero faster than you can say &#x27;Grill-Zilla!&#x27;",
        tier: 1,
    };
    const ELEMENT_LEAVES: Element = Element {
        id: 56,
        name: "Leaves",
        description: "Green confetti for Mother Nature&#x27;s never-ending party, with a hint of chlorophyll chic!",
        tier: 1,
    };
    const ELEMENT_WILDFIRE: Element = Element {
        id: 57,
        name: "Wildfire",
        description: "Spicier than your ex&#x27;s DMs, this blaze turns forests into toast and marshmallows into napalm.",
        tier: 1,
    };
    const ELEMENT_JUNGLE: Element = Element {
        id: 58,
        name: "Jungle",
        description: "Like Tarzan&#x27;s playground but with 99% more bugs and 100% less Wi-Fi.",
        tier: 1,
    };
    const ELEMENT_FROSTED_GLASS: Element = Element {
        id: 59,
        name: "FrostedGlass",
        description: "Clearer than your intentions after a night out, but still elusive as your friend who promises to show up on time.",
        tier: 1,
    };
    const ELEMENT_CRYSTAL: Element = Element {
        id: 60,
        name: "Crystal",
        description: "Shiny as Edward Cullen and twice as sparkly in the moonlight!",
        tier: 1,
    };
    const ELEMENT_MAGMA: Element = Element {
        id: 61,
        name: "Magma",
        description: "Hotter than your ex&#x27;s last text, this molten rock sauce will turn enemies into toast.",
        tier: 1,
    };
    const ELEMENT_ROCK: Element = Element {
        id: 62,
        name: "Rock",
        description: "It&#x27;s Dwayne Johnson&#x27;s stony cousin, perfect for smashing enemies or just sitting there, being all geology-like.",
        tier: 1,
    };
    const ELEMENT_SHARD: Element = Element {
        id: 63,
        name: "Shard",
        description: "This is the majestic piece of glitter, sharper than your ex-girlfriend&#x27;s comebacks!",
        tier: 1,
    };
    const ELEMENT_PEBBLE: Element = Element {
        id: 64,
        name: "Pebble",
        description: "As insignificant as the pebble you kicked on your way to saving the world.",
        tier: 1,
    };
    const ELEMENT_MOUNTAIN: Element = Element {
        id: 65,
        name: "Mountain",
        description: "The colossal nature bump that&#x27;s basically Earth&#x27;s awkward zit.",
        tier: 1,
    };
    const ELEMENT_FERTILIZER: Element = Element {
        id: 66,
        name: "Fertilizer",
        description: "Sprinkle a little of this magic dust and watch your plants grow faster than a YouTube tutorial on &#x27;getting rich quick!&#x27;",
        tier: 1,
    };
    const ELEMENT_SOOT: Element = Element {
        id: 67,
        name: "Soot",
        description: "Dust bunnies&#x27; granddaddy who moonlights as a chimney sweep in a Dickens novel.",
        tier: 1,
    };
    const ELEMENT_LIGHTNING: Element = Element {
        id: 68,
        name: "Lightning",
        description: "Like Thor&#x27;s tantrum in a bottle, ready to zap your foes into crispy critters!",
        tier: 1,
    };
    const ELEMENT_MIST: Element = Element {
        id: 69,
        name: "Mist",
        description: "Like a ghost doing the moonwalk, it slips through your fingers and cloaks the world in mystery!",
        tier: 1,
    };
    const ELEMENT_HAZE: Element = Element {
        id: 70,
        name: "Haze",
        description: "Like Gandalf&#x27;s vape party, but a lot less fun and way more confusing.",
        tier: 1,
    };
    const ELEMENT_FLOOD: Element = Element {
        id: 71,
        name: "Flood",
        description: "When Mother Nature throws the ultimate pool party and forgets to send the &#x27;BYO life jacket&#x27; memo.",
        tier: 1,
    };
    const ELEMENT_LANDSLIDE: Element = Element {
        id: 72,
        name: "Landslide",
        description: "A geological temper tantrum that sends boulders downhill faster than a caffeine-crazed squirrel on roller skates!",
        tier: 1,
    };
    const ELEMENT_THUNDER: Element = Element {
        id: 73,
        name: "Thunder",
        description: "Like Thor&#x27;s mixtape at full volume, this electrifying zap will leave your enemies shocked and awed!",
        tier: 1,
    };
    const ELEMENT_TORNADO: Element = Element {
        id: 74,
        name: "Tornado",
        description: "Nature&#x27;s blender on steroids, mixing up cows, houses, and your afternoon picnic.",
        tier: 1,
    };
    const ELEMENT_GARDEN: Element = Element {
        id: 75,
        name: "Garden",
        description: "Nature&#x27;s sunlit Wi-Fi free zone, and the original farm-to-table restaurant!",
        tier: 1,
    };
    const ELEMENT_EMBER: Element = Element {
        id: 76,
        name: "Ember",
        description: "Like a tiny dragon&#x27;s sneeze, this little spark packs a fiery punch!",
        tier: 1,
    };
    const ELEMENT_KILN: Element = Element {
        id: 77,
        name: "Kiln",
        description: "The oven that turns your pottery dreams into reality, just like Hogwarts turns kids into wizards.",
        tier: 1,
    };
    const ELEMENT_POLLINATION: Element = Element {
        id: 78,
        name: "Pollination",
        description: "Nature&#x27;s Tinder for plants, where bees are the swiping right matchmakers.",
        tier: 1,
    };
    const ELEMENT_SINKHOLE: Element = Element {
        id: 79,
        name: "Sinkhole",
        description: "Suddenly feeling like you starred in a Looney Tunes cartoon, minus the anvil and roadrunner.",
        tier: 1,
    };
    const ELEMENT_BEACH: Element = Element {
        id: 80,
        name: "Beach",
        description: "A sun-kissed playground where sand gets everywhere, like glitter but from hell.",
        tier: 1,
    };
    const ELEMENT_WETSTONE: Element = Element {
        id: 81,
        name: "Wetstone",
        description: "Sharpen your blades while pondering life&#x27;s mysteries with this slippery soapy rock, straight from the stones of Soapland!",
        tier: 1,
    };
    const ELEMENT_EROSION: Element = Element {
        id: 82,
        name: "Erosion",
        description: "Nature&#x27;s slow-motion magic trick, turning mighty mountains into beach sand one grain at a time.",
        tier: 1,
    };
    const ELEMENT_BASALT: Element = Element {
        id: 83,
        name: "Basalt",
        description: "Forged in the depths of the earth, harder than your ex&#x27;s heart and cooler than the underside of your pillow.",
        tier: 1,
    };
    const ELEMENT_MAGMA_CHAMBER: Element = Element {
        id: 84,
        name: "MagmaChamber",
        description: "Hotter than a dragon&#x27;s sneeze, this is the spicy jacuzzi of the underworld.",
        tier: 1,
    };
    const ELEMENT_BREEZE: Element = Element {
        id: 85,
        name: "Breeze",
        description: "Like Gandalf&#x27;s whisper, this gentle wind will casually rearrange your bad hair day.",
        tier: 1,
    };
    const ELEMENT_WARM_BREEZE: Element = Element {
        id: 86,
        name: "WarmBreeze",
        description: "It&#x27;s like Mother Nature left the hairdryer on; embrace the cozy winds of summer hugs!",
        tier: 1,
    };
    const ELEMENT_SOIL: Element = Element {
        id: 87,
        name: "Soil",
        description: "Dirt-napped cousin of terra-firma, perfect for your eco-friendly carpet installations!",
        tier: 1,
    };
    const ELEMENT_CANYON: Element = Element {
        id: 88,
        name: "Canyon",
        description: "Nature&#x27;s gigantic frown; perfect for epic echoes and bottomless pratfalls.",
        tier: 1,
    };
    const ELEMENT_WINDMILL: Element = Element {
        id: 89,
        name: "Windmill",
        description: "Spinning like your favorite DJ, this eco-friendly giant turns breezes into electrical symphonies.",
        tier: 1,
    };
    const ELEMENT_ADOBE: Element = Element {
        id: 90,
        name: "Adobe",
        description: "The ancient Minecraft enchantment that grants you the power to build desert dream homes with just a handful of dirt and some water!",
        tier: 1,
    };
    const ELEMENT_WALL: Element = Element {
        id: 91,
        name: "Wall",
        description: "The Gentleman Bouncer of your castle, politely informing intruders that the party&#x27;s over.",
        tier: 1,
    };
    const ELEMENT_PUMICE: Element = Element {
        id: 92,
        name: "Pumice",
        description: "Floats like a butterfly, scrubs like Mr. Clean - the Swiss cheese of rocks!",
        tier: 1,
    };
    const ELEMENT_BARBECUE: Element = Element {
        id: 93,
        name: "Barbecue",
        description: "Unleash your inner pitmaster with this meat sizzle maker, as seen on grill-enthusiast reality shows!",
        tier: 1,
    };
    const ELEMENT_FARM: Element = Element {
        id: 94,
        name: "Farm",
        description: "The ultimate pre-industrial protein shake factory, where plants and animals live in suspenseful harmony waiting to be useful.",
        tier: 1,
    };
    const ELEMENT_SHARDS: Element = Element {
        id: 95,
        name: "Shards",
        description: "Fragments of a broken heart? Or just pieces of yesterday&#x27;s piñata—either way, they&#x27;re sharp!",
        tier: 1,
    };
    const ELEMENT_MOLTEN_GLASS: Element = Element {
        id: 96,
        name: "MoltenGlass",
        description: "Hotter than a dragon&#x27;s breath after Taco Tuesday, this molten glass can melt through your problems... literally.",
        tier: 1,
    };
    const ELEMENT_PRISM: Element = Element {
        id: 97,
        name: "Prism",
        description: "Divide light like a 70&#x27;s disco ball at a Saturday night fever party.",
        tier: 1,
    };
    const ELEMENT_SPARKLE: Element = Element {
        id: 98,
        name: "Sparkle",
        description: "Glitter brighter than a unicorn&#x27;s tears at a K-pop concert.",
        tier: 1,
    };
    const ELEMENT_DESERT: Element = Element {
        id: 99,
        name: "Desert",
        description: "A vast sandbox of banishment where even cacti consider sunblock.",
        tier: 1,
    };
    const ELEMENT_OASIS: Element = Element {
        id: 100,
        name: "Oasis",
        description: "The desert&#x27;s VIP lounge, complete with complimentary palm trees and mirage-resistant seating!",
        tier: 1,
    };
    const ELEMENT_MIRAGE: Element = Element {
        id: 101,
        name: "Mirage",
        description: "As elusive as your mom&#x27;s Wi-Fi password and twice as frustrating to catch!",
        tier: 1,
    };
    const ELEMENT_SAND_DUNE: Element = Element {
        id: 102,
        name: "SandDune",
        description: "As majestic as a stack of pancakes, but far more abrasive and less syrupy.",
        tier: 1,
    };
    const ELEMENT_DAM: Element = Element {
        id: 103,
        name: "Dam",
        description: "The Dwayne &#x27;The Rock&#x27; Johnson of water barriers, holding back the wet with sheer muscle.",
        tier: 1,
    };
    const ELEMENT_FIREWALL: Element = Element {
        id: 104,
        name: "Firewall",
        description: "The Gandalf of cybersecurity: &#x27;You shall not pass!&#x27;",
        tier: 1,
    };
    const ELEMENT_BARRICADE: Element = Element {
        id: 105,
        name: "Barricade",
        description: "Like Gandalf facing a Balrog, it&#x27;s the &#x27;You shall not pass!&#x27; of fortifications.",
        tier: 1,
    };
    const ELEMENT_PLATEAU: Element = Element {
        id: 106,
        name: "Plateau",
        description: "A flat piece of land that got tired of climbing mountains and decided to chill forever.",
        tier: 1,
    };
    const ELEMENT_POND: Element = Element {
        id: 107,
        name: "Pond",
        description: "Where ducks hold their secret aquatic raves and lily pads plot world domination.",
        tier: 1,
    };
    const ELEMENT_AROMAS: Element = Element {
        id: 108,
        name: "Aromas",
        description: "Sprinkle a bit of Hogwarts&#x27; magic under your nose and breathe in the essence of enchanted forests and dragon&#x27;s breath!",
        tier: 1,
    };
    const ELEMENT_FLOWER: Element = Element {
        id: 109,
        name: "Flower",
        description: "The colorful Wi-Fi signal for bees; smells better than your ex&#x27;s perfume!",
        tier: 1,
    };
    const ELEMENT_SPORE: Element = Element {
        id: 110,
        name: "Spore",
        description: "Tiny, invisible disco balls of doom, ready to throw a rave in your sinuses!",
        tier: 1,
    };
    const ELEMENT_SPREAD: Element = Element {
        id: 111,
        name: "Spread",
        description: "As versatile as a Swiss army knife, it&#x27;s the social butterfly of condiments!",
        tier: 1,
    };
    const ELEMENT_FERTILE_LAND: Element = Element {
        id: 112,
        name: "FertileLand",
        description: "As luxurious and bountiful as Bob Ross’s paint palette, it&#x27;s the MVP of Mother Nature&#x27;s garden party.",
        tier: 1,
    };
    const ELEMENT_WETLAND: Element = Element {
        id: 113,
        name: "Wetland",
        description: "As if Mother Nature decided to recreate the set of Jumanji with extra humidity and a smorgasbord of mosquitoes!",
        tier: 1,
    };
    const ELEMENT_PEAT: Element = Element {
        id: 114,
        name: "Peat",
        description: "It&#x27;s like the cozy blanket of soil—excellent for plants, terrible for couch potatoes.",
        tier: 1,
    };
    const ELEMENT_REEDS: Element = Element {
        id: 115,
        name: "Reeds",
        description: "The nature-made cocktail straws that just might call Gandalf from Middle-earth; beware of hobbits sneaking around!",
        tier: 1,
    };
    const ELEMENT_VALLEY: Element = Element {
        id: 116,
        name: "Valley",
        description: "The place where hills take a break and gossip about mountains.",
        tier: 1,
    };
    const ELEMENT_RIVER: Element = Element {
        id: 117,
        name: "River",
        description: "The highway for fish and the misplaced bathtubs of nature, flowing with more twists than a soap opera plotline.",
        tier: 1,
    };
    const ELEMENT_SCORCHED_EARTH: Element = Element {
        id: 118,
        name: "ScorchedEarth",
        description: "More devastating than an expired hot sauce binge, it turns fertile land into a Mad Max wasteland!",
        tier: 1,
    };
    const ELEMENT_DELTA: Element = Element {
        id: 119,
        name: "Delta",
        description: "The river’s final boss battle, where water splits like an indecisive rom-com character in the season finale.",
        tier: 1,
    };
    const ELEMENT_ESTUARY: Element = Element {
        id: 120,
        name: "Estuary",
        description: "Where the river meets the sea, like the ultimate mashup album nobody asked for but everyone loves.",
        tier: 1,
    };
    const ELEMENT_FIRE_SWAMP: Element = Element {
        id: 121,
        name: "FireSwamp",
        description: "Enter at your own risk and remember, the trees have a fiery personality akin to dragons after a spicy taco night!",
        tier: 1,
    };
    const ELEMENT_RIVERBANK: Element = Element {
        id: 122,
        name: "Riverbank",
        description: "Where Gandalf would come for a picnic with his hobbit homies if Middle-earth had longer vacations.",
        tier: 1,
    };
    const ELEMENT_RAVINE: Element = Element {
        id: 123,
        name: "Ravine",
        description: "The Grand Canyon&#x27;s emo teenager cousin, endless depths of angsty chasms.",
        tier: 1,
    };
    const ELEMENT_GORGE: Element = Element {
        id: 124,
        name: "Gorge",
        description: "When wandering through this natural wonder, remember: it&#x27;s like Mother Earth&#x27;s really dramatic cleavage.",
        tier: 1,
    };
    const ELEMENT_CHARRED_RAVINE: Element = Element {
        id: 125,
        name: "CharredRavine",
        description: "A spicy hot potato chip of doom, hotter than a dragon&#x27;s sneeze in a volcano.",
        tier: 1,
    };
    const ELEMENT_ECHO: Element = Element {
        id: 126,
        name: "Echo",
        description: "It&#x27;s like shouting into a canyon, but the canyon actually cares about what you said and keeps repeating it back.",
        tier: 1,
    };
    const ELEMENT_CAVE: Element = Element {
        id: 127,
        name: "Cave",
        description: "A dark, damp Airbnb for bats and trolls, with zero Wi-Fi signal but plenty of natural &#x27;rockitecture&#x27;.",
        tier: 1,
    };
    const ELEMENT_UNDERGROUND_LAKE: Element = Element {
        id: 128,
        name: "UndergroundLake",
        description: "The Batcave of aquatic hideaways, home to timid fish and overly ambitious spelunkers alike.",
        tier: 1,
    };
    const ELEMENT_LAVA_CAVE: Element = Element {
        id: 129,
        name: "LavaCave",
        description: "A fiery Airbnb for fire-breathing dragons and grilled marshmallows.",
        tier: 1,
    };
    const ELEMENT_WHISPERING_CAVE: Element = Element {
        id: 130,
        name: "WhisperingCave",
        description: "A cave so chatty it makes high school gossip sound like monk&#x27;s meditation.",
        tier: 1,
    };
    const ELEMENT_SUBTERRANEAN_POOL: Element = Element {
        id: 131,
        name: "SubterraneanPool",
        description: "Where the Teenage Mutant Ninja Turtles learned to swim and rediscover lost rubber duckies!",
        tier: 1,
    };
    const ELEMENT_SPRING: Element = Element {
        id: 132,
        name: "Spring",
        description: "Jump higher than your dreams, or at least higher than your disappointments, with this bouncy boing-boing.",
        tier: 1,
    };
    const ELEMENT_HOT_SPRING: Element = Element {
        id: 133,
        name: "HotSpring",
        description: "Like soaking in a jacuzzi made by Mother Nature, but without the awkward vacation photos!",
        tier: 1,
    };
    const ELEMENT_GROTTO: Element = Element {
        id: 134,
        name: "Grotto",
        description: "The ultimate bachelor pad for goblins—think of it as a man cave, but with actual caves.",
        tier: 1,
    };
    const ELEMENT_FOUNTAIN: Element = Element {
        id: 135,
        name: "Fountain",
        description: "Where wishes and coins go on a wild water slide together.",
        tier: 1,
    };
    const ELEMENT_STEAM_VENT: Element = Element {
        id: 136,
        name: "SteamVent",
        description: "When regular air conditioning just won&#x27;t cut it, unleash this spicy hot air geyser and channel your inner Old Faithful!",
        tier: 1,
    };
    const ELEMENT_COOL_BREEZE: Element = Element {
        id: 137,
        name: "CoolBreeze",
        description: "As refreshing as a surprise pizza party in summer, but with zero calories!",
        tier: 1,
    };
    const ELEMENT_MONUMENT: Element = Element {
        id: 138,
        name: "Monument",
        description: "A stone tribute that&#x27;s so towering, it could give the Statue of Liberty vertigo!",
        tier: 1,
    };
    const ELEMENT_WATERFALL: Element = Element {
        id: 139,
        name: "Waterfall",
        description: "Niagara&#x27;s younger, slightly less impressive cousin that still turns heads like a supermodel on a catwalk.",
        tier: 1,
    };
    const ELEMENT_ETERNAL_FLAME: Element = Element {
        id: 140,
        name: "EternalFlame",
        description: "Hotter than a dragon&#x27;s sneeze, this flame burns with the angst of a thousand rejected pop stars!",
        tier: 1,
    };
    const ELEMENT_PILLAR_OF_WIND: Element = Element {
        id: 141,
        name: "PillarOfWind",
        description: "A swirling cyclone of air that even the Weather Channel fears to forecast.",
        tier: 1,
    };
    const ELEMENT_STREAM: Element = Element {
        id: 142,
        name: "Stream",
        description: "Like Netflix for fish, this babbling brook is constantly streaming new episodes of nature’s playlist!",
        tier: 1,
    };
    const ELEMENT_ZEPHYR: Element = Element {
        id: 143,
        name: "Zephyr",
        description: "A breeze so gentle, it could whisper lullabies to butterflies while moonwalking through daisies.",
        tier: 1,
    };
    const ELEMENT_CREEK: Element = Element {
        id: 144,
        name: "Creek",
        description: "Tiny river, think of it as a baby Amazon just learning to meme.",
        tier: 1,
    };
    const ELEMENT_BROOK: Element = Element {
        id: 145,
        name: "Brook",
        description: "Where baby rivers are born and sent to Hogwarts.",
        tier: 1,
    };
    const ELEMENT_WHISPER: Element = Element {
        id: 146,
        name: "Whisper",
        description: "The secret handshake of the wind and your ear, as if a gossiping fairy had a megaphone.",
        tier: 1,
    };
    const ELEMENT_RIVULET: Element = Element {
        id: 147,
        name: "Rivulet",
        description: "A tiny stream so small that even ants use it as their personal slip-n-slide.",
        tier: 1,
    };
    const ELEMENT_TRIBUTARY: Element = Element {
        id: 148,
        name: "Tributary",
        description: "A glorified water delivery service, bringing aqua goodness to bigger, bossier rivers.",
        tier: 1,
    };
    const ELEMENT_MURMUR: Element = Element {
        id: 149,
        name: "Murmur",
        description: "Like the whisper of a ninja, Murmur is the sound your enemies will never hear until it’s too late.",
        tier: 1,
    };
    const ELEMENT_WATERSHED: Element = Element {
        id: 150,
        name: "Watershed",
        description: "A pivotal plot twist in the landscape where water decides which way it wants to go for the grand finale!",
        tier: 1,
    };
    const ELEMENT_AQUIFER: Element = Element {
        id: 151,
        name: "Aquifer",
        description: "Nature&#x27;s secret underground swimming pool, perfect for when groundwater wants to chill out.",
        tier: 1,
    };
    const ELEMENT_PARCHED_EARTH: Element = Element {
        id: 152,
        name: "ParchedEarth",
        description: "More thirst-quenching than a backstage pass at a Beyoncé concert!",
        tier: 1,
    };
    const ELEMENT_FRESH_BREEZE: Element = Element {
        id: 153,
        name: "FreshBreeze",
        description: "A zephyr so crisp it could convince even Darth Vader to join a yoga retreat!",
        tier: 1,
    };
    const ELEMENT_GROUNDWATER: Element = Element {
        id: 154,
        name: "Groundwater",
        description: "Mother Earth&#x27;s secret stash, hidden beneath her rocky garments like a hip flask at a dry wedding.",
        tier: 1,
    };
    const ELEMENT_RESERVOIR: Element = Element {
        id: 155,
        name: "Reservoir",
        description: "Hoarder of H2O: Where all the local water droplets hang out and gossip about breaking dams and making waves!",
        tier: 1,
    };
    const ELEMENT_GEOTHERMAL_SPRING: Element = Element {
        id: 156,
        name: "GeothermalSpring",
        description: "Mother Nature&#x27;s jacuzzi, hotter than the coffee your soul relies on.",
        tier: 1,
    };
    const ELEMENT_ARTESIAN_WELL: Element = Element {
        id: 157,
        name: "ArtesianWell",
        description: "The bottomless mimosa bar of water sources, constantly refilling without you lifting a finger - cheers!",
        tier: 1,
    };
    const ELEMENT_BASIN: Element = Element {
        id: 158,
        name: "Basin",
        description: "The Holy Grail of your bathroom, where soap bubbles dream of escape and rubber duckies rule!",
        tier: 1,
    };
    const ELEMENT_LAKE: Element = Element {
        id: 159,
        name: "Lake",
        description: "Nature&#x27;s giant puddle, perfect for lazy fish, and where mythical creatures might just throw tea parties.",
        tier: 1,
    };
    const ELEMENT_DRY_BASIN: Element = Element {
        id: 160,
        name: "DryBasin",
        description: "A bowl so devoid of moisture, even SpongeBob would dry up in here.",
        tier: 1,
    };
    const ELEMENT_DEPRESSION: Element = Element {
        id: 161,
        name: "Depression",
        description: "Feeling like Eeyore in a world full of Tiggers.",
        tier: 1,
    };
    const ELEMENT_ISLAND: Element = Element {
        id: 162,
        name: "Island",
        description: "A chunk of land adrift in the ocean, like a slice of pizza floating in tomato soup.",
        tier: 1,
    };
    const ELEMENT_LAGOON: Element = Element {
        id: 163,
        name: "Lagoon",
        description: "A lazy lake who&#x27;s too cool to hang with the ocean, featuring more zen than a yoga retreat for dolphins.",
        tier: 1,
    };
    const ELEMENT_WAVE: Element = Element {
        id: 164,
        name: "Wave",
        description: "Surf&#x27;s up, dude–ride this aquatic rollercoaster like a water wizard!",
        tier: 1,
    };
    const ELEMENT_REEF: Element = Element {
        id: 165,
        name: "Reef",
        description: "The underwater rock concert where fish party harder than rockstars!",
        tier: 1,
    };
    const ELEMENT_CORAL: Element = Element {
        id: 166,
        name: "Coral",
        description: "Nature&#x27;s underwater apartment complex—complete with quirky neighbors!",
        tier: 1,
    };
    const ELEMENT_WHIRL: Element = Element {
        id: 167,
        name: "Whirl",
        description: "Like a blender on steroids, this mini-maelstrom promises to mix up your enemies&#x27; day!",
        tier: 1,
    };
    const ELEMENT_LIMESTONE: Element = Element {
        id: 168,
        name: "Limestone",
        description: "The rock Dwayne Johnson wished he was named after - capable of building empires and perfect for caveman graffiti.",
        tier: 1,
    };
    const ELEMENT_KARST: Element = Element {
        id: 169,
        name: "Karst",
        description: "The Swiss cheese of landscapes—full of holes, surprises, and probably a hidden treasure if you look close enough!",
        tier: 1,
    };
    const ELEMENT_QUICKLIME: Element = Element {
        id: 170,
        name: "Quicklime",
        description: "Just add water and watch this rock go all &#x27;Hulk Smash&#x27; on your hydration dreams!",
        tier: 1,
    };
    const ELEMENT_BLOWHOLE: Element = Element {
        id: 171,
        name: "Blowhole",
        description: "The marine mammal&#x27;s N64 controller button for an epic H2O power-up!",
        tier: 1,
    };
    const RECIPE_MAKE_STEAM: Recipe = Recipe {
        id: 10,
        a: 25,
        b: 26,
        c: 27,
    };
    const RECIPE_MAKE_MUD: Recipe = Recipe {
        id: 11,
        a: 25,
        b: 28,
        c: 29,
    };
    const RECIPE_MAKE_LAVA: Recipe = Recipe {
        id: 12,
        a: 26,
        b: 28,
        c: 30,
    };
    const RECIPE_MAKE_DUST: Recipe = Recipe {
        id: 13,
        a: 31,
        b: 28,
        c: 32,
    };
    const RECIPE_MAKE_RAIN: Recipe = Recipe {
        id: 14,
        a: 25,
        b: 31,
        c: 33,
    };
    const RECIPE_MAKE_SMOKE: Recipe = Recipe {
        id: 15,
        a: 26,
        b: 31,
        c: 34,
    };
    const RECIPE_MAKE_GEYSER: Recipe = Recipe {
        id: 16,
        a: 27,
        b: 28,
        c: 35,
    };
    const RECIPE_MAKE_CLAY: Recipe = Recipe {
        id: 17,
        a: 29,
        b: 26,
        c: 36,
    };
    const RECIPE_MAKE_SAND: Recipe = Recipe {
        id: 18,
        a: 29,
        b: 31,
        c: 37,
    };
    const RECIPE_MAKE_PLANT: Recipe = Recipe {
        id: 19,
        a: 33,
        b: 28,
        c: 38,
    };
    const RECIPE_MAKE_RAINBOW: Recipe = Recipe {
        id: 20,
        a: 33,
        b: 26,
        c: 39,
    };
    const RECIPE_MAKE_STORM: Recipe = Recipe {
        id: 21,
        a: 33,
        b: 31,
        c: 40,
    };
    const RECIPE_MAKE_OBSIDIAN: Recipe = Recipe {
        id: 22,
        a: 30,
        b: 25,
        c: 41,
    };
    const RECIPE_MAKE_ASH: Recipe = Recipe {
        id: 23,
        a: 30,
        b: 31,
        c: 42,
    };
    const RECIPE_MAKE_VOLCANO: Recipe = Recipe {
        id: 24,
        a: 30,
        b: 28,
        c: 43,
    };
    const RECIPE_MAKE_SANDSTORM: Recipe = Recipe {
        id: 25,
        a: 32,
        b: 31,
        c: 44,
    };
    const RECIPE_MAKE_CLOUD: Recipe = Recipe {
        id: 26,
        a: 34,
        b: 25,
        c: 45,
    };
    const RECIPE_MAKE_FOG: Recipe = Recipe {
        id: 27,
        a: 34,
        b: 31,
        c: 46,
    };
    const RECIPE_MAKE_TREE: Recipe = Recipe {
        id: 28,
        a: 38,
        b: 25,
        c: 47,
    };
    const RECIPE_MAKE_FOREST: Recipe = Recipe {
        id: 29,
        a: 38,
        b: 28,
        c: 48,
    };
    const RECIPE_MAKE_SEEDS: Recipe = Recipe {
        id: 30,
        a: 38,
        b: 31,
        c: 49,
    };
    const RECIPE_MAKE_POTTERY: Recipe = Recipe {
        id: 31,
        a: 36,
        b: 26,
        c: 50,
    };
    const RECIPE_MAKE_BRICK: Recipe = Recipe {
        id: 32,
        a: 36,
        b: 28,
        c: 51,
    };
    const RECIPE_MAKE_QUICKSAND: Recipe = Recipe {
        id: 33,
        a: 37,
        b: 25,
        c: 52,
    };
    const RECIPE_MAKE_GLASS: Recipe = Recipe {
        id: 34,
        a: 37,
        b: 26,
        c: 53,
    };
    const RECIPE_MAKE_DUNE: Recipe = Recipe {
        id: 35,
        a: 37,
        b: 31,
        c: 54,
    };
    const RECIPE_MAKE_CHARCOAL: Recipe = Recipe {
        id: 36,
        a: 47,
        b: 26,
        c: 55,
    };
    const RECIPE_MAKE_LEAVES: Recipe = Recipe {
        id: 37,
        a: 47,
        b: 31,
        c: 56,
    };
    const RECIPE_MAKE_WILDFIRE: Recipe = Recipe {
        id: 38,
        a: 48,
        b: 26,
        c: 57,
    };
    const RECIPE_MAKE_JUNGLE: Recipe = Recipe {
        id: 39,
        a: 48,
        b: 28,
        c: 58,
    };
    const RECIPE_MAKE_FROSTED_GLASS: Recipe = Recipe {
        id: 40,
        a: 53,
        b: 25,
        c: 59,
    };
    const RECIPE_MAKE_CRYSTAL: Recipe = Recipe {
        id: 41,
        a: 53,
        b: 28,
        c: 60,
    };
    const RECIPE_MAKE_MAGMA: Recipe = Recipe {
        id: 42,
        a: 41,
        b: 26,
        c: 61,
    };
    const RECIPE_MAKE_ROCK: Recipe = Recipe {
        id: 43,
        a: 41,
        b: 28,
        c: 62,
    };
    const RECIPE_MAKE_SHARD: Recipe = Recipe {
        id: 44,
        a: 41,
        b: 31,
        c: 63,
    };
    const RECIPE_MAKE_PEBBLE: Recipe = Recipe {
        id: 45,
        a: 62,
        b: 25,
        c: 64,
    };
    const RECIPE_MAKE_MOUNTAIN: Recipe = Recipe {
        id: 46,
        a: 62,
        b: 28,
        c: 65,
    };
    const RECIPE_MAKE_FERTILIZER: Recipe = Recipe {
        id: 47,
        a: 42,
        b: 28,
        c: 66,
    };
    const RECIPE_MAKE_SOOT: Recipe = Recipe {
        id: 48,
        a: 42,
        b: 31,
        c: 67,
    };
    const RECIPE_MAKE_LIGHTNING: Recipe = Recipe {
        id: 49,
        a: 45,
        b: 26,
        c: 68,
    };
    const RECIPE_MAKE_MIST: Recipe = Recipe {
        id: 50,
        a: 46,
        b: 28,
        c: 69,
    };
    const RECIPE_MAKE_HAZE: Recipe = Recipe {
        id: 51,
        a: 46,
        b: 31,
        c: 70,
    };
    const RECIPE_MAKE_FLOOD: Recipe = Recipe {
        id: 52,
        a: 40,
        b: 25,
        c: 71,
    };
    const RECIPE_MAKE_LANDSLIDE: Recipe = Recipe {
        id: 53,
        a: 40,
        b: 28,
        c: 72,
    };
    const RECIPE_MAKE_THUNDER: Recipe = Recipe {
        id: 54,
        a: 40,
        b: 26,
        c: 73,
    };
    const RECIPE_MAKE_TORNADO: Recipe = Recipe {
        id: 55,
        a: 40,
        b: 31,
        c: 74,
    };
    const RECIPE_MAKE_GARDEN: Recipe = Recipe {
        id: 56,
        a: 28,
        b: 38,
        c: 75,
    };
    const RECIPE_MAKE_EMBER: Recipe = Recipe {
        id: 57,
        a: 26,
        b: 42,
        c: 76,
    };
    const RECIPE_MAKE_KILN: Recipe = Recipe {
        id: 58,
        a: 26,
        b: 50,
        c: 77,
    };
    const RECIPE_MAKE_POLLINATION: Recipe = Recipe {
        id: 59,
        a: 31,
        b: 38,
        c: 78,
    };
    const RECIPE_MAKE_SINKHOLE: Recipe = Recipe {
        id: 60,
        a: 28,
        b: 52,
        c: 79,
    };
    const RECIPE_MAKE_BEACH: Recipe = Recipe {
        id: 61,
        a: 25,
        b: 37,
        c: 80,
    };
    const RECIPE_MAKE_WETSTONE: Recipe = Recipe {
        id: 62,
        a: 25,
        b: 41,
        c: 81,
    };
    const RECIPE_MAKE_EROSION: Recipe = Recipe {
        id: 63,
        a: 31,
        b: 62,
        c: 82,
    };
    const RECIPE_MAKE_BASALT: Recipe = Recipe {
        id: 64,
        a: 25,
        b: 30,
        c: 83,
    };
    const RECIPE_MAKE_MAGMA_CHAMBER: Recipe = Recipe {
        id: 65,
        a: 28,
        b: 30,
        c: 84,
    };
    const RECIPE_MAKE_BREEZE: Recipe = Recipe {
        id: 66,
        a: 31,
        b: 32,
        c: 85,
    };
    const RECIPE_MAKE_WARM_BREEZE: Recipe = Recipe {
        id: 67,
        a: 26,
        b: 85,
        c: 86,
    };
    const RECIPE_MAKE_SOIL: Recipe = Recipe {
        id: 68,
        a: 28,
        b: 38,
        c: 87,
    };
    const RECIPE_MAKE_CANYON: Recipe = Recipe {
        id: 69,
        a: 25,
        b: 82,
        c: 88,
    };
    const RECIPE_MAKE_WINDMILL: Recipe = Recipe {
        id: 70,
        a: 31,
        b: 38,
        c: 89,
    };
    const RECIPE_MAKE_ADOBE: Recipe = Recipe {
        id: 71,
        a: 28,
        b: 36,
        c: 90,
    };
    const RECIPE_MAKE_WALL: Recipe = Recipe {
        id: 72,
        a: 28,
        b: 51,
        c: 91,
    };
    const RECIPE_MAKE_PUMICE: Recipe = Recipe {
        id: 73,
        a: 25,
        b: 42,
        c: 92,
    };
    const RECIPE_MAKE_BARBECUE: Recipe = Recipe {
        id: 74,
        a: 26,
        b: 55,
        c: 93,
    };
    const RECIPE_MAKE_FARM: Recipe = Recipe {
        id: 75,
        a: 28,
        b: 49,
        c: 94,
    };
    const RECIPE_MAKE_SHARDS: Recipe = Recipe {
        id: 76,
        a: 31,
        b: 41,
        c: 95,
    };
    const RECIPE_MAKE_MOLTEN_GLASS: Recipe = Recipe {
        id: 77,
        a: 26,
        b: 60,
        c: 96,
    };
    const RECIPE_MAKE_PRISM: Recipe = Recipe {
        id: 78,
        a: 25,
        b: 60,
        c: 97,
    };
    const RECIPE_MAKE_SPARKLE: Recipe = Recipe {
        id: 79,
        a: 31,
        b: 60,
        c: 98,
    };
    const RECIPE_MAKE_DESERT: Recipe = Recipe {
        id: 80,
        a: 28,
        b: 80,
        c: 99,
    };
    const RECIPE_MAKE_OASIS: Recipe = Recipe {
        id: 81,
        a: 25,
        b: 99,
        c: 100,
    };
    const RECIPE_MAKE_MIRAGE: Recipe = Recipe {
        id: 82,
        a: 26,
        b: 99,
        c: 101,
    };
    const RECIPE_MAKE_SAND_DUNE: Recipe = Recipe {
        id: 83,
        a: 31,
        b: 99,
        c: 102,
    };
    const RECIPE_MAKE_DAM: Recipe = Recipe {
        id: 84,
        a: 25,
        b: 91,
        c: 103,
    };
    const RECIPE_MAKE_FIREWALL: Recipe = Recipe {
        id: 85,
        a: 26,
        b: 91,
        c: 104,
    };
    const RECIPE_MAKE_BARRICADE: Recipe = Recipe {
        id: 86,
        a: 31,
        b: 91,
        c: 105,
    };
    const RECIPE_MAKE_PLATEAU: Recipe = Recipe {
        id: 87,
        a: 28,
        b: 88,
        c: 106,
    };
    const RECIPE_MAKE_POND: Recipe = Recipe {
        id: 88,
        a: 25,
        b: 75,
        c: 107,
    };
    const RECIPE_MAKE_AROMAS: Recipe = Recipe {
        id: 89,
        a: 31,
        b: 75,
        c: 108,
    };
    const RECIPE_MAKE_FLOWER: Recipe = Recipe {
        id: 90,
        a: 25,
        b: 78,
        c: 109,
    };
    const RECIPE_MAKE_SPORE: Recipe = Recipe {
        id: 91,
        a: 26,
        b: 78,
        c: 110,
    };
    const RECIPE_MAKE_SPREAD: Recipe = Recipe {
        id: 92,
        a: 31,
        b: 78,
        c: 111,
    };
    const RECIPE_MAKE_FERTILE_LAND: Recipe = Recipe {
        id: 93,
        a: 28,
        b: 87,
        c: 112,
    };
    const RECIPE_MAKE_WETLAND: Recipe = Recipe {
        id: 94,
        a: 25,
        b: 112,
        c: 113,
    };
    const RECIPE_MAKE_PEAT: Recipe = Recipe {
        id: 95,
        a: 26,
        b: 113,
        c: 114,
    };
    const RECIPE_MAKE_REEDS: Recipe = Recipe {
        id: 96,
        a: 31,
        b: 113,
        c: 115,
    };
    const RECIPE_MAKE_VALLEY: Recipe = Recipe {
        id: 97,
        a: 28,
        b: 88,
        c: 116,
    };
    const RECIPE_MAKE_RIVER: Recipe = Recipe {
        id: 98,
        a: 25,
        b: 116,
        c: 117,
    };
    const RECIPE_MAKE_SCORCHED_EARTH: Recipe = Recipe {
        id: 99,
        a: 26,
        b: 116,
        c: 118,
    };
    const RECIPE_MAKE_DELTA: Recipe = Recipe {
        id: 100,
        a: 28,
        b: 117,
        c: 119,
    };
    const RECIPE_MAKE_ESTUARY: Recipe = Recipe {
        id: 101,
        a: 25,
        b: 119,
        c: 120,
    };
    const RECIPE_MAKE_FIRE_SWAMP: Recipe = Recipe {
        id: 102,
        a: 26,
        b: 119,
        c: 121,
    };
    const RECIPE_MAKE_RIVERBANK: Recipe = Recipe {
        id: 103,
        a: 31,
        b: 119,
        c: 122,
    };
    const RECIPE_MAKE_RAVINE: Recipe = Recipe {
        id: 104,
        a: 28,
        b: 82,
        c: 123,
    };
    const RECIPE_MAKE_GORGE: Recipe = Recipe {
        id: 105,
        a: 25,
        b: 123,
        c: 124,
    };
    const RECIPE_MAKE_CHARRED_RAVINE: Recipe = Recipe {
        id: 106,
        a: 26,
        b: 123,
        c: 125,
    };
    const RECIPE_MAKE_ECHO: Recipe = Recipe {
        id: 107,
        a: 31,
        b: 123,
        c: 126,
    };
    const RECIPE_MAKE_CAVE: Recipe = Recipe {
        id: 108,
        a: 28,
        b: 126,
        c: 127,
    };
    const RECIPE_MAKE_UNDERGROUND_LAKE: Recipe = Recipe {
        id: 109,
        a: 25,
        b: 127,
        c: 128,
    };
    const RECIPE_MAKE_LAVA_CAVE: Recipe = Recipe {
        id: 110,
        a: 26,
        b: 127,
        c: 129,
    };
    const RECIPE_MAKE_WHISPERING_CAVE: Recipe = Recipe {
        id: 111,
        a: 31,
        b: 127,
        c: 130,
    };
    const RECIPE_MAKE_SUBTERRANEAN_POOL: Recipe = Recipe {
        id: 112,
        a: 28,
        b: 128,
        c: 131,
    };
    const RECIPE_MAKE_SPRING: Recipe = Recipe {
        id: 113,
        a: 25,
        b: 131,
        c: 132,
    };
    const RECIPE_MAKE_HOT_SPRING: Recipe = Recipe {
        id: 114,
        a: 26,
        b: 131,
        c: 133,
    };
    const RECIPE_MAKE_GROTTO: Recipe = Recipe {
        id: 115,
        a: 31,
        b: 131,
        c: 134,
    };
    const RECIPE_MAKE_FOUNTAIN: Recipe = Recipe {
        id: 116,
        a: 25,
        b: 132,
        c: 135,
    };
    const RECIPE_MAKE_STEAM_VENT: Recipe = Recipe {
        id: 117,
        a: 26,
        b: 132,
        c: 136,
    };
    const RECIPE_MAKE_COOL_BREEZE: Recipe = Recipe {
        id: 118,
        a: 31,
        b: 132,
        c: 137,
    };
    const RECIPE_MAKE_MONUMENT: Recipe = Recipe {
        id: 119,
        a: 28,
        b: 135,
        c: 138,
    };
    const RECIPE_MAKE_WATERFALL: Recipe = Recipe {
        id: 120,
        a: 25,
        b: 138,
        c: 139,
    };
    const RECIPE_MAKE_ETERNAL_FLAME: Recipe = Recipe {
        id: 121,
        a: 26,
        b: 138,
        c: 140,
    };
    const RECIPE_MAKE_PILLAR_OF_WIND: Recipe = Recipe {
        id: 122,
        a: 31,
        b: 138,
        c: 141,
    };
    const RECIPE_MAKE_STREAM: Recipe = Recipe {
        id: 123,
        a: 25,
        b: 117,
        c: 142,
    };
    const RECIPE_MAKE_ZEPHYR: Recipe = Recipe {
        id: 124,
        a: 31,
        b: 117,
        c: 143,
    };
    const RECIPE_MAKE_CREEK: Recipe = Recipe {
        id: 125,
        a: 28,
        b: 142,
        c: 144,
    };
    const RECIPE_MAKE_BROOK: Recipe = Recipe {
        id: 126,
        a: 25,
        b: 144,
        c: 145,
    };
    const RECIPE_MAKE_WHISPER: Recipe = Recipe {
        id: 127,
        a: 31,
        b: 144,
        c: 146,
    };
    const RECIPE_MAKE_RIVULET: Recipe = Recipe {
        id: 128,
        a: 28,
        b: 145,
        c: 147,
    };
    const RECIPE_MAKE_TRIBUTARY: Recipe = Recipe {
        id: 129,
        a: 25,
        b: 147,
        c: 148,
    };
    const RECIPE_MAKE_MURMUR: Recipe = Recipe {
        id: 130,
        a: 31,
        b: 147,
        c: 149,
    };
    const RECIPE_MAKE_WATERSHED: Recipe = Recipe {
        id: 131,
        a: 28,
        b: 148,
        c: 150,
    };
    const RECIPE_MAKE_AQUIFER: Recipe = Recipe {
        id: 132,
        a: 25,
        b: 150,
        c: 151,
    };
    const RECIPE_MAKE_PARCHED_EARTH: Recipe = Recipe {
        id: 133,
        a: 26,
        b: 150,
        c: 152,
    };
    const RECIPE_MAKE_FRESH_BREEZE: Recipe = Recipe {
        id: 134,
        a: 31,
        b: 150,
        c: 153,
    };
    const RECIPE_MAKE_GROUNDWATER: Recipe = Recipe {
        id: 135,
        a: 28,
        b: 151,
        c: 154,
    };
    const RECIPE_MAKE_RESERVOIR: Recipe = Recipe {
        id: 136,
        a: 25,
        b: 154,
        c: 155,
    };
    const RECIPE_MAKE_GEOTHERMAL_SPRING: Recipe = Recipe {
        id: 137,
        a: 26,
        b: 154,
        c: 156,
    };
    const RECIPE_MAKE_ARTESIAN_WELL: Recipe = Recipe {
        id: 138,
        a: 31,
        b: 154,
        c: 157,
    };
    const RECIPE_MAKE_BASIN: Recipe = Recipe {
        id: 139,
        a: 28,
        b: 155,
        c: 158,
    };
    const RECIPE_MAKE_LAKE: Recipe = Recipe {
        id: 140,
        a: 25,
        b: 158,
        c: 159,
    };
    const RECIPE_MAKE_DRY_BASIN: Recipe = Recipe {
        id: 141,
        a: 26,
        b: 158,
        c: 160,
    };
    const RECIPE_MAKE_DEPRESSION: Recipe = Recipe {
        id: 142,
        a: 31,
        b: 158,
        c: 161,
    };
    const RECIPE_MAKE_ISLAND: Recipe = Recipe {
        id: 143,
        a: 28,
        b: 159,
        c: 162,
    };
    const RECIPE_MAKE_LAGOON: Recipe = Recipe {
        id: 144,
        a: 25,
        b: 159,
        c: 163,
    };
    const RECIPE_MAKE_WAVE: Recipe = Recipe {
        id: 145,
        a: 31,
        b: 159,
        c: 164,
    };
    const RECIPE_MAKE_REEF: Recipe = Recipe {
        id: 146,
        a: 28,
        b: 163,
        c: 165,
    };
    const RECIPE_MAKE_CORAL: Recipe = Recipe {
        id: 147,
        a: 25,
        b: 165,
        c: 166,
    };
    const RECIPE_MAKE_WHIRL: Recipe = Recipe {
        id: 148,
        a: 31,
        b: 165,
        c: 167,
    };
    const RECIPE_MAKE_LIMESTONE: Recipe = Recipe {
        id: 149,
        a: 28,
        b: 166,
        c: 168,
    };
    const RECIPE_MAKE_KARST: Recipe = Recipe {
        id: 150,
        a: 25,
        b: 168,
        c: 169,
    };
    const RECIPE_MAKE_QUICKLIME: Recipe = Recipe {
        id: 151,
        a: 26,
        b: 168,
        c: 170,
    };
    const RECIPE_MAKE_BLOWHOLE: Recipe = Recipe {
        id: 152,
        a: 31,
        b: 169,
        c: 171,
    };

    fn find_item(index: u32) -> Option<Element> {
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
        if index == 10 {
            return Some(RECIPE_MAKE_STEAM);
        }
        if index == 11 {
            return Some(RECIPE_MAKE_MUD);
        }
        if index == 12 {
            return Some(RECIPE_MAKE_LAVA);
        }
        if index == 13 {
            return Some(RECIPE_MAKE_DUST);
        }
        if index == 14 {
            return Some(RECIPE_MAKE_RAIN);
        }
        if index == 15 {
            return Some(RECIPE_MAKE_SMOKE);
        }
        if index == 16 {
            return Some(RECIPE_MAKE_GEYSER);
        }
        if index == 17 {
            return Some(RECIPE_MAKE_CLAY);
        }
        if index == 18 {
            return Some(RECIPE_MAKE_SAND);
        }
        if index == 19 {
            return Some(RECIPE_MAKE_PLANT);
        }
        if index == 20 {
            return Some(RECIPE_MAKE_RAINBOW);
        }
        if index == 21 {
            return Some(RECIPE_MAKE_STORM);
        }
        if index == 22 {
            return Some(RECIPE_MAKE_OBSIDIAN);
        }
        if index == 23 {
            return Some(RECIPE_MAKE_ASH);
        }
        if index == 24 {
            return Some(RECIPE_MAKE_VOLCANO);
        }
        if index == 25 {
            return Some(RECIPE_MAKE_SANDSTORM);
        }
        if index == 26 {
            return Some(RECIPE_MAKE_CLOUD);
        }
        if index == 27 {
            return Some(RECIPE_MAKE_FOG);
        }
        if index == 28 {
            return Some(RECIPE_MAKE_TREE);
        }
        if index == 29 {
            return Some(RECIPE_MAKE_FOREST);
        }
        if index == 30 {
            return Some(RECIPE_MAKE_SEEDS);
        }
        if index == 31 {
            return Some(RECIPE_MAKE_POTTERY);
        }
        if index == 32 {
            return Some(RECIPE_MAKE_BRICK);
        }
        if index == 33 {
            return Some(RECIPE_MAKE_QUICKSAND);
        }
        if index == 34 {
            return Some(RECIPE_MAKE_GLASS);
        }
        if index == 35 {
            return Some(RECIPE_MAKE_DUNE);
        }
        if index == 36 {
            return Some(RECIPE_MAKE_CHARCOAL);
        }
        if index == 37 {
            return Some(RECIPE_MAKE_LEAVES);
        }
        if index == 38 {
            return Some(RECIPE_MAKE_WILDFIRE);
        }
        if index == 39 {
            return Some(RECIPE_MAKE_JUNGLE);
        }
        if index == 40 {
            return Some(RECIPE_MAKE_FROSTED_GLASS);
        }
        if index == 41 {
            return Some(RECIPE_MAKE_CRYSTAL);
        }
        if index == 42 {
            return Some(RECIPE_MAKE_MAGMA);
        }
        if index == 43 {
            return Some(RECIPE_MAKE_ROCK);
        }
        if index == 44 {
            return Some(RECIPE_MAKE_SHARD);
        }
        if index == 45 {
            return Some(RECIPE_MAKE_PEBBLE);
        }
        if index == 46 {
            return Some(RECIPE_MAKE_MOUNTAIN);
        }
        if index == 47 {
            return Some(RECIPE_MAKE_FERTILIZER);
        }
        if index == 48 {
            return Some(RECIPE_MAKE_SOOT);
        }
        if index == 49 {
            return Some(RECIPE_MAKE_LIGHTNING);
        }
        if index == 50 {
            return Some(RECIPE_MAKE_MIST);
        }
        if index == 51 {
            return Some(RECIPE_MAKE_HAZE);
        }
        if index == 52 {
            return Some(RECIPE_MAKE_FLOOD);
        }
        if index == 53 {
            return Some(RECIPE_MAKE_LANDSLIDE);
        }
        if index == 54 {
            return Some(RECIPE_MAKE_THUNDER);
        }
        if index == 55 {
            return Some(RECIPE_MAKE_TORNADO);
        }
        if index == 56 {
            return Some(RECIPE_MAKE_GARDEN);
        }
        if index == 57 {
            return Some(RECIPE_MAKE_EMBER);
        }
        if index == 58 {
            return Some(RECIPE_MAKE_KILN);
        }
        if index == 59 {
            return Some(RECIPE_MAKE_POLLINATION);
        }
        if index == 60 {
            return Some(RECIPE_MAKE_SINKHOLE);
        }
        if index == 61 {
            return Some(RECIPE_MAKE_BEACH);
        }
        if index == 62 {
            return Some(RECIPE_MAKE_WETSTONE);
        }
        if index == 63 {
            return Some(RECIPE_MAKE_EROSION);
        }
        if index == 64 {
            return Some(RECIPE_MAKE_BASALT);
        }
        if index == 65 {
            return Some(RECIPE_MAKE_MAGMA_CHAMBER);
        }
        if index == 66 {
            return Some(RECIPE_MAKE_BREEZE);
        }
        if index == 67 {
            return Some(RECIPE_MAKE_WARM_BREEZE);
        }
        if index == 68 {
            return Some(RECIPE_MAKE_SOIL);
        }
        if index == 69 {
            return Some(RECIPE_MAKE_CANYON);
        }
        if index == 70 {
            return Some(RECIPE_MAKE_WINDMILL);
        }
        if index == 71 {
            return Some(RECIPE_MAKE_ADOBE);
        }
        if index == 72 {
            return Some(RECIPE_MAKE_WALL);
        }
        if index == 73 {
            return Some(RECIPE_MAKE_PUMICE);
        }
        if index == 74 {
            return Some(RECIPE_MAKE_BARBECUE);
        }
        if index == 75 {
            return Some(RECIPE_MAKE_FARM);
        }
        if index == 76 {
            return Some(RECIPE_MAKE_SHARDS);
        }
        if index == 77 {
            return Some(RECIPE_MAKE_MOLTEN_GLASS);
        }
        if index == 78 {
            return Some(RECIPE_MAKE_PRISM);
        }
        if index == 79 {
            return Some(RECIPE_MAKE_SPARKLE);
        }
        if index == 80 {
            return Some(RECIPE_MAKE_DESERT);
        }
        if index == 81 {
            return Some(RECIPE_MAKE_OASIS);
        }
        if index == 82 {
            return Some(RECIPE_MAKE_MIRAGE);
        }
        if index == 83 {
            return Some(RECIPE_MAKE_SAND_DUNE);
        }
        if index == 84 {
            return Some(RECIPE_MAKE_DAM);
        }
        if index == 85 {
            return Some(RECIPE_MAKE_FIREWALL);
        }
        if index == 86 {
            return Some(RECIPE_MAKE_BARRICADE);
        }
        if index == 87 {
            return Some(RECIPE_MAKE_PLATEAU);
        }
        if index == 88 {
            return Some(RECIPE_MAKE_POND);
        }
        if index == 89 {
            return Some(RECIPE_MAKE_AROMAS);
        }
        if index == 90 {
            return Some(RECIPE_MAKE_FLOWER);
        }
        if index == 91 {
            return Some(RECIPE_MAKE_SPORE);
        }
        if index == 92 {
            return Some(RECIPE_MAKE_SPREAD);
        }
        if index == 93 {
            return Some(RECIPE_MAKE_FERTILE_LAND);
        }
        if index == 94 {
            return Some(RECIPE_MAKE_WETLAND);
        }
        if index == 95 {
            return Some(RECIPE_MAKE_PEAT);
        }
        if index == 96 {
            return Some(RECIPE_MAKE_REEDS);
        }
        if index == 97 {
            return Some(RECIPE_MAKE_VALLEY);
        }
        if index == 98 {
            return Some(RECIPE_MAKE_RIVER);
        }
        if index == 99 {
            return Some(RECIPE_MAKE_SCORCHED_EARTH);
        }
        if index == 100 {
            return Some(RECIPE_MAKE_DELTA);
        }
        if index == 101 {
            return Some(RECIPE_MAKE_ESTUARY);
        }
        if index == 102 {
            return Some(RECIPE_MAKE_FIRE_SWAMP);
        }
        if index == 103 {
            return Some(RECIPE_MAKE_RIVERBANK);
        }
        if index == 104 {
            return Some(RECIPE_MAKE_RAVINE);
        }
        if index == 105 {
            return Some(RECIPE_MAKE_GORGE);
        }
        if index == 106 {
            return Some(RECIPE_MAKE_CHARRED_RAVINE);
        }
        if index == 107 {
            return Some(RECIPE_MAKE_ECHO);
        }
        if index == 108 {
            return Some(RECIPE_MAKE_CAVE);
        }
        if index == 109 {
            return Some(RECIPE_MAKE_UNDERGROUND_LAKE);
        }
        if index == 110 {
            return Some(RECIPE_MAKE_LAVA_CAVE);
        }
        if index == 111 {
            return Some(RECIPE_MAKE_WHISPERING_CAVE);
        }
        if index == 112 {
            return Some(RECIPE_MAKE_SUBTERRANEAN_POOL);
        }
        if index == 113 {
            return Some(RECIPE_MAKE_SPRING);
        }
        if index == 114 {
            return Some(RECIPE_MAKE_HOT_SPRING);
        }
        if index == 115 {
            return Some(RECIPE_MAKE_GROTTO);
        }
        if index == 116 {
            return Some(RECIPE_MAKE_FOUNTAIN);
        }
        if index == 117 {
            return Some(RECIPE_MAKE_STEAM_VENT);
        }
        if index == 118 {
            return Some(RECIPE_MAKE_COOL_BREEZE);
        }
        if index == 119 {
            return Some(RECIPE_MAKE_MONUMENT);
        }
        if index == 120 {
            return Some(RECIPE_MAKE_WATERFALL);
        }
        if index == 121 {
            return Some(RECIPE_MAKE_ETERNAL_FLAME);
        }
        if index == 122 {
            return Some(RECIPE_MAKE_PILLAR_OF_WIND);
        }
        if index == 123 {
            return Some(RECIPE_MAKE_STREAM);
        }
        if index == 124 {
            return Some(RECIPE_MAKE_ZEPHYR);
        }
        if index == 125 {
            return Some(RECIPE_MAKE_CREEK);
        }
        if index == 126 {
            return Some(RECIPE_MAKE_BROOK);
        }
        if index == 127 {
            return Some(RECIPE_MAKE_WHISPER);
        }
        if index == 128 {
            return Some(RECIPE_MAKE_RIVULET);
        }
        if index == 129 {
            return Some(RECIPE_MAKE_TRIBUTARY);
        }
        if index == 130 {
            return Some(RECIPE_MAKE_MURMUR);
        }
        if index == 131 {
            return Some(RECIPE_MAKE_WATERSHED);
        }
        if index == 132 {
            return Some(RECIPE_MAKE_AQUIFER);
        }
        if index == 133 {
            return Some(RECIPE_MAKE_PARCHED_EARTH);
        }
        if index == 134 {
            return Some(RECIPE_MAKE_FRESH_BREEZE);
        }
        if index == 135 {
            return Some(RECIPE_MAKE_GROUNDWATER);
        }
        if index == 136 {
            return Some(RECIPE_MAKE_RESERVOIR);
        }
        if index == 137 {
            return Some(RECIPE_MAKE_GEOTHERMAL_SPRING);
        }
        if index == 138 {
            return Some(RECIPE_MAKE_ARTESIAN_WELL);
        }
        if index == 139 {
            return Some(RECIPE_MAKE_BASIN);
        }
        if index == 140 {
            return Some(RECIPE_MAKE_LAKE);
        }
        if index == 141 {
            return Some(RECIPE_MAKE_DRY_BASIN);
        }
        if index == 142 {
            return Some(RECIPE_MAKE_DEPRESSION);
        }
        if index == 143 {
            return Some(RECIPE_MAKE_ISLAND);
        }
        if index == 144 {
            return Some(RECIPE_MAKE_LAGOON);
        }
        if index == 145 {
            return Some(RECIPE_MAKE_WAVE);
        }
        if index == 146 {
            return Some(RECIPE_MAKE_REEF);
        }
        if index == 147 {
            return Some(RECIPE_MAKE_CORAL);
        }
        if index == 148 {
            return Some(RECIPE_MAKE_WHIRL);
        }
        if index == 149 {
            return Some(RECIPE_MAKE_LIMESTONE);
        }
        if index == 150 {
            return Some(RECIPE_MAKE_KARST);
        }
        if index == 151 {
            return Some(RECIPE_MAKE_QUICKLIME);
        }
        if index == 152 {
            return Some(RECIPE_MAKE_BLOWHOLE);
        }
        None
    }


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
                pool_round: 1,
                pool_target: 10,
                pool_value: 0,
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

        #[ink(message)]
        pub fn pool(&self) -> Result<(u128, u128, u128), Error> {
            Ok((self.pool_round, self.pool_target, self.pool_value))
        }

        #[ink(message)]
        pub fn sacrifice(&mut self, element_id: u32) -> Result<(), Error> {
            let found_item = find_item(element_id);

            if found_item.is_none() {
                return Err(Error::InvalidElement);
            }

            let balance_of = self.balance_of_element(element_id).unwrap_or(0);
            if balance_of == 0 {
                return Err(Error::NotEnoughElements);
            }

            let element_contract_id = self.element_contract_ids.get(element_id).unwrap_or(AccountId::from([0xFF; 32]));

            if element_contract_id == AccountId::from([0xFF; 32]) {
                return Err(Error::ElementContractIsNotLocked);
            }

            let call_result = build_call::<DefaultEnvironment>()
                .call(element_contract_id)
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
            
            match call_result {
                Ok(okresult) => match okresult {
                    Ok(_) => {
                        self.pool_value = self.pool_value.checked_add(found_item.unwrap().tier.into()).unwrap_or(0);
                        if self.pool_value >= self.pool_target {
                            self.pool_round = self.pool_round.checked_add(1).unwrap_or(0);
                            self.pool_value = 0;
                            // Transfer contract value to caller
                            self.env().transfer(self.env().caller(), self.env().balance());
                            // Next target is last target + 10 * round
                            self.pool_target = self.pool_target.checked_add(self.pool_round.checked_mul(10).unwrap_or(0)).unwrap_or(0);
                        }
                        Ok(())
                    },
                    Err(reserr) => Err(Error::InkError(reserr))
                },
                Err(fatalerr) => Err(Error::FatalError(format!("Error invoking ElementContract::burn: {:?}", fatalerr)))
            }
        }

        #[ink(message)]
        pub fn prize(&self) -> Result<u128, Error> {
            Ok(self.env().balance())
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