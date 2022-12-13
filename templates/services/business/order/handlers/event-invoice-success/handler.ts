import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { orderRepo } from '../../repository';
import { generateId } from '../../utils/generate-id';

export const handler = eventHandler<any>(async (event) => {
  const { tenantId, ...body } = event.detail;

  await orderRepo.createItem(
    { tenantId, orderId: generateId() },
    {
      orderType: 'INCOME',
      orderDate: new Date().toISOString(),
      orderStatus: 'SUCCESS',
      orderTotal: 0,
      orderSubTotal: 0,
      orderTax: 0,
      customerId: '',
      priceCurrency: 'USD',
      customer: {
        id: '',
        email: '',
        givenName: '',
        familyName: '',
      },
      orderItem: [
        {
          orderItemNumber: '1',
          orderItemCategory: 'INCOME',
          description: '',
          name: 'Invoice',
          orderItemSubTotal: body.amount,
          orderQuantity: 1,
          identifier: {},
        },
      ],
    }
  );
});
