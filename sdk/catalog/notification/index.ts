export type NotificationTemplateKeys = {
  templateName: string;
  payload: Record<string, string>;
};

export type NotificationTemplate<keys extends NotificationTemplateKeys = NotificationTemplateKeys> = {
  templateName: keys['templateName'];
  payload: keys['payload'];
};

export type NotificationEmailAttachment = {
  key: string;
  filename: string;
};

export type NotificationMessage<Template extends NotificationTemplate = NotificationTemplate> = {
  template: Template;
  addressTo: string;
  attachments?: NotificationEmailAttachment[];
};
