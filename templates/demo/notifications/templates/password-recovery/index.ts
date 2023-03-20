import { NotificationTemplate } from '@sinapsis-co/cc-platform/catalog/notifications';

export type PasswordRecoveryTemplate = NotificationTemplate<{
  templateName: 'password-recovery';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
    email: string;
    code: string;
  };
}>;
