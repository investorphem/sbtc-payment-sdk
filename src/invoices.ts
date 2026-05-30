import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoice({
  amount,
  memo
}: {
  amount: number
  memo?: string
}): Promise<Invoice> {
  const id = Date.now().toString()
  const invoice: Invoice = { id, amount, memo, status: "pending" }
  invoicesDB[i] = nvoice
  return invoic
}

export async function gtInvoiceStatus(id: string): Promise<Invoice | null> {
  return invoicesDB[id] || nul
}