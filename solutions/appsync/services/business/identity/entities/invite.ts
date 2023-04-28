import * as _interface from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { AuthScope } from '../platform/authorization';
import { IdentityTable } from '../table/table-identity';

export type InviteEntity = _interface.EntityBuilder<{
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
}>;

export type Invite = _interface.Entity<InviteEntity>;

export type InviteStore = _interface.EntityStore<InviteEntity, IdentityTable>;

export type InviteCreate = _interface.EntityCreate<InviteEntity>;
