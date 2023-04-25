import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { Base, BaseCreate, BaseEntity, BaseStore } from '../entities/base';
import { BaseTableBuilder } from './table-base';

export const baseRepo = repository<BaseEntity, BaseTableBuilder>({
  tableName: 'base',
  repoName: 'base',
  keySerialize: (key: BaseEntity['key']): BaseTableBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: BaseEntity['key'], entityCreate: BaseCreate): BaseStore => {
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

export type BaseRepoEvent = RepositoryEvent<BaseEntity>;
