import { Model } from '@sinapsis-co/cc-sdk/model';

export type OrgModel = Model<{
  type: 'Org';
  body: {
    ownerEmail: string;
    name: string;
  };
  key: {
    orgId: string;
  };
}>;

export type Org = OrgModel['Entity'];
