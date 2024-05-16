#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod water {

    /** Error type for PSP-22 compatible contract for element 'water' */
    #[derive(scale::Encode, scale::Decode, Debug, PartialEq, Eq, Copy, Clone)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
    }

    #[ink(storage)]
    pub struct WaterContract {
    }

    impl WaterContract {
        /// Creates a new PSP-22 compatible Water Element contract
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
            }
        }
    }

}