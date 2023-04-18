import { repository } from '@sinapsis-co/cc-sdk/integration/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/repository/interface';
import { Base, BaseBuilder, BaseCreate, BaseStore } from '../entities/base';
import { BaseTableBuilder } from './base-table';

export const baseRepo = repository<BaseBuilder, BaseTableBuilder>({
  tableName: 'base',
  repoName: 'base',
  keySerialize: (key: BaseBuilder['key']): BaseTableBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: BaseBuilder['key'], entityCreate: BaseCreate): BaseStore => {
    const mappedKey: BaseTableBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id,
    };
    const timers: BaseTableBuilder['storeMapping']['timers'] = {
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
