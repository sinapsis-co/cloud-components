import { NotificationTemplate } from '@sinapsis-co/cc-sdk/catalog/notifications';

export type WelcomeTemplate = NotificationTemplate<{
  templateName: 'welcome';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
    language: 'es' | 'en' | 'de' | 'it';
    defaultLanguage: 'en';
  };
}>;
