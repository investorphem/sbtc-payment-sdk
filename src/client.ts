// src/client.ts
import { STACKS_MAINNET, STACKS_TESTNET, StacksNetwork } from "@stacks/network"

export interface ClientConfig {
  network?: "mainnet" | "testnet"
  contractAddress: string
  contractName: st

  constructor(config: ClientConfig) {
    this.network = config.network === "mainnet" ? STACKS_MAINNET : STACKS_TESTNET
    this.contractAddress = config.contractAddress
    this.contractName = config.contractName
  }

  createInvoice(amount: number, currency: string): Invoice {
    const invoice: Invoice = {
      id: Math.random().toString(36).substring(2, 10),
      amount,
      currency,
      paid: false,
    }
    this.invoices.push(invoice)
    return invoice
  }

  payInvoice(invoiceId: string): Invoice | undefined {
    const invoice = this.invoices.find(i => i.id === invoiceId)
    if (invoice) invoice.paid = true
    return invoice
  }
}
