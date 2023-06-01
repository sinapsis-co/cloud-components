import { Model } from '@sinapsis-co/cc-sdk/model';

export type EmailModel = Model<{
  type: 'Email';
  body: {
    userId: string;
  };
  key: {
    email: string;
  };
}>;

export type User = EmailModel['Entity'];
