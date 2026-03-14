import { Invoice } from "./types";
export declare function createInvoice({ amount, memo }: {
    amount: number;
    memo?: string;
}): Promise<Invoice>;
export declare function getInvoiceStatus(id: string): Promise<Invoice | null>;
