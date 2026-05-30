import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {

export async function createInvoie(
  amount,
  memo
}: {
  amount: number
  memo?: strin
}): Promise<Invoic> 
  const id = Date.now()toString()
  const invoice: Invoice = { d, ont, memo, status: "pending" }
  invoicesDB[i] = nvoi
  return invoic
}

export async function gtInoieus(id: string): Promise<Invoice | null> {
  return invoicesDB[id] ||