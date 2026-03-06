/**
 * KYC Document types
 */

/**
 * Document type enumeration
 */
export enum DocumentType {
    /** Government-issued ID front (Driver's License, Passport, etc.) */
    GOVERNMENT_ID = 'GOVERNMENT_ID',
    /** Government-issued ID back */
    GOVERNMENT_ID_BACK = 'GOVERNMENT_ID_BACK',
    /** Electronic signature */
    E_SIGNATURE = 'E_SIGNATURE',
    /** Proof of income (Payslip, Bank Statement, etc.) */
    PROOF_OF_INCOME = 'PROOF_OF_INCOME',
    /** Proof of address (Utility Bill, Bank Statement, etc.) */
    PROOF_OF_ADDRESS = 'PROOF_OF_ADDRESS',
    /** Selfie for identity verification */
    SELFIE = 'SELFIE',
}

/**
 * Document verification status
 * Matches Prisma DocumentStatus enum
 */
export enum DocumentStatus {
    /** Document uploaded, awaiting verification */
    PENDING = 'PENDING',
    /** Document approved */
    APPROVED = 'APPROVED',
    /** Document rejected */
    REJECTED = 'REJECTED',
}

/**
 * Document rejection reason
 */
export enum DocumentRejectionReason {
    POOR_QUALITY = 'POOR_QUALITY',
    UNREADABLE = 'UNREADABLE',
    EXPIRED = 'EXPIRED',
    SUSPECTED_TAMPERING = 'SUSPECTED_TAMPERING',
    INFO_MISMATCH = 'INFO_MISMATCH',
    WRONG_DOCUMENT_TYPE = 'WRONG_DOCUMENT_TYPE',
    INCOMPLETE = 'INCOMPLETE',
}

/**
 * KYC Document interface
 */
export interface Document {
    id: string;
    userId: string;
    type: DocumentType;
    status: DocumentStatus;
    fileName: string;
    fileUrl: string;
    mimeType: string;
    fileSize: number;
    rejectionReason: DocumentRejectionReason | null;
    rejectionDetails: string | null;
    extractedData: ExtractedDocumentData | null;
    verifiedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Data extracted from documents by AI
 */
export interface ExtractedDocumentData {
    // Common fields
    fullName: string | null;
    dateOfBirth: Date | null;
    address: string | null;

    // Government ID
    idNumber: string | null;
    idType: string | null;
    issueDate: Date | null;
    expiryDate: Date | null;
    issuingAuthority: string | null;

    // Proof of Income
    employerName: string | null;
    employmentType: string | null;
    monthlyIncome: number | null;
    incomeDate: Date | null;
    incomePeriod: string | null;

    // Proof of Address
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
    country: string | null;
    documentDate: Date | null;

    // Confidence scores
    confidence: number;
    fieldConfidences: Record<string, number>;
}

/**
 * Document upload request
 */
export interface DocumentUploadRequest {
    type: DocumentType;
    file: File | Blob;
}

/**
 * Document summary for display
 */
export interface DocumentSummary {
    id: string;
    type: DocumentType;
    status: DocumentStatus;
    fileName: string;
    uploadedAt: Date;
    verifiedAt: Date | null;
    rejectionReason: DocumentRejectionReason | null;
}

/**
 * Required documents for KYC
 */
export interface RequiredDocuments {
    governmentId: boolean;
    proofOfIncome: boolean;
    proofOfAddress: boolean;
    allUploaded: boolean;
    allVerified: boolean;
}
