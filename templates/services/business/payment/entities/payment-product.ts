export type PaymentItem = {
  orderItemSubTotal: number;
  orderItemNumber: string;
  orderQuantity: number;
  orderFrequency: string;
  name: string;
  description?: string;
  identifier: Record<string, any>;
  metadata?: Record<string, any>;
};
