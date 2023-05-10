import { Model } from '@sinapsis-co/cc-sdk/model';
import { AuthScope } from '../platform/authorization';

export type InviteModel = Model<{
  type: 'invite';
  body: {
    email: string;
    companyName: string;
    role: AuthScope;
  };
  key: {
    tenantId: string;
    id: string;
  };
}>;

export type Invite = InviteModel['Entity'];
