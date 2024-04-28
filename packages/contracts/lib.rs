#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod gem_creator {
    use crystal::CrystalRef;
    use metal::MetalRef;
    use metcrys::MetcrysRef;

    #[ink(storage)]
    pub struct MetcrysCreator {
        metal: MetalRef,
        crystal: CrystalRef,
        metcrys: MetcrysRef,
        gem_count: u32,
    }

    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum MetcrysError {
        DoesntWork,
    }

    impl MetcrysCreator {
        #[ink(constructor)]
        pub fn new(
            metal_code_hash: Hash,
            crystal_code_hash: Hash,
            metcrys_code_hash: Hash,
        ) -> Self {
            let total_balance = Self::env().balance();
            let metal = MetalRef::new()
                .endowment(total_balance / 4)
                .code_hash(metal_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let crystal = CrystalRef::new()
                .endowment(total_balance / 4)
                .code_hash(crystal_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let metcrys = MetcrysRef::new()
                .endowment(total_balance / 4)
                .code_hash(metcrys_code_hash)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();
            let gem_count = 0u32;

            Self {
                metal,
                crystal,
                metcrys,
                gem_count,
            }
        }

        #[ink(message)]
        pub fn create_gem(&mut self) -> Result<(), MetcrysError> {
            let gem_count = self.gem_count;
            /*mint stone*/
            let _ = self.crystal.mint(gem_count);
            /*mint rock*/
            let _ = self.metal.mint(gem_count);
            /*burn stone*/
            let _ = self.crystal.burn(gem_count);
            /*burn rock*/
            let _ = self.metal.burn(gem_count);
            /*mint gem*/
            let _ = self.metcrys.mint(gem_count);
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
