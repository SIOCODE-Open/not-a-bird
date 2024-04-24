#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod erc721 {
    use ink::storage::Mapping;

    pub type TokenId = u32;

    #[ink(storage)]
    #[derive(Default)]
    pub struct Erc721 {
        token_owner: Mapping<TokenId, AccountId>,
        owned_tokens_count: Mapping<AccountId, u32>,
    }

    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Error {
        NotOwner,
        TokenExists,
        TokenNotFound,
        CannotInsert,
        CannotFetchValue,
        NotAllowed,
    }

    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        id: TokenId,
    }

    impl Erc721 {
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
        pub fn transfer(&mut self, destination: AccountId, id: TokenId) -> Result<(), Error> {
            let caller = self.env().caller();
            self.transfer_token_from(&caller, &destination, id)?;
            Ok(())
        }

        #[ink(message)]
        pub fn mint(&mut self, id: TokenId) -> Result<(), Error> {
            let caller = self.env().caller();
            self.add_token_to(&caller, id)?;
            self.env().emit_event(Transfer {
                from: Some(AccountId::from([0x0; 32])),
                to: Some(caller),
                id,
            });
            Ok(())
        }

        #[ink(message)]
        pub fn burn(&mut self, id: TokenId) -> Result<(), Error> {
            let caller = self.env().caller();
            let Self {
                token_owner,
                owned_tokens_count,
                ..
            } = self;

            let owner = token_owner.get(id).ok_or(Error::TokenNotFound)?;
            if owner != caller {
                return Err(Error::NotOwner);
            };

            let count = owned_tokens_count
                .get(caller)
                .map(|c| c.checked_sub(1).unwrap())
                .ok_or(Error::CannotFetchValue)?;
            owned_tokens_count.insert(caller, &count);
            token_owner.remove(id);

            self.env().emit_event(Transfer {
                from: Some(caller),
                to: Some(AccountId::from([0x0; 32])),
                id,
            });

            Ok(())
        }

        // TODO: Only Owner has to be inlcude
        fn transfer_token_from(
            &mut self,
            from: &AccountId,
            to: &AccountId,
            id: TokenId,
        ) -> Result<(), Error> {
            let owner = self.owner_of(id).ok_or(Error::TokenNotFound)?;
            if owner != *from {
                return Err(Error::NotOwner);
            };
            self.remove_token_from(from, id)?;
            self.add_token_to(to, id)?;
            self.env().emit_event(Transfer {
                from: Some(*from),
                to: Some(*to),
                id,
            });
            Ok(())
        }

        fn remove_token_from(&mut self, from: &AccountId, id: TokenId) -> Result<(), Error> {
            let Self {
                token_owner,
                owned_tokens_count,
                ..
            } = self;

            if !token_owner.contains(id) {
                return Err(Error::TokenNotFound);
            }

            let count = owned_tokens_count
                .get(from)
                .map(|c| c.checked_sub(1).unwrap())
                .ok_or(Error::CannotFetchValue)?;
            owned_tokens_count.insert(from, &count);
            token_owner.remove(id);

            Ok(())
        }

        fn add_token_to(&mut self, to: &AccountId, id: TokenId) -> Result<(), Error> {
            let Self {
                token_owner,
                owned_tokens_count,
                ..
            } = self;

            if token_owner.contains(id) {
                return Err(Error::TokenExists);
            }

            if *to == AccountId::from([0x0; 32]) {
                return Err(Error::NotAllowed);
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

    #[cfg(test)]
    mod tests {
        use super::*;

        #[ink::test]
        fn mint_works() {
            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.owner_of(1), None);
            assert_eq!(erc721.balance_of(accounts.alice), 0);
            assert_eq!(erc721.mint(1), Ok(()));
            assert_eq!(erc721.balance_of(accounts.alice), 1);
        }

        #[ink::test]
        fn mint_existing_should_fail() {
            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.mint(1), Ok(()));
            assert_eq!(1, ink::env::test::recorded_events().count());
            assert_eq!(erc721.balance_of(accounts.alice), 1);
            assert_eq!(erc721.owner_of(1), Some(accounts.alice));
            assert_eq!(erc721.mint(1), Err(Error::TokenExists));
        }

        #[ink::test]
        fn transfer_works() {
            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.mint(1), Ok(()));
            assert_eq!(erc721.balance_of(accounts.alice), 1);
            assert_eq!(erc721.balance_of(accounts.bob), 0);
            assert_eq!(1, ink::env::test::recorded_events().count());
            assert_eq!(erc721.transfer(accounts.bob, 1), Ok(()));
            assert_eq!(2, ink::env::test::recorded_events().count());
            assert_eq!(erc721.balance_of(accounts.bob), 1);
        }

        #[ink::test]
        fn burn_works() {
            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.mint(1), Ok(()));
            assert_eq!(erc721.balance_of(accounts.alice), 1);
            assert_eq!(erc721.owner_of(1), Some(accounts.alice));
            assert_eq!(erc721.burn(1), Ok(()));
            assert_eq!(erc721.balance_of(accounts.alice), 0);
            assert_eq!(erc721.owner_of(1), None);
        }

        #[ink::test]
        fn burn_fails_token_not_found() {
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.burn(1), Err(Error::TokenNotFound));
        }

        #[ink::test]
        fn burn_fails_not_owner() {
            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let mut erc721 = Erc721::new();
            assert_eq!(erc721.mint(1), Ok(()));
            set_caller(accounts.eve);
            assert_eq!(erc721.burn(1), Err(Error::NotOwner));
        }

        fn set_caller(sender: AccountId) {
            ink::env::test::set_caller::<ink::env::DefaultEnvironment>(sender);
        }
    }
}
