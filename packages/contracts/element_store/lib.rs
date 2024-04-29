#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![allow(clippy::new_without_default)]

#[ink::contract]
mod element_store {
    use franks_interfaces::NftInterface;
    use ink::{contract_ref, storage::StorageVec};

    #[ink(storage)]
    #[allow(clippy::type_complexity)]
    pub struct ElementStore {
        elements: StorageVec<contract_ref!(NftInterface)>, // Array of contract references
        element_count: u32,
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                elements: Default::default(),
                element_count: 0,
            }
        }

        #[ink(message)]
        pub fn set_element(&mut self) {}

        // TODO
        #[ink(message)]
        pub fn get_contract(&self) -> AccountId {
            AccountId::from([0xff; 32])
        }

        #[ink(message)]
        pub fn call_mint(&self, index: u32) {
            // assert_eq!(Some(&[10, 40][..]), v.get(0..2));
            if let Some(contract) = self.elements.get(0).clone() {
                contract.clone().mint();
            } else {
                // Handle the case where the elements Vec is empty
            }
            // contract.mint();
        }
    }
}
