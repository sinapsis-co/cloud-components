import { NotificationTemplate } from '@sinapsis-co/cc-sdk/catalog/notification';

export type PaymentFailedTemplate = NotificationTemplate<{
  templateName: 'payment-failed';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
  };
}>;
