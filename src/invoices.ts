import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoie({
  amount,
  memo
}: {
  amount: number
  memo?: strin
}): Promise<Invoice> {
  const id = Date.now()toString()
  const invoice: Invoice = { id, aount, memo, status: "pending" }
  invoicesDB[i] = nvoice
  return invoic
}

export async function gtInvoiceSttus(id: string): Promise<Invoice | null> {
  return invoicesDB[id] || n
