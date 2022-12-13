import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { UserProfile, UserProfileBuilder, UserProfileCreate, UserProfileStore } from '../entities/user-profile';

export const userProfileRepository = repository<UserProfileBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'user-profile',
  keySerialize: (key: UserProfileBuilder['key']): UserProfileBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: UserProfileBuilder['key'], entityCreate: UserProfileCreate): UserProfileStore => {
    const mappedKey: UserProfileBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: entityCreate.isPending ? `pending#${key.id}` : `user#${key.id}`,
    };
    const timers: UserProfileBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: UserProfileStore): UserProfile => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    const [type, id] = sk.split('#');
    return {
      ...att,
      tenantId: pk,
      id,
      ...(type === 'pending' ? { isPending: true } : {}),
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
export type UserProfileRepoEvent = RepositoryEvent<UserProfileBuilder>;
