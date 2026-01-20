# @avelon_capstone/types

Shared TypeScript types for the Avelon decentralized lending platform.

## Installation

```bash
npm install @avelon_capstone/types
```

## Usage

```typescript
import {
  User,
  UserRole,
  UserStatus,
  Loan,
  LoanStatus,
  LoanPlan,
  CreditTier,
  ApiResponse,
  ErrorCode,
} from '@avelon_capstone/types';
```

## Modules

### User (`@avelon/types/user`)
- `User`, `UserRole`, `UserStatus`, `KYCLevel`, `CreditTier`
- `LoginCredentials`, `RegisterData`, `AuthTokens`, `Session`
- `Wallet`, `WalletStatus`, `WalletAnalysis`

### Loan (`@avelon/types/loan`)
- `Loan`, `LoanStatus`, `CollateralHealth`
- `LoanPlan`, `InterestType`, `PlanEligibility`
- `LoanTransaction`, `LoanTransactionType`, `TransactionStatus`

### KYC (`@avelon/types/kyc`)
- `Document`, `DocumentType`, `DocumentStatus`
- `AIVerificationResult`, `CreditScoreBreakdown`
- `FraudFlag`, `FraudFlagType`

### Notification (`@avelon/types/notification`)
- `Notification`, `NotificationType`, `NotificationPriority`
- `NotificationPreferences`, `NotificationChannel`

### API (`@avelon/types/api`)
- `ApiResponse`, `PaginatedResponse`, `ErrorResponse`
- `ErrorCode`, `ValidationError`
- `PaginationParams`, `ListRequest`

### Blockchain (`@avelon/types/blockchain`)
- `ContractLoan`, `ContractLoanPlan`, `ContractAddresses`
- `ContractEvent`, `ContractEventLog`
- `BlockchainTransaction`, `TransactionReceipt`, `GasEstimate`

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Type check
npm run typecheck
```

## Publishing

```bash
# Build and publish to GitHub Packages
npm publish
```

## License

MIT
