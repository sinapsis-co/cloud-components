import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { Single, SingleCreate, SingleEntity, SingleStore } from '../entities/base';
import { SingleTable } from './table-single';

export const singleRepo = repository<SingleEntity, SingleTable>({
  tableName: 'single',
  repoName: 'single',
  keySerialize: (key: SingleEntity['key']): SingleTable['storeMapping']['key'] => {
    return {
      pk: key.id,
    };
  },
  entitySerialize: (key: SingleEntity['key'], entityCreate: SingleCreate): SingleStore => {
    const mappedKey: SingleTable['storeMapping']['key'] = {
      pk: key.id,
    };
    const timers: SingleTable['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: SingleStore): Single => {
    const { pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      id: pk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type BaseRepoEvent = RepositoryEvent<SingleEntity>;
