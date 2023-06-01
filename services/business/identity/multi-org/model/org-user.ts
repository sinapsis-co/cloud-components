import { Model } from '@sinapsis-co/cc-sdk/model';
import { Role } from '../entities/role';

export type OrgUserModel = Model<{
  type: 'OrgUser';
  body: {
    role: Role;
  };
  key: {
    orgId: string;
    userId: string;
  };
}>;

export type OrgUser = OrgUserModel['Entity'];
