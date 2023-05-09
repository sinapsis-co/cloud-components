import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { InviteModel } from '../model/invite';
import { IdentityStoreTable } from '../store/table-identity';

export const repoInvite = repository<IdentityStoreTable, InviteModel>(IdentityStoreTable, {
  type: 'invite',
  tableName: 'identity',
  keySerialize: (key: InviteModel['Key']) => {
    return {
      PK: key.tenantId,
      SK: `invite#${key.id}`,
    };
  },
  // indexSerialize: (entity: InviteModel['Entity']) => {
  //   return { GSI_1: { PK: entity.email } };
  // },
});
