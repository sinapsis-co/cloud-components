import { HandlerPaymentConnector } from '../entities';
import { GatewayAvailable } from '../entities/payment-gateway';
import { paymentStripe } from './connector-stripe';

export const connectorPayment: Record<GatewayAvailable, HandlerPaymentConnector> = {
  STRIPE: paymentStripe,
};
