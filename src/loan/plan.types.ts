/**
 * Loan Plan types
 */

/**
 * Interest calculation type
 */
export enum InterestType {
    FLAT = 'FLAT',
    COMPOUND = 'COMPOUND',
}

/**
 * Loan Plan interface
 */
export interface LoanPlan {
    id: string;
    name: string;
    description: string | null;

    // Eligibility
    minCreditScore: number;

    // Loan Terms
    minAmount: number;
    maxAmount: number;
    durationOptions: number[];
    interestRate: number;
    interestType: InterestType;

    // Collateral
    collateralRatio: number;

    // Fees
    originationFee: number;
    latePenaltyRate: number;
    gracePeriodDays: number;

    // Extension (VIP only)
    extensionAllowed: boolean;
    maxExtensionDays: number;
    extensionFee: number;

    // Status
    isActive: boolean;

    // Timestamps
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Create loan plan input (admin)
 */
export interface CreateLoanPlanInput {
    name: string;
    description?: string;
    minCreditScore: number;
    minAmount: number;
    maxAmount: number;
    durationOptions: number[];
    interestRate: number;
    interestType?: InterestType;
    collateralRatio: number;
    originationFee: number;
    latePenaltyRate?: number;
    gracePeriodDays?: number;
    extensionAllowed?: boolean;
    maxExtensionDays?: number;
    extensionFee?: number;
}

/**
 * Update loan plan input (admin)
 */
export interface UpdateLoanPlanInput {
    name?: string;
    description?: string;
    minCreditScore?: number;
    minAmount?: number;
    maxAmount?: number;
    durationOptions?: number[];
    interestRate?: number;
    collateralRatio?: number;
    originationFee?: number;
    latePenaltyRate?: number;
    gracePeriodDays?: number;
    extensionAllowed?: boolean;
    maxExtensionDays?: number;
    extensionFee?: number;
    isActive?: boolean;
}

/**
 * Loan plan for display to users
 */
export interface LoanPlanSummary {
    id: string;
    name: string;
    description: string | null;
    minCreditScore: number;
    minAmount: number;
    maxAmount: number;
    durationOptions: number[];
    interestRate: number;
    collateralRatio: number;
    originationFee: number;
    extensionAllowed: boolean;
}

/**
 * Loan plan eligibility check result
 */
export interface PlanEligibility {
    planId: string;
    planName: string;
    isEligible: boolean;
    reason?: string;
    maxLoanAmount: number;
    requiredCollateralRatio: number;
}
