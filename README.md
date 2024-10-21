# BQJS - JavaScript SDK for Insurance Cover

BQJS is a Javascript library designed to simplify interactions with BQ insurance cover services. This library offers user-friendly functions for querying insurance cover details and executing cover purchases on third-party platforms, allowing seamless management of insurance covers without direct interaction with the BQ Insurance platform.

## Key Features

- **Retrieve Cover Information**: Fetch details about available cover for a specific client.
- **Purchase Insurance Cover**: Easily manage cover purchases, including setting cover value and period.

# Installation

To incorporate the BQJS SDK into your project, use npm (Node Package Manager):

```shell
npm install bqjs
```

> You can refer to our [examples](https://github.com/bitquid-labs/bqjs/tree/main/test) for sample usage.

# Getting Started

### Import the SDK

To begin using BQJS in your application, import the necessary modules:

```javascript
import { ClientConfig } from "bqjs";
```

This import statement brings in the ClientConfig class, which is the primary interface for interacting with the BQJS SDK.

### Creating a client instance

To allow users to purchase cover for transactions and events directly from your platform, you have to first instantiate the client with the protocol name and cover ID. This step is crucial for for identifying and specifying your protocol cover from the BQ insurance protocol which the users would be interacting with.

The cover ID and name corresponds to a specific insurance protocol and can be obtained from the [Network / Cover IDs table](https://github.com/bitquid-labs/bqjs#network-cover-ids)

> **NB** : If you're unable to find cover for your protocol, please [contact our team](https://t.me/ragulcv) for assistance.

```javascript
const protocolName = "Lorenzo Smart Contract";
const coverId = 21000001;

const client = new ClientConfig(protocolName, coverId);
```

### Retrieving Cover Information

Before initiating a cover purchase, it's essential to retrieve the latest cover details, including the maximum available coverage, risk, and cost. This can be achieved by calling the `coverInfo` method.

```javascript
const coverInfo = await client.coverInfo();
```

This returns an object containing detailed information about the selected cover like the riskType, capacity, cost, and maximum available coverage.

```javascript
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
```

### Purchase Insurance Cover

To purchase insurance cover, use the userPurchaseCover() method. This method requires the following inputs:

coverValue: The amount of coverage desired (in wei).
coverPeriod: The duration of the coverage (in days).

The fee for the cover purchase: `coverFee` is calculated dynamically based of this two inputs.

```javascript
const coverValue = 1000000000000000; // Example cover value in wei (0.001 ETH)
const coverPeriod = 120; // Coverage period in days

let hash = await client.userPurchaseCover(coverValue, coverPeriod);
```

Once executed, it returns the transaction hash for the purchase:

```
0xd3ccd983403fa4dca40e16f3cd6fbe0ead0f359a22246dfe66db535a47fc8e36
```

# Network/ Cover IDs

BQJS supports a wide range of networks and protocols. Use the following table to identify the correct Cover ID for your protocol:

> **NB** : If you're unable to find cover for your protocol, please [contact our team](https://t.me/ragulcv) for assistance.

| Network           | Testnet Chain ID    | Mainnet Chain ID |
| ----------------- | ------------------- | ---------------- |
| Babylon           | 1                   | 1                |
| Infstone          | 2                   | 2                |
| Merlin            | 686868              | 4200             |
| Core DAO          | 1115                | 1116             |
| PWR               | 21000001 (Bitcoin+) | -                |
| Lorenzo           | 83291               | 8329             |
| Lombard           | 3                   | 3                |
| Pump BTC          | 4                   | 4                |
| Octopus Bridge    | 5                   | 5                |
| Avalon Finance    | 6                   | 6                |
| Omni BTC          | 7                   | 7                |
| Zest Protocol     | 8                   | 8                |
| Liquidium         | 9                   | 9                |
| Ordeez Protocol   | 10                  | 10               |
| Eastblue Protocol | 11                  | 11               |
| Yona Network      | 12                  | 12               |
| Satoshi Protocol  | 13                  | 13               |
| Palladium         | 14                  | 14               |
| Bima BTC          | 15                  | 15               |
| BitStable         | 16                  | 16               |
| Rye Harvest       | 17                  | 17               |
