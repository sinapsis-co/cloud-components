import { Model } from '@sinapsis-co/cc-sdk/model';
import { Role } from '../entities/role';

export type OrgWorkspaceModel = Model<{
  type: 'OrgWorkspace';
  body: {
    role: Role;
  };
  key: {
    orgId: string;
    workspaceId: string;
  };
}>;

export type OrgWorkspace = OrgWorkspaceModel['Entity'];
