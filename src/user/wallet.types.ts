/**
 * Wallet-related types
 */

/**
 * Wallet status
 */
export enum WalletStatus {
    /** Wallet added but not verified */
    PENDING = 'PENDING',
    /** Wallet ownership verified via signature */
    VERIFIED = 'VERIFIED',
    /** Wallet disconnected by user */
    DISCONNECTED = 'DISCONNECTED',
}

/**
 * Wallet interface
 */
export interface Wallet {
    id: string;
    userId: string;
    address: string;
    status: WalletStatus;
    isPrimary: boolean;
    verifiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Wallet connection request
 */
export interface WalletConnectRequest {
    address: string;
}

/**
 * Wallet verification request (signature verification)
 */
export interface WalletVerifyRequest {
    address: string;
    message: string;
    signature: string;
    nonce: string;
}

/**
 * Wallet verification message template
 */
export interface WalletVerificationMessage {
    message: string;
    nonce: string;
    timestamp: number;
}

/**
 * Wallet analysis data (for credit scoring)
 */
export interface WalletAnalysis {
    address: string;
    ageInMonths: number;
    transactionCount: number;
    ethBalance: number;
    firstTransactionDate: Date | null;
    lastTransactionDate: Date | null;
}

/**
 * Wallet summary for display
 */
export interface WalletSummary {
    id: string;
    address: string;
    shortAddress: string;
    status: WalletStatus;
    isPrimary: boolean;
    ethBalance: number | null;
}
