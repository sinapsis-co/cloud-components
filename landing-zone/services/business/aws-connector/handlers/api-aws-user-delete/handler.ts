import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { IAM } from 'aws-sdk';
import { awsApi } from '../../catalog';
import { AwsUser } from '../../entities/aws-user';
import { deleteAwsUser } from '../../platform/users/delete-aws-user';
import { awsUserRepo } from '../../repository/aws-user';

const iam = new IAM();

export const handler = apiHandler<awsApi.userDelete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const user: AwsUser = await awsUserRepo.deleteItem({ tenantId, id });
  await deleteAwsUser(iam, user.email, user.accessKeyId);
  return user;
}, awsApi.userDelete.config);
