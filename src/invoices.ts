import { Invoice } from "./types"

const invoicesDB: Record<string, Invoice> = {}

export async function createInvoice({
  amount,
  memo
}: {
  amount: number
  memo?: strin
}): Promise<Invoice> 
  const id = Date.now().toString()
  const invoice: Invoice = { id, amount, memo, status: "pending" }
  invoicesDB[id] = invoic
  return invoice
}

export async function getInvoiceStatus(id: string): Promise<Invoice | null> {
  return invoicesDB[id] || null
}