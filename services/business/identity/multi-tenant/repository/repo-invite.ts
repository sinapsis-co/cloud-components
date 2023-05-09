import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { InviteModel } from '../model/invite';
import { IdentityStoreTable } from '../store/table-identity';

export const repoInvite = repository<IdentityStoreTable, InviteModel>(IdentityStoreTable, {
  type: 'invite',
  tableName: 'identity',
  keySerialize: (key: InviteModel['Key']) => {
    return {
      pk: key.tenantId,
      sk: `invite#${key.id}`,
    };
  },
  indexSerialize: (body: InviteModel['Body'] & InviteModel['Base']) => {
    return { gsi1: { pk: body.email } };
  },
});
