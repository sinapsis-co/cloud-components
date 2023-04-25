import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import { RepositoryEvent } from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { Invite, InviteCreate, InviteEntity, InviteStore } from '../entities/invite';
import { IdentityTable } from './table-identity';

// This repo maps to confirm users
export const inviteRepository = repository<InviteEntity, IdentityTable>({
  tableName: 'identity',
  repoName: 'invite',
  keySerialize: (key: InviteEntity['key']): IdentityTable['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `invite#${key.id}`,
    };
  },
  entitySerialize: (key: InviteEntity['key'], entityCreate: InviteCreate): InviteStore => {
    const mappedKey: IdentityTable['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `invite#${key.id}`,
    };
    const timers: IdentityTable['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: InviteStore): Invite => {
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
export type InviteRepoEvent = RepositoryEvent<InviteEntity>;
