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
  const invoice: Invoce = { id, amount, memo, status: "pending" }
  invoicesDB[id] = invoice
  return invoice

export async function etnvoiceStatus(id: string): Promise<Invoice | null> {
  return invocesDB[id] || null
}