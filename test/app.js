import { ClientConfig } from "../src/client/client";

const protocolName = "Lombard Smart Contract";
const coverId = 3;

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
    const txHash = await client.userPurchaseCover(
      coverValue,
      coverPeriod,
      coverFee
    );
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

window.onload = async () => {
  displayClientConfig();
  await testCoverInfo();

  document.getElementById("purchaseButton").onclick = purchaseCover;
};
