# sbtc-payment-sdk — Stacks sBTC Payment SDK

[![npm version](https://img.shields.io/npm/v/sbtc-payment-sdk?style=for-the-badge)](https://www.npmjs.com/package/sbtc-payment-sdk)
[![Build Status](https://github.com/investorphem/sbtc-payment-sdk/actions/workflows/ci.yml/badge.svg?style=for-the-badge)](https://github.com/investorphem/sbtc-payment-sdk/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen?style=for-the-badge)](#tests)
[![npm downloads](https://img.shields.io/npm/dm/sbtc-payment-sdk?style=for-the-badge)](https://www.npmjs.com/package/sbtc-payment-sdk)
[![License](https://img.shields.io/npm/l/sbtc-payment-sdk?style=for-the-badge)](https://github.com/investorphem/sbtc-payment-sdk/blob/main/LICENSE)
[![Funding](https://img.shields.io/badge/funding-patreon-orange?style=for-the-badge)](https://www.patreon.com/investorphem)

---

## 🚀 Overview

`sbtc-payment-sdk` is a **production-ready TypeScript SDK** for accepting **sBTC (SIP-010)** and **STX payments** on the [Stacks](https://www.stacks.co/) blockchain.

It enables developers to:

* Integrate **Bitcoin-backed payments** using Stacks smart contracts
* Create and manage invoices **on-chain**
* Connect seamlessly to wallets like **Hiro** and **Xverse**
* Be fully **mainnet-ready**, with TypeScript and tests

---

## 🔹 Features

* **SBTCClient class** — Initialize SDK with network & contract info
* **Invoice Management** — Create invoices, mark as paid
* **Wallet Integration** — Works with Stacks-compatible wallets
* Fully **TypeScript typed** for safety
* **Unit Tested** with Vitest and code coverag

---

## 📦 Installation

```bash
npm install sbtc-payment-sdk
# or
yarn add sbtc-payment-sdk
```

---

## 🛠 Usage

```ts
import { SBTCClient } from "sbtc-payment-sdk";

const client = new SBTCClient({
  network: "mainnet", // or "testnet"
  contractAddress: "SP123456789...",
  contractName: "sbtc-payment-processor",
});

// Create an invoice
const invoice = client.createInvoice(100, "STX");
console.log(invoice);

// Pay an invoice
client.payInvoice(invoice.id);
```

---

## ⚡ API

### `SBTCClient(config: ClientConfig)`

| Option            | Type       | Description            |                               |
| ----------------- | ---------- | ---------------------- | ----------------------------- |
| `network`         | `"mainnet" | "testnet"`             | Optional, default `"testnet"` |
| `contractAddress` | `string`   | Smart contract address |                               |
| `contractName`    | `string`   | Smart contract name    |                               |

### Methods

| Method                            | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| `createInvoice(amount, currency)` | Creates a new invoice object.                      |
| `payInvoice(invoiceId)`           | Marks an invoice as paid. Returns updated invoice. |

---

## 🧪 Tests

Run tests with Vitest:

```bash
npm run test
npm run test -- --coverage
```

✅ Example:

```text
 PASS  tests/client.test.ts
  SBTCClient invoices
    ✓ should create an invoice
    ✓ should pay an invoice
```

---

## 🛠 Development

```bash
# Install dependencies
npm install

# Build SDK
npm run build

# Watch for changes
npm run dev

# Lint code
npm run lint
```

---

## 📈 Tech Stack

* **Blockchain:** Stacks (Bitcoin-secured)
* **Smart Contracts:** Clarity (SIP-010 support)
* **Language:** TypeScript
* **Testing:** Vitest
* **Wallet SDK:** @stacks/connect / @stacks/wallet-sdk

---

## 🔒 Security Notes

* Always verify **contract addresses** on mainnet
* Start with **small amounts** for testing
* Optional: Use **off-chain indexer** for invoice tracking

---

## 💰 Funding

Support development via [Patreon](https://www.patreon.com/investorphem)

---

## 📄 License

[MIT License](https://github.com/investorphem/sbtc-payment-sdk/blob/main/LICENSE)
