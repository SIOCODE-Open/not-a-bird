# Items

In this document we list all **items** (or _elements_) and **recipes** that can be found in the game. We also provide some explanation of the most important game mechanics revolving around items and recipes.

## Buying

**Buying an item**: Players may at any time call the game contract, transfer some value in the call, and receive items equal to the value transferred. The price of an item is calculated as follows:

For starters, each **item** has a **tier**. The item tier is a **positive integer number**. The game always has a **buy offer**, which is a tuple of (**native token price**, **received tier points**). When the player **buys**, they indirectly buy tier points, and may receive `floor(received_tier_points / tier)` items. The game only considers `floor(transfered_value / native_token_price)` amount of money transfered in, and the remainder is lost (or donated to the contract, however you want to see it).

## Items

* **Monkey** (`1`): We need a description here
* **Giraffe** (`1`): We need a description here
* **Bee** (`1`): We need a description here
* **Coin** (`1`): We need a description here
* **Swarm** (`2`): We need a description here
* **Hydra** (`2`): We need a description here
* **Monkey Branch** (`2`): We need a description here
* **Bridge** (`2`): We need a description here
* **Golden Gate** (`2`): We need a description here
* **Gold** (`1`): We need a description here
* **Silver** (`1`): We need a description here
* **Rhodium** (`1`): We need a description here
* **Hive** (`1`): We need a description here
* **Transaction** (`1`): We need a description here
* **Block** (`1`): We need a description here
* **Blockchain** (`1`): We need a description here
* **Polkadot** (`1`): We need a description here
* **Peer Review** (`1`): We need a description here
* **Cardano** (`2`): We need a description here
* **Bear** (`1`): We need a description here
* **Beer** (`2`): We need a description here
* **Lock** (`2`): We need a description here
* **Marmalade** (`1`): We need a description here
* **Super Marmalade** (`2`): We need a description here
* **Hyper Marmalade** (`2`): We need a description here
* **Water** (`1`): We need a description here
* **Fire** (`1`): We need a description here
* **Steam** (`1`): We need a description here
* **Earth** (`1`): We need a description here
* **Mud** (`1`): We need a description here
* **Lava** (`1`): We need a description here
* **Wind** (`1`): We need a description here
* **Dust** (`1`): We need a description here
* **Rain** (`1`): We need a description here
* **Smoke** (`1`): We need a description here
* **Geyser** (`1`): We need a description here
* **Clay** (`1`): We need a description here
* **Sand** (`1`): We need a description here
* **Plant** (`1`): We need a description here
* **Rainbow** (`1`): We need a description here
* **Storm** (`1`): We need a description here
* **Obsidian** (`1`): We need a description here
* **Ash** (`1`): We need a description here
* **Volcano** (`1`): We need a description here
* **Sandstorm** (`1`): We need a description here
* **Cloud** (`1`): We need a description here
* **Fog** (`1`): We need a description here
* **Tree** (`1`): We need a description here
* **Forest** (`1`): We need a description here
* **Seeds** (`1`): We need a description here
* **Pottery** (`1`): We need a description here
* **Brick** (`1`): We need a description here
* **Quicksand** (`1`): We need a description here
* **Glass** (`1`): We need a description here
* **Dune** (`1`): We need a description here
* **Charcoal** (`1`): We need a description here
* **Leaves** (`1`): We need a description here
* **Wildfire** (`1`): We need a description here
* **Jungle** (`1`): We need a description here
* **Frosted Glass** (`1`): We need a description here
* **Crystal** (`1`): We need a description here
* **Magma** (`1`): We need a description here
* **Rock** (`1`): We need a description here
* **Shard** (`1`): We need a description here
* **Pebble** (`1`): We need a description here
* **Mountain** (`1`): We need a description here
* **Fertilizer** (`1`): We need a description here
* **Soot** (`1`): We need a description here
* **Lightning** (`1`): We need a description here
* **Mist** (`1`): We need a description here
* **Haze** (`1`): We need a description here
* **Flood** (`1`): We need a description here
* **Landslide** (`1`): We need a description here
* **Thunder** (`1`): We need a description here
* **Tornado** (`1`): We need a description here
* **Garden** (`1`): We need a description here
* **Ember** (`1`): We need a description here
* **Kiln** (`1`): We need a description here
* **Pollination** (`1`): We need a description here
* **Sinkhole** (`1`): We need a description here
* **Beach** (`1`): We need a description here
* **Wetstone** (`1`): We need a description here
* **Erosion** (`1`): We need a description here
* **Basalt** (`1`): We need a description here
* **Magma Chamber** (`1`): We need a description here
* **Breeze** (`1`): We need a description here
* **Warm Breeze** (`1`): We need a description here
* **Soil** (`1`): We need a description here
* **Canyon** (`1`): We need a description here
* **Windmill** (`1`): We need a description here
* **Adobe** (`1`): We need a description here
* **Wall** (`1`): We need a description here
* **Pumice** (`1`): We need a description here
* **Barbecue** (`1`): We need a description here
* **Farm** (`1`): We need a description here
* **Shards** (`1`): We need a description here
* **Molten Glass** (`1`): We need a description here
* **Prism** (`1`): We need a description here
* **Sparkle** (`1`): We need a description here
* **Desert** (`1`): We need a description here
* **Oasis** (`1`): We need a description here
* **Mirage** (`1`): We need a description here
* **Sand Dune** (`1`): We need a description here
* **Dam** (`1`): We need a description here
* **Firewall** (`1`): We need a description here
* **Barricade** (`1`): We need a description here
* **Plateau** (`1`): We need a description here
* **Pond** (`1`): We need a description here
* **Aromas** (`1`): We need a description here
* **Flower** (`1`): We need a description here
* **Spore** (`1`): We need a description here
* **Spread** (`1`): We need a description here
* **Fertile Land** (`1`): We need a description here
* **Wetland** (`1`): We need a description here
* **Peat** (`1`): We need a description here
* **Reeds** (`1`): We need a description here
* **Valley** (`1`): We need a description here
* **River** (`1`): We need a description here
* **Scorched Earth** (`1`): We need a description here
* **Delta** (`1`): We need a description here
* **Estuary** (`1`): We need a description here
* **Fire Swamp** (`1`): We need a description here
* **Riverbank** (`1`): We need a description here
* **Ravine** (`1`): We need a description here
* **Gorge** (`1`): We need a description here
* **Charred Ravine** (`1`): We need a description here
* **Echo** (`1`): We need a description here
* **Cave** (`1`): We need a description here
* **Underground Lake** (`1`): We need a description here
* **Lava Cave** (`1`): We need a description here
* **Whispering Cave** (`1`): We need a description here
* **Subterranean Pool** (`1`): We need a description here
* **Spring** (`1`): We need a description here
* **Hot Spring** (`1`): We need a description here
* **Grotto** (`1`): We need a description here
* **Fountain** (`1`): We need a description here
* **Steam Vent** (`1`): We need a description here
* **Cool Breeze** (`1`): We need a description here
* **Monument** (`1`): We need a description here
* **Waterfall** (`1`): We need a description here
* **Eternal Flame** (`1`): We need a description here
* **Pillar Of Wind** (`1`): We need a description here
* **Stream** (`1`): We need a description here
* **Zephyr** (`1`): We need a description here
* **Creek** (`1`): We need a description here
* **Brook** (`1`): We need a description here
* **Whisper** (`1`): We need a description here
* **Rivulet** (`1`): We need a description here
* **Tributary** (`1`): We need a description here
* **Murmur** (`1`): We need a description here
* **Watershed** (`1`): We need a description here
* **Aquifer** (`1`): We need a description here
* **Parched Earth** (`1`): We need a description here
* **Fresh Breeze** (`1`): We need a description here
* **Groundwater** (`1`): We need a description here
* **Reservoir** (`1`): We need a description here
* **Geothermal Spring** (`1`): We need a description here
* **Artesian Well** (`1`): We need a description here
* **Basin** (`1`): We need a description here
* **Lake** (`1`): We need a description here
* **Dry Basin** (`1`): We need a description here
* **Depression** (`1`): We need a description here
* **Island** (`1`): We need a description here
* **Lagoon** (`1`): We need a description here
* **Wave** (`1`): We need a description here
* **Reef** (`1`): We need a description here
* **Coral** (`1`): We need a description here
* **Whirl** (`1`): We need a description here
* **Limestone** (`1`): We need a description here
* **Karst** (`1`): We need a description here
* **Quicklime** (`1`): We need a description here
* **Blowhole** (`1`): We need a description here

## Recipes

* **Make Swarm** (`1 + 1 -> 2`) - **Bee** + **Bee** -> **Swarm**: 
* **Make Hydra** (`1 + 1 -> 2`) - **Giraffe** + **Giraffe** -> **Hydra**: 
* **Make Monkeybranch** (`1 + 2 -> 2`) - **Monkey** + **Hydra** -> **Monkey Branch**: 
* **Make Bridge** (`2 + 2 -> 2`) - **Monkey Branch** + **Monkey Branch** -> **Bridge**: 
* **Make Goldengate** (`1 + 2 -> 2`) - **Coin** + **Bridge** -> **Golden Gate**: 
* **Make Cardano** (`1 + 1 -> 2`) - **Blockchain** + **Peer Review** -> **Cardano**: 
* **Make Beer** (`1 + 1 -> 2`) - **Bee** + **Bear** -> **Beer**: 
* **Make Lock** (`1 + 1 -> 2`) - **Silver** + **Silver** -> **Lock**: 
* **Make Supermarmalade** (`1 + 1 -> 2`) - **Marmalade** + **Marmalade** -> **Super Marmalade**: 
* **Make Hypermarmalade** (`2 + 2 -> 2`) - **Super Marmalade** + **Super Marmalade** -> **Hyper Marmalade**: 
* **Make Steam** (`1 + 1 -> 1`) - **Water** + **Fire** -> **Steam**: We need a description here
* **Make Mud** (`1 + 1 -> 1`) - **Water** + **Earth** -> **Mud**: We need a description here
* **Make Lava** (`1 + 1 -> 1`) - **Fire** + **Earth** -> **Lava**: We need a description here
* **Make Dust** (`1 + 1 -> 1`) - **Wind** + **Earth** -> **Dust**: We need a description here
* **Make Rain** (`1 + 1 -> 1`) - **Water** + **Wind** -> **Rain**: We need a description here
* **Make Smoke** (`1 + 1 -> 1`) - **Fire** + **Wind** -> **Smoke**: We need a description here
* **Make Geyser** (`1 + 1 -> 1`) - **Steam** + **Earth** -> **Geyser**: We need a description here
* **Make Clay** (`1 + 1 -> 1`) - **Mud** + **Fire** -> **Clay**: We need a description here
* **Make Sand** (`1 + 1 -> 1`) - **Mud** + **Wind** -> **Sand**: We need a description here
* **Make Plant** (`1 + 1 -> 1`) - **Rain** + **Earth** -> **Plant**: We need a description here
* **Make Rainbow** (`1 + 1 -> 1`) - **Rain** + **Fire** -> **Rainbow**: We need a description here
* **Make Storm** (`1 + 1 -> 1`) - **Rain** + **Wind** -> **Storm**: We need a description here
* **Make Obsidian** (`1 + 1 -> 1`) - **Lava** + **Water** -> **Obsidian**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Lava** + **Wind** -> **Ash**: We need a description here
* **Make Volcano** (`1 + 1 -> 1`) - **Lava** + **Earth** -> **Volcano**: We need a description here
* **Make Mud** (`1 + 1 -> 1`) - **Dust** + **Water** -> **Mud**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Dust** + **Fire** -> **Ash**: We need a description here
* **Make Sandstorm** (`1 + 1 -> 1`) - **Dust** + **Wind** -> **Sandstorm**: We need a description here
* **Make Cloud** (`1 + 1 -> 1`) - **Smoke** + **Water** -> **Cloud**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Smoke** + **Earth** -> **Ash**: We need a description here
* **Make Fog** (`1 + 1 -> 1`) - **Smoke** + **Wind** -> **Fog**: We need a description here
* **Make Tree** (`1 + 1 -> 1`) - **Plant** + **Water** -> **Tree**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Plant** + **Fire** -> **Ash**: We need a description here
* **Make Forest** (`1 + 1 -> 1`) - **Plant** + **Earth** -> **Forest**: We need a description here
* **Make Seeds** (`1 + 1 -> 1`) - **Plant** + **Wind** -> **Seeds**: We need a description here
* **Make Pottery** (`1 + 1 -> 1`) - **Clay** + **Fire** -> **Pottery**: We need a description here
* **Make Sand** (`1 + 1 -> 1`) - **Clay** + **Wind** -> **Sand**: We need a description here
* **Make Brick** (`1 + 1 -> 1`) - **Clay** + **Earth** -> **Brick**: We need a description here
* **Make Quicksand** (`1 + 1 -> 1`) - **Sand** + **Water** -> **Quicksand**: We need a description here
* **Make Glass** (`1 + 1 -> 1`) - **Sand** + **Fire** -> **Glass**: We need a description here
* **Make Dune** (`1 + 1 -> 1`) - **Sand** + **Wind** -> **Dune**: We need a description here
* **Make Forest** (`1 + 1 -> 1`) - **Tree** + **Water** -> **Forest**: We need a description here
* **Make Charcoal** (`1 + 1 -> 1`) - **Tree** + **Fire** -> **Charcoal**: We need a description here
* **Make Forest** (`1 + 1 -> 1`) - **Tree** + **Earth** -> **Forest**: We need a description here
* **Make Leaves** (`1 + 1 -> 1`) - **Tree** + **Wind** -> **Leaves**: We need a description here
* **Make Wildfire** (`1 + 1 -> 1`) - **Forest** + **Fire** -> **Wildfire**: We need a description here
* **Make Leaves** (`1 + 1 -> 1`) - **Forest** + **Wind** -> **Leaves**: We need a description here
* **Make Jungle** (`1 + 1 -> 1`) - **Forest** + **Earth** -> **Jungle**: We need a description here
* **Make Frosted Glass** (`1 + 1 -> 1`) - **Glass** + **Water** -> **Frosted Glass**: We need a description here
* **Make Crystal** (`1 + 1 -> 1`) - **Glass** + **Earth** -> **Crystal**: We need a description here
* **Make Sandstorm** (`1 + 1 -> 1`) - **Glass** + **Wind** -> **Sandstorm**: We need a description here
* **Make Magma** (`1 + 1 -> 1`) - **Obsidian** + **Fire** -> **Magma**: We need a description here
* **Make Rock** (`1 + 1 -> 1`) - **Obsidian** + **Earth** -> **Rock**: We need a description here
* **Make Shard** (`1 + 1 -> 1`) - **Obsidian** + **Wind** -> **Shard**: We need a description here
* **Make Pebble** (`1 + 1 -> 1`) - **Rock** + **Water** -> **Pebble**: We need a description here
* **Make Lava** (`1 + 1 -> 1`) - **Rock** + **Fire** -> **Lava**: We need a description here
* **Make Mountain** (`1 + 1 -> 1`) - **Rock** + **Earth** -> **Mountain**: We need a description here
* **Make Sand** (`1 + 1 -> 1`) - **Rock** + **Wind** -> **Sand**: We need a description here
* **Make Mud** (`1 + 1 -> 1`) - **Ash** + **Water** -> **Mud**: We need a description here
* **Make Fertilizer** (`1 + 1 -> 1`) - **Ash** + **Earth** -> **Fertilizer**: We need a description here
* **Make Soot** (`1 + 1 -> 1`) - **Ash** + **Wind** -> **Soot**: We need a description here
* **Make Lightning** (`1 + 1 -> 1`) - **Cloud** + **Fire** -> **Lightning**: We need a description here
* **Make Fog** (`1 + 1 -> 1`) - **Cloud** + **Earth** -> **Fog**: We need a description here
* **Make Storm** (`1 + 1 -> 1`) - **Cloud** + **Wind** -> **Storm**: We need a description here
* **Make Cloud** (`1 + 1 -> 1`) - **Fog** + **Water** -> **Cloud**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Fog** + **Fire** -> **Steam**: We need a description here
* **Make Mist** (`1 + 1 -> 1`) - **Fog** + **Earth** -> **Mist**: We need a description here
* **Make Haze** (`1 + 1 -> 1`) - **Fog** + **Wind** -> **Haze**: We need a description here
* **Make Flood** (`1 + 1 -> 1`) - **Storm** + **Water** -> **Flood**: We need a description here
* **Make Landslide** (`1 + 1 -> 1`) - **Storm** + **Earth** -> **Landslide**: We need a description here
* **Make Thunder** (`1 + 1 -> 1`) - **Storm** + **Fire** -> **Thunder**: We need a description here
* **Make Tornado** (`1 + 1 -> 1`) - **Storm** + **Wind** -> **Tornado**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Fire** + **Dust** -> **Ash**: We need a description here
* **Make Rain** (`1 + 1 -> 1`) - **Water** + **Cloud** -> **Rain**: We need a description here
* **Make Cloud** (`1 + 1 -> 1`) - **Water** + **Fog** -> **Cloud**: We need a description here
* **Make Garden** (`1 + 1 -> 1`) - **Earth** + **Plant** -> **Garden**: We need a description here
* **Make Forest** (`1 + 1 -> 1`) - **Earth** + **Tree** -> **Forest**: We need a description here
* **Make Ember** (`1 + 1 -> 1`) - **Fire** + **Ash** -> **Ember**: We need a description here
* **Make Kiln** (`1 + 1 -> 1`) - **Fire** + **Pottery** -> **Kiln**: We need a description here
* **Make Pollination** (`1 + 1 -> 1`) - **Wind** + **Plant** -> **Pollination**: We need a description here
* **Make Haze** (`1 + 1 -> 1`) - **Wind** + **Smoke** -> **Haze**: We need a description here
* **Make Sinkhole** (`1 + 1 -> 1`) - **Earth** + **Quicksand** -> **Sinkhole**: We need a description here
* **Make Beach** (`1 + 1 -> 1`) - **Water** + **Sand** -> **Beach**: We need a description here
* **Make Wetstone** (`1 + 1 -> 1`) - **Water** + **Obsidian** -> **Wetstone**: We need a description here
* **Make Magma** (`1 + 1 -> 1`) - **Fire** + **Rock** -> **Magma**: We need a description here
* **Make Erosion** (`1 + 1 -> 1`) - **Wind** + **Rock** -> **Erosion**: We need a description here
* **Make Basalt** (`1 + 1 -> 1`) - **Water** + **Lava** -> **Basalt**: We need a description here
* **Make Obsidian** (`1 + 1 -> 1`) - **Water** + **Magma** -> **Obsidian**: We need a description here
* **Make Magma Chamber** (`1 + 1 -> 1`) - **Earth** + **Lava** -> **Magma Chamber**: We need a description here
* **Make Breeze** (`1 + 1 -> 1`) - **Wind** + **Dust** -> **Breeze**: We need a description here
* **Make Warm Breeze** (`1 + 1 -> 1`) - **Fire** + **Breeze** -> **Warm Breeze**: We need a description here
* **Make Soil** (`1 + 1 -> 1`) - **Earth** + **Plant** -> **Soil**: We need a description here
* **Make Mud** (`1 + 1 -> 1`) - **Water** + **Soil** -> **Mud**: We need a description here
* **Make Canyon** (`1 + 1 -> 1`) - **Water** + **Erosion** -> **Canyon**: We need a description here
* **Make Charcoal** (`1 + 1 -> 1`) - **Fire** + **Plant** -> **Charcoal**: We need a description here
* **Make Windmill** (`1 + 1 -> 1`) - **Wind** + **Plant** -> **Windmill**: We need a description here
* **Make Adobe** (`1 + 1 -> 1`) - **Earth** + **Clay** -> **Adobe**: We need a description here
* **Make Glass** (`1 + 1 -> 1`) - **Fire** + **Quicksand** -> **Glass**: We need a description here
* **Make Wall** (`1 + 1 -> 1`) - **Earth** + **Brick** -> **Wall**: We need a description here
* **Make Sandstorm** (`1 + 1 -> 1`) - **Wind** + **Erosion** -> **Sandstorm**: We need a description here
* **Make Pumice** (`1 + 1 -> 1`) - **Water** + **Ash** -> **Pumice**: We need a description here
* **Make Barbecue** (`1 + 1 -> 1`) - **Fire** + **Charcoal** -> **Barbecue**: We need a description here
* **Make Farm** (`1 + 1 -> 1`) - **Earth** + **Seeds** -> **Farm**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Water** + **Kiln** -> **Steam**: We need a description here
* **Make Shards** (`1 + 1 -> 1`) - **Wind** + **Obsidian** -> **Shards**: We need a description here
* **Make Crystal** (`1 + 1 -> 1`) - **Earth** + **Obsidian** -> **Crystal**: We need a description here
* **Make Molten Glass** (`1 + 1 -> 1`) - **Fire** + **Crystal** -> **Molten Glass**: We need a description here
* **Make Prism** (`1 + 1 -> 1`) - **Water** + **Crystal** -> **Prism**: We need a description here
* **Make Sparkle** (`1 + 1 -> 1`) - **Wind** + **Crystal** -> **Sparkle**: We need a description here
* **Make Desert** (`1 + 1 -> 1`) - **Earth** + **Beach** -> **Desert**: We need a description here
* **Make Oasis** (`1 + 1 -> 1`) - **Water** + **Desert** -> **Oasis**: We need a description here
* **Make Mirage** (`1 + 1 -> 1`) - **Fire** + **Desert** -> **Mirage**: We need a description here
* **Make Sand Dune** (`1 + 1 -> 1`) - **Wind** + **Desert** -> **Sand Dune**: We need a description here
* **Make Dam** (`1 + 1 -> 1`) - **Water** + **Wall** -> **Dam**: We need a description here
* **Make Firewall** (`1 + 1 -> 1`) - **Fire** + **Wall** -> **Firewall**: We need a description here
* **Make Barricade** (`1 + 1 -> 1`) - **Wind** + **Wall** -> **Barricade**: We need a description here
* **Make Plateau** (`1 + 1 -> 1`) - **Earth** + **Canyon** -> **Plateau**: We need a description here
* **Make Pond** (`1 + 1 -> 1`) - **Water** + **Garden** -> **Pond**: We need a description here
* **Make Wildfire** (`1 + 1 -> 1`) - **Fire** + **Garden** -> **Wildfire**: We need a description here
* **Make Aromas** (`1 + 1 -> 1`) - **Wind** + **Garden** -> **Aromas**: We need a description here
* **Make Oasis** (`1 + 1 -> 1`) - **Earth** + **Pond** -> **Oasis**: We need a description here
* **Make Flower** (`1 + 1 -> 1`) - **Water** + **Pollination** -> **Flower**: We need a description here
* **Make Spore** (`1 + 1 -> 1`) - **Fire** + **Pollination** -> **Spore**: We need a description here
* **Make Spread** (`1 + 1 -> 1`) - **Wind** + **Pollination** -> **Spread**: We need a description here
* **Make Fertile Land** (`1 + 1 -> 1`) - **Earth** + **Soil** -> **Fertile Land**: We need a description here
* **Make Wetland** (`1 + 1 -> 1`) - **Water** + **Fertile Land** -> **Wetland**: We need a description here
* **Make Peat** (`1 + 1 -> 1`) - **Fire** + **Wetland** -> **Peat**: We need a description here
* **Make Reeds** (`1 + 1 -> 1`) - **Wind** + **Wetland** -> **Reeds**: We need a description here
* **Make Valley** (`1 + 1 -> 1`) - **Earth** + **Canyon** -> **Valley**: We need a description here
* **Make River** (`1 + 1 -> 1`) - **Water** + **Valley** -> **River**: We need a description here
* **Make Scorched Earth** (`1 + 1 -> 1`) - **Fire** + **Valley** -> **Scorched Earth**: We need a description here
* **Make Breeze** (`1 + 1 -> 1`) - **Wind** + **Valley** -> **Breeze**: We need a description here
* **Make Delta** (`1 + 1 -> 1`) - **Earth** + **River** -> **Delta**: We need a description here
* **Make Estuary** (`1 + 1 -> 1`) - **Water** + **Delta** -> **Estuary**: We need a description here
* **Make Fire Swamp** (`1 + 1 -> 1`) - **Fire** + **Delta** -> **Fire Swamp**: We need a description here
* **Make Riverbank** (`1 + 1 -> 1`) - **Wind** + **Delta** -> **Riverbank**: We need a description here
* **Make Ravine** (`1 + 1 -> 1`) - **Earth** + **Erosion** -> **Ravine**: We need a description here
* **Make Gorge** (`1 + 1 -> 1`) - **Water** + **Ravine** -> **Gorge**: We need a description here
* **Make Charred Ravine** (`1 + 1 -> 1`) - **Fire** + **Ravine** -> **Charred Ravine**: We need a description here
* **Make Echo** (`1 + 1 -> 1`) - **Wind** + **Ravine** -> **Echo**: We need a description here
* **Make Cave** (`1 + 1 -> 1`) - **Earth** + **Echo** -> **Cave**: We need a description here
* **Make Underground Lake** (`1 + 1 -> 1`) - **Water** + **Cave** -> **Underground Lake**: We need a description here
* **Make Lava Cave** (`1 + 1 -> 1`) - **Fire** + **Cave** -> **Lava Cave**: We need a description here
* **Make Whispering Cave** (`1 + 1 -> 1`) - **Wind** + **Cave** -> **Whispering Cave**: We need a description here
* **Make Subterranean Pool** (`1 + 1 -> 1`) - **Earth** + **Underground Lake** -> **Subterranean Pool**: We need a description here
* **Make Spring** (`1 + 1 -> 1`) - **Water** + **Subterranean Pool** -> **Spring**: We need a description here
* **Make Hot Spring** (`1 + 1 -> 1`) - **Fire** + **Subterranean Pool** -> **Hot Spring**: We need a description here
* **Make Grotto** (`1 + 1 -> 1`) - **Wind** + **Subterranean Pool** -> **Grotto**: We need a description here
* **Make Oasis** (`1 + 1 -> 1`) - **Earth** + **Spring** -> **Oasis**: We need a description here
* **Make Fountain** (`1 + 1 -> 1`) - **Water** + **Spring** -> **Fountain**: We need a description here
* **Make Steam Vent** (`1 + 1 -> 1`) - **Fire** + **Spring** -> **Steam Vent**: We need a description here
* **Make Cool Breeze** (`1 + 1 -> 1`) - **Wind** + **Spring** -> **Cool Breeze**: We need a description here
* **Make Monument** (`1 + 1 -> 1`) - **Earth** + **Fountain** -> **Monument**: We need a description here
* **Make Waterfall** (`1 + 1 -> 1`) - **Water** + **Monument** -> **Waterfall**: We need a description here
* **Make Eternal Flame** (`1 + 1 -> 1`) - **Fire** + **Monument** -> **Eternal Flame**: We need a description here
* **Make Pillar Of Wind** (`1 + 1 -> 1`) - **Wind** + **Monument** -> **Pillar Of Wind**: We need a description here
* **Make River** (`1 + 1 -> 1`) - **Earth** + **Waterfall** -> **River**: We need a description here
* **Make Stream** (`1 + 1 -> 1`) - **Water** + **River** -> **Stream**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Fire** + **River** -> **Steam**: We need a description here
* **Make Zephyr** (`1 + 1 -> 1`) - **Wind** + **River** -> **Zephyr**: We need a description here
* **Make Creek** (`1 + 1 -> 1`) - **Earth** + **Stream** -> **Creek**: We need a description here
* **Make Brook** (`1 + 1 -> 1`) - **Water** + **Creek** -> **Brook**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Fire** + **Creek** -> **Steam**: We need a description here
* **Make Whisper** (`1 + 1 -> 1`) - **Wind** + **Creek** -> **Whisper**: We need a description here
* **Make Rivulet** (`1 + 1 -> 1`) - **Earth** + **Brook** -> **Rivulet**: We need a description here
* **Make Tributary** (`1 + 1 -> 1`) - **Water** + **Rivulet** -> **Tributary**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Fire** + **Rivulet** -> **Steam**: We need a description here
* **Make Murmur** (`1 + 1 -> 1`) - **Wind** + **Rivulet** -> **Murmur**: We need a description here
* **Make Watershed** (`1 + 1 -> 1`) - **Earth** + **Tributary** -> **Watershed**: We need a description here
* **Make Aquifer** (`1 + 1 -> 1`) - **Water** + **Watershed** -> **Aquifer**: We need a description here
* **Make Parched Earth** (`1 + 1 -> 1`) - **Fire** + **Watershed** -> **Parched Earth**: We need a description here
* **Make Fresh Breeze** (`1 + 1 -> 1`) - **Wind** + **Watershed** -> **Fresh Breeze**: We need a description here
* **Make Groundwater** (`1 + 1 -> 1`) - **Earth** + **Aquifer** -> **Groundwater**: We need a description here
* **Make Reservoir** (`1 + 1 -> 1`) - **Water** + **Groundwater** -> **Reservoir**: We need a description here
* **Make Geothermal Spring** (`1 + 1 -> 1`) - **Fire** + **Groundwater** -> **Geothermal Spring**: We need a description here
* **Make Artesian Well** (`1 + 1 -> 1`) - **Wind** + **Groundwater** -> **Artesian Well**: We need a description here
* **Make Basin** (`1 + 1 -> 1`) - **Earth** + **Reservoir** -> **Basin**: We need a description here
* **Make Lake** (`1 + 1 -> 1`) - **Water** + **Basin** -> **Lake**: We need a description here
* **Make Dry Basin** (`1 + 1 -> 1`) - **Fire** + **Basin** -> **Dry Basin**: We need a description here
* **Make Depression** (`1 + 1 -> 1`) - **Wind** + **Basin** -> **Depression**: We need a description here
* **Make Island** (`1 + 1 -> 1`) - **Earth** + **Lake** -> **Island**: We need a description here
* **Make Lagoon** (`1 + 1 -> 1`) - **Water** + **Lake** -> **Lagoon**: We need a description here
* **Make Steam** (`1 + 1 -> 1`) - **Fire** + **Lake** -> **Steam**: We need a description here
* **Make Wave** (`1 + 1 -> 1`) - **Wind** + **Lake** -> **Wave**: We need a description here
* **Make Reef** (`1 + 1 -> 1`) - **Earth** + **Lagoon** -> **Reef**: We need a description here
* **Make Coral** (`1 + 1 -> 1`) - **Water** + **Reef** -> **Coral**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Fire** + **Reef** -> **Ash**: We need a description here
* **Make Whirl** (`1 + 1 -> 1`) - **Wind** + **Reef** -> **Whirl**: We need a description here
* **Make Limestone** (`1 + 1 -> 1`) - **Earth** + **Coral** -> **Limestone**: We need a description here
* **Make Karst** (`1 + 1 -> 1`) - **Water** + **Limestone** -> **Karst**: We need a description here
* **Make Quicklime** (`1 + 1 -> 1`) - **Fire** + **Limestone** -> **Quicklime**: We need a description here
* **Make Dust** (`1 + 1 -> 1`) - **Wind** + **Limestone** -> **Dust**: We need a description here
* **Make Cave** (`1 + 1 -> 1`) - **Earth** + **Karst** -> **Cave**: We need a description here
* **Make Geyser** (`1 + 1 -> 1`) - **Water** + **Karst** -> **Geyser**: We need a description here
* **Make Magma Chamber** (`1 + 1 -> 1`) - **Fire** + **Karst** -> **Magma Chamber**: We need a description here
* **Make Blowhole** (`1 + 1 -> 1`) - **Wind** + **Karst** -> **Blowhole**: We need a description here
* **Make Hot Spring** (`1 + 1 -> 1`) - **Earth** + **Geyser** -> **Hot Spring**: We need a description here
* **Make Fountain** (`1 + 1 -> 1`) - **Water** + **Geyser** -> **Fountain**: We need a description here
* **Make Steam Vent** (`1 + 1 -> 1`) - **Fire** + **Geyser** -> **Steam Vent**: We need a description here
* **Make Mist** (`1 + 1 -> 1`) - **Wind** + **Geyser** -> **Mist**: We need a description here
* **Make Oasis** (`1 + 1 -> 1`) - **Earth** + **Spring** -> **Oasis**: We need a description here
* **Make Fountain** (`1 + 1 -> 1`) - **Water** + **Spring** -> **Fountain**: We need a description here
* **Make Steam Vent** (`1 + 1 -> 1`) - **Fire** + **Spring** -> **Steam Vent**: We need a description here
* **Make Cool Breeze** (`1 + 1 -> 1`) - **Wind** + **Spring** -> **Cool Breeze**: We need a description here
* **Make Monument** (`1 + 1 -> 1`) - **Earth** + **Fountain** -> **Monument**: We need a description here
* **Make Waterfall** (`1 + 1 -> 1`) - **Water** + **Monument** -> **Waterfall**: We need a description here
* **Make Eternal Flame** (`1 + 1 -> 1`) - **Fire** + **Monument** -> **Eternal Flame**: We need a description here
* **Make Pillar Of Wind** (`1 + 1 -> 1`) - **Wind** + **Monument** -> **Pillar Of Wind**: We need a description here
* **Make River** (`1 + 1 -> 1`) - **Earth** + **Waterfall** -> **River**: We need a description here
* **Make Stream** (`1 + 1 -> 1`) - **Water** + **River** -> **Stream**: We need a description here
