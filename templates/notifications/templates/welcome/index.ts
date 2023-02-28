import { NotificationTemplate } from '@sinapsis-co/cc-platform-v2/catalog/notifications';

export type WelcomeTemplate = NotificationTemplate<{
  templateName: 'welcome';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
    language: 'ES' | 'EN' | 'ITA';
    defaultLanguage: 'ITA';
  };
}>;
