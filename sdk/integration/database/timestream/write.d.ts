import { WriteRecordsCommandInput } from '@aws-sdk/client-timestream-write';
export declare const timestreamWrite: (records: WriteRecordsCommandInput['Records'], DatabaseName: string, TableName: string) => Promise<any[]>;
