import { NotificationTemplate } from '@sinapsis-co/cc-platform-v2/catalog/notifications';

export type NewUserTemplate = NotificationTemplate<{
  templateName: 'new-user';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    getCredentialsUrl: string;
  };
}>;
