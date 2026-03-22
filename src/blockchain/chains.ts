/**
 * Chain configuration constants for client-side use.
 * Avelon operates exclusively on Sepolia testnet.
 */

export const AVELON_CHAIN_ID = 11155111 as const;

export const AVELON_CHAIN_CONFIG = {
    id: 11155111,
    name: 'Sepolia',
    blockExplorer: 'https://sepolia.etherscan.io',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
} as const;
