/**
 * Blockchain Transaction types
 */

/**
 * Transaction status
 */
export enum BlockchainTransactionStatus {
    PENDING = 'PENDING',
    SUBMITTED = 'SUBMITTED',
    CONFIRMED = 'CONFIRMED',
    FAILED = 'FAILED',
}

/**
 * Blockchain transaction record
 */
export interface BlockchainTransaction {
    hash: string;
    from: string;
    to: string;
    value: string;
    gasUsed: number;
    gasPrice: string;
    blockNumber: number;
    blockHash: string;
    timestamp: Date;
    status: BlockchainTransactionStatus;
    nonce: number;
}

/**
 * Transaction receipt
 */
export interface TransactionReceipt {
    transactionHash: string;
    blockNumber: number;
    blockHash: string;
    from: string;
    to: string;
    gasUsed: number;
    effectiveGasPrice: string;
    status: number;
    logs: TransactionLog[];
}

/**
 * Transaction log
 */
export interface TransactionLog {
    address: string;
    topics: string[];
    data: string;
    blockNumber: number;
    transactionHash: string;
    logIndex: number;
}

/**
 * ETH balance info
 */
export interface EthBalance {
    address: string;
    balance: string;
    balanceFormatted: number;
}

/**
 * Gas estimate
 */
export interface GasEstimate {
    gasLimit: bigint;
    gasPrice: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    estimatedCost: string;
    estimatedCostFormatted: number;
}

/**
 * Transaction request
 */
export interface TransactionRequest {
    to: string;
    value?: string;
    data?: string;
    gasLimit?: bigint;
    gasPrice?: bigint;
}

/**
 * Signed message
 */
export interface SignedMessage {
    message: string;
    signature: string;
    address: string;
}
