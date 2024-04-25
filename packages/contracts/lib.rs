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

    impl GemCreator {
        #[ink(constructor)]
        pub fn new_v2_no_limits(
            rock_code_hash: Hash,
            stone_code_hash: Hash,
            gem_code_hash: Hash,
        ) -> Self {
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
            let gem_minted = true;

            Self {
                rock,
                stone,
                gem,
                gem_minted,
            }
        }

        #[ink(message)]
        pub fn create_gem(&mut self) -> Result<(), ()> {
            let _ = self.stone.mint(1);
            let _ = self.rock.mint(1);
            let _ = self.stone.burn(1);
            let _ = self.rock.burn(1);
            let _ = self.gem.mint(1);
            self.gem_minted = true;
            Ok(())
        }

        #[ink(message)]
        pub fn gem_is_minted(&self) -> bool {
            self.gem_minted
        }
    }
}
