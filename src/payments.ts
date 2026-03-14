import { Invoice } from "./types"

export async function settleInvoice(invoice: Invoice): Promise<Invoice> {
  invoice.status = "paid"
  return invoice
}