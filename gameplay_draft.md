# Gameplay Draft #3

You are a merger. Your call is to merge all Items. Catch them all.

## Main - Mergican

The base resources are the following:  
Iron, Gold, Wood, Corn, Wheat

Resources can be merged.It works the following:

| Name     | Index | Requirements |
| :------- | :---- | :----------- |
| Ironore  | 0     | -            |
| Steelbar | 1     | 2 Ironore    |
| Goldore  | 2     | -            |
| Goldbar  | 3     | 2 Goldore    |
| Wood     | 4     | -            |
| Planks   | 5     | 2 Wood       |
| Coal     | 6     | -            |
| Coalbag  | 7     | 2 Coal       |
| Corn     | 8     | -            |
| Popcorn  | 9     | 2 Corn       |
| Wheat    | 9     | -            |
| Flower   | 10    | 2 Wheat      |
| Crystal  | 11    | ?            |
| Gears    | 12    | ?            |
| firewood | 13    | ?            |

---

# Gameplay Draft #1

## Intro - World

We are in Space. We are the protagonist.  
We aim to make the world a multiplantery species.  
We have to terraform planets to make this happen.

## Main - Terraform

There are solar systems.  
Every solar system has planets.  
Every Planet has resources.  
The base resources are the following:  
Metal, Crystal, Energy.

Resources can be merged.It works the following:

| **Metal**                         |
| :-------------------------------- |
| Merge 5 Metal, you get 1 Bronze.  |
| Merge 5 Bronze, you get 1 Silver. |
| Merge 5 Silver, you get 1 Gold.   |
| Merge 5 Gold, you get 1 Platinum. |

| **Crystal**                          |
| :----------------------------------- |
| Merge 5 Crystal, you get 1 Sapphire. |
| Merge 5 Sapphire, you get 1 Emerald. |
| Merge 5 Emerald, you get 1 Ruby.     |
| Merge 5 Ruby, you get 1 Diamond.     |

| **Energy**                           |
| :----------------------------------- |
| Merge 5 Energy, you get 1 Shimmer.   |
| Merge 5 Shimmer, you get 1 Radiance. |
| Merge 5 Radiance, you get 1 Glare.   |
| Merge 5 Glare, you get 1 Brilliance. |

Resoucres can be merged by place them via drag an drop on a pile.  
Or Ressources can be merged by feed the Mines and drag and drop them over the mine.

There are 3 Mines. Metalmine, Crystalmine, Solarmine.

> This can be achieved till the 6 of May.

### Outro - Further

[OGame](https://gameforge.com/en-GB/play/ogame) or [Little Alchemy](https://littlealchemy.com/) are the inspirations.

From there onwards in can either go into **Puzzle / Crafting** Game genre _(alchemy)_ or into a **Strategy / Space Simulation** game _(ogame)_. Both of them are successful games. Born in the big second generation of the Web. Played & maintained till this day.  
The Game principles are battle tested in user experience & they manged to established a economical sustainable model over two decades.  
We also glimpse to other breakers of this era. f.e. Farmville.

... w.i.p. ...

# Gameplay Draft #2

You are a merger. Your call is to merge all 6 Items.

## Main - Merging

The base resources are the following:  
Metal, Crystal, Energy.

Resources can be merged.It works the following:

| **Metal**                        |
| :------------------------------- |
| Merge 2 Metal, you get 1 Bronze. |

```
class RessourceStore{
  contracts: Contract[]
  owned_ressources: Mapping<AccountId, Mapping<u32,u32>
  mint_delegate(index: u32)
}
class Ressource {
  mint(owner: AccountId, ressourceId: u32,  burned_count: u32, ressourceId_target: u32)
  count_of(owner: AccountId, ressourceId: u32)
}
```

```
Alice -> RessourceStore: mint_delegate(1)
Alice -> RessourceStore: mint_delegate(1)
Alice -> RessourceStore: count_of(1)
RessourceStore -> Alice: "Its two"
Alice -> RessourceStore: mint_delegate(2)
RessourceStore -> Ressource: mint(Alice, 1, 2, 2)
Alice -> RessourceStore: count_of(2)
RessourceStore -> Alice: "Its one"
Alice -> RessourceStore: count_of(1)
RessourceStore -> Alice: "Its zero"
```

| **Crystal**                          |
| :----------------------------------- |
| Merge 2 Crystal, you get 1 Sapphire. |

| **Energy**                         |
| :--------------------------------- |
| Merge 2 Energy, you get 1 Shimmer. |
