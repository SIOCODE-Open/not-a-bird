#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod shards {
    pub use ink::prelude::string::String;
    pub use ink::storage::Mapping;

    // Begin borrowed code: https://github.com/Cardinal-Cryptography/PSP22/blob/main/events.rs
    /// Event emitted when allowance by `owner` to `spender` changes.
    #[ink::event]
    pub struct PSP22Approval {
        /// Account providing allowance.
        #[ink(topic)]
        pub owner: AccountId,
        /// Allowance beneficiary.
        #[ink(topic)]
        pub spender: AccountId,
        /// New allowance amount.
        pub amount: u128,
    }

    /// Event emitted when transfer of tokens occurs.
    #[ink::event]
    pub struct PSP22Transfer {
        /// Transfer sender. `None` in case of minting new tokens.
        #[ink(topic)]
        pub from: Option<AccountId>,
        /// Transfer recipient. `None` in case of burning tokens.
        #[ink(topic)]
        pub to: Option<AccountId>,
        /// Amount of tokens transferred (or minted/burned).
        pub value: u128,
    }
    // End borrowed code: https://github.com/Cardinal-Cryptography/PSP22/blob/main/events.rs

    /** Error type for PSP-22 compatible contract for element 'Shards' */
    #[derive(Debug, PartialEq, Eq)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Error {
        // Begin borrowed code from https://github.com/Cardinal-Cryptography/PSP22/blob/main/errors.rs
        /// Custom error type for implementation-based errors.
        Custom(String),
        /// Returned when an account does not have enough tokens to complete the operation.
        InsufficientBalance,
        /// Returned if there is not enough allowance to complete the operation.
        InsufficientAllowance,
        // End borrowed code from https://github.com/Cardinal-Cryptography/PSP22/blob/main/errors.rs
    }

    #[ink(storage)]
    pub struct ShardsContract {
        total_supply: u128,
        balances: Mapping<AccountId, u128>,
        allowances: Mapping<(AccountId, AccountId), u128>,
        owner_account_id: AccountId,
        owner_is_set: bool,
        game_contract_id: AccountId,
        game_contract_is_set: bool,
    }

    impl Default for ShardsContract {
        fn default() -> Self {
            let balances = Mapping::new();
            let allowances = Mapping::new();
            Self {
                total_supply: 0,
                balances,
                allowances,
                owner_account_id: AccountId::from([0xFF; 32]),
                owner_is_set: false,
                game_contract_id: AccountId::from([0xFF; 32]),
                game_contract_is_set: false,
            }
        }
    }

    impl ShardsContract {
        /// Creates a new PSP-22 compatible Shards Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        #[ink(message, selector = 0x3d261bd4)]
        pub fn token_name(&self)-> String {
            String::from("Shards")
        }

        #[ink(message, selector = 0x34205be5)]
        pub fn token_symbol(&self)-> String {
            String::from("MSHARDS")
        }
        
        #[ink(message, selector = 0x7271b782)]
        pub fn token_decimals(&self)-> u8 {
            0
        }

        #[ink(message, selector = 0x162df8c2)]
        pub fn total_supply(&self) -> u128 {
            self.total_supply
        }

        #[ink(message, selector = 0x6568382f)]
        pub fn balance_of(&self, owner: AccountId) -> u128 {
            self.balances.get(owner).unwrap_or_default()
        }
        
        #[ink(message, selector = 0x4d47d921)]
        pub fn allowance(&self, owner: AccountId, spender: AccountId) -> u128 {
            self.allowances.get((owner, spender)).unwrap_or_default()
        }

        // Selector is first 4 bytes of blake2b_256("ElementContract::claim_ownership")
        #[ink(message, selector = 0x77557f05)]
        pub fn claim_ownership(&mut self) -> Result<(), Error> {
            if self.owner_is_set {
                return Err(Error::Custom(String::from("Owner already set")));
            }
            self.owner_account_id = self.env().caller();
            self.owner_is_set = true;
            Ok(())
        }

        // Selector is first 4 bytes of blake2b_256("ElementContract::lock_game_contract")
        #[ink(message, selector = 0x6386465e)]
        pub fn lock_game_contract(&mut self, game_contract_id: AccountId) -> Result<(), Error> {
            // FIXME: Only allow locking ONCE
            /* if self.game_contract_is_set {
                return Err(Error::Custom(String::from("Game contract already set")));
            } */
            if self.owner_account_id != self.env().caller() {
                return Err(Error::Custom(String::from("Only the owner can lock the game contract")));
            }
            self.game_contract_id = game_contract_id;
            self.game_contract_is_set = true;
            Ok(())
        }

        // Selector is first 4 bytes of blake2b_256("ElementContract::mint")
        #[ink(message, selector = 0x21615d0f)]
        pub fn mint(&mut self, owner: AccountId, value: u128) -> Result<(), Error> {
            // FIXME: Only allow minting for the game contract
            /* if self.game_contract_id != self.env().caller() {
                return Err(Error::Custom(String::from("Only the game contract can mint tokens")));
            } */
            self.total_supply = self.total_supply.checked_add(value).ok_or(Error::Custom(String::from("Overflow minting tokens")))?;
            let to_balance = self.balances.get(owner).unwrap_or_default();
            self.balances.insert(owner, &to_balance.checked_add(value).ok_or(Error::Custom(String::from("Overflow minting tokens")))?);
            self.env().emit_event(PSP22Transfer {
                from: None,
                to: Some(owner),
                value,
            });
            Ok(())
        }

        // Selector is first 4 bytes of blake2b_256("ElementContract::burn")
        #[ink(message, selector = 0x100fa9ca)]
        pub fn burn(&mut self, owner: AccountId, value: u128) -> Result<(), Error> {
            // FIXME: Only allow minting for the game contract
            /* if self.game_contract_id != self.env().caller() {
                return Err(Error::Custom(String::from("Only the game contract can burn tokens")));
            } */
            let from_balance = self.balances.get(owner).unwrap_or_default();
            if from_balance < value {
                return Err(Error::Custom(String::from("Insufficient balance to burn tokens")));
            }
            self.total_supply = self.total_supply.checked_sub(value).ok_or(Error::Custom(String::from("Underflow burning tokens")))?;
            self.balances.insert(owner, &from_balance.checked_sub(value).ok_or(Error::Custom(String::from("Underflow burning tokens")))?);
            self.env().emit_event(PSP22Transfer {
                from: Some(owner),
                to: None,
                value,
            });
            Ok(())
        }

        #[ink(message, selector = 0xdb20f9f5)]
        pub fn transfer(&mut self, to: AccountId, value: u128) -> Result<(), Error> {
            let from = self.env().caller();
            let from_balance = self.balances.get(from).unwrap_or_default();
            if from_balance < value {
                return Err(Error::InsufficientBalance);
            }
            self.balances.insert(from, &from_balance.checked_sub(value).ok_or(Error::Custom(String::from("Underflow transferring tokens")))?);
            let to_balance = self.balances.get(to).unwrap_or_default();
            self.balances.insert(to, &to_balance.checked_add(value).ok_or(Error::Custom(String::from("Overflow transferring tokens")))?);
            self.env().emit_event(PSP22Transfer {
                from: Some(from),
                to: Some(to),
                value,
            });
            Ok(())
        }

        #[ink(message, selector = 0xb20f1bbd)]
        pub fn approve(&mut self, spender: AccountId, value: u128) -> Result<(), Error> {
            let owner = self.env().caller();
            self.allowances.insert((owner, spender), &value);
            self.env().emit_event(PSP22Approval {
                owner,
                spender,
                amount: value,
            });
            Ok(())
        }

        #[ink(message, selector = 0x54b3c76e)]
        pub fn transfer_from(&mut self, from: AccountId, to: AccountId, value: u128) -> Result<(), Error> {
            let caller = self.env().caller();
            let allowance = self.allowances.get((from, caller)).unwrap_or_default();
            if allowance < value {
                return Err(Error::InsufficientAllowance);
            }
            let from_balance = self.balances.get(from).unwrap_or_default();
            if from_balance < value {
                return Err(Error::InsufficientBalance);
            }
            self.allowances.insert((from, caller), &allowance.checked_sub(value).ok_or(Error::Custom(String::from("Underflow transferring tokens")))?);
            self.balances.insert(from, &from_balance.checked_sub(value).ok_or(Error::Custom(String::from("Underflow transferring tokens")))?);
            let to_balance = self.balances.get(to).unwrap_or_default();
            self.balances.insert(to, &to_balance.checked_add(value).ok_or(Error::Custom(String::from("Overflow transferring tokens")))?);
            self.env().emit_event(PSP22Transfer {
                from: Some(from),
                to: Some(to),
                value,
            });
            Ok(())
        }

        #[ink(message, selector = 0x96d6b57a)]
        pub fn increase_allowance(&mut self, spender: AccountId, added_value: u128) -> Result<(), Error> {
            let owner = self.env().caller();
            let allowance = self.allowances.get((owner, spender)).unwrap_or_default();
            self.allowances.insert((owner, spender), &allowance.checked_add(added_value).ok_or(Error::Custom(String::from("Overflow increasing allowance")))?);
            self.env().emit_event(PSP22Approval {
                owner,
                spender,
                amount: allowance.checked_add(added_value).ok_or(Error::Custom(String::from("Overflow increasing allowance")))?,
            });
            Ok(())
        }

        #[ink(message, selector = 0xfecb57d5)]
        pub fn decrease_allowance(&mut self, spender: AccountId, subtracted_value: u128) -> Result<(), Error> {
            let owner = self.env().caller();
            let allowance = self.allowances.get((owner, spender)).unwrap_or_default();
            self.allowances.insert((owner, spender), &allowance.checked_sub(subtracted_value).ok_or(Error::Custom(String::from("Underflow decreasing allowance")))?);
            self.env().emit_event(PSP22Approval {
                owner,
                spender,
                amount: allowance.checked_sub(subtracted_value).ok_or(Error::Custom(String::from("Underflow decreasing allowance")))?,
            });
            Ok(())
        }

    }

}