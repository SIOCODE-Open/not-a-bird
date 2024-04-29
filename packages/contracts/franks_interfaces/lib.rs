#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use self::franks_interfaces::NftInterfacec;

pub mod franks_interfaces {
    use ink::primitives::AccountId;
    type Balance = u128;

    #[ink::trait_definition]
    pub trait NftInterfacec {
        #[ink(message)]
        fn mint(&self);

        #[ink(message)]
        fn burn(&self);

        #[ink(message)]
        fn balance_of(&self, owner: AccountId, token_id: u32) -> Balance;

        #[ink(message)]
        fn transfer(&mut self, to: AccountId, value: u32) -> Result<(), ()>;
    }
}
