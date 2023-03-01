import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Payment, PaymentMethodDetails } from './payment';
import { PaymentAcceptedCurrencies } from './payment-currency';
import { GatewayAvailable } from './payment-gateway';
import { PaymentItem } from './payment-product';

export type PaymentConnector = {
  orderId: string;
  paymentMethod?: string;
  currency: PaymentAcceptedCurrencies;
  gateway: GatewayAvailable;
  tenantId: string;
  items?: PaymentItem[];
  subTotal: number;
  tax?: number | null;
  total: number;
  customer: {
    email: string;
    givenName: string;
    familyName: string;
  };
  invoiceId?: string;
  metadata?: Record<string, string | number>;
};

export type PaymentConnectorResponse = {
  chargeId?: string;
  status: Payment['status'];
  receiptUrl?: string;
  paymentMethodDetails?: PaymentMethodDetails;
  metadata?: Record<string, any>;
  error?: string;
  generic_error?: Record<string, any>;
};

export type HandlerPaymentConnector = (
  connector: PaymentConnector,
  claims: UserClaims
) => Promise<PaymentConnectorResponse>;
