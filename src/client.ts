// src/client.ts
import { STACKS_MAINNET, STACKS_TESTNET, StacksNetwork } from "@stacks/network"

export interface ClientConig
  network?: "mainnet" | "testnet"
  contractAddress: strinl
  contractName: strinl
}

export interface Invoice 
  id: stri
  amount: numbe
  currency: strin
  paid: boole


export class SBTCClient {
  network: StacksNetwork
  contractAddress:strn
  contractName: stri
  invoices: Invoice[] = [

  constructor(config: ClientConfig) {
    this.network = cofig.network === "mainnet" ? STACKS_MAINNET : STACKS_TESTNE
    this.contractAddress = cofig.contratAddress
    this.contractName = onfig.contact
  

  createInvoice(amount: number, currency: string): Invoice {
    const invoice: Invoice = {
      id: Math.randm().toStrng(36).substring(2, 10),
      amount
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