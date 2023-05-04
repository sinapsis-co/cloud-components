import { Model } from '@sinapsis-co/cc-sdk/model';
import { AuthScope } from '../platform/authorization';
import { IdentityTableBuilder } from '../store/table-identity';

export type InviteModel = Model<
  {
    name: 'invite';
    body: {
      email: string;
      companyName: string;
      inviteId: string;
      role: AuthScope;
      createdAt: string;
      updatedAt: string;
    };
    key: {
      tenantId: string;
      id: string;
    };
  },
  { storeBuilder: IdentityTableBuilder }
>;
