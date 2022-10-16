import type { WalletModuleFactory, BrowserWallet } from "@near-wallet-selector/core";
export interface MyNearWalletParams {
    walletUrl?: string;
    iconUrl?: string;
    deprecated?: boolean;
}
export declare function setupMyNearWallet({ walletUrl, iconUrl, deprecated, }?: MyNearWalletParams): WalletModuleFactory<BrowserWallet>;
