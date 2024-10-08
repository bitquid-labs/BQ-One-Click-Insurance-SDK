import { ethers } from "ethers";
import * as dotenv from "dotenv";
import insuranceAbi from "../../abis/InsuranceCover.json";

const COVER_CONTRACT_ADDRESS = "0xB102A937608Ae9177175964087e8fcD7B782FD3d";

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  const accounts = await provider.send("eth_accounts", []);
  if (accounts.length > 0) {
    const signer = await provider.getSigner();
    return signer;
  } else {
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return signer;
  }
}

export async function getCoverInfo(id) {
  const signer = await connectWallet();
  const coverContract = new ethers.Contract(
    COVER_CONTRACT_ADDRESS,
    insuranceAbi,
    signer
  );
  const coverInfo = await coverContract.getCoverInfo(id);
  return {
    id: Number(coverInfo[0]),
    name: coverInfo[1],
    risk: Number(coverInfo[2]),
    chains: coverInfo[3],
    capacity: Number(coverInfo[4]),
    cost: Number(coverInfo[5]),
    capacityAmount: Number(coverInfo[6]),
    coverValues: Number(coverInfo[7]),
    maxAmount: Number(coverInfo[8]),
    poolId: Number(coverInfo[9]),
    cid: coverInfo[10],
  };
}

export async function purchaseCover(id, value, period) {
  const signer = await connectWallet();
  const coverContract = new ethers.Contract(
    COVER_CONTRACT_ADDRESS,
    insuranceAbi,
    signer
  );
  const { weiValue: fee } = await calculateCoverFee(id, value, period);
  console.log(fee);
  const coverValue = ethers.parseEther(value.toString());
  const tx = await coverContract.purchaseCover(id, coverValue, period, fee);
  const receipt = await tx.wait();
  return receipt.hash;
}

export async function calculateCoverFee(id, coverValue, period) {
  try {
    const coverInfo = await getCoverInfo(id);

    if (!coverInfo || !coverInfo.cost) {
      throw new Error("Invalid cover info or cost");
    }

    const fee = (coverInfo.cost / 100) * coverValue * (period / 365);

    return {
      numericFee: fee,
      weiValue: ethers.parseEther(fee.toFixed(18)),
    };
  } catch (error) {
    console.error("Error calculating cover fee:", error);
    throw error;
  }
}
