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
