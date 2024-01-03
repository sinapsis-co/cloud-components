import { RDSClient, StopDBClusterCommand } from '@aws-sdk/client-rds';

const client = new RDSClient({ region: process.env.REGION });

export const handler = async (): Promise<any> => {
  await client.send(new StopDBClusterCommand({ DBClusterIdentifier: process.env.DB_CLUSTER_NAME! }));
};
