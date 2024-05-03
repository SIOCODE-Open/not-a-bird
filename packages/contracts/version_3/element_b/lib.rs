#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_b {
    use ink::prelude::vec::Vec;
    use ink::storage::{traits::ManualKey, Lazy, Mapping};

    #[ink(storage)]
    pub struct ElementB {
        contracts: Mapping<AccountId, i32, ManualKey<0x23>>,
        ressources: Mapping<AccountId, Vec<i32>, ManualKey<0x25>>,
        delegate_to: Lazy<Hash>,
    }

    impl ElementB {
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!("Constructors are not called when upgrading using `set_code_hash`.")
        }

        #[ink(message)]
        pub fn mint(&mut self) {
            // Get caller
            let caller = self.env().caller();
            // Get vec from caller
            let vec = self.ressources.get(caller).unwrap();
            // Hardcode Index
            let index: usize = 0;
            // Get current count
            let current_count = vec[index];
            // Declare new_count
            let new_count = current_count.saturating_add(1);
            // Replace count with new Count
            self.ressources
                .get(caller)
                .unwrap()
                .insert(index, new_count);
            // Print helpful message
            ink::env::debug_println!(
                "Mint on element_b was called. \n
                The count was {:?}.\n 
                Count of index {:?} \n 
                changed. The new count is {:?}",
                current_count,
                index,
                new_count
            );
        }

        #[ink(message)]
        pub fn get_ressource_count_by_index(&self) -> i32 {
            // Get caller
            let caller = self.env().caller();
            // Get vec from caller
            let vec = self.ressources.get(caller).unwrap();
            // Hardcode Index
            let index: usize = 0;
            // Get current count
            let current_count = vec[index];
            // Print helpful message
            ink::env::debug_println!(
                "get_ressource_by_index on element_a was called. \n 
                The used index was {:?} \n
                The current count is {:?}",
                &index,
                &current_count
            );
            current_count
        }
    }
}
