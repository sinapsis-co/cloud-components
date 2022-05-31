import { BaseRegionName, BaseGlobalProps, DeployConfig } from './props-types';
import STS from 'aws-sdk/clients/sts';
const sts = new STS();

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
  const { Credentials } = await sts
    .assumeRole({
      RoleArn: `arn:aws:iam::${account}:role/${roleName}`,
      RoleSessionName: 'cdk-scripts',
    })
    .promise()
    .catch((e) => {
      throw e.message;
    });
  return {
    region,
    credentials: {
      accessKeyId: Credentials?.AccessKeyId as string,
      secretAccessKey: Credentials?.SecretAccessKey as string,
      sessionToken: Credentials?.SessionToken as string,
    },
  };
};
