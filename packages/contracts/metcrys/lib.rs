#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use self::metcrys_nft::{Metcrys, MetcrysRef};

#[ink::contract]
pub mod metcrys_nft {
    use ink::storage::Mapping;

    pub type TokenId = u32;

    #[ink(storage)]
    #[derive(Default)]
    pub struct Metcrys {
        token_owner: Mapping<TokenId, AccountId>,
        owned_tokens_count: Mapping<AccountId, u32>,
    }

    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum MetcrysError {
        DoesntWork,
    }

    impl Metcrys {
        #[ink(constructor)]
        pub fn new() -> Self {
            Default::default()
        }

        #[ink(message)]
        pub fn balance_of(&self, owner: AccountId) -> u32 {
            self.balance_of_or_zero(&owner)
        }

        #[ink(message)]
        pub fn owner_of(&self, id: TokenId) -> Option<AccountId> {
            self.token_owner.get(id)
        }

        #[ink(message)]
        pub fn mint(&mut self, id: TokenId) -> Result<(), MetcrysError> {
            let caller = self.env().caller();
            self.add_token_to(&caller, id)?;
            Ok(())
        }

        fn add_token_to(&mut self, to: &AccountId, id: TokenId) -> Result<(), MetcrysError> {
            let Self {
                token_owner,
                owned_tokens_count,
                ..
            } = self;

            if token_owner.contains(id) {
                return Err(MetcrysError::DoesntWork);
            }

            if *to == AccountId::from([0x0; 32]) {
                return Err(MetcrysError::DoesntWork);
            };

            let count = owned_tokens_count
                .get(to)
                .map(|c| c.checked_add(1).unwrap())
                .unwrap_or(1);

            owned_tokens_count.insert(to, &count);
            token_owner.insert(id, to);

            Ok(())
        }

        fn balance_of_or_zero(&self, of: &AccountId) -> u32 {
            self.owned_tokens_count.get(of).unwrap_or(0)
        }
    }
}
