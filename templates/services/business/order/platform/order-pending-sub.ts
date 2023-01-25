import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { FullLocation } from 'services/business/identity/entities/user-full-location';
import { getOrCreateCustomer } from 'services/business/stripe-customer/lib';
import { secretsStripe } from 'services/support/stripe/catalog';
import { OrderItem } from '../entities/order-item';
import { OrderSeller } from '../entities/order-seller';
import { CreateOrderIncomePendingResponse } from '../lib/create-order/create-order-pending-income';
import { addMinutes } from '../utils/add-days';

export const orderTemporalSubStrategy = async (
  {
    orderItem: orderItems,
    seller,
    billingAddress,
    orderId,
  }: { orderItem: OrderItem[]; seller?: OrderSeller; billingAddress?: FullLocation; orderId: string },
  claims: UserClaims
): Promise<CreateOrderIncomePendingResponse> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const orderItem = orderItems.map((item, i) => {
    return {
      ...item,
      orderItemNumber: item.orderItemNumber || `${orderId}-${i}`,
      orderItemSubTotal: item.orderItemSubTotal || 0,
      orderQuantity: item.orderQuantity || 0,
    };
  });
  const address = {
    postal_code: billingAddress?.zipCode,
    line1: billingAddress?.address,
    city: billingAddress?.city,
    state: billingAddress?.state,
    country: billingAddress?.countryCode,
  };

  const { stripeId } = await getOrCreateCustomer(
    {
      secrets,
      tenantId: claims.tenantId,
      sub: claims.sub,
      customer: claims,
    },
    {
      address,
    }
  );

  return {
    seller,
    customer: {
      id: claims.sub,
      email: claims.email,
      givenName: claims.given_name,
      familyName: claims.family_name,
    },
    sellerId: seller?.id,
    orderItem: orderItem,
    orderPlatformFee: 0,
    customerId: claims.sub,
    priceCurrency: 'USD',
    orderTotal: orderItem.reduce((acc, item) => acc + (item.orderItemSubTotal * item.orderQuantity || 0), 0),
    orderSubTotal: orderItem.reduce((acc, item) => acc + (item.orderItemSubTotal * item.orderQuantity || 0), 0),
    orderTax: 0,
    expiredAt: addMinutes(new Date(), Number(process.env.EXPIRED_MINUTES || 5)).getTime(),
    identifier: {
      stripeId,
    },
  };
};
