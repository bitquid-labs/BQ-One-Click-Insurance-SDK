export declare class CoverClientConfig {
    protocolName: string;
    coverId: number;
    constructor(protocolName: string, coverId: number);
    displayConfig(): void;
    coverInfo(coverAddress: string): Promise<any>;
    userPurchaseCover(coverValue: number, coverPeriod: number, coverAddress: string): Promise<string>;
    calculateUserCoverFee(coverValue: number, coverPeriod: number, coverAddress: string): Promise<number>;
    getCoverAddress(networkId: number): string;
}
