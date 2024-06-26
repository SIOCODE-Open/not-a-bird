> ❗Look at ./not-a-bird/packages/app-game/deploy_version_1.sh  
> That's an automatized and a more update date script

# Notes

**Rock**  
Code hash: 0xf0f1d7bd6033cf36073779c585ce6618f221ea75ada1d765bf3dba2d4972343d
Contract: 5G8tYCMLZQYgwE9hkYNq5orJXEDhTCMu6kRa5frW4nY6bVsS

**Stone**  
Code hash: 0xfa7c986661caa52ac783e1e1b33763136bf908eaeeb5f71b88a0f21d188c67f8
Contract: 5GexZHnN2FpPD91324YFT1K7oUxugdqycmhRo4irX9CsD8XS

**Gem:**  
Code hash: 0x1b553c17f78eabc6774c3a19421d2bcaa97fdef10db0454be175708db0f8a0f1
Contract: 5EwBoamaJYogJw12BLg56opa89EAA8fw5feQGbZus5JeKW5F

**GemCreater:**  
Code hash: 0x2c457d5d6fc947e3ae34eb1723a288df2c891b7000f5416185e3331cca1f98bd
Contract: 5Fh52rxaPZU7aZUEAokbqmgnYPc3d96ddiLhrgX4d6yaEafC

## How to deploy and interact

1. `substrate-contracts-node --dev`

2. `cd rock`
3. `cargo contract build`
4. `cargo contract instantiate --skip-confirm --suri //Alice`
5. Replace CodeHash and Contract in this file under Rock

6. `cd ../stone`
7. `cargo contract build`
8. `cargo contract instantiate --skip-confirm --suri //Alice`
9. Replace CodeHash and Contract in this file under Stone

10. `cd ../gem`
11. `cargo contract build`
12. `cargo contract instantiate --skip-confirm --suri //Alice`
13. Replace CodeHash and Contract in this file under Gem

14. `cd ../`
15. `cargo contract build`
16. `cargo contract instantiate --skip-confirm --suri //Alice --args <rock_code_hash> <stone_code_hash> <gem_code_hash>`
17. Replace CodeHash and Contract in this file under GemCreater
18. `cargo contract call --contract <GemCreatorAddress> --message gem_is_minted --suri //Alice`
19. Check if Result is Ok(false)
20. `cargo contract call --contract <GemCreatorAddress> --message create_gem --suri //Alice --skip-confirm --execute`
21. `cargo contract call --contract <GemCreatorAddress> --message gem_is_minted --suri //Alice`
22. Check if Result is Ok(true)

23: :tada:

### Iteration #3

> Goal:  
> Find a simplistic way to create the 15 definied Ressources.

- User Traits to implent PSP37 Interface

```plantuml
@startuml
!theme plain
left to right direction
interface Element{
 + token_owner: Mapping<u32, AccountId>
 + owned_tokens_count: Mapping<AccountId, u32>
 + new()
 + mint()
 + burn()
 + balance_of()
 + owner_of()
 + transfer()
}
@enduml
```
