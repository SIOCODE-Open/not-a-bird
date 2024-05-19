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

## Recipes

* **Make Swarm** (`1 + 1 -> 2`) - **Bee** + **Bee** -> **Swarm**: 
* **Make Hydra** (`1 + 1 -> 2`) - **Giraffe** + **Giraffe** -> **Hydra**: 
* **Make Monkey Branch** (`1 + 2 -> 2`) - **Monkey** + **Hydra** -> **Monkey Branch**: 
* **Make Bridge** (`2 + 2 -> 2`) - **Monkey Branch** + **Monkey Branch** -> **Bridge**: 
* **Make Golden Gate** (`1 + 2 -> 2`) - **Coin** + **Bridge** -> **Golden Gate**: 
* **Make Cardano** (`1 + 1 -> 2`) - **Blockchain** + **Peer Review** -> **Cardano**: 
* **Make Beer** (`1 + 1 -> 2`) - **Bee** + **Bear** -> **Beer**: 
* **Make Lock** (`1 + 1 -> 2`) - **Silver** + **Silver** -> **Lock**: 
* **Make Super Marmalade** (`1 + 1 -> 2`) - **Marmalade** + **Marmalade** -> **Super Marmalade**: 
* **Make Hyper Marmalade** (`2 + 2 -> 2`) - **Super Marmalade** + **Super Marmalade** -> **Hyper Marmalade**: 
