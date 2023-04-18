import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({ region: 'us-east-1' });
const dynamo = DynamoDBDocumentClient.from(client);

export const accountMapping = async (project: string, env: string): Promise<string> => {
  const { Item } = await dynamo.send(
    new GetCommand({
      TableName: 'accounts-repository',
      Key: { pk: project, sk: env },
    })
  );
  if (!Item) throw new Error(`Not entry for account ${project}-${env}`);

  return Item['account'] as string;
};
