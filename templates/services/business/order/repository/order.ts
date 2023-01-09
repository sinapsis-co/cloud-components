import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Order, OrderBuilder, OrderCreate, OrderIncome, OrderStore, OrderWithdrawal } from '../entities/order';

export const orderRepo = repository<OrderBuilder>({
  tableName: process.env.ORDER_TABLE! || process.env.TABLE!,
  repoName: 'order',
  keySerialize: (key: OrderBuilder['key']): OrderBuilder['storeMapping']['key'] => {
    return {
      sk: key.orderId,
      pk: `${key.tenantId}#${key.userId}`,
    };
  },
  entitySerialize: (key: OrderBuilder['key'], entityCreate: OrderCreate): OrderStore => {
    const mappedKey: OrderBuilder['storeMapping']['key'] = {
      sk: key.orderId,
      pk: key.tenantId,
    };
    const timers: OrderBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as OrderStore & (OrderWithdrawal | OrderIncome);
  },
  entityDeserialize: (entityStore: OrderStore): Order => {
    const { sk, pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      orderId: sk,
      tenantId: pk.split('#')[0],
      userId: pk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type OrderRepoEvent = RepositoryEvent<OrderBuilder>;
