import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts';
import { BaseGlobalProps, BaseRegionName, DeployConfig } from './props-types';

export type AssumeRoleResponse = {
  region: BaseRegionName;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
};

type AssumeRoleParams = {
  region: BaseGlobalProps['regionName'];
  account: DeployConfig['account'];
};

export const assumeRole = async (
  { account, region }: AssumeRoleParams,
  roleName: string
): Promise<AssumeRoleResponse> => {
  const sts = new STSClient({ region: 'us-east-1' });
  const { Credentials } = await sts.send(
    new AssumeRoleCommand({
      RoleArn: `arn:aws:iam::${account}:role/${roleName}`,
      RoleSessionName: 'cdk-scripts',
    })
  );
  return {
    region,
    credentials: {
      accessKeyId: Credentials?.AccessKeyId as string,
      secretAccessKey: Credentials?.SecretAccessKey as string,
      sessionToken: Credentials?.SessionToken as string,
    },
  };
};
