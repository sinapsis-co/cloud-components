import { repository } from '@sinapsis-co/cc-sdk/integration/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/repository/interface';
import { User, UserBuilder, UserCreate, UserStore } from '../entities/user';
import { IdentityTableBuilder } from './identity-table';

// This repo maps to confirm users
export const pendingRepository = repository<UserBuilder, IdentityTableBuilder>({
  tableName: 'identity',
  repoName: 'user',
  keySerialize: (key: UserBuilder['key']): IdentityTableBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `pending#${key.id}`,
    };
  },
  entitySerialize: (key: UserBuilder['key'], entityCreate: UserCreate): UserStore => {
    const mappedKey: IdentityTableBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `pending#${key.id}`,
    };
    const timers: IdentityTableBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: UserStore): User => {
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
export type UserProfileRepoEvent = RepositoryEvent<UserBuilder>;
