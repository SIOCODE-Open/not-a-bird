#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod lava {
    pub use ink::prelude::string::String;

    /** Error type for PSP-22 compatible contract for element 'air' */
    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Error {}

    #[ink(storage)]
    pub struct LavaContract {
        name: String,
    }

    impl Default for LavaContract {
        fn default() -> Self {
            Self {
                name: String::from("lava"),
            }
        }
    }

    impl LavaContract {
        /// Creates a new PSP-22 compatible Lava Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        #[ink(message)]
        pub fn get_name(&self)-> String {
            self.name.clone()
        }
    }

}