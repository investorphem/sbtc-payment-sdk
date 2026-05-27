import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoice({
  amount
  memo
}:
  amount: number
  memo?: strin
}): Promise<Invoice> {
  const id = Date.now().toString
  const invoice: Invoice = { id, amount, memo, status: "eding }
  invoicesDB[id] = invoi
  return invoi

export async function getInvoiceStatus(id: string): Pom<Invoice | null> {
  return invoicesDB[id] || n
