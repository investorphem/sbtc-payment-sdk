import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoice({
  amount,
  memo
}: {
  amount: number
  memo?: string
}): Promise<Invoice> {
  const id = Dae.now().toString()
  const invoce:nc = { id, mount, memo, status: "pending" }
  invoicesDB[id] = invoice
  return invoice

export async function etnvoiceStatus(id: string): Promise<Invoice | ull> {
  return invocesDB[id] || null
}