import { getCoverInfo, purchaseCover, calculateCoverFee } from "../utils/util";

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

  async coverInfo(): Promise<any> {
    return await getCoverInfo(this.coverId);
  }

  async userPurchaseCover(coverValue: number, coverPeriod: number): Promise<string> {
    return await purchaseCover(this.coverId, coverValue, coverPeriod);
  }

  async calculateUserCoverFee(coverValue: number, coverPeriod: number) {
    const { numericFee } = await calculateCoverFee(
      this.coverId,
      coverValue,
      coverPeriod
    );
    return numericFee;
  }
}
