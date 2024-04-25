#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod cross_contract_calls {
    use rock::RockRef;
    use stone::StoneRef;

    #[ink(storage)]
    pub struct CrossContractCalls {
        rock: RockRef,
        stone: StoneRef,
    }

    impl CrossContractCalls {
        #[ink(constructor)]
        pub fn new_v2_no_limits(rock_code_hash: Hash, stone_code_hash: Hash) -> Self {
            let rock = RockRef::new()
                .code_hash(rock_code_hash)
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let stone = StoneRef::new()
                .code_hash(stone_code_hash)
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();

            Self { rock, stone }
        }
        #[ink(message)]
        pub fn hola(&self) {}
    }
}
