#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod air {
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

    /** Error type for PSP-22 compatible contract for element 'air' */
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
    pub struct AirContract {
        total_supply: u128,
        balances: Mapping<AccountId, u128>,
        allowances: Mapping<(AccountId, AccountId), u128>,
    }

    impl Default for AirContract {
        fn default() -> Self {
            let balances = Mapping::new();
            let allowances = Mapping::new();
            Self {
                total_supply: 0,
                balances,
                allowances,
            }
        }
    }

    impl AirContract {
        /// Creates a new PSP-22 compatible Air Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        #[ink(message)]
        pub fn token_name(&self)-> String {
            String::from("Air")
        }

        #[ink(message)]
        pub fn token_symbol(&self)-> String {
            String::from("MAIR")
        }
        
        #[ink(message)]
        pub fn token_decimals(&self)-> u8 {
            0
        }
    }

}