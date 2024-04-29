#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod element {
    use franks_interfaces::NftInterface;
    use ink::storage::Mapping;

    type TokenId = u128;
    type TokenBalance = u128;

    #[ink(storage)]
    #[derive(Default)]
    pub struct Element {
        token_owner: Mapping<TokenId, AccountId>,
        owned_tokens_count: Mapping<AccountId, u128>,
        mint_count: u128,
    }

    impl Element {
        #[ink(constructor)]
        pub fn new() -> Self {
            Default::default()
        }
    }

    impl NftInterface for Element {
        #[ink(message)]
        fn mint(&mut self) {
            // add ID to AccountId
            let mint_count = self.mint_count;
            let caller = self.env().caller();
            self.token_owner.insert(mint_count, &caller);

            // add count to AccountId
            let current_count = self.owned_tokens_count.get(caller);
            let updated_count = current_count.unwrap().saturating_sub(1);
            self.owned_tokens_count.insert(caller, &updated_count);

            let _ = self.mint_count.saturating_add(1);
        }

        // TODO
        #[ink(message)]
        fn burn(&mut self) {}

        #[ink(message)]
        fn balance_of(&self, owner: AccountId) -> TokenBalance {
            self.owned_tokens_count.get(owner).unwrap_or_default()
        }

        #[ink(message)]
        fn owner_of(&self, id: TokenId) -> AccountId {
            self.token_owner.get(id).unwrap()
        }

        #[ink(message)]
        fn transfer(&mut self, _to: AccountId, _value: u32) {}
    }
}
