## **LiNEAR**

Liquid Staking on NEAR Protocol
https://linearprotocol.org/
https://github.com/linear-protocol

## Interface Structure

```rust
pub struct LiquidStakingContract {

/// The account ID of the owner

owner_id: AccountId,

/// The accounts that are able to change key parameters and settings in the contract such as validator pool membership

managers: UnorderedSet<AccountId>,

/// The account ID of the treasury that manages portion of the received fees and rewards.

treasury_id: AccountId,

/// Total amount of LiNEAR that was minted (minus burned).

total_share_amount: ShareBalance,

/// Total amount of NEAR that was staked by users to this contract.

///

/// This is effectively 1) amount of NEAR that was deposited to this contract but hasn't yet been staked on any validators

/// plus 2) amount of NEAR that has already been staked on validators.

/// Note that the amount of NEAR that is pending release or is already released by hasn't been withdrawn is not considered.

total_staked_near_amount: Balance,

/// Persistent map from an account ID to the corresponding account.

accounts: UnorderedMap<AccountId, Account>,

/// [TODO] Whether the staking is paused.

/// When paused, the account cannot perform stake or unstake.

/// It doesn't affect the staking shares or reward distribution.

/// Pausing is useful for contract maintenance. Only the owner can pause and resume staking.

/// The contract is not paused by default.

paused: bool,

/// The storage size in bytes for one account.

account_storage_usage: StorageUsage,

/// Beneficiaries for staking rewards.

beneficiaries: UnorderedMap<AccountId, u32>,

/// The single-direction liquidity pool that enables instant unstake

liquidity_pool: LiquidityPool,

// --- Validator Pool ---

/// The validator pool that manage the actions against validators

validator_pool: ValidatorPool,

/// The whitelist contract ID, which controls the staking pool whitelist.

whitelist_account_id: Option<AccountId>,

/// Amount of NEAR that is requested to stake by all users during the last epoch

epoch_requested_stake_amount: Balance,

/// Amount of NEAR that is requested to unstake by all users during the last epoch

epoch_requested_unstake_amount: Balance,

/// Amount of NEAR that needs to be settled by staking on validators

stake_amount_to_settle: Balance,

/// Amount of NEAR that needs to be settled by unstaking from validators

unstake_amount_to_settle: Balance,

/// Last epoch height stake/unstake settlements were calculated

last_settlement_epoch: EpochHeight,

// --- Staking Farm ---

/// Farm tokens.

farms: Vector<Farm>,

/// Active farms: indicies into `farms`.

active_farms: Vec<u64>,

/// Authorized users, allowed to add farms.

/// This is done to prevent farm spam with random tokens.

/// Should not be a large number.

// authorized_users: UnorderedSet<AccountId>,

/// Authorized tokens for farms.

/// Required because any contract can call method with ft_transfer_call, so must verify that contract will accept it.

authorized_farm_tokens: UnorderedSet<AccountId>,

}

```

## Interface methods

```rust
***functions***
/// Initializes the contract with the given owner_id.
/// The entire current balance of this contract will be used to stake. This allows contract to
/// always maintain staking shares that can't be unstaked or withdrawn.
/// It prevents inflating the price of the share too much.
pub fn new(owner_id: AccountId) -> Self
/// Deposits the attached amount into the inner account of the predecessor.
pub fn deposit(&mut self)
/// Deposits the attached amount into the inner account of the predecessor and stakes it.
pub fn deposit_and_stake(&mut self)
/// Withdraws the entire unstaked balance from the predecessor account.
/// It's only allowed if the `unstake` action was not performed in the four most recent epochs.
pub fn withdraw_all(&mut self)
/// Withdraws the non staked balance for given account.
/// It's only allowed if the `unstake` action was not performed in the four most recent epochs.
pub fn withdraw(&mut self, amount: U128)
/// Stakes all available unstaked balance from the inner account of the predecessor.
pub fn stake_all(&mut self)
/// Stakes the given amount from the inner account of the predecessor.
/// The inner account should have enough unstaked balance.
pub fn stake(&mut self, amount: U128)
/// Unstakes all staked balance from the inner account of the predecessor.
/// The new total unstaked balance will be available for withdrawal in four epochs.
pub fn unstake_all(&mut self)
/// Unstakes the given amount from the inner account of the predecessor.
/// The inner account should have enough staked balance.
/// The new total unstaked balance will be available for withdrawal in four epochs.
pub fn unstake(&mut self, amount: U128)

```
