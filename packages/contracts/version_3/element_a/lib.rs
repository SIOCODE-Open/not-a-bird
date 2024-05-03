#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_a {
    use ink::storage::{traits::ManualKey, Lazy, Mapping};

    #[ink(storage)]
    pub struct ElementA {
        contracts: Mapping<AccountId, i32, ManualKey<0x23>>,
        owned_called_count: Mapping<AccountId, i32, ManualKey<0x24>>,
        ressources: Mapping<AccountId, (i32, i32), ManualKey<0x25>>,
        delegate_to: Lazy<Hash>,
    }

    impl ElementA {
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!("Constructors are not called when upgrading using `set_code_hash`.")
        }

        #[ink(message)]
        pub fn mint(&mut self) {
            let caller = self.env().caller();
            let count = self.owned_called_count.get(caller).unwrap_or_default();
            ink::env::debug_println!(
                "The current mint count is {:?}. It got called by element_a. The caller was {:?}",
                &count,
                &caller
            );
            let new_count = count.checked_add(1).unwrap();
            ink::env::debug_println!("Count increase by 1");
            self.owned_called_count.insert(caller, &new_count);
        }

        // #[ink(message)]
        // pub fn append_address_value(&mut self) {
        //     let caller = self.env().caller();
        //     self.contracts.insert(caller, &self.counter);
        // }

        #[ink(message)]
        pub fn get_owned_called_count(&self) -> i32 {
            let caller = self.env().caller();
            self.owned_called_count.get(caller).unwrap()
        }
    }
}
