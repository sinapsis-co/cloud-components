import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { FullLocation } from 'services/business/identity/entities/user-full-location';
import { getOrCreateCustomer } from 'services/business/stripe-customer/lib';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { buildInvoice } from 'services/support/stripe/platform/stripe/invoice-stripe';
import { OrderItem, OrderItemIdentifier } from '../entities/order-item';
import { OrderSeller } from '../entities/order-seller';
import { CreateOrderIncomePendingResponse } from '../lib/create-order/create-order-pending-income';
import { commissionSellerPlatform, platformFee } from '../utils/commission';
import { formatStripeToAmount } from '../utils/format-stripe-to-amount';

export const orderTemporalStrategy = async (
  {
    orderId,
    orderItem,
    seller,
    billingAddress,
  }: { orderId: string; orderItem: OrderItem[]; seller?: OrderSeller; billingAddress: FullLocation },
  claims: UserClaims
): Promise<CreateOrderIncomePendingResponse> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const address = {
    postal_code: billingAddress.zipCode,
    line1: billingAddress.address,
    city: billingAddress.city,
    state: billingAddress.state,
    country: billingAddress.countryCode,
  };

  const { stripeId } = await getOrCreateCustomer(
    {
      secrets,
      tenantId: claims.sub,
      customer: claims,
    },
    {
      address,
      shipping: {
        address,
        name: `${claims.given_name} ${claims.family_name}`,
      },
    }
  );

  const client = getStripeClient({ secrets });

  const { invoiceItem, invoice } = await buildInvoice(
    client,
    {
      orderId,
      currency: 'USD',
      items: orderItem.map((item) => ({
        id: item.orderItemNumber || '',
        amount: item.orderItemSubTotal || 0,
        name: item.name,
        quantity: item.orderQuantity || 0,
      })),
      user: claims,
      stripeId,
    },
    {
      metadata: {
        ...seller,
        sellerId: seller?.id as string,
      },
    },
    {
      metadata: {
        ...seller,
        sellerId: seller?.id as string,
      },
    }
  );

  const orderSubTotal = formatStripeToAmount(invoice.subtotal || 0) - platformFee;
  return {
    seller,
    customer: {
      id: claims.sub,
      email: claims.email,
      givenName: claims.given_name,
      familyName: claims.family_name,
    },
    sellerId: seller?.id,
    orderItem: orderItem.map((item) => {
      const productInInvoice = invoiceItem.find((invoice) => invoice?.metadata?.id === item.orderItemNumber);
      return {
        ...item,
        orderItemSubTotal: formatStripeToAmount(productInInvoice?.unit_amount ?? 0),
        identifier: {
          ...(item.identifier as OrderItemIdentifier),
          sellerId: seller?.id,
          partOfInvoice: {
            invoiceId: invoice?.id as string,
            invoiceItemId: productInInvoice?.id as string,
          },
        },
        metadata: {
          ...productInInvoice?.metadata,
        },
      };
    }),
    orderPlatformFee: platformFee,
    customerId: claims.sub,
    priceCurrency: invoice.currency as string,
    orderTotal: formatStripeToAmount(invoice.total || 0),
    orderSubTotal,
    orderTax: formatStripeToAmount(invoice.tax || 0),
    partOfInvoice: {
      invoiceId: invoice?.id as string,
    },
    partOfPlatform: commissionSellerPlatform(orderSubTotal),
    partOfSeller: orderSubTotal - commissionSellerPlatform(orderSubTotal),
  };
};
