#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![allow(clippy::new_without_default)]

#[ink::contract]
mod element_store {
    use franks_interfaces::NftInterface;
    use ink::{contract_ref, storage::StorageVec};

    #[ink(storage)]
    #[allow(clippy::type_complexity)]
    #[derive(Default)]
    pub struct ElementStore {
        elements: StorageVec<contract_ref!(NftInterface)>, // Array of contract references
        element_count: u32,
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new() -> Self {
            ElementStore::default()
        }

        #[ink(message)]
        pub fn set_element(&mut self, index: u32, new_contract: contract_ref!(NftInterface)) {
            if index < self.elements.len() {
                self.elements.set(index, &new_contract);
            }
        }

        // TODO
        #[ink(message)]
        pub fn get_contract(&mut self, index: u32) {
            let _ = self.elements.get(index);
        }

        #[ink(message)]
        pub fn call_mint(&mut self, index: u32) {
            if let Some(contract) = self.elements.get(index).clone() {
                contract.clone().mint();
            }
        }

        #[ink(message)]
        pub fn call_burn(&self, index: u32) {
            if let Some(contract) = self.elements.get(index).clone() {
                contract.clone().burn();
            }
        }
    }
}
