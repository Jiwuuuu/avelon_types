/**
 * Loan Transaction types
 */

/**
 * Transaction type enumeration
 * Matches Prisma TransactionType enum
 */
export enum LoanTransactionType {
    /** Collateral deposited */
    COLLATERAL_DEPOSIT = 'COLLATERAL_DEPOSIT',
    /** Loan disbursed to borrower */
    LOAN_DISBURSEMENT = 'LOAN_DISBURSEMENT',
    /** Repayment made */
    REPAYMENT = 'REPAYMENT',
    /** Additional collateral added */
    COLLATERAL_TOPUP = 'COLLATERAL_TOPUP',
    /** Collateral returned after repayment */
    COLLATERAL_RETURN = 'COLLATERAL_RETURN',
    /** Liquidation executed */
    LIQUIDATION = 'LIQUIDATION',
    /** Fee payment (origination, late, extension) */
    FEE_PAYMENT = 'FEE_PAYMENT',
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
