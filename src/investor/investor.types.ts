/**
 * Investor and liquidity pool types for the Avelon platform.
 *
 * Investors supply crypto to the shared liquidity pool. When borrowers repay loans,
 * 90% of interest returns to the pool (distributed as yield) and 10% goes to Avelon.
 */

// ── Deposit ────────────────────────────────────────────────────────────────

export enum DepositStatus {
    /** Tx submitted, not yet confirmed on-chain */
    PENDING = 'PENDING',
    /** Confirmed — liquidity is in the pool */
    CONFIRMED = 'CONFIRMED',
    /** Fully withdrawn */
    WITHDRAWN = 'WITHDRAWN',
}

export interface InvestorDeposit {
    id: string;
    userId: string;
    /** Amount deposited in ETH */
    amount: number;
    txHash: string;
    status: DepositStatus;
    /** Percentage share of the pool at time of deposit */
    poolSharePercent: number | null;
    createdAt: Date;
    withdrawnAt: Date | null;
}

// ── Pool ───────────────────────────────────────────────────────────────────

export interface PoolStats {
    /** Total value locked in ETH */
    tvl: number;
    /** Amount currently lent out in ETH */
    totalBorrowed: number;
    /** totalBorrowed / tvl (0–1) */
    utilizationRate: number;
    /** Annualised yield rate (0–1), e.g. 0.12 = 12% APY */
    apy: number;
    /** Number of active investors */
    totalInvestors: number;
    /** Number of loans funded from the pool */
    activeLoans: number;
    lastUpdated: Date;
}

// ── Pool Transactions ──────────────────────────────────────────────────────

export enum PoolTransactionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL',
    YIELD_EARNED = 'YIELD_EARNED',
    FEE_COLLECTED = 'FEE_COLLECTED',
}

export interface PoolTransaction {
    id: string;
    type: PoolTransactionType;
    /** Amount in ETH */
    amount: number;
    txHash: string | null;
    /** User associated with the transaction (null for pool-level events) */
    userId: string | null;
    createdAt: Date;
}

// ── API Response Types ─────────────────────────────────────────────────────

export interface InvestorDashboardResponse {
    /** Total ETH deposited by this investor */
    totalDeposited: number;
    /** Current estimated value (deposited + yield) */
    currentValue: number;
    /** Total yield earned in ETH */
    totalYieldEarned: number;
    /** Claimable yield not yet withdrawn */
    claimableYield: number;
    pool: PoolStats;
    recentTransactions: PoolTransaction[];
}

export interface EarningsResponse {
    totalEarned: number;
    claimable: number;
    /** Breakdown by month: { month: "2026-03", earned: 0.05 }[] */
    monthlyBreakdown: { month: string; earned: number }[];
}
