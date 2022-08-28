import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Base, BaseBuilder, BaseCreate, BaseStore } from '../entities/base';

export const baseRepo = repository<BaseBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'base',
  keySerialize: (key: BaseBuilder['key']): BaseBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: BaseBuilder['key'], entityCreate: BaseCreate): BaseStore => {
    const mappedKey: BaseBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id,
    };
    const timers: BaseBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: BaseStore): Base => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      id: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type BaseRepoEvent = RepositoryEvent<BaseBuilder>;
