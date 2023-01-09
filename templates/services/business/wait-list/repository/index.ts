import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { PrelaunchUserBuilder, PrelaunchUserCreate, PrelaunchUserStore, WaitList } from '../entities/prelaunch-user';

export const waitListRepository = repository<PrelaunchUserBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'prelaunch',
  keySerialize: (key: PrelaunchUserBuilder['key']): PrelaunchUserBuilder['storeMapping']['key'] => {
    return { pk: key.email };
  },
  entitySerialize: (key: PrelaunchUserBuilder['key'], entityCreate: PrelaunchUserCreate): PrelaunchUserStore => {
    const mappedKey: PrelaunchUserBuilder['storeMapping']['key'] = {
      pk: key.email,
    };
    const timers: PrelaunchUserBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: PrelaunchUserStore): WaitList => {
    const { pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      email: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
