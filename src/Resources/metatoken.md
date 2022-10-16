## **Meta-token**

https://github.com/Narwallets/meta-pool
Meta Staking Pool
This is a NEP-141 Standard Token Contract plus:

- The meta-pool contract has the ability to mint tokens here
- \$META tokens are "virtual" in the meta-pool contract and can be "harvested" by minting here NEP-141 tokens
- A separate contract is needed so the users can see $META in their wallets and use $META in any NEP-141 compatible DEFI app
- The meta-pool itself is the NEP-141 contract for stNEAR, and to avoid introducing the complexity of multi-fungible-tokens on a single contract, it's better to facilitate DEFI integration by having a single NEP-141 contract for each token
- this contract will be deployed at token.meta.pool.(near|testnet)

## Interface Structure

```rust
pub struct MetaToken {

metadata: LazyOption<FungibleTokenMetadata>,

pub accounts: LookupMap<AccountId, Balance>,

pub owner_id: AccountId,

pub minters: Vec<AccountId>,

pub total_supply: Balance,

/// transfers are locked until this moment

pub locked_until_nano: TimestampNano,

pub vested: LookupMap<AccountId, VestingRecord>,

pub vested_count: u32,

}

```

## Interface methods

**_functions_**

```rust
/// Initializes the contract with the given total supply owned by the given `owner_id`.
fn new(owner_id: AccountId) -> Self
/// Returns account ID of the owner.
fn get_owner_id(&self) -> AccountId
// Sets account ID of the owner.
fn set_owner_id(&mut self, owner_id: AccountId)
fn set_locked_until(&mut self, unix_timestamp: u32)
// whitelisted minters can mint more into some account
fn mint(&mut self, account_id: &AccountId, amount: U128String)
//owner can add/remove minters
fn add_minter(&mut self, account_id: AccountId)
fn remove_minter(&mut self, account_id: &AccountId)
fn get_minters(self) -> Vec<AccountId>
//-----------
//-- Vesting functions in the contract
//-----------
/// Get the amount of tokens that are locked in this account due to lockup or vesting.
fn get_locked_amount(&self, account: AccountId) -> U128String
/// Get vesting information
fn get_vesting_info(&self, account_id: AccountId) -> VestingRecordJSON
//minters can mint with vesting/locked periods
pub fn mint_vested(&mut self,account_id: &AccountId,amount: U128String,locked_until_timestamp: u64,linear_start_timestamp: u64,linear_end_timestamp: u64)
/// terminate vesting before is over
/// burn the tokens
fn terminate_vesting(&mut self, account_id: &AccountId)
/// return how many vested accounts are still active
fn vested_accounts_count(&self) -> u32

```
