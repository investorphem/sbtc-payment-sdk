// tests/client.test.ts
import { describe, it, expect } from 'vitest';
import { SBTCClient } from '../src/client';

describe('SBTCClient invoices', () => {
  const client = new SBTCClient({
    network: 'mainnet',
    contractAddress: 'SP123...',
    contractName: 'sbtc-payment-processor',
  });

  it('should create an invoice', () => {
    const invoice = client.createInvoice(100, 'STX');
    expect(invoice).toHaveProperty('id');
    expect(invoice.amount).toBe(100);
    expect(invoice.currency).toBe('STX');
    expect(invoice.paid).toBe(false);
  });

  it('should pay an invoice', () => {
    const invoice = client.createInvoice(50, 'sBTC');
    const paidInvoice = client.payInvoice(invoice.id);
    expect(paidInvoice?.paid).toBe(true);
  });
});