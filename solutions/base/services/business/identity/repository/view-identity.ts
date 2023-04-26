import { view } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { Invite, InviteEntity, InviteStore } from '../entities/invite';
import { User, UserEntity, UserStore } from '../entities/user';
import { IdentityTable } from './table-identity';

// This view maps to the whole table for listing and index queries
export const identityView = view<UserEntity | InviteEntity, IdentityTable>({
  tableName: 'identity',
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
