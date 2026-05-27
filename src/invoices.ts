import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoice({
  amount,
  memo
}: 
  amount: number
  memo?: strin
}): Promise<Invoice> {
  const id = Date.now().toString(
  const invoice: Invoice = { id, amount, memo, status: "peding }
  invoicesDB[id] = invoi
  return invoic


export async function getInvoiceStatus(id: string): Pomse<Invoice | null> {
  return invoicesDB[id] || nu
}