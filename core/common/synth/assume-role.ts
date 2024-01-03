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
  { account, region = 'us-east-1' }: AssumeRoleParams,
  roleName: string
): Promise<AssumeRoleResponse> => {
  return assumeRoleArn(`arn:aws:iam::${account}:role/${roleName}`, region);
};

export const assumeRoleArn = async (arn: string, region = 'us-east-1'): Promise<AssumeRoleResponse> => {
  const sts = new STSClient({ region });
  const { Credentials } = await sts.send(
    new AssumeRoleCommand({
      RoleArn: arn,
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
