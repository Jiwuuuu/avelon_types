/**
 * KYC Verification and Credit Scoring types
 */

import { CreditTier } from '../user/user.types';

/**
 * Verification status
 */
export enum VerificationStatus {
    /** Not started */
    NOT_STARTED = 'NOT_STARTED',
    /** In progress */
    IN_PROGRESS = 'IN_PROGRESS',
    /** Completed successfully */
    COMPLETED = 'COMPLETED',
    /** Failed */
    FAILED = 'FAILED',
}

/**
 * AI Verification result
 */
export interface AIVerificationResult {
    status: 'APPROVED' | 'REJECTED';
    creditScore: number;
    tier: CreditTier;
    extractedData: {
        fullName: string | null;
        address: string | null;
        monthlyIncome: number | null;
        employmentType: string | null;
    };
    documentScores: {
        governmentId: number;
        proofOfIncome: number;
        proofOfAddress: number;
    };
    fraudFlags: FraudFlag[];
    rejectionReasons: string[];
}

/**
 * Fraud detection flag
 */
export interface FraudFlag {
    type: FraudFlagType;
    severity: 'LOW' | 'MEDIUM' | 'HIGH';
    description: string;
    documentId: string;
}

/**
 * Fraud flag types
 */
export enum FraudFlagType {
    IMAGE_MANIPULATION = 'IMAGE_MANIPULATION',
    TEXT_INCONSISTENCY = 'TEXT_INCONSISTENCY',
    INVALID_ID_FORMAT = 'INVALID_ID_FORMAT',
    EXPIRED_DOCUMENT = 'EXPIRED_DOCUMENT',
    DUPLICATE_SUBMISSION = 'DUPLICATE_SUBMISSION',
    SUSPICIOUS_PATTERN = 'SUSPICIOUS_PATTERN',
}

/**
 * Credit score breakdown
 */
export interface CreditScoreBreakdown {
    total: number;
    tier: CreditTier;
    components: {
        documentVerification: {
            score: number;
            maxScore: number;
            details: {
                governmentId: number;
                proofOfIncome: number;
                proofOfAddress: number;
                penalties: number;
            };
        };
        financialIndicators: {
            score: number;
            maxScore: number;
            details: {
                incomeLevel: number;
                employmentType: number;
                debtToIncome: number;
            };
        };
        avelonHistory: {
            score: number;
            maxScore: number;
            details: {
                baseScore: number;
                repaidLoans: number;
                onTimePayments: number;
                defaults: number;
                latePayments: number;
            };
        };
        walletAnalysis: {
            score: number;
            maxScore: number;
            details: {
                walletAge: number;
                transactionCount: number;
                balance: number;
            };
        };
    };
}

/**
 * KYC submission request
 */
export interface KYCSubmitRequest {
    documentIds: string[];
}

/**
 * KYC status response
 */
export interface KYCStatusResponse {
    status: VerificationStatus;
    documents: {
        governmentId: {
            uploaded: boolean;
            verified: boolean;
            documentId: string | null;
        };
        proofOfIncome: {
            uploaded: boolean;
            verified: boolean;
            documentId: string | null;
        };
        proofOfAddress: {
            uploaded: boolean;
            verified: boolean;
            documentId: string | null;
        };
    };
    creditScore: number | null;
    creditTier: CreditTier | null;
    verifiedAt: Date | null;
    rejectionReasons: string[];
}

/**
 * Admin KYC review action
 */
export interface AdminKYCReviewAction {
    userId: string;
    action: 'APPROVE' | 'REJECT';
    creditScore?: number;
    rejectionReason?: string;
    notes?: string;
}

/**
 * Pending KYC item for admin review
 */
export interface PendingKYCItem {
    userId: string;
    userName: string | null;
    email: string;
    submittedAt: Date;
    documentCount: number;
    aiResult: AIVerificationResult | null;
    hasFraudFlags: boolean;
}
