#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod gem_creator {
    use gem::GemRef;
    use metal::MetalRef;
    use stone::StoneRef;

    #[ink(storage)]
    pub struct GemCreator {
        gem: GemRef,
        metal: MetalRef,
        stone: StoneRef,
        gem_count: u32,
    }

    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum GemCreatorError {
        DoesntWork,
    }

    impl GemCreator {
        #[ink(constructor)]
        pub fn new(metal_code_hash: Hash, stone_code_hash: Hash, gem_code_hash: Hash) -> Self {
            let total_balance = Self::env().balance();
            let metal = MetalRef::new()
                .endowment(total_balance / 4)
                .code_hash(metal_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let stone = StoneRef::new()
                .endowment(total_balance / 4)
                .code_hash(stone_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let gem = GemRef::new()
                .endowment(total_balance / 4)
                .code_hash(gem_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let gem_count = 0u32;

            Self {
                metal,
                stone,
                gem,
                gem_count,
            }
        }

        #[ink(message)]
        pub fn create_gem(&mut self) -> Result<(), GemCreatorError> {
            let gem_count = self.gem_count;
            /*mint stone*/
            let _ = self.stone.mint(gem_count);
            /*mint rock*/
            let _ = self.metal.mint(gem_count);
            /*burn stone*/
            let _ = self.stone.burn(gem_count);
            /*burn rock*/
            let _ = self.metal.burn(gem_count);
            /*mint gem*/
            let _ = self.gem.mint(gem_count);
            self.gem_count = self.gem_count.wrapping_add(1u32);
            Ok(())
        }

        #[ink(message)]
        pub fn get_gem_number(&self) -> u32 {
            self.gem_count
        }

        #[ink(message)]
        pub fn inc_gem_number(&mut self) {
            self.gem_count = self.gem_count.wrapping_add(1u32);
        }
    }
}
