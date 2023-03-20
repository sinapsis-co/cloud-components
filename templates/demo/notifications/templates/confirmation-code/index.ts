import { NotificationTemplate } from '@sinapsis-co/cc-platform/catalog/notifications';

export type ConfirmationCodeTemplate = NotificationTemplate<{
  templateName: 'confirmation-code';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
    email: string;
    code: string;
  };
}>;
