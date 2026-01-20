/**
 * API Request types
 */

/**
 * Pagination parameters
 */
export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

/**
 * Date range filter
 */
export interface DateRangeFilter {
    startDate?: Date | string;
    endDate?: Date | string;
}

/**
 * Base list request
 */
export interface ListRequest extends PaginationParams {
    search?: string;
}

/**
 * User list request (admin)
 */
export interface UserListRequest extends ListRequest {
    role?: string;
    status?: string;
    creditTier?: string;
}

/**
 * Loan list request
 */
export interface LoanListRequest extends ListRequest, DateRangeFilter {
    status?: string;
    userId?: string;
}

/**
 * Transaction list request
 */
export interface TransactionListRequest extends ListRequest, DateRangeFilter {
    loanId?: string;
    type?: string;
}

/**
 * Notification list request
 */
export interface NotificationListRequest extends PaginationParams {
    read?: boolean;
    type?: string;
}
