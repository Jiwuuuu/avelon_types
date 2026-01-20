/**
 * Smart Contract types
 */

/**
 * Contract addresses configuration
 */
export interface ContractAddresses {
    avelonCore: string;
    loanManager: string;
    treasury: string;
    priceOracle: string;
    accessControl: string;
}

/**
 * Contract loan struct (matches Solidity struct)
 */
export interface ContractLoan {
    id: bigint;
    borrower: string;
    planId: bigint;
    principal: bigint;
    collateral: bigint;
    interestRate: bigint;
    collateralRatio: bigint;
    startDate: bigint;
    dueDate: bigint;
    principalOwed: bigint;
    interestOwed: bigint;
    feesOwed: bigint;
    status: number;
    extended: boolean;
}

/**
 * Contract loan plan struct
 */
export interface ContractLoanPlan {
    id: bigint;
    name: string;
    minCreditScore: bigint;
    minAmount: bigint;
    maxAmount: bigint;
    interestRate: bigint;
    collateralRatio: bigint;
    originationFee: bigint;
    isActive: boolean;
}

/**
 * Smart contract events
 */
export enum ContractEvent {
    // Loan Events
    LoanCreated = 'LoanCreated',
    CollateralDeposited = 'CollateralDeposited',
    LoanDisbursed = 'LoanDisbursed',
    RepaymentMade = 'RepaymentMade',
    LoanRepaid = 'LoanRepaid',
    CollateralAdded = 'CollateralAdded',
    CollateralReleased = 'CollateralReleased',
    LoanLiquidated = 'LoanLiquidated',
    LoanExtended = 'LoanExtended',

    // Treasury Events
    TreasuryDeposit = 'TreasuryDeposit',
    TreasuryWithdrawal = 'TreasuryWithdrawal',

    // Price Oracle Events
    PriceUpdated = 'PriceUpdated',

    // Access Control Events
    RoleGranted = 'RoleGranted',
    RoleRevoked = 'RoleRevoked',
}

/**
 * Event log interface
 */
export interface ContractEventLog {
    event: ContractEvent;
    blockNumber: number;
    transactionHash: string;
    args: Record<string, unknown>;
    timestamp: Date;
}

/**
 * Chain configuration
 */
export interface ChainConfig {
    chainId: number;
    name: string;
    rpcUrl: string;
    explorerUrl: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
}

/**
 * Supported chains
 */
export enum SupportedChain {
    /** Local Ganache for development */
    GANACHE = 1337,
    /** Ethereum Mainnet (future) */
    MAINNET = 1,
    /** Sepolia Testnet (future) */
    SEPOLIA = 11155111,
}
