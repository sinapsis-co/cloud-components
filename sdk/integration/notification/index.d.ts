/// <reference types="node" />
import { SESv2Client } from '@aws-sdk/client-sesv2';
import { Readable } from 'stream';
export declare const ses: SESv2Client;
export type Attachment = {
    filename: string;
    content: Readable;
};
export type DeliverEmailParams = {
    from: string;
    to: string;
    subject: string;
    html: string;
    attachments?: Attachment[];
};
export declare const deliverEmail: <TracingMeta extends Record<string, string> = Record<string, string>>(params: DeliverEmailParams, tracingMeta?: TracingMeta | undefined) => Promise<void>;
