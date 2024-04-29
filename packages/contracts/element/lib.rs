#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element {
    use franks_interfaces::NftInterfacec;

    #[ink(storage)]
    pub struct Element {
        value: bool,
    }

    impl Element {
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        #[ink(message)]
        pub fn get(&self) -> bool {
            true
        }
    }

    impl NftInterfacec for Element {
        #[ink(message)]
        fn mint(&self) {}

        #[ink(message)]
        fn burn(&self) {}

        #[ink(message)]
        fn balance_of(&self, _owner: AccountId, _token_id: u32) -> Balance {
            50u128
        }

        #[ink(message)]
        fn transfer(&mut self, _to: AccountId, _value: u32) -> Result<(), ()> {
            Ok(())
        }
    }
}
