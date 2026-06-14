// tests/client.test.ts
import { describe, it, expect } from 'vitest';
import { SBTCClient } from '../src/client';

describe('SBTCClient invoices', () => {
  const client = new SBTCClient({
    network: 'mainnet',
    contractAddress: 'SP123...',
    contractName: 'sbtc-payment-processor',


  it('should pay an invoice', () => {
    const invoice = client.createInvoice(50, 'sBTC');
    const paidInvoice = client.payInvoice(invoice.id);
    expect(paidInvoice?.paid).toBe(true);
  });
});