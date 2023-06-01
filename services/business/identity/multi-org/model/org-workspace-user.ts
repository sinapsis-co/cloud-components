import { Model } from '@sinapsis-co/cc-sdk/model';
import { Role } from '../entities/role';

export type OrgWorkspaceUserModel = Model<{
  type: 'OrgWorkspaceUser';
  body: {
    role: Role;
  };
  key: {
    orgId: string;
    workspaceId: string;
    userId: string;
  };
}>;

export type OrgWorkspaceUser = OrgWorkspaceUserModel['Entity'];
