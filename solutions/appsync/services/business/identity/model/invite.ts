import { Model } from '@sinapsis-co/cc-sdk/model';
import { AuthScope } from '../platform/authorization';
import { IdentityTableBuilder } from '../repository/table-identity';

export type InviteModel = Model<
  {
    name: 'invite';
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
    timers: {
      createdAt: Date;
      updatedAt: Date;
    };
  },
  { storeBuilder: IdentityTableBuilder }
>;
