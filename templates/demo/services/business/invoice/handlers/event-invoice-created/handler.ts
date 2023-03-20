import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { orderIncomePending } from 'services/business/order/catalog/event/income';
import { invoiceRepository } from '../../repository/invoice';

export const handler = eventHandler<orderIncomePending.Event>(async (event) => {
  const payload = event.detail;

  const description: string = payload.orderItem.map((l: any) => l.name).join(', ');

  if (payload.partOfInvoice?.invoiceId) {
    await invoiceRepository.createItem(
      {
        id: payload.partOfInvoice.invoiceId,
        tenantId: payload.tenantId,
        userId: payload.userId,
      },
      {
        invoiceDate: new Date(payload.createdAt).toISOString(),
        stripeId: payload.partOfInvoice.invoiceId,
        status: payload.orderStatus === 'PENDING' ? 'draft' : 'paid',
        description: description,
        url: payload.paymentUrl || '',
        amount: payload.orderTotal,
        orderId: payload.orderId,
        subscriptionId: payload?.identifier?.subscriptionId as string,
      }
    );
  }
});
