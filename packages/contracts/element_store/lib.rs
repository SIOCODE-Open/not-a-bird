#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![allow(clippy::new_without_default)]

#[ink::contract]
mod element_store {
    use franks_interfaces::NftInterface;
    use ink::{contract_ref, storage::StorageVec};
    use ink::{
        env::{
            call::{build_call, ExecutionInput, Selector},
            CallFlags, DefaultEnvironment,
        },
        storage::{traits::ManualKey, Lazy, Mapping},
    };

    #[ink(storage)]
    #[allow(clippy::type_complexity)]
    pub struct ElementStore {
        // elements: StorageVec<contract_ref!(NftInterface)>, // Array of contract references
        // element_count: u32,
        addresses: Mapping<AccountId, i32, ManualKey<0x23>>,
        counter: i32,
        delegate_to: Lazy<Hash>,
    }

    impl ElementStore {
        #[ink(constructor)]
        pub fn new(init_value: i32, hash: Hash) -> Self {
            let v = Mapping::new();
            let mut delegate_to = Lazy::new();
            delegate_to.set(&hash);
            Self::env().lock_delegate_dependency(&hash);
            Self {
                // elements: Default::default(),
                // element_count: 0,
                addresses: v,
                counter: init_value,
                delegate_to,
            }
        }

        #[ink(message)]
        pub fn inc_delegate(&mut self) {
            let selector = ink::selector_bytes!("inc");
            let _ = build_call::<DefaultEnvironment>()
                .delegate(self.delegate_to())
                // We specify `CallFlags::TAIL_CALL` to use the delegatee last memory frame
                // as the end of the execution cycle.
                // So any mutations to `Packed` types, made by delegatee,
                // will be flushed to storage.
                //
                // If we don't specify this flag.
                // The storage state before the delegate call will be flushed to storage instead.
                // See https://substrate.stackexchange.com/questions/3336/i-found-set-allow-reentry-may-have-some-problems/3352#3352
                .call_flags(CallFlags::TAIL_CALL)
                .exec_input(ExecutionInput::new(Selector::new(selector)))
                .returns::<()>()
                .try_invoke();
        }

        #[ink(message)]
        pub fn get_value(&self, address: AccountId) -> (AccountId, Option<i32>) {
            (self.env().caller(), self.addresses.get(address))
        }

        fn delegate_to(&self) -> Hash {
            self.delegate_to
                .get()
                .expect("delegate_to always has a value")
        }

        // #[ink(message)]
        // pub fn set_element(&mut self, index: u32, new_contract: contract_ref!(NftInterface)) {
        //     if index < self.elements.len() {
        //         self.elements.set(index, &new_contract);
        //     }
        // }

        // TODO
        // #[ink(message)]
        // pub fn get_contract(&mut self, index: u32) {
        //     let _ = self.elements.get(index);
        // }

        // #[ink(message)]
        // pub fn call_mint(&mut self, index: u32) {
        //     if let Some(contract) = self.elements.get(index).clone() {
        //         contract.clone().mint();
        //     }
        // }

        // #[ink(message)]
        // pub fn call_burn(&self, index: u32) {
        //     if let Some(contract) = self.elements.get(index).clone() {
        //         contract.clone().burn();
        //     }
        // }
    }
}
