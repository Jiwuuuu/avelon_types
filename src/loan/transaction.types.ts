/**
 * Loan Transaction types
 */

/**
 * Transaction type enumeration
 */
export enum LoanTransactionType {
    /** Collateral deposited */
    COLLATERAL_DEPOSIT = 'COLLATERAL_DEPOSIT',
    /** Additional collateral added */
    COLLATERAL_TOPUP = 'COLLATERAL_TOPUP',
    /** Loan disbursed to borrower */
    DISBURSEMENT = 'DISBURSEMENT',
    /** Partial repayment made */
    REPAYMENT = 'REPAYMENT',
    /** Full repayment completed */
    FULL_REPAYMENT = 'FULL_REPAYMENT',
    /** Collateral returned after repayment */
    COLLATERAL_RELEASE = 'COLLATERAL_RELEASE',
    /** Liquidation executed */
    LIQUIDATION = 'LIQUIDATION',
    /** Surplus returned after liquidation */
    SURPLUS_RETURN = 'SURPLUS_RETURN',
    /** Extension fee paid */
    EXTENSION_FEE = 'EXTENSION_FEE',
    /** Origination fee deducted */
    ORIGINATION_FEE = 'ORIGINATION_FEE',
    /** Late fee applied */
    LATE_FEE = 'LATE_FEE',
}

/**
 * Transaction status
 */
export enum TransactionStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    FAILED = 'FAILED',
}

/**
 * Loan transaction record
 */
export interface LoanTransaction {
    id: string;
    loanId: string;
    type: LoanTransactionType;
    amount: number;
    status: TransactionStatus;
    transactionHash: string | null;
    blockNumber: number | null;
    fromAddress: string | null;
    toAddress: string | null;
    description: string | null;
    createdAt: Date;
    confirmedAt: Date | null;
}

/**
 * Transaction summary for display
 */
export interface TransactionSummary {
    id: string;
    type: LoanTransactionType;
    amount: number;
    amountPhp: number;
    status: TransactionStatus;
    transactionHash: string | null;
    createdAt: Date;
    description: string;
}

/**
 * Repayment breakdown
 */
export interface RepaymentBreakdown {
    principal: number;
    interest: number;
    fees: number;
    total: number;
    remainingAfterPayment: {
        principal: number;
        interest: number;
        fees: number;
        total: number;
    };
}

/**
 * Payment schedule item
 */
export interface PaymentScheduleItem {
    dueDate: Date;
    principal: number;
    interest: number;
    total: number;
    isPaid: boolean;
    paidAt: Date | null;
}
