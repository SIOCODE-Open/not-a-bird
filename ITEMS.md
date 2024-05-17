# Items

In this document we list all **items** (or _elements_) and **recipes** that can be found in the game. We also provide some explanation of the most important game mechanics revolving around items and recipes.

## Buying

**Buying an item**: Players may at any time call the game contract, transfer some value in the call, and receive items equal to the value transferred. The price of an item is calculated as follows:

For starters, each **item** has a **tier**. The item tier is a **positive integer number**. The game always has a **buy offer**, which is a tuple of (**native token price**, **received tier points**). When the player **buys**, they indirectly buy tier points, and may receive `floor(received_tier_points / tier)` items. The game only considers `floor(transfered_value / native_token_price)` amount of money transfered in, and the remainder is lost (or donated to the contract, however you want to see it).

## Items

* **Water** (`1`): Water is a liquid with formula H~2~O
* **Fire** (`1`): Fire is a chemical reaction that releases heat and light
* **Earth** (`1`): Earth is the solid material that makes up the surface of the planet
* **Air** (`1`): Air is a mixture of gases that make up the atmosphere
* **Steam** (`2`): Steam is the gaseous form of water with formula H~2~O
* **Lava** (`2`): Lava is molten rock that flows from a volcano

## Recipes

* **Create Steam** (`1 + 1 -> 2`) - **Water** + **Fire** -> **Steam**: Combining **water** and **fire** creates **steam**
* **Create Lava** (`1 + 1 -> 2`) - **Earth** + **Fire** -> **Lava**: Lava is created when a volcano errupts, combining **earth** and **fire**
