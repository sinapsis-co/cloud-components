import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { OrgModel } from '../model/org';
import { IdentityStoreTable } from '../store/table-identity';

export const repoOrg = repository<IdentityStoreTable, OrgModel>(IdentityStoreTable, {
  type: 'Org',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#ORG#${key.orgId}`,
      SK: `#ORG#${key.orgId}`,
    };
  },
});
