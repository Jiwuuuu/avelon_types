/**
 * Client-side contract ABIs
 *
 * Minimal ABIs for frontend transaction construction via viem/wagmi.
 * Only includes functions that borrowers/investors call directly.
 * Full ABIs remain in avelon_backend/src/services/blockchain.service.ts.
 */

/** CollateralManager — borrower-callable functions */
export const COLLATERAL_MANAGER_ABI = [
    {
        inputs: [{ internalType: 'uint32', name: 'loanId', type: 'uint32' }],
        name: 'depositCollateral',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint32', name: 'loanId', type: 'uint32' }],
        name: 'addCollateral',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    // Events (for tx receipt parsing)
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'uint32', name: 'loanId', type: 'uint32' },
            { indexed: true, internalType: 'address', name: 'depositor', type: 'address' },
            { internalType: 'uint128', name: 'amount', type: 'uint128' },
        ],
        name: 'CollateralDeposited',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'uint32', name: 'loanId', type: 'uint32' },
            { indexed: true, internalType: 'address', name: 'depositor', type: 'address' },
            { internalType: 'uint128', name: 'amount', type: 'uint128' },
        ],
        name: 'CollateralAdded',
        type: 'event',
    },
] as const;

/** AvelonLiquidityPool — the calls a borrower or investor signs themselves */
export const LIQUIDITY_POOL_ABI = [
    {
        inputs: [{ internalType: 'uint32', name: 'loanId', type: 'uint32' }],
        name: 'repay',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'deposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'shareAmount', type: 'uint256' }],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'claimYield',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;
