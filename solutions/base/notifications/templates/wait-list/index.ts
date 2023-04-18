import { NotificationTemplate } from '@sinapsis-co/cc-sdk/catalog/notifications';

export type WaitListTemplate = NotificationTemplate<{
  templateName: 'wait-list';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
  };
}>;
