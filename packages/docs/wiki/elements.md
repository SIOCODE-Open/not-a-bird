# Elements

In _Not a Bird_ players own **elements**. Elements are full-fledged [cryptocurrencies](https://en.wikipedia.org/wiki/Cryptocurrency). They are created via _Smart Contracts_ deployed to a blockchain, and they support the [PSP-22 interface](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md).

## Tier number

Each element has a **tier number**.

The _tier number_ is used when calculating the _buy price_ of elements. The game contract defines a so-called _buy offer_, which looks like this:

```json
{
    "nativeTokens": "1234.12345678",
    "rewardTierPoints": "100"
}
```

This means, that for `1234.12345678` of the _native token_ (the cryptocurrency you use to play the game), you can buy `100` _tier points_. You can convert these tier points in the buy transaction to _any element_.

When you buy from the game contract, you will receive `floor(bought_tier_points / element_tier)` elements of the chosen element.

You must always pay an _integer multiple_ of the `nativeTokens` in the _buy offer_, because you will only get `floor(paid_tier_points / buy_offer_native_tokens) * buy_offer_reward_tier_points` tier points.

Elements, that cannot be crafted are "_base elements_", so we assign the _tier number_ `1` to them. Every other element has a tier number of `A + B + C`, where `A` and `B` are the tier numbers of the elements required to craft it, and `C` is a constant greater than zero.

## List of elements

* [Monkey](/wiki/elements/monkey)
* [Giraffe](/wiki/elements/giraffe)
* [Bee](/wiki/elements/bee)
* [Coin](/wiki/elements/coin)
* [Swarm](/wiki/elements/swarm)
* [Hydra](/wiki/elements/hydra)
* [Monkey Branch](/wiki/elements/monkey-branch)
* [Bridge](/wiki/elements/bridge)
* [Golden Gate](/wiki/elements/golden-gate)
* [Gold](/wiki/elements/gold)
* [Silver](/wiki/elements/silver)
* [Rhodium](/wiki/elements/rhodium)
* [Hive](/wiki/elements/hive)
* [Transaction](/wiki/elements/transaction)
* [Block](/wiki/elements/block)
* [Blockchain](/wiki/elements/blockchain)
* [Polkadot](/wiki/elements/polkadot)
* [Peer Review](/wiki/elements/peer-review)
* [Cardano](/wiki/elements/cardano)
* [Bear](/wiki/elements/bear)
* [Beer](/wiki/elements/beer)
* [Lock](/wiki/elements/lock)
* [Marmalade](/wiki/elements/marmalade)
* [Super Marmalade](/wiki/elements/super-marmalade)
* [Hyper Marmalade](/wiki/elements/hyper-marmalade)
* [Water](/wiki/elements/water)
* [Fire](/wiki/elements/fire)
* [Steam](/wiki/elements/steam)
* [Earth](/wiki/elements/earth)
* [Mud](/wiki/elements/mud)
* [Lava](/wiki/elements/lava)
* [Wind](/wiki/elements/wind)
* [Dust](/wiki/elements/dust)
* [Rain](/wiki/elements/rain)
* [Smoke](/wiki/elements/smoke)
* [Geyser](/wiki/elements/geyser)
* [Clay](/wiki/elements/clay)
* [Sand](/wiki/elements/sand)
* [Plant](/wiki/elements/plant)
* [Rainbow](/wiki/elements/rainbow)
* [Storm](/wiki/elements/storm)
* [Obsidian](/wiki/elements/obsidian)
* [Ash](/wiki/elements/ash)
* [Volcano](/wiki/elements/volcano)
* [Sandstorm](/wiki/elements/sandstorm)
* [Cloud](/wiki/elements/cloud)
* [Fog](/wiki/elements/fog)
* [Tree](/wiki/elements/tree)
* [Forest](/wiki/elements/forest)
* [Seeds](/wiki/elements/seeds)
* [Pottery](/wiki/elements/pottery)
* [Brick](/wiki/elements/brick)
* [Quicksand](/wiki/elements/quicksand)
* [Glass](/wiki/elements/glass)
* [Dune](/wiki/elements/dune)
* [Charcoal](/wiki/elements/charcoal)
* [Leaves](/wiki/elements/leaves)
* [Wildfire](/wiki/elements/wildfire)
* [Jungle](/wiki/elements/jungle)
* [Frosted Glass](/wiki/elements/frosted-glass)
* [Crystal](/wiki/elements/crystal)
* [Magma](/wiki/elements/magma)
* [Rock](/wiki/elements/rock)
* [Shard](/wiki/elements/shard)
* [Pebble](/wiki/elements/pebble)
* [Mountain](/wiki/elements/mountain)
* [Fertilizer](/wiki/elements/fertilizer)
* [Soot](/wiki/elements/soot)
* [Lightning](/wiki/elements/lightning)
* [Mist](/wiki/elements/mist)
* [Haze](/wiki/elements/haze)
* [Flood](/wiki/elements/flood)
* [Landslide](/wiki/elements/landslide)
* [Thunder](/wiki/elements/thunder)
* [Tornado](/wiki/elements/tornado)
* [Garden](/wiki/elements/garden)
* [Ember](/wiki/elements/ember)
* [Kiln](/wiki/elements/kiln)
* [Pollination](/wiki/elements/pollination)
* [Sinkhole](/wiki/elements/sinkhole)
* [Beach](/wiki/elements/beach)
* [Wetstone](/wiki/elements/wetstone)
* [Erosion](/wiki/elements/erosion)
* [Basalt](/wiki/elements/basalt)
* [Magma Chamber](/wiki/elements/magma-chamber)
* [Breeze](/wiki/elements/breeze)
* [Warm Breeze](/wiki/elements/warm-breeze)
* [Soil](/wiki/elements/soil)
* [Canyon](/wiki/elements/canyon)
* [Windmill](/wiki/elements/windmill)
* [Adobe](/wiki/elements/adobe)
* [Wall](/wiki/elements/wall)
* [Pumice](/wiki/elements/pumice)
* [Barbecue](/wiki/elements/barbecue)
* [Farm](/wiki/elements/farm)
* [Shards](/wiki/elements/shards)
* [Molten Glass](/wiki/elements/molten-glass)
* [Prism](/wiki/elements/prism)
* [Sparkle](/wiki/elements/sparkle)
* [Desert](/wiki/elements/desert)
* [Oasis](/wiki/elements/oasis)
* [Mirage](/wiki/elements/mirage)
* [Sand Dune](/wiki/elements/sand-dune)
* [Dam](/wiki/elements/dam)
* [Firewall](/wiki/elements/firewall)
* [Barricade](/wiki/elements/barricade)
* [Plateau](/wiki/elements/plateau)
* [Pond](/wiki/elements/pond)
* [Aromas](/wiki/elements/aromas)
* [Flower](/wiki/elements/flower)
* [Spore](/wiki/elements/spore)
* [Spread](/wiki/elements/spread)
* [Fertile Land](/wiki/elements/fertile-land)
* [Wetland](/wiki/elements/wetland)
* [Peat](/wiki/elements/peat)
* [Reeds](/wiki/elements/reeds)
* [Valley](/wiki/elements/valley)
* [River](/wiki/elements/river)
* [Scorched Earth](/wiki/elements/scorched-earth)
* [Delta](/wiki/elements/delta)
* [Estuary](/wiki/elements/estuary)
* [Fire Swamp](/wiki/elements/fire-swamp)
* [Riverbank](/wiki/elements/riverbank)
* [Ravine](/wiki/elements/ravine)
* [Gorge](/wiki/elements/gorge)
* [Charred Ravine](/wiki/elements/charred-ravine)
* [Echo](/wiki/elements/echo)
* [Cave](/wiki/elements/cave)
* [Underground Lake](/wiki/elements/underground-lake)
* [Lava Cave](/wiki/elements/lava-cave)
* [Whispering Cave](/wiki/elements/whispering-cave)
* [Subterranean Pool](/wiki/elements/subterranean-pool)
* [Spring](/wiki/elements/spring)
* [Hot Spring](/wiki/elements/hot-spring)
* [Grotto](/wiki/elements/grotto)
* [Fountain](/wiki/elements/fountain)
* [Steam Vent](/wiki/elements/steam-vent)
* [Cool Breeze](/wiki/elements/cool-breeze)
* [Monument](/wiki/elements/monument)
* [Waterfall](/wiki/elements/waterfall)
* [Eternal Flame](/wiki/elements/eternal-flame)
* [Pillar Of Wind](/wiki/elements/pillar-of-wind)
* [Stream](/wiki/elements/stream)
* [Zephyr](/wiki/elements/zephyr)
* [Creek](/wiki/elements/creek)
* [Brook](/wiki/elements/brook)
* [Whisper](/wiki/elements/whisper)
* [Rivulet](/wiki/elements/rivulet)
* [Tributary](/wiki/elements/tributary)
* [Murmur](/wiki/elements/murmur)
* [Watershed](/wiki/elements/watershed)
* [Aquifer](/wiki/elements/aquifer)
* [Parched Earth](/wiki/elements/parched-earth)
* [Fresh Breeze](/wiki/elements/fresh-breeze)
* [Groundwater](/wiki/elements/groundwater)
* [Reservoir](/wiki/elements/reservoir)
* [Geothermal Spring](/wiki/elements/geothermal-spring)
* [Artesian Well](/wiki/elements/artesian-well)
* [Basin](/wiki/elements/basin)
* [Lake](/wiki/elements/lake)
* [Dry Basin](/wiki/elements/dry-basin)
* [Depression](/wiki/elements/depression)
* [Island](/wiki/elements/island)
* [Lagoon](/wiki/elements/lagoon)
* [Wave](/wiki/elements/wave)
* [Reef](/wiki/elements/reef)
* [Coral](/wiki/elements/coral)
* [Whirl](/wiki/elements/whirl)
* [Limestone](/wiki/elements/limestone)
* [Karst](/wiki/elements/karst)
* [Quicklime](/wiki/elements/quicklime)
* [Blowhole](/wiki/elements/blowhole)

See also:

* [Games](/wiki/games)
* [Recipes](/wiki/recipes)
* [Wiki](/wiki/index)
* [Learn](/learn/index)