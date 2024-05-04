#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_a {
    use ink::prelude::vec::Vec;
    use ink::storage::{traits::ManualKey, Lazy, Mapping};

    // #[ink::storage_item]
    // pub struct Inner {
    //     value: bool,
    // }

    #[ink(storage)]
    pub struct ElementA {
        contracts: Mapping<AccountId, i32, ManualKey<0x23>>,
        ressources: Mapping<AccountId, Vec<i32>, ManualKey<0x25>>,
        delegate_to: Lazy<Hash>,
    }

    impl ElementA {
        #[allow(clippy::new_without_default)]
        #[ink(constructor)]
        pub fn new() -> Self {
            unreachable!("Constructors are not called when upgrading using `set_code_hash`.")
        }

        #[ink(message)]
        pub fn mint(&mut self, index: i32) {
            ink::env::debug_println!("This is my delegated index {:?}", index);
            let caller = self.env().caller();
            let mut current_vec = self.ressources.get(caller).unwrap_or_default();
            let index_as_usize: usize = index as usize;
            if current_vec.len() <= index_as_usize {
                current_vec.resize(index_as_usize.saturating_add(1), 0);
            }
            current_vec[index_as_usize] = current_vec[index_as_usize].saturating_add(1);
            // if current_vec.len() > index_as_usize {
            //     current_vec[index_as_usize] = current_vec
            //         .get(index_as_usize)
            //         .unwrap_or(&0i32)
            //         .saturating_add(1);
            // } else {
            //     current_vec.insert(
            //         index_as_usize,
            //         current_vec
            //             .get(index_as_usize)
            //             .unwrap_or(&0i32)
            //             .saturating_add(1),
            //     );
            // }
            // let mut new_vec: Vec<i32> = Vec::new();
            // for (index, &num) in current_vec.iter().enumerate() {
            //     if index == 0 {
            //         new_vec.push(num.saturating_add(1));
            //     } else {
            //         new_vec.push(num);
            //     }
            // }
            self.ressources.insert(caller, &current_vec);
            ink::env::debug_println!("Mint was called {:?}", self.ressources.get(caller))
        }

        #[ink(message)]
        pub fn get_ressource_count_by_index(&self) -> i32 {
            // Get caller
            let caller = self.env().caller();
            // Get vec from caller
            let vec = self.ressources.get(caller).unwrap_or_default();
            // Hardcode Index
            let index: usize = 0;
            // Get current count
            let current_count = vec[index];
            // Print helpful message
            ink::env::debug_println!(
                "get_ressource_by_index on element_b was called. \n 
                The used index was {:?} \n
                The current count is {:?}",
                &index,
                &current_count
            );
            current_count
        }
    }
}
