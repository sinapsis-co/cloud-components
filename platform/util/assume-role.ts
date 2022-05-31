import STS from 'aws-sdk/clients/sts';

export type AssumeRoleResponse = {
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
};

type Account = {
  roleName?: string;
  account?: string;
  roleArn?: string;
  credentials?: AssumeRoleResponse['credentials'];
};

export const assumeRole = async (
  { account, roleName, roleArn, credentials }: Account,
  DurationSeconds = 900
): Promise<AssumeRoleResponse> => {
  const sts = new STS({ region: 'us-east-1', credentials });

  const { Credentials } = await sts
    .assumeRole({
      RoleArn: roleArn || `arn:aws:iam::${account}:role/${roleName}`,
      RoleSessionName: 'cdk-scripts',
      DurationSeconds,
    })
    .promise();
  return {
    credentials: {
      accessKeyId: Credentials?.AccessKeyId as string,
      secretAccessKey: Credentials?.SecretAccessKey as string,
      sessionToken: Credentials?.SessionToken as string,
    },
  };
};
