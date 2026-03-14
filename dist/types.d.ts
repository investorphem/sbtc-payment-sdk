export type InvoiceStatus = "pending" | "paid" | "expired";
export interface Invoice {
    id: string;
    amount: number;
    memo?: string;
    status: InvoiceStatus;
}
