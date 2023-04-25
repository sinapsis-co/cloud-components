import { NotificationTemplate } from 'catalog/notification';
export declare const renderEmailTemplate: <Template extends NotificationTemplate = NotificationTemplate>(bucketName: string, attributes: {
    templateName: Template["templateName"];
    payload: Template["payload"];
}) => Promise<{
    subject: string;
    body: string;
}>;
