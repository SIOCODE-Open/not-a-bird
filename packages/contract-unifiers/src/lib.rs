#![cfg_attr(not(feature = "std"), no_std, no_main)]

/// A game created with the help of the Unifiers group
#[ink::contract]
pub mod unifiers {
    pub use ink::prelude::string::String;
    pub use ink::prelude::format;
    pub use ink::storage::Mapping;
    use ink::{
        env::{
            call::{build_call, ExecutionInput, Selector},
            CallFlags, DefaultEnvironment,
        },
    };

    /** Error type for the game contract for Unifiers */
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

    const ELEMENT_MONKEY: Element = Element {
        id: 0,
        name: "Monkey",
        description: "This banana-loving acrobat is like if Tarzan had a caffeine addiction!",
        tier: 1,
    };
    const ELEMENT_GIRAFFE: Element = Element {
        id: 1,
        name: "Giraffe",
        description: "The long-necked, leafy buffet enthusiast that would make even a stepladder feel short.",
        tier: 1,
    };
    const ELEMENT_BEE: Element = Element {
        id: 2,
        name: "Bee",
        description: "The buzzing little cousin of Buzzie Lightyear, Defender of the Flora and Champion of Sweetness!",
        tier: 1,
    };
    const ELEMENT_COIN: Element = Element {
        id: 3,
        name: "Coin",
        description: "More valuable than a chest full of dragon&#x27;s gold, this shiny round thing makes NPCs do your bidding.",
        tier: 1,
    };
    const ELEMENT_SWARM: Element = Element {
        id: 4,
        name: "SWARM",
        description: "Unleash a tiny, buzzing army that makes you feel like the villain in a superhero movie.",
        tier: 2,
    };
    const ELEMENT_HYDRA: Element = Element {
        id: 5,
        name: "Hydra",
        description: "When one head isn&#x27;t enough to argue with you, this multi-headed reptilian nightmare is ready to rumble!",
        tier: 2,
    };
    const ELEMENT_MONKEY_BRANCH: Element = Element {
        id: 6,
        name: "MonkeyBranch",
        description: "Swing through the jungle like Tarzan with this monkey-approved vine, perfect for dramatic escapes and awkward landings.",
        tier: 2,
    };
    const ELEMENT_BRIDGE: Element = Element {
        id: 7,
        name: "Bridge",
        description: "The majestic road-over-nothing, perfect for trolls and billy goats alike.",
        tier: 2,
    };
    const ELEMENT_GOLDEN_GATE: Element = Element {
        id: 8,
        name: "GoldenGate",
        description: "The mystical bridge that Gandalf would totally approve of, connecting realms and charging tolls in riddles.",
        tier: 2,
    };
    const ELEMENT_GOLD: Element = Element {
        id: 9,
        name: "Gold",
        description: "Shinier than a disco ball at Studio 54, this glistening treasure will make Scrooge McDuck jealous!",
        tier: 1,
    };
    const ELEMENT_SILVER: Element = Element {
        id: 10,
        name: "Silver",
        description: "Shinier than a vampire at a disco party, it&#x27;s what werewolves dread and jewelry lovers adore.",
        tier: 1,
    };
    const ELEMENT_RHODIUM: Element = Element {
        id: 11,
        name: "Rhodium",
        description: "The bling-bling metal of the periodic table: shinier than your future, harder than your math homework.",
        tier: 1,
    };
    const ELEMENT_HIVE: Element = Element {
        id: 12,
        name: "Hive",
        description: "Welcome to the buzzfeed mansion, where every room has a bee-convincing argument!",
        tier: 1,
    };
    const ELEMENT_TRANSACTION: Element = Element {
        id: 13,
        name: "Transaction",
        description: "The magical moment when your gold coins vanish and you&#x27;re left wondering if you&#x27;ve been pickpocketed by a ninja or just bought a shiny new sword.",
        tier: 1,
    };
    const ELEMENT_BLOCK: Element = Element {
        id: 14,
        name: "Block",
        description: "Like adult Legos, but less fun and more about stopping that lava from ruining your day!",
        tier: 1,
    };
    const ELEMENT_BLOCKCHAIN: Element = Element {
        id: 15,
        name: "Blockchain",
        description: "The magical internet ledger of destiny that Satoshi dreamt up, where everything is transparent, immutable, and forever entwined like the plot of a Christopher Nolan movie.",
        tier: 1,
    };
    const ELEMENT_POLKADOT: Element = Element {
        id: 16,
        name: "Polkadot",
        description: "Think Bitcoin&#x27;s eccentric cousin who shows up at parties in a spotted suit and shocks everyone with their dazzlingly efficient dancing.",
        tier: 1,
    };
    const ELEMENT_PEER_REVIEW: Element = Element {
        id: 17,
        name: "PeerReview",
        description: "A scroll that makes your friends question their life choices and your enemies spit out their coffee in disbelief.",
        tier: 1,
    };
    const ELEMENT_CARDANO: Element = Element {
        id: 18,
        name: "Cardano",
        description: "Time to unleash the blockchain beast that&#x27;s more confusing than an IKEA assembly manual!",
        tier: 2,
    };
    const ELEMENT_BEAR: Element = Element {
        id: 19,
        name: "Bear",
        description: "This fuzzy giant decided to move out of the forest and into your nightmares on the advice of its therapist, Yogi.",
        tier: 1,
    };
    const ELEMENT_BEER: Element = Element {
        id: 20,
        name: "Beer",
        description: "The golden elixir of the gods, best enjoyed when your quest log is empty and your dance moves are questionable.",
        tier: 2,
    };
    const ELEMENT_LOCK: Element = Element {
        id: 21,
        name: "Lock",
        description: "Who needs a dragon when you&#x27;ve got this security boss blocking your treasure chest?",
        tier: 2,
    };
    const ELEMENT_MARMALADE: Element = Element {
        id: 22,
        name: "Marmalade",
        description: "The sticky, fruity concoction that Paddington Bear would trade his hat for.",
        tier: 1,
    };
    const ELEMENT_SUPER_MARMALADE: Element = Element {
        id: 23,
        name: "SuperMarmalade",
        description: "As if Spider-Man and your grandma&#x27;s secret jam recipe had a citrusy baby that swings through breakfast toast saving your taste buds one bite at a time!",
        tier: 2,
    };
    const ELEMENT_HYPER_MARMALADE: Element = Element {
        id: 24,
        name: "HyperMarmalade",
        description: "Like regular marmalade, but it makes you feel like you&#x27;ve had a double shot of espresso and a lightning bolt to the brain!",
        tier: 2,
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