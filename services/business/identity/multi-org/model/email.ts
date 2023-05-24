import { Model } from '@sinapsis-co/cc-sdk/model';

export type EmailModel = Model<{
  type: 'Email';
  body: {
    email: string;
  };
  key: {
    email: string;
  };
}>;

export type User = EmailModel['Entity'];
