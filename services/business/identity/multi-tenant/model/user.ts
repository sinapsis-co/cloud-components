import { Model } from '@sinapsis-co/cc-sdk/model';

import { FullLocation } from '../entities/location';
import { AuthScope } from '../platform/authorization';

export type UserModel = Model<
  {
    type: 'user';
    body: {
      email: string;
      givenName: string;
      familyName: string;
      companyName: string;
      tenantOwner?: true;
      role: AuthScope;
      avatar?: string;
      location?: FullLocation;
    };
    key: {
      tenantId: string;
      id: string;
    };
  },
  {
    omittedCreateKeys: ['email' | 'role' | 'companyName' | 'tenantOwner' | 'avatar'];
    omittedUpdateKeys: ['email' | 'role' | 'companyName' | 'tenantOwner' | 'avatar'];
  }
>;

export type User = UserModel['Entity'];
