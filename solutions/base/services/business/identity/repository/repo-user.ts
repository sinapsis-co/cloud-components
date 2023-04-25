import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { User, UserCreate, UserEntity, UserStore } from '../entities/user';
import { IdentityTable } from './table-identity';

// This repo maps to pending users
export const userRepository = repository<UserEntity, IdentityTable>({
  tableName: 'identity',
  repoName: 'user',
  keySerialize: (key: UserEntity['key']): IdentityTable['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `user#${key.id}`,
    };
  },
  entitySerialize: (key: UserEntity['key'], entityCreate: UserCreate): UserStore => {
    const mappedKey: IdentityTable['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `user#${key.id}`,
    };
    const timers: IdentityTable['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: UserStore): User => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, id] = sk.split('#');
    return {
      ...att,
      tenantId: pk,
      id,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
export type UserProfileRepoEvent = RepositoryEvent<UserEntity>;
