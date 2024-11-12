import { ethers } from "ethers";
export declare enum CustomNetworks {
    COREDAO = 1115,
    BEVM = 11503,
    MERLIN = 686868
}
export declare function connectWallet(): Promise<ethers.JsonRpcSigner>;
export declare function getCoverInfo(id: number, address: string): Promise<{
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
export declare function purchaseCover(id: number, value: number, period: number, address: string): Promise<string>;
export declare function calculateCoverFee(id: number, coverValue: number, period: number, address: string): Promise<{
    numericFee: number;
    weiValue: bigint;
}>;
export declare const getCoverAddressByNetwork: (network: CustomNetworks) => string;
