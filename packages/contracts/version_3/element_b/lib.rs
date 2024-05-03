#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_b {
    use ink::storage::{traits::ManualKey, Mapping};

    #[ink(storage)]
    pub struct ElementB {
        addresses: Mapping<AccountId, i32, ManualKey<0x23>>,
        counter: i32,
    }

    impl ElementB {
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!("Constructors are not called when upgrading using `set_code_hash`.")
        }
        #[ink(message)]
        pub fn inc(&mut self) {
            self.counter = self.counter.checked_add(10).unwrap();
        }

        #[ink(message)]
        pub fn append_address_value(&mut self) {
            let caller = self.env().caller();
            self.addresses.insert(caller, &self.counter);
        }
    }
}
