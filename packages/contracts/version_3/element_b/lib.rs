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
        pub fn mint(&mut self, index: i32) {
            let caller = self.env().caller();
            let mut current_vec = self.ressources.get(caller).unwrap_or_default();
            let index_as_usize: usize = index as usize;
            if current_vec.len() <= index_as_usize {
                current_vec.resize(index_as_usize.saturating_add(1), 0);
            }
            current_vec[index_as_usize] = current_vec[index_as_usize].saturating_add(1);
            self.ressources.insert(caller, &current_vec);
            ink::env::debug_println!("Mint was called {:?}", self.ressources.get(caller))
        }

        #[ink(message)]
        pub fn burn(&mut self, index: i32) {
            let caller = self.env().caller();
            let mut current_vec = self.ressources.get(caller).unwrap_or_default();
            let index_as_usize: usize = index as usize;
            if current_vec.len() <= index_as_usize {
                current_vec.resize(index_as_usize.saturating_sub(1), 0);
            }
            current_vec[index_as_usize] = current_vec[index_as_usize].saturating_sub(1);
            self.ressources.insert(caller, &current_vec);
            ink::env::debug_println!("Burn was called {:?}", self.ressources.get(caller))
        }

        #[ink(message)]
        pub fn get_ressource_count_by_index(&self) -> i32 {
            todo!();
        }
    }
}
