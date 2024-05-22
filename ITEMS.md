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
