# BQJS - JavaScript SDK for Insurance Cover

BQJS is a Javascript library designed to simplify interactions with insurance cover services. It provides easy-to-use functions for retrieving insurance cover details and facilitating insurance purchases.

## Features

- **Retrieve Cover Information**: Fetch details about available cover for a specific client.
- **Purchase Insurance Cover**: Easily manage cover purchases, including setting cover value and period.

# Installation

To install the BQJS SDK, add it to your project using cargo:

```shell
npm install bqjs
```

Documentation
Comprehensive documentation is coming soon! Stay tuned.

For now, check out our [examples](https://github.com/bitquid-labs/bqjs/tree/main/test) for sample usage.

# Getting Started

### Import the SDK

Begin by importing the necessary modules from the SDK:

```javascript
import { ClientConfig } from "bqjs";
```

### Create a client instance

Set up the client instance by specifying your client name and ID cover. You can get the Cover IDs [here](https://github.com/bitquid-labs/bqjs#network-cover-ids)

```javascript
const protocolName = "Lorenzo Smart Contract";
const coverId = 21000001;

const client = new ClientConfig(protocolName, coverId);
```

### Retrieve Cover Information

Before every user cover purchase , retrieve the current cover details, including the maximum available amount:

```javascript
const coverInfo = await client.coverInfo();
```

This returns a CoverInfo object containing key details like the risk, capacity, cost, and maximum available coverage.

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

This function be called to purchase cover for the client. Takes the cover value, the cover period and the cover fee (to be changed).

```javascript
let hash = await client.userPurchaseCover(1000000000000000, 120, 10000);
```

It returns the tx hash of the cover purchase tx.

```
0xd3ccd983403fa4dca40e16f3cd6fbe0ead0f359a22246dfe66db535a47fc8e36
```

# Network/ Cover IDs

The network IDs/ Cover IDs for the clients.

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
