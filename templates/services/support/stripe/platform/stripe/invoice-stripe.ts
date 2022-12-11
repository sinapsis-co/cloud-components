import { UserClaims } from 'services/identity/entities/user-cognito';
import { Stripe, StripeRepo } from '.';
import { AcceptedCurrencies, Product } from '../../entities';
import { metaDataUser } from '../../utils/user-metadata';

export type PaymentInvoiceParams = {
  orderId: string;
  currency: AcceptedCurrencies;
  paymentMethodId: string | undefined;
  items: Product[];
  amount: number;
  user: UserClaims;
  invoiceId?: string;
  stripeId: string;
};

export const createInvoiceStripe = async (
  stripe: StripeRepo,
  stripeId: string,
  invoiceCreateParams?: Partial<Stripe.InvoiceCreateParams>
): Promise<Stripe.Response<Stripe.Invoice>> => {
  return await stripe.invoices.create({
    customer: stripeId,
    automatic_tax: {
      enabled: true,
    },
    ...invoiceCreateParams,
  });
};

export const createInvoiceItemsStripe = async (
  stripe: StripeRepo,
  order: Omit<PaymentInvoiceParams, 'paymentMethodId' | 'amount'> & { invoiceId: string },
  invoiceItemCreateParams?: Partial<Stripe.InvoiceItemCreateParams>
): Promise<Stripe.Response<Stripe.InvoiceItem>[]> => {
  return await Promise.all(
    order.items.map(async (itemOrder) => {
      const { amount, quantity, name } = itemOrder;
      const product = await stripe.products.create({
        name,
        metadata: {
          isOneTime: 'true',
          customerId: order.stripeId,
          ...invoiceItemCreateParams?.metadata,
          ...itemOrder,
        },
      });

      const item = await stripe.invoiceItems.create({
        customer: order.stripeId,
        quantity,
        description: name,
        invoice: order.invoiceId,
        price_data: {
          product: product.id,
          unit_amount: amount,
          currency: order.currency,
          tax_behavior: 'exclusive',
        },
        ...invoiceItemCreateParams,
        metadata: {
          customerId: order.stripeId,
          ...invoiceItemCreateParams?.metadata,
          ...itemOrder,
        },
      });

      await stripe.products.del(product.id);

      return item;
    })
  );
};
export const updateInvoiceItemsStripe = async (
  stripe: StripeRepo,
  items: PaymentInvoiceParams['items'],
  invoiceItemUpdateParams?: Partial<Stripe.InvoiceItemUpdateParams>
): Promise<Stripe.Response<Stripe.InvoiceItem>[]> => {
  return await Promise.all(
    items.map(async ({ invoiceItemId, ...service }) => {
      const item = stripe.invoiceItems.update(invoiceItemId!, {
        quantity: service.quantity,
        unit_amount: service.amount,
        ...invoiceItemUpdateParams,
        metadata: { ...invoiceItemUpdateParams?.metadata, ...service },
      });
      return item;
    })
  );
};

export const getInvoiceStripe = async (
  stripe: StripeRepo,
  invoiceId: string
): Promise<Stripe.Response<Stripe.Invoice>> => {
  return stripe.invoices.retrieve(invoiceId);
};

export const buildInvoice = async (
  stripe: StripeRepo,
  order: Omit<PaymentInvoiceParams, 'paymentMethodId' | 'amount'>,
  invoiceCreateParams?: Partial<Stripe.InvoiceCreateParams>,
  invoiceItemCreateParams?: Partial<Stripe.InvoiceItemCreateParams>
): Promise<{ invoice: Stripe.Response<Stripe.Invoice>; invoiceItem: Stripe.InvoiceItem[] }> => {
  let invoice = await createInvoiceStripe(stripe, order.stripeId, {
    ...invoiceCreateParams,
    custom_fields: [
      {
        name: 'Order number',
        value: order.orderId,
      },
    ],
    metadata: {
      customerId: order.user.sub,
      orderId: order.orderId,
      ...invoiceCreateParams?.metadata,
      ...metaDataUser(order.user),
    },
  });
  const invoiceItem = await createInvoiceItemsStripe(
    stripe,
    { ...order, invoiceId: invoice.id! },
    {
      metadata: {
        customerId: order.user.sub,
        orderId: order.orderId,
        ...invoiceItemCreateParams?.metadata,
        ...metaDataUser(order.user),
      },
    }
  );

  invoice = await stripe.invoices.retrieve(invoice.id!);

  return { invoice, invoiceItem };
};
