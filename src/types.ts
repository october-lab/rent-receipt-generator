export interface RentDetails {
  tenantName: string;
  landlordName: string;
  address: string;
  landlordPan?: string;
  monthlyRent: number;
  rentFrom: Date | null;
  rentTill: Date | null;
  paymentMethod: 'CASH' | 'UPI' | 'BANK_TRANSFER';
  receiptType: 'MONTHLY' | 'CONSOLIDATED';
  includeTransactionIds: boolean;
  transactionIds: { [key: string]: string };
}

export type Step = 'PERSONAL_DETAILS' | 'RENT_DETAILS' | 'PREVIEW';