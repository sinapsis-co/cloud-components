import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Place, PlaceBuilder, PlaceCreate, PlaceStore } from '../entities/place';

export const placeRepo = repository<PlaceBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'place',
  keySerialize: (key: PlaceBuilder['key']): PlaceBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id
    };
  },
  entitySerialize: (key: PlaceBuilder['key'], entityCreate: PlaceCreate): PlaceStore => {
    const mappedKey: PlaceBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id
    };
    const timers: PlaceBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: PlaceStore): Place => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      id: sk,
      tenantId: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type PlaceRepoEvent = RepositoryEvent<PlaceBuilder>;
