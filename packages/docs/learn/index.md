# Learn

::: info
On this page you will find useful information about the game, its rules, and how you can play it.
:::

## Blockchain game

_Not a Bird_ is a **blockchain game**, which means you have to own **some cryptocurrency to play it**. You will need this cryptocurrency in your wallet to:

* **Buy elements** - you must first buy some elements to start crafting.
* **Pay transaction fees** - each interaction (buying, trading, crafting, etc.) bears some cost.

### Local wallet

_Not a Bird_ uses a **built-in local wallet** for your convenience. You can fund this wallet to be used for the game via multiple methods:

* **Transfer** - you can get the _address_ of your own wallet, and _send some cryptocurrency_ to this wallet from _any other wallet you own_.
* **Buy** - you can use _centralized_ or _decentralized exchanges_ to buy some cryptocurrency and send it to your wallet.

The game interface allows you to _send cryptocurrency_ from your local wallet at any time.

### Elements

In _Not a Bird_, players own _elements_ like `water`, `monkey`, and many others. These elements are _full-fledged cryptocurrencies_ that you can _send_ to other people, or _trade_ on an exchange.

### Crafting

The game is about _crafting_ new elements from the ones you already own. You can _combine_ **two elements** to receive a **new one**. The game has a _list of recipes_ that you can use to _craft_ new elements.

### Tiers

Each element has a _tier number_, which requires a little bit of explanation.

::: info
**Where is it used?**

The _tier number_ is used when calculating the _buy price_ of elements. The game contract defines a so-called _buy offer_, which looks like this:

```json
{
    "nativeTokens": "1234.12345678",
    "rewardTierPoints": "100"
}
```

This means, that for `1234.12345678` of the _native token_ (the cryptocurrency you use to play the game), you can buy `100` _tier points_. You can convert these tier points in the buy transaction to _any element_.
:::

::: info
**How many items do I get?**

When you buy from the game contract, you will receive `floor(bought_tier_points / element_tier)` elements of the chosen element.
:::

::: info
**How much do I pay?**

You should always pay an _integer multiple_ of the `nativeTokens` in the _buy offer_, because you will only get `floor(paid_tier_points / buy_offer_native_tokens) * buy_offer_reward_tier_points` tier points.
:::

Elements, that cannot be crafted are "_base elements_", so we assign the _tier number_ `1` to them. If we assume that _crafting_ has no _added value_ to the new element, than we have to set a crafted element's tier number to `A + B`, where `A` and `B` are the tier numbers of the elements used in the crafting.

To make the game interesting however, we have decided to assign `A + B + C` to the crafted element, where `C` is an _arbitrary integer number_ decided on during game design, but it is always _greater than zero_. This means, that dedicating time to _crafting_ is _worth it_.

### Sacrificing

In _Not a Bird_, you can _sacrifice_ elements to a _common pot_. In each _round_, the game contract sets a _target_ for this pot. When this target is reached, the _round ends_, and the following happens:

* The game contracts decides _on the winners of the round_.
* Value accumulated from _buying_ elements during the round is distributed evenly among the winners.
* A new _round_ starts, and the target is recalculated.

The rounds of the game are _infinite_ from the moment the game is deployed on the blockchain, making this an **eternal gambling game** playable by **anyone on the world**.
