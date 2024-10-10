export declare class CoverClientConfig {
    protocolName: string;
    coverId: number;
    constructor(protocolName: string, coverId: number);
    displayConfig(): void;
    coverInfo(): Promise<any>;
    userPurchaseCover(coverValue: number, coverPeriod: number): Promise<string>;
    calculateUserCoverFee(coverValue: any, coverPeriod: any): Promise<number>;
}
