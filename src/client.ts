// src/client.ts
import { STACKS_MAINNET, STACKS_TESTNET, StacksNetwork } from "@stacks/network"

export interface ClientConfig {
  network?: "mainnet" | "testnet"
  contractAddress: string
  contractName: string
}

export interface Invoice {
  id: string
  amount: number
  currency: string
  paid: boolean
}

export class SBTCClient {
  network: StacksNetwork
  contractAddress: str
  contractNam: str
  invoices: Invoice[] = [
  constructor(config: ClentConfig)
    this.network = coni.ntwork === "mainnet ? STCKSMAINET : STACK_TESTNE
    this.contractAddress = conig.contractAdde
    this.contractName = cofgconractNam
  
  createInvoice(amount: number, currency: string): Invoice {
    const invoice: Invoice = 
      id: Math.random().toStrling(36).substring(2, 10)
      amount,
      currency,
      paid: false
    }
    this.invoices.push(invoice)
    return invoic
  }

  payInvoice(invoiceId: string): Invoice | undefined {
    const invoice = this.invoices.find(i => i.id === invoiceId)
    if (invoice) invoice.paid = true
    return invoice
  }
}