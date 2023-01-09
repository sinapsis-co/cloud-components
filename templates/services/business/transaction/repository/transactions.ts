import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Transaction, TransactionBuilder, TransactionCreate, TransactionStore } from '../entities';

export const transactionRepo = repository<TransactionBuilder>({
  tableName: process.env.TRANSACTIONS_TABLE || process.env.TABLE!,
  repoName: 'transaction',
  keySerialize: (key: TransactionBuilder['key']): TransactionBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}#${key.userId}}`,
      sk: `${key.id}`,
    };
  },
  entitySerialize: (key: TransactionBuilder['key'], entityCreate: TransactionCreate): any => {
    const mappedKey: TransactionBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.id}`,
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
      tenantId: pk.split('#')[0],
      userId: pk.split('#')[1],
      id: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type TransactionRepoEvent = RepositoryEvent<TransactionBuilder>;
