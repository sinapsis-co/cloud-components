import { Model } from '@sinapsis-co/cc-sdk/model';

import { FullLocation } from '../entities/location';

export type UserModel = Model<
  {
    type: 'User';
    body: {
      email: string;
      givenName: string;
      familyName: string;
      avatar?: string;
      location?: FullLocation;
    };
    key: {
      userId: string;
    };
  },
  {
    omittedCreateKeys: ['email' | 'avatar'];
    omittedUpdateKeys: ['email' | 'avatar'];
  }
>;

export type User = UserModel['Entity'];
