#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_store {
    use ink::prelude::vec::Vec;
    use ink::{
        env::{
            call::{build_call, ExecutionInput, Selector},
            CallFlags, DefaultEnvironment,
        },
        storage::{traits::ManualKey, Lazy, Mapping},
    };

    #[ink(storage)]
    pub struct ElementStore {
        contracts: Mapping<AccountId, i32, ManualKey<0x23>>,
        ressources: Mapping<AccountId, Vec<i32>, ManualKey<0x25>>,
        delegate_to: Lazy<Hash>,
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new(_init_value: i32, hash: Hash) -> Self {
            let v = Mapping::new();
            let v3 = Mapping::new();

            let mut delegate_to = Lazy::new();
            delegate_to.set(&hash);
            Self::env().lock_delegate_dependency(&hash);

            Self {
                contracts: v,
                ressources: v3,
                delegate_to,
            }
        }

        #[ink(message)]
        pub fn update_delegate_to(&mut self, hash: Hash) {
            if let Some(old_hash) = self.delegate_to.get() {
                self.env().unlock_delegate_dependency(&old_hash)
            }
            self.env().lock_delegate_dependency(&hash);
            self.delegate_to.set(&hash);
        }

        #[ink(message)]
        pub fn mint_delegate(&mut self) {
            let selector = ink::selector_bytes!("mint");
            ink::env::debug_println!("mint_delegate was called");
            let _ = build_call::<DefaultEnvironment>()
                .delegate(self.delegate_to())
                .call_flags(CallFlags::TAIL_CALL)
                .exec_input(ExecutionInput::new(Selector::new(selector)))
                .returns::<()>()
                .try_invoke();
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
                "get_ressource_count_by_index on element_store was called. \n 
                The used index was {:?} \n
                The current count is {:?}",
                &index,
                &current_count
            );
            current_count
        }

        fn delegate_to(&self) -> Hash {
            self.delegate_to
                .get()
                .expect("delegate_to always has a value")
        }
    }
}
