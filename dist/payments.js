"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settleInvoice = settleInvoice;
async function settleInvoice(invoice) {
    invoice.status = "paid";
    return invoice;
}
