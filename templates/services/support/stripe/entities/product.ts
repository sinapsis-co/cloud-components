import { PaymentFrequency } from './subscription';

export type Provider = 'stripe';

export interface ExternalRef {
  provider: Provider;
  id: string;
}

export type Product = {
  id: string;
  name: string;
  amount: number;
  quantity: number;
  invoiceItemId?: string;
};

export type ProductWithFrequency = {
  recurrent?: boolean;
  frequency?: PaymentFrequency;
  frequencyCount?: number;
  externalRefs?: ExternalRef[];
  isActive: boolean;
} & Product;
