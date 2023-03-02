import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { getInvoiceStripe, updateInvoiceItemsStripe } from 'services/support/stripe/platform/stripe/invoice-stripe';
import { Order, OrderIncome } from '../entities';
import { commissionSellerPlatform, platformFee } from '../utils/commission';
import { formatStripeToAmount } from '../utils/format-stripe-to-amount';

export const updateQuantityTemporalStrategy = async (data: Order & OrderIncome): Promise<Order & OrderIncome> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const client = getStripeClient({ secrets });

  const itemInvoice = await updateInvoiceItemsStripe(
    client,
    data.orderItem
      .map((i) => ({
        invoiceItemId: i.identifier?.partOfInvoice?.invoiceItemId as string,
        id: i.orderItemNumber,
        quantity: i.orderQuantity || 1,
        amount: i.orderItemSubTotal,
        name: i.name,
      }))
      .filter((i) => i.id !== 'platformFee')
  );

  const invoice = await getInvoiceStripe(client, data?.partOfInvoice?.invoiceId as string);
  const orderSubTotal = formatStripeToAmount(invoice.subtotal || 0) - platformFee;
  return {
    ...data,
    orderItem: data.orderItem.map((item) => {
      const productInInvoice = itemInvoice.find((invoice) => invoice?.metadata?.id === item.orderItemNumber);
      if (productInInvoice) {
        return {
          ...item,
          orderItemSubTotal: formatStripeToAmount(productInInvoice?.unit_amount ?? 0),
          metadata: {
            ...item.metadata,
            ...productInInvoice?.metadata,
          },
        };
      }
      return item;
    }),
    orderTotal: formatStripeToAmount(invoice.total || 0),
    orderSubTotal,
    orderTax: formatStripeToAmount(invoice.tax || 0),
    partOfInvoice: {
      invoiceId: invoice?.id as string,
    },
    orderPlatformFee: platformFee,
    partOfPlatform: commissionSellerPlatform(orderSubTotal),
    partOfSeller: orderSubTotal - commissionSellerPlatform(orderSubTotal),
  };
};
