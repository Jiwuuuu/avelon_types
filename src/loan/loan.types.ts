/**
 * Loan-related types
 */

/**
 * Loan status enumeration
 */
export enum LoanStatus {
    /** Awaiting collateral deposit */
    PENDING_APPROVAL = 'PENDING_APPROVAL',
    REJECTED = 'REJECTED',
    PENDING_COLLATERAL = 'PENDING_COLLATERAL',
    /** Collateral received, processing disbursement */
    COLLATERAL_DEPOSITED = 'COLLATERAL_DEPOSITED',
    /** Loan disbursed, repayment ongoing */
    ACTIVE = 'ACTIVE',
    /** Fully repaid, collateral returned */
    REPAID = 'REPAID',
    /** Defaulted, collateral seized */
    LIQUIDATED = 'LIQUIDATED',
    /** User cancelled before deposit */
    CANCELLED = 'CANCELLED',
    /** Collateral not deposited within 24h */
    EXPIRED = 'EXPIRED',
}

/**
 * Collateral health status
 */
export enum CollateralHealth {
    /** ≥150% ratio */
    HEALTHY = 'HEALTHY',
    /** 130-149% ratio */
    WARNING = 'WARNING',
    /** 120-129% ratio */
    CRITICAL = 'CRITICAL',
    /** Legacy risk label only; collateral ratio does not trigger liquidation */
    LIQUIDATION = 'LIQUIDATION',
}

/**
 * Main Loan interface
 */
export interface Loan {
    id: string;
    userId: string;
    walletId: string;
    planId: string;

    // Blockchain
    contractAddress: string | null;
    contractLoanId: number | null;

    // Loan Details
    principal: number;
    purpose: string;
    collateralRequired: number;
    collateralDeposited: number;
    duration: number;
    interestRate: number;
    originationFee: number;

    // Outstanding amounts
    principalOwed: number;
    interestOwed: number;
    feesOwed: number;

    // Status & Dates
    status: LoanStatus;
    startDate: Date | null;
    dueDate: Date | null;
    repaidAt: Date | null;
    liquidatedAt: Date | null;

    // Extension
    extended: boolean;
    extensionDays: number;

    // Snapshots at loan creation
    creditScoreSnapshot: number;
    ethPriceSnapshot: number;

    // Timestamps
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Loan application request
 */
export interface LoanApplicationRequest {
    planId: string;
    amount: number;
    duration: number;
    walletId: string;
    purpose: string;
}

/**
 * Loan calculation result (before confirmation)
 */
export interface LoanCalculation {
    principal: number;
    collateralRequired: number;
    originationFee: number;
    netDisbursement: number;
    interestAmount: number;
    totalRepayment: number;
    dueDate: Date;
    ethPrice: number;
    phpEquivalent: {
        principal: number;
        collateral: number;
        netDisbursement: number;
        totalRepayment: number;
    };
}

/**
 * Loan summary for list display
 */
export interface LoanSummary {
    id: string;
    planName: string;
    principal: number;
    status: LoanStatus;
    collateralRatio: number;
    collateralHealth: CollateralHealth;
    dueDate: Date | null;
    daysRemaining: number | null;
    totalOwed: number;
}

/**
 * Loan detail with all information
 */
export interface LoanDetail extends Loan {
    plan: {
        id: string;
        name: string;
    };
    wallet: {
        id: string;
        address: string;
        shortAddress: string;
    };
    collateralRatio: number;
    collateralHealth: CollateralHealth;
    daysRemaining: number | null;
    totalOwed: number;
    phpValues: {
        principal: number;
        collateralDeposited: number;
        totalOwed: number;
    };
}

/**
 * Repayment request
 */
export interface RepaymentRequest {
    loanId: string;
    amount: number;
    transactionHash: string;
}

/**
 * Add collateral request
 */
export interface AddCollateralRequest {
    loanId: string;
    amount: number;
    transactionHash: string;
}

/**
 * Loan extension request (VIP only)
 */
export interface LoanExtensionRequest {
    loanId: string;
    additionalDays: number;
}

/**
 * Liquidation info
 */
export interface LiquidationInfo {
    loanId: string;
    collateralRatio: number;
    totalDebt: number;
    liquidationPenalty: number;
    estimatedSurplus: number;
    graceEndTime: Date | null;
    hoursUntilLiquidation: number | null;
}
