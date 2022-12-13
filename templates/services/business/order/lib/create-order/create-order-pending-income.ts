import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { FullLocation } from 'services/business/identity/entities/user-full-location';
import { OrderCreate, OrderIncome } from '../../entities';
import { OrderFrequencyProduct, OrderItem } from '../../entities/order-item';
import { OrderSeller } from '../../entities/order-seller';
import { orderTemporalSubStrategy } from '../../platform/order-pending-sub';
import { orderTemporalStrategy } from '../../platform/stripe-create-invoice';

export type CreateOrderIncomePending = {
  orderId: string;
  orderItem: OrderItem[];
  orderFrequency?: OrderFrequencyProduct;
  orderQuantity: number;
  seller?: OrderSeller;
  billingAddress: FullLocation;
  isSubscription?: boolean;
};
export type CreateOrderIncomePendingResponse = Omit<
  OrderCreate & OrderIncome,
  'orderDate' | 'paymentMethod' | 'timers' | 'paymentUrl' | 'paymentMethodId' | 'orderStatus' | 'orderType' | 'orderId'
>;
export const createOrderIncomePending = async (
  { orderId, orderItem, seller, billingAddress, isSubscription }: CreateOrderIncomePending,
  claims: UserClaims
): Promise<CreateOrderIncomePendingResponse> => {
  if (isSubscription) {
    return orderTemporalSubStrategy(
      {
        billingAddress,
        seller,
        orderItem,
      },
      claims
    );
  }

  const orderTemporal = await orderTemporalStrategy(
    {
      billingAddress,
      orderId,
      seller,
      orderItem,
    },
    claims
  );

  return orderTemporal;
};
