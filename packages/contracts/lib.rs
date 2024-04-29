#![cfg_attr(not(feature = "std"), no_std, no_main)]

// An Export
pub use self::a_contract::{StateVariables, StateVariablesRef};

#[ink::contract]
mod a_contract {
    // An Import
    use ink::prelude::string::String;

    #[ink(storage)]
    #[derive(Default)]
    pub struct StateVariables {
        a_string: String,
        a_number: u32,
        a_bool: bool,
    }

    impl StateVariables {
        #[ink(constructor)]
        pub fn new() -> Self {
            let a_string = String::from("my great string");
            let a_number: u32 = 3;
            let a_bool = false;
            Self {
                a_string,
                a_number,
                a_bool,
            }
        }

        #[ink(message)]
        pub fn a_function(&self) {}

        #[ink(message)]
        pub fn a_mutable_funtion(&mut self) {
            let new_string = String::from("my other great string");
            self.a_string = new_string;
        }
    }
}
