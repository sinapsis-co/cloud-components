import { RDSClient, StartDBClusterCommand } from '@aws-sdk/client-rds';

const client = new RDSClient({ region: process.env.REGION });

export const handler = async (): Promise<any> => {
  await client.send(new StartDBClusterCommand({ DBClusterIdentifier: process.env.DB_CLUSTER_NAME! }));
};
