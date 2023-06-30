import { IAM } from 'aws-sdk';
import { AwsUserCreate } from '../../entities/aws-user';
import { groupMapper } from '../../lib/group-mapper';

import { validateEnvAccess } from './create-aws-user';

const iam = new IAM();

export const updateAwsUser = async (awsUserCreate: Omit<AwsUserCreate, 'accessKeyId'>): Promise<void> => {
  validateEnvAccess(awsUserCreate);
  const expectedGroups = awsUserCreate.envAccess.map(groupMapper);
  const UserName = awsUserCreate.email;

  const current = await iam.listGroupsForUser({ UserName }).promise();
  const currentGroups = current.Groups.map((g) => g.GroupName);

  const groupsToAdd = expectedGroups.filter((element) => !currentGroups.includes(element));
  const groupsToDelete = currentGroups.filter((element) => !expectedGroups.includes(element));

  await Promise.all([
    groupsToDelete.map((g) => iam.removeUserFromGroup({ UserName, GroupName: g }).promise()),
    groupsToAdd.map((g) => iam.addUserToGroup({ UserName, GroupName: g }).promise()),
  ]);
};
