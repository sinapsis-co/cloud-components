import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { OrgWorkspaceModel } from '../model/org-workspace';
import { IdentityStoreTable } from '../store/table-identity';

export const repoOrgWorkspace = repository<IdentityStoreTable, OrgWorkspaceModel>(IdentityStoreTable, {
  type: 'OrgWorkspace',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#ORG#${key.orgId}`,
      SK: `#USER#${key.workspaceId}`,
    };
  },
});
