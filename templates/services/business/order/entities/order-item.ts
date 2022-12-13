export type OrderFrequencyProduct = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
export const frequencyTypes: OrderFrequencyProduct[] = ['hourly', 'daily', 'weekly', 'monthly', 'yearly'];

export type OrderItemIdentifier = {
  // TODO: add more types
  partOfInvoice?: {
    invoiceId: string;
    invoiceItemId: string;
  };
};

export type OrderItem = {
  orderItemSubTotal: number;
  orderItemCategory?: string;
  orderItemNumber: string;
  orderQuantity: number;
  orderFrequency?: OrderFrequencyProduct | null;
  name: string;
  description?: string;
  identifier: OrderItemIdentifier | null;
  metadata?: Record<string, any>;
};
