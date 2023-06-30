import { IAM } from 'aws-sdk';

export const deleteAwsUser = async (iam: IAM, UserName: string, AccessKeyId: string): Promise<void> => {
  const [groups, policies] = await Promise.all([
    iam.listGroupsForUser({ UserName }).promise(),
    iam.listAttachedUserPolicies({ UserName }).promise(),
  ]);

  await Promise.all([
    groups.Groups?.map((g) => {
      iam.removeUserFromGroup({ UserName, GroupName: g.GroupName }).promise();
    }),
    policies.AttachedPolicies?.map((p) => {
      iam.detachUserPolicy({ UserName, PolicyArn: p.PolicyArn! }).promise();
    }),
    iam
      .deleteLoginProfile({ UserName })
      .promise()
      .catch(() => {
        return;
      }),
    iam.deleteAccessKey({ UserName, AccessKeyId }).promise(),
  ]);

  await iam.deleteUser({ UserName }).promise();
};
