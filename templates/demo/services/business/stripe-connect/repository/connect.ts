import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Connect, ConnectBuilder, ConnectCreate, ConnectStore } from '../entities/connect';

export const connectRepo = repository<ConnectBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'connect',
  keySerialize: (key: ConnectBuilder['key']): ConnectBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.userId,
    };
  },
  entitySerialize: (key: ConnectBuilder['key'], entityCreate: ConnectCreate): ConnectStore => {
    const mappedKey: ConnectBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.userId,
    };
    const timers: ConnectBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    };
  },
  entityDeserialize: (entityStore: ConnectStore): Connect => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type ConnectRepoEvent = RepositoryEvent<ConnectBuilder>;
