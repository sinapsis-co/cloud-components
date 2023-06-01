import { Model } from '@sinapsis-co/cc-sdk/model';
import { Role } from '../entities/role';

export type InviteModel = Model<{
  type: 'Invite';
  body: {
    email: string;
    orgId: string;
    role: Role;
    workspaceId?: string;
  };
  key: {
    inviteId: string;
  };
}>;

export type Invite = InviteModel['Entity'];
