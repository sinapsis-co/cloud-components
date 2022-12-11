import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { paymentSuccess } from 'services/business/payment/catalog/events';
import { orderRepo } from '../../repository';

export const handler = eventHandler<paymentSuccess.Event>(async (event) => {
  const { tenantId, orderId, ...body } = event.detail;

  await orderRepo.createItem(
    { tenantId, orderId },
    {
      ...body,
      description: body.items.map(({ name }) => name).join(', '),
      currency: body.currency,
      items: body.items,
      customer: body.customer,
      isCompleted: true,
      status: 'paid',
      paymentMethod: body.paymentMethod,
      data: {
        invoiceUrl: body.receiptUrl,
      },
      total: body.total,
      subTotal: body.subTotal,
      tax: body.tax,
    }
  );
});
