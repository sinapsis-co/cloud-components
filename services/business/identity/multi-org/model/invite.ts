import { Model } from '@sinapsis-co/cc-sdk/model';
import { AuthScope } from '../platform/authorization';

export type InviteModel = Model<{
  type: 'Invite';
  body: {
    email: string;
    orgName: string;
    role: AuthScope;
    workspaceId?: string;
  };
  key: {
    inviteId: string;
  };
}>;

export type Invite = InviteModel['Entity'];
