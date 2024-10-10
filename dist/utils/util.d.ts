import { ethers } from "ethers";
export declare function connectWallet(): Promise<ethers.JsonRpcSigner>;
export declare function getCoverInfo(id: number): Promise<{
    id: number;
    name: any;
    risk: number;
    chains: any;
    capacity: number;
    cost: number;
    capacityAmount: number;
    coverValues: number;
    maxAmount: number;
    poolId: number;
    cid: any;
}>;
export declare function purchaseCover(id: number, value: number, period: number): Promise<string>;
export declare function calculateCoverFee(id: number, coverValue: number, period: number): Promise<{
    numericFee: number;
    weiValue: bigint;
}>;
