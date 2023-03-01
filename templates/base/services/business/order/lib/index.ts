import { createOrderIncomePending } from './create-order/create-order-pending-income';

const { createOrder } = {
  createOrder: {
    income: {
      pending: createOrderIncomePending,
    },
  },
};

export { createOrder };
