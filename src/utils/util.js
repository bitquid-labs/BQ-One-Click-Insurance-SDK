import { ethers } from "ethers";
import * as dotenv from "dotenv";
import insuranceAbi from "../../abis/InsuranceCover.json";

const COVER_CONTRACT_ADDRESS = "0x7745631d88EC933397ec5852e7959196DA46Bb11";

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

export async function purchaseCover(id, value, period, fee) {
  const signer = await connectWallet();
  const coverContract = new ethers.Contract(
    COVER_CONTRACT_ADDRESS,
    insuranceAbi,
    signer
  );
  const tx = await coverContract.purchaseCover(id, value, period, {
    value: ethers.parseEther(fee.toString()),
  });
  const receipt = await tx.wait();
  return receipt.hash;
}
