import { Model } from '@sinapsis-co/cc-sdk/model';
import { AuthScope } from '../platform/authorization';
import { IdentityStoreTable } from '../store/table-identity';

export type InviteModel = Model<
  {
    type: 'invite';
    body: {
      email: string;
      companyName: string;
      inviteId: string;
      role: AuthScope;
    };
    key: {
      tenantId: string;
      id: string;
    };
  },
  { storeBuilder: IdentityStoreTable }
>;

export type Invite = InviteModel['Entity'];
