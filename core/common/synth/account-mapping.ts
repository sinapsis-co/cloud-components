import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { AssumeRoleResponse } from './assume-role';

export const accountMapping = async (
  project: string,
  env: string,
  role: Partial<AssumeRoleResponse>
): Promise<string> => {
  const client = new DynamoDBClient(role);
  const dynamo = DynamoDBDocumentClient.from(client);

  const { Item } = await dynamo.send(
    new GetCommand({
      TableName: 'accounts-repository',
      Key: { pk: project, sk: env },
    })
  );
  if (!Item) throw new Error(`Not entry for account: ${project}-${env}`);

  return Item['account'] as string;
};
