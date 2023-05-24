import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { InviteModel } from '../model/invite';
import { IdentityStoreTable } from '../store/table-identity';

export const repoInvite = repository<IdentityStoreTable, InviteModel>(IdentityStoreTable, {
  type: 'Invite',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `INVITE#${key.inviteId}`,
      SK: `INVITE#${key.inviteId}`,
    };
  },
  // indexSerialize: (entity: InviteModel['Entity']) => {
  //   return { GSI_1: { PK: entity.email } };
  // },
});
