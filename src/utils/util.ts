import { ethers } from "ethers";
import InsuranceAbi from "../abis/InsuranceCover.json";

export enum CustomNetworks {
  COREDAO = 1115,
  BEVM = 11503,
  MERLIN = 686868,  
}

const coverContractAddress = [
  "0xEbC11e13375DEc4c43118b8f530b0dc31fF9e4a7",   //CoreDao
  "0x9552c86e01B431066AddE3096DFB482CbD82A185", //BEVM
  "0x180e565b81422e9F38e8e852Cd7CA3CD50AB8777",   //Merlin address
]

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

export async function getCoverInfo(id: number, address: string) {
  const signer = await connectWallet();
  const coverContract = new ethers.Contract(
    address as `0x${string}`,
    InsuranceAbi,
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

export async function purchaseCover(id: number, value: number, period: number, address: string): Promise<string> {
  const signer = await connectWallet();
  const coverContract = new ethers.Contract(
    address as `0x${string}`,
    InsuranceAbi,
    signer
  );
  const { weiValue: fee } = await calculateCoverFee(id, value, period, address);
  console.log(fee);
  const coverValue = ethers.parseEther(value.toString());
  try {
    const tx = await coverContract.purchaseCover(id, coverValue, period, fee);
    const receipt = await tx.wait();
    return receipt.hash;  
  } catch (error) {
    throw error;
  }
}

export async function calculateCoverFee(id: number, coverValue: number, period: number, address: string) {
  try {
    const coverInfo = await getCoverInfo(id, address);

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

export const getCoverAddressByNetwork = (network: CustomNetworks): string => {
  switch (network) {
    case CustomNetworks.COREDAO:
      return coverContractAddress[0];
    case CustomNetworks.BEVM:
      return coverContractAddress[1];
    case CustomNetworks.MERLIN:
      return coverContractAddress[2];
    default:
      return '';
  }
}