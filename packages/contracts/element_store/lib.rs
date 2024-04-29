#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![allow(clippy::new_without_default)]

#[ink::contract]
mod element_store {
    use franks_interfaces::NftInterface;

    #[ink(storage)]
    pub struct ElementStore {
        element: ink::contract_ref!(NftInterface),
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new(element: AccountId) -> Self {
            Self {
                element: element.into(),
            }
        }

        #[ink(message)]
        pub fn set_element(&mut self, contract: AccountId) {
            self.element = contract.into();
        }

        // TODO
        #[ink(message)]
        pub fn get_contract(&self) -> AccountId {
            AccountId::from([0xff; 32])
        }

        #[ink(message)]
        pub fn call_mint(&mut self) {
            self.element.mint();
        }
    }
}
