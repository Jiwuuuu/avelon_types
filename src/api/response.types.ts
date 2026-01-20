/**
 * API Response types
 */

/**
 * Base API response
 */
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    meta?: ResponseMeta;
}

/**
 * Response metadata
 */
export interface ResponseMeta {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
    hasMore?: boolean;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
    success: boolean;
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasMore: boolean;
    };
}

/**
 * Success response with message
 */
export interface SuccessResponse {
    success: true;
    message: string;
}

/**
 * Error response
 */
export interface ErrorResponse {
    success: false;
    error: {
        code: string;
        message: string;
        details?: ErrorDetail[];
    };
}

/**
 * Error detail (for validation errors)
 */
export interface ErrorDetail {
    field: string;
    message: string;
    code?: string;
}

/**
 * Health check response
 */
export interface HealthCheckResponse {
    status: 'healthy' | 'degraded' | 'unhealthy';
    timestamp: Date;
    services: {
        database: boolean;
        redis: boolean;
        blockchain: boolean;
        ai: boolean;
    };
    version: string;
}

/**
 * Market data response
 */
export interface MarketDataResponse {
    ethPrice: number;
    phpEquivalent: number;
    lastUpdated: Date;
    change24h: number;
    changePercent24h: number;
}

/**
 * Treasury balance response (admin)
 */
export interface TreasuryBalanceResponse {
    balanceEth: number;
    balancePhp: number;
    availableForLoans: number;
    lockedInLoans: number;
    totalDisbursed: number;
    totalRepaid: number;
    lastUpdated: Date;
}

/**
 * Analytics summary response (admin)
 */
export interface AnalyticsSummaryResponse {
    users: {
        total: number;
        approved: number;
        pending: number;
        rejected: number;
        newThisMonth: number;
    };
    loans: {
        total: number;
        active: number;
        repaid: number;
        liquidated: number;
        totalVolume: number;
    };
    revenue: {
        totalFees: number;
        originationFees: number;
        interestEarned: number;
        lateFees: number;
    };
}
