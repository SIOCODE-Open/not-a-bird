#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod gem_creator {
    use gem::GemRef;
    use rock::RockRef;
    use stone::StoneRef;

    #[ink(storage)]
    pub struct GemCreator {
        gem: GemRef,
        rock: RockRef,
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
        pub fn new(rock_code_hash: Hash, stone_code_hash: Hash, gem_code_hash: Hash) -> Self {
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
            let gem = GemRef::new()
                .code_hash(gem_code_hash)
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let gem_count = 0u32;

            Self {
                rock,
                stone,
                gem,
                gem_count,
            }
        }

        #[ink(message)]
        pub fn create_gem(&mut self, mint_number: u32) -> Result<(), GemCreatorError> {
            /*mint stone*/
            if self.stone.mint(mint_number).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            /*mint rock*/
            if self.rock.mint(mint_number).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            /*burn stone*/
            if self.stone.burn(mint_number).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            /*burn rock*/
            if self.rock.burn(mint_number).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            /*mint gem*/
            if self.gem.mint(mint_number).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }

            self.gem_count = self.gem_count.wrapping_add(1u32);
            Ok(())
        }

        #[ink(message)]
        pub fn get_gem_number(&self) -> u32 {
            self.gem_count
        }
    }
}
