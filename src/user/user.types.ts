/**
 * User role enumeration
 * Only two roles in Avelon: Admin and Borrower
 */
export enum UserRole {
    ADMIN = 'ADMIN',
    BORROWER = 'BORROWER',
}

/**
 * User verification status
 * Tracks the user's journey through the onboarding process
 */
export enum UserStatus {
    /** Email not verified */
    REGISTERED = 'REGISTERED',
    /** Email verified, no KYC submitted */
    VERIFIED = 'VERIFIED',
    /** KYC documents submitted, awaiting AI review */
    PENDING_KYC = 'PENDING_KYC',
    /** KYC approved, can connect wallet */
    APPROVED = 'APPROVED',
    /** Wallet connected, can borrow */
    CONNECTED = 'CONNECTED',
    /** KYC rejected, can resubmit */
    REJECTED = 'REJECTED',
    /** Account frozen by admin */
    SUSPENDED = 'SUSPENDED',
}

/**
 * KYC verification level
 */
export enum KYCLevel {
    NONE = 'NONE',
    BASIC = 'BASIC',
    STANDARD = 'STANDARD',
    ENHANCED = 'ENHANCED',
}

/**
 * Credit tier based on credit score
 */
export enum CreditTier {
    /** Score 0-39: Cannot borrow */
    REJECTED = 'REJECTED',
    /** Score 40-59: Starter plan only, 200% collateral */
    BASIC = 'BASIC',
    /** Score 60-79: Starter/Standard plans, 150% collateral */
    STANDARD = 'STANDARD',
    /** Score 80-89: Up to Premium plan, 130% collateral */
    PREMIUM = 'PREMIUM',
    /** Score 90-100: All plans + extension, 120% collateral */
    VIP = 'VIP',
}

/**
 * User profile interface
 */
export interface User {
    id: string;
    email: string;
    emailVerified: Date | null;
    passwordHash?: string;
    name: string | null;
    role: UserRole;
    status: UserStatus;

    // KYC
    kycLevel: KYCLevel;
    kycApprovedAt: Date | null;

    // Credit Score
    creditScore: number | null;
    creditTier: CreditTier | null;

    // Extracted KYC Data
    legalName: string | null;
    address: string | null;
    monthlyIncome: number | null;

    // Statistics
    totalBorrowed: number;
    totalRepaid: number;
    activeLoansCount: number;
    defaultCount: number;

    // Timestamps
    createdAt: Date;
    updatedAt: Date;
}

/**
 * User creation input (for registration)
 */
export interface CreateUserInput {
    email: string;
    password: string;
    name?: string;
}

/**
 * User update input
 */
export interface UpdateUserInput {
    name?: string;
    email?: string;
}

/**
 * User profile response (safe for client)
 */
export interface UserProfile {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string | null;
    role: UserRole;
    status: UserStatus;
    kycLevel: KYCLevel;
    creditScore: number | null;
    creditTier: CreditTier | null;
    legalName: string | null;
    totalBorrowed: number;
    totalRepaid: number;
    activeLoansCount: number;
    createdAt: Date;
}

/**
 * User statistics
 */
export interface UserStats {
    totalBorrowed: number;
    totalRepaid: number;
    activeLoansCount: number;
    completedLoansCount: number;
    defaultCount: number;
    onTimePaymentRate: number;
}
