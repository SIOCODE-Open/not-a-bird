#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod cross_contract_calls {
    use rock::RockRef;

    #[ink(storage)]
    pub struct CrossContractCalls {
        rock: RockRef,
    }

    impl CrossContractCalls {
        #[ink(constructor)]
        pub fn new_v2_no_limits(other_contract_code_hash: Hash) -> Self {
            let rock = RockRef::new()
                .code_hash(other_contract_code_hash)
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();

            Self { rock }
        }
        #[ink(message)]
        pub fn hola(&self) {}
    }
}
