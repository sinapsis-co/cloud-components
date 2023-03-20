import { repository } from '@sinapsis-co/cc-platform/repository';
import {
    UserProfileBackoffice,
    UserProfileBackofficeBuilder,
    UserProfileBackofficeCreate,
    UserProfileBackofficeStore
} from '../entities/user-profile';

export const userProfileRepository = repository<UserProfileBackofficeBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'user-profile-backoffice',
  keySerialize: (key: UserProfileBackofficeBuilder['key']): UserProfileBackofficeBuilder['storeMapping']['key'] => {
    return { pk: key.id };
  },
  entitySerialize: (
    key: UserProfileBackofficeBuilder['key'],
    entityCreate: UserProfileBackofficeCreate
  ): UserProfileBackofficeStore => {
    const mappedKey: UserProfileBackofficeBuilder['storeMapping']['key'] = { pk: key.id };
    const timers: UserProfileBackofficeBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: UserProfileBackofficeStore): UserProfileBackoffice => {
    const { pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      id: pk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
