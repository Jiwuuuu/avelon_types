/**
 * Notification types
 */

/**
 * Notification type enumeration
 */
export enum NotificationType {
    // Account
    EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
    PASSWORD_RESET = 'PASSWORD_RESET',
    WELCOME = 'WELCOME',

    // KYC
    KYC_SUBMITTED = 'KYC_SUBMITTED',
    KYC_APPROVED = 'KYC_APPROVED',
    KYC_REJECTED = 'KYC_REJECTED',

    // Loan Lifecycle
    LOAN_CREATED = 'LOAN_CREATED',
    LOAN_APPLICATION_RECEIVED = 'LOAN_APPLICATION_RECEIVED',
    LOAN_APPROVED = 'LOAN_APPROVED',
    COLLATERAL_DEPOSITED = 'COLLATERAL_DEPOSITED',
    LOAN_DISBURSED = 'LOAN_DISBURSED',
    LOAN_REPAID = 'LOAN_REPAID',
    LOAN_CANCELLED = 'LOAN_CANCELLED',
    LOAN_EXTENDED = 'LOAN_EXTENDED',

    // Repayment
    REPAYMENT_REMINDER = 'REPAYMENT_REMINDER',
    REPAYMENT_RECEIVED = 'REPAYMENT_RECEIVED',
    REPAYMENT_OVERDUE = 'REPAYMENT_OVERDUE',

    // Collateral
    COLLATERAL_WARNING = 'COLLATERAL_WARNING',
    COLLATERAL_ADDED = 'COLLATERAL_ADDED',

    // Liquidation
    LIQUIDATION_WARNING = 'LIQUIDATION_WARNING',
    LOAN_LIQUIDATED = 'LOAN_LIQUIDATED',

    // System
    SYSTEM_ANNOUNCEMENT = 'SYSTEM_ANNOUNCEMENT',
}

/**
 * Notification channel
 */
export enum NotificationChannel {
    EMAIL = 'EMAIL',
    PUSH = 'PUSH',
    IN_APP = 'IN_APP',
}

/**
 * Notification priority
 */
export enum NotificationPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT',
}

/**
 * Notification interface
 */
export interface Notification {
    id: string;
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    data: Record<string, unknown> | null;
    priority: NotificationPriority;
    channels: NotificationChannel[];
    read: boolean;
    readAt: Date | null;
    createdAt: Date;
}

/**
 * Notification summary for display
 */
export interface NotificationSummary {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    priority: NotificationPriority;
    read: boolean;
    createdAt: Date;
    relativeTime: string;
}

/**
 * Notification preferences
 */
export interface NotificationPreferences {
    email: {
        enabled: boolean;
        loanUpdates: boolean;
        repaymentReminders: boolean;
        collateralWarnings: boolean;
        marketing: boolean;
    };
    push: {
        enabled: boolean;
        loanUpdates: boolean;
        repaymentReminders: boolean;
        collateralWarnings: boolean;
    };
}

/**
 * Update notification preferences request
 */
export interface UpdateNotificationPreferencesRequest {
    email?: Partial<NotificationPreferences['email']>;
    push?: Partial<NotificationPreferences['push']>;
}

/**
 * Unread notification count
 */
export interface UnreadNotificationCount {
    total: number;
    byPriority: {
        urgent: number;
        high: number;
        medium: number;
        low: number;
    };
}
