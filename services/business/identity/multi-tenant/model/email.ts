import { Model } from '@sinapsis-co/cc-sdk/model';

export type EmailModel = Model<{
  type: 'email';
  body: {
    tenantId: string;
    email: string;
  };
  key: {
    email: string;
  };
}>;

export type User = EmailModel['Entity'];
