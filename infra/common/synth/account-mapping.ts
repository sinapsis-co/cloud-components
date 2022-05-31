import DynamoDB from 'aws-sdk/clients/dynamodb';
const dynamo = new DynamoDB.DocumentClient({ region: 'us-east-1' });

export const accountMapping = async (project: string, env: string): Promise<string> => {
  const { Item } = await dynamo
    .get({
      TableName: 'accounts-repository',
      Key: { pk: project, sk: env },
    })
    .promise();
  if (!Item) throw new Error(`Not entry for account ${project}-${env}`);

  return Item['account'] as string;
};
