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
        gem_minted: bool,
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
            let gem_minted = false;

            Self {
                rock,
                stone,
                gem,
                gem_minted,
            }
        }

        #[ink(message)]
        pub fn create_gem(&mut self) -> Result<(), GemCreatorError> {
            if self.gem_minted {
                return Err(GemCreatorError::DoesntWork);
            }

            if self.stone.mint(1).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            if self.rock.mint(1).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            if self.stone.burn(1).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            if self.rock.burn(1).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }
            if self.gem.mint(1).is_err() {
                return Err(GemCreatorError::DoesntWork);
            }

            self.gem_minted = true;
            Ok(())
        }

        #[ink(message)]
        pub fn gem_is_minted(&self) -> bool {
            self.gem_minted
        }
    }
}
