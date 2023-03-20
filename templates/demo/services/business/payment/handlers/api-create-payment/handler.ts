import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { OrderIncome } from 'services/business/order/entities';
import { Order } from 'services/business/order/entities/order';
import { errorApi } from 'services/support/utils/api-error';
import { orderRepo } from '../../../order/repository';
import { createPayment } from '../../catalog/api';
import { PaymentConnector } from '../../entities';
import { connectorPayment } from '../../platform/connector';
import { paymentRepository } from '../../repository';
import { ERROR_MISSING_ITEMS, ERROR_NOT_IS_PENDING_INCOME } from '../../utils/errors';

export const handler = apiHandler<createPayment.Interface>(async (event, request) => {
  const { sub, tenantId } = request.claims;
  const { paymentMethodId, orderId } = request.body;
  const paymentIntentId = uuid();

  const order = (await orderRepo.getItem({
    tenantId,
    userId: sub,
    orderId,
  })) as unknown as Order & OrderIncome;

  if (order.orderStatus !== 'PENDING' || order.orderType !== 'INCOME') {
    throw errorApi(ERROR_NOT_IS_PENDING_INCOME);
  }

  if (order.orderItem.length === 0) {
    throw errorApi(ERROR_MISSING_ITEMS);
  }

  const buildPayment: PaymentConnector = {
    ...order,
    orderId,
    paymentMethod: paymentMethodId,
    currency: 'USD',
    gateway: 'STRIPE',
    subTotal: order.orderSubTotal,
    tax: order.orderTax,
    total: order.orderTotal,
    invoiceId: order?.partOfInvoice?.invoiceId as string,
  };

  try {
    const runStrategy = await connectorPayment['STRIPE'](buildPayment, request.claims);

    const payment = await paymentRepository.createItem(
      { tenantId: sub, paymentIntentId },
      {
        customer: buildPayment.customer,
        receiptUrl: runStrategy.receiptUrl,
        status: runStrategy.status,
        paymentMethod: runStrategy.paymentMethodDetails
          ? {
              gateway: buildPayment.gateway,
              paymentMethodDetails: runStrategy.paymentMethodDetails,
            }
          : undefined,
        orderId: buildPayment.orderId,
        currency: buildPayment.currency,
        tax: buildPayment.tax,
        subTotal: buildPayment.subTotal,
        total: buildPayment.total,
        gateway: 'STRIPE',
      }
    );

    return payment;
  } catch (e) {
    await paymentRepository.createItem(
      { tenantId: sub, paymentIntentId },
      {
        status: 'FAILED',
        gateway: 'STRIPE',
        hasError: true,
        error: {
          code: (e as unknown as any).code,
          message: (e as unknown as any).message,
        },
        orderId: buildPayment.orderId,
        currency: buildPayment.currency,
        customer: buildPayment.customer,
        subTotal: buildPayment.subTotal,
        tax: buildPayment.tax,
        total: buildPayment.total,
      }
    );

    throw e;
  }
}, createPayment.config);
