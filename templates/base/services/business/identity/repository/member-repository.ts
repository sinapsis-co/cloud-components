import { repository } from '@sinapsis-co/cc-platform/integrations/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/integrations/repository/interface';
import { UserProfile, UserProfileBuilder, UserProfileCreate, UserProfileStore } from '../entities/user-profile';
import { IdentityTableBuilder } from './identity-table';

export const inviteRepository = repository<UserProfileBuilder, IdentityTableBuilder>({
  tableName: 'identity',
  repoName: 'member',
  keySerialize: (key: UserProfileBuilder['key']): UserProfileBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (key: UserProfileBuilder['key'], entityCreate: UserProfileCreate): UserProfileStore => {
    const mappedKey: UserProfileBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `member#${key.id}`,
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
