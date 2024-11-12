import { getCoverInfo, purchaseCover, calculateCoverFee } from "../utils/util";
import { getCoverAddressByNetwork } from "../utils/util";

export class CoverClientConfig {
  protocolName: string;
  coverId: number;

  constructor(protocolName: string, coverId: number) {
    this.protocolName = protocolName;
    this.coverId = coverId;
  }

  displayConfig(): void {
    console.log(
      `Client Config: ${this.protocolName}, Cover ID: ${this.coverId}`
    );
  }

  async coverInfo(coverAddress: string): Promise<any> {
    return await getCoverInfo(this.coverId, coverAddress);
  }

  async userPurchaseCover(coverValue: number, coverPeriod: number, coverAddress: string): Promise<string> {
    return await purchaseCover(this.coverId, coverValue, coverPeriod, coverAddress);
  }

  async calculateUserCoverFee(coverValue: number, coverPeriod: number, coverAddress: string) {
    const { numericFee } = await calculateCoverFee(
      this.coverId,
      coverValue,
      coverPeriod,
      coverAddress
    );
    return numericFee;
  }

  getCoverAddress(networkId: number) {
    return getCoverAddressByNetwork(networkId);  
  }
  
}