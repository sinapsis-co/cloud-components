import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Transaction, TransactionBuilder, TransactionCreate, TransactionStore } from '../entities';

export const transactionRepo = repository<TransactionBuilder>({
  tableName: process.env.TRANSACTIONS_TABLE || process.env.TABLE!,
  repoName: 'transaction',
  keySerialize: (key: TransactionBuilder['key']): TransactionBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `${key.orderId}#${key.id}`,
    };
  },
  entitySerialize: (key: TransactionBuilder['key'], entityCreate: TransactionCreate): any => {
    const mappedKey: TransactionBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.orderId}#${key.id}`,
    };
    const timers: TransactionBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: TransactionStore): Transaction => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      orderId: sk.split('#')[0],
      id: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type TransactionRepoEvent = RepositoryEvent<TransactionBuilder>;
