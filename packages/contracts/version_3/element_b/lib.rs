#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_b {
    use ink::storage::{traits::ManualKey, Lazy, Mapping};

    #[ink(storage)]
    pub struct ElementB {
        addresses: Mapping<AccountId, i32, ManualKey<0x23>>,
        owned_called_count: Mapping<AccountId, i32, ManualKey<0x24>>,
        counter: i32,
        delegate_to: Lazy<Hash>,
    }

    impl ElementB {
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!("Constructors are not called when upgrading using `set_code_hash`.")
        }
        #[ink(message)]
        pub fn inc(&mut self) {
            let caller = self.env().caller();
            let count = self.owned_called_count.get(caller).unwrap_or_default();
            ink::env::debug_println!("{:?}", &count);
            self.owned_called_count.insert(caller, &count);
            self.counter = self.counter.checked_add(10).unwrap();
        }

        #[ink(message)]
        pub fn append_address_value(&mut self) {
            let caller = self.env().caller();
            self.addresses.insert(caller, &self.counter);
        }

        #[ink(message)]
        pub fn get_owned_called_count(&self) -> i32 {
            let caller = self.env().caller();
            self.owned_called_count.get(caller).unwrap()
        }
    }
}
