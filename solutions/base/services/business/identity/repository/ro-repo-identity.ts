import { readOnlyRepository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { Invite, InviteEntity, InviteStore } from '../entities/invite';
import { User, UserEntity, UserStore } from '../entities/user';
import { IdentityTable } from './table-identity';

// This repo maps to the whole table for listing and index queries
export const identityRepository = readOnlyRepository<UserEntity | InviteEntity, IdentityTable>({
  tableName: 'identity',
  repoName: 'user',
  keySerialize: (key: UserEntity['key'] | UserEntity['key']): IdentityTable['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  // We must map every entity mapped in the table
  entityDeserialize: (entityStore: UserStore | InviteStore): User | Invite => {
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
