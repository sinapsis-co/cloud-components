import { Model } from '@sinapsis-co/cc-sdk/model';

import { FullLocation } from '../entities/location';

export type UserModel = Model<
  {
    type: 'User';
    body: {
      email: string;
      givenName: string;
      familyName: string;
      tenantOwner?: true;
      avatar?: string;
      location?: FullLocation;
    };
    key: {
      userId: string;
    };
  },
  {
    omittedCreateKeys: ['email' | 'tenantOwner' | 'avatar'];
    omittedUpdateKeys: ['email' | 'tenantOwner' | 'avatar'];
  }
>;

export type User = UserModel['Entity'];
