import { createOrderIncomePending } from './create-order/create-order-pending-income';
import { createOrderWithdrawalProcess } from './create-order/create-order-process-withdrawal';

const { createOrder } = {
  createOrder: {
    income: {
      pending: createOrderIncomePending,
    },
    withdrawal: {
      process: createOrderWithdrawalProcess,
    },
  },
};

export { createOrder };
