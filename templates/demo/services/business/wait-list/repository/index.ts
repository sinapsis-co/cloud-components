import { repository } from '@sinapsis-co/cc-platform/repository';
import { WaitList, WaitListUserBuilder, WaitListUserCreate, WaitListUserStore } from '../entities/wait-list-user';

export const waitListRepository = repository<WaitListUserBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'wait-list',
  keySerialize: (key: WaitListUserBuilder['key']): WaitListUserBuilder['storeMapping']['key'] => {
    return { pk: key.email };
  },
  entitySerialize: (key: WaitListUserBuilder['key'], entityCreate: WaitListUserCreate): WaitListUserStore => {
    const mappedKey: WaitListUserBuilder['storeMapping']['key'] = {
      pk: key.email,
    };
    const timers: WaitListUserBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: WaitListUserStore): WaitList => {
    const { pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      email: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
