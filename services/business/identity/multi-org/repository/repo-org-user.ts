import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';

import { OrgUserModel } from '../model/org-user';
import { IdentityStoreTable } from '../store/table-identity';

export const repoOrgUser = repository<IdentityStoreTable, OrgUserModel>(IdentityStoreTable, {
  type: 'OrgUser',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#ORG#${key.orgId}`,
      SK: `#USER#${key.userId}`,
    };
  },
});
