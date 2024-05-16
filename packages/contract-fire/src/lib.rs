#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod fire {

    /** Error type for PSP-22 compatible contract for element 'fire' */
    #[derive(scale::Encode, scale::Decode, Debug, PartialEq, Eq, Copy, Clone)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
    }

    #[ink(storage)]
    pub struct FireContract {
    }

    impl FireContract {
        /// Creates a new PSP-22 compatible Fire Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
            }
        }
    }

}