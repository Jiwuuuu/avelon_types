/**
 * Authentication-related types
 */

import { UserRole } from './user.types.js';

/**
 * Login credentials
 */
export interface LoginCredentials {
    email: string;
    password: string;
}

/**
 * Registration data
 */
export interface RegisterData {
    email: string;
    password: string;
    name?: string;
    role?: UserRole.BORROWER | UserRole.INVESTOR;
}

/**
 * JWT Token payload
 */
export interface TokenPayload {
    userId: string;
    email: string;
    role: string;
    type: 'access';
    jti: string;
    iat: number;
    exp: number;
}

/**
 * Auth tokens response
 */
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

/**
 * Session information
 */
export interface Session {
    user: {
        id: string;
        email: string;
        name: string | null;
        role: string;
        status: string;
    };
    accessToken: string;
    expiresAt: Date;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
    email: string;
}

/**
 * Password reset confirmation
 */
export interface PasswordResetConfirm {
    token: string;
    newPassword: string;
}

/**
 * Email verification request
 */
export interface EmailVerificationRequest {
    token: string;
}

/**
 * Change password request (when logged in)
 */
export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}
