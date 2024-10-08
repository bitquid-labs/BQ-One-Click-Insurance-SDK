import { ClientConfig } from "../src/client/client";
import { connectWallet } from "../src/utils/util";
import { ethers } from "ethers";
import bqBTCAbi from "../abis/bqBTC.json";

const bqBTCContractAddress = "0x22203ee6c9b5dC764855038eaA41DbcFaD54e8Fa";
const protocolName = "Babylon";
const coverId = 1;

const client = new ClientConfig(protocolName, coverId);

function displayClientConfig() {
  document.getElementById("protocolName").innerText = client.protocolName;
  document.getElementById("coverId").innerText = client.coverId;
}

async function testCoverInfo() {
  try {
    const coverInfo = await client.coverInfo();
    console.log("Cover Info:", coverInfo);
  } catch (error) {
    console.error("Error fetching cover info:", error);
  }
}

async function purchaseCover() {
  const coverValue = parseFloat(document.getElementById("coverValue").value);
  const coverPeriod = parseInt(document.getElementById("coverPeriod").value);
  const coverFee = parseFloat(document.getElementById("coverFee").value);

  try {
    const txHash = await client.userPurchaseCover(coverValue, coverPeriod);
    console.log("Purchase successful! Transaction Hash:", txHash);
    document.getElementById(
      "output"
    ).innerText = `Purchase successful! Transaction Hash: ${txHash}`;
  } catch (error) {
    console.error("Error purchasing cover:", error);
    document.getElementById(
      "output"
    ).innerText = `Error purchasing cover: ${error.message}`;
  }
}

async function updateCoverFee() {
  const coverValue =
    parseFloat(document.getElementById("coverValue").value) || 0;
  const coverPeriod =
    parseInt(document.getElementById("coverPeriod").value) || 0;

  if (coverValue > 0 && coverPeriod > 0) {
    try {
      const fee = await client.calculateUserCoverFee(coverValue, coverPeriod);
      document.getElementById("coverFee").textContent = fee.toFixed(10);
    } catch (error) {
      console.error("Error updating cover fee:", error);
      document.getElementById("coverFee").textContent = "Error calculating fee";
    }
  } else {
    document.getElementById("coverFee").textContent = "0.00"; // Reset fee display
  }
}

async function getBQBTC() {
  try {
    const signer = await connectWallet();
    const amount = parseFloat(document.getElementById("bqbtcAmount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const bqBTCContract = new ethers.Contract(
      bqBTCContractAddress,
      bqBTCAbi,
      signer
    );

    const tx = await bqBTCContract.mint(
      signer.getAddress(),
      ethers.parseUnits(amount.toString(), 18)
    );

    await tx.wait();
    console.log("Mint successful! Transaction Hash:", tx.hash);
    document.getElementById(
      "output"
    ).innerText = `Mint successful! Transaction Hash: ${tx.hash}`;
  } catch (error) {
    console.error("Error minting bqBTC:", error);
    document.getElementById(
      "output"
    ).innerText = `Error minting bqBTC: ${error.message}`;
  }
}

window.onload = async () => {
  displayClientConfig();
  await testCoverInfo();

  document.getElementById("purchaseButton").onclick = purchaseCover;
  document
    .getElementById("coverValue")
    .addEventListener("input", updateCoverFee);
  document
    .getElementById("coverPeriod")
    .addEventListener("input", updateCoverFee);

  document.getElementById("mintBQBTCButton").onclick = getBQBTC;

  await updateCoverFee();
};
