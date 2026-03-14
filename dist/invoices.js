"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoice = createInvoice;
exports.getInvoiceStatus = getInvoiceStatus;
const invoicesDB = {};
async function createInvoice({ amount, memo }) {
    const id = Date.now().toString();
    const invoice = { id, amount, memo, status: "pending" };
    invoicesDB[id] = invoice;
    return invoice;
}
async function getInvoiceStatus(id) {
    return invoicesDB[id] || null;
}
