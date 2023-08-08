import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Tracing } from 'tracing';

const client: DynamoDBClient = Tracing.captureIntegration(new DynamoDBClient({}) as any);
export const dynamodb = DynamoDBDocumentClient.from(client, { marshallOptions: { removeUndefinedValues: true } });
