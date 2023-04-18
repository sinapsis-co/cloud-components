import { NotificationTemplate } from '@sinapsis-co/cc-sdk/catalog/notifications';

export type UserInviteTemplate = NotificationTemplate<{
  templateName: 'user-invite';
  payload: {
    siteUrl: string;
    baseAssetUrl: string;
    currentYear: string;
    projectName: string;
    inviteCode: string;
  };
}>;
