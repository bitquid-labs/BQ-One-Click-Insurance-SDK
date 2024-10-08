import { getCoverInfo, purchaseCover } from "../utils/util";

export class ClientConfig {
  constructor(protocolName, coverId) {
    this.protocolName = protocolName;
    this.coverId = coverId;
  }

  displayConfig() {
    console.log(
      `Client Config: ${this.protocolName}, Cover ID: ${this.coverId}`
    );
  }

  async coverInfo() {
    return await getCoverInfo(this.coverId);
  }

  async userPurchaseCover(coverValue, coverPeriod, coverFee) {
    return await purchaseCover(this.coverId, coverValue, coverPeriod, coverFee);
  }
}
