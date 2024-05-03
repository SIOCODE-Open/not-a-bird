#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element_store {
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
        owned_called_count: Mapping<AccountId, i32, ManualKey<0x24>>,
        ressources: Mapping<AccountId, (i32, i32), ManualKey<0x25>>,
        delegate_to: Lazy<Hash>,
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new(_init_value: i32, hash: Hash) -> Self {
            let v = Mapping::new();
            let v2 = Mapping::new();
            let v3 = Mapping::new();

            let mut delegate_to = Lazy::new();
            delegate_to.set(&hash);
            Self::env().lock_delegate_dependency(&hash);

            Self {
                contracts: v,
                owned_called_count: v2,
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
        pub fn inc_delegate(&mut self) {
            let selector = ink::selector_bytes!("inc");
            ink::env::debug_println!("inc_delegate was called");
            let _ = build_call::<DefaultEnvironment>()
                .delegate(self.delegate_to())
                .call_flags(CallFlags::TAIL_CALL)
                .exec_input(ExecutionInput::new(Selector::new(selector)))
                .returns::<()>()
                .try_invoke();
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

        // #[ink(message)]
        // pub fn add_entry_delegate(&mut self) {
        //     let selector = ink::selector_bytes!("append_address_value");
        //     ink::env::debug_println!("add_entry_delegate was called");
        //     let _ = build_call::<DefaultEnvironment>()
        //         .delegate(self.delegate_to())
        //         .exec_input(ExecutionInput::new(Selector::new(selector)))
        //         .returns::<()>()
        //         .try_invoke();
        // }

        #[ink(message)]
        pub fn get_value_mint(&self, owner: AccountId) -> (AccountId, Option<i32>) {
            (self.env().caller(), self.owned_called_count.get(owner))
        }

        fn delegate_to(&self) -> Hash {
            self.delegate_to
                .get()
                .expect("delegate_to always has a value")
        }
    }
}
