import { NotificationTemplate } from '@sinapsis-co/cc-platform/catalog/notifications';

export type PaymentFailedTemplate = NotificationTemplate<{
  templateName: 'payment-failed';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
  };
}>;
