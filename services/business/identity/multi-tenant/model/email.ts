import { Model } from '@sinapsis-co/cc-sdk/model';

import { IdentityStoreTable } from '../store/table-identity';

export type EmailModel = Model<
  {
    type: 'email';
    body: {
      email: string;
    };
    key: {
      email: string;
    };
  },
  {
    storeBuilder: IdentityStoreTable;
  }
>;

export type User = EmailModel['Entity'];
