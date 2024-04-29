#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub mod franks_interfaces {
    use ink::primitives::AccountId;
    type TokenBalance = u128;

    #[ink::trait_definition]
    pub trait NftInterfacec {
        #[ink(message)]
        fn mint(&mut self);

        #[ink(message)]
        fn burn(&mut self);

        #[ink(message)]
        fn balance_of(&self, owner: AccountId) -> TokenBalance;

        #[ink(message)]
        fn owner_of(&self, id: u128) -> AccountId;

        #[ink(message)]
        fn transfer(&mut self, to: AccountId, value: u32);
    }
}
