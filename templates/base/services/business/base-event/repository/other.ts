import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Other, OtherBuilder, OtherCreate, OtherStore } from '../entities/other';

export const otherRepo = repository<OtherBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'other',
  keySerialize: (key: OtherBuilder['key']): OtherBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: OtherBuilder['key'], entityCreate: OtherCreate): OtherStore => {
    const mappedKey: OtherBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id,
    };
    const timers: OtherBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: OtherStore): Other => {
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

export type OtherRepoEvent = RepositoryEvent<OtherBuilder>;
