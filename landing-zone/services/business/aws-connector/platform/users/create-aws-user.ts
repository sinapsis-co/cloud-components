import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { IAM } from 'aws-sdk';
import { NewUserTemplate } from '../../../../../notifications/templates/new-user/email';
import { notificationEvent } from '../../../../support/notifications/catalog';
import { AwsUserCreate } from '../../entities/aws-user';
import { groupMapper } from '../../lib/group-mapper';
import { awsTempRepo } from '../../repository/aws-temp-cred';

const iam = new IAM();

export type CreateAwsUserResponse = {
  url: string;
  userName: string;
};

export const createAwsUser = async (
  awsUserCreate: Omit<AwsUserCreate, 'accessKeyId'>
): Promise<{ accessKeyId: string }> => {
  validateEnvAccess(awsUserCreate);
  const groups = awsUserCreate.envAccess.map(groupMapper);

  const tempIdentifier = uuid();
  const tempPassword = generateTempPass();

  const getCredentialsUrl = `${process.env.API_URL}/aws/temp/${tempIdentifier}`;
  const UserName = awsUserCreate.email;

  // Create User
  await iam.createUser({ UserName }).promise();
  // Create Programmatic Access
  const { AccessKey } = await iam.createAccessKey({ UserName }).promise();
  // Add to Defaults Groups
  await Promise.all(groups.map((g) => iam.addUserToGroup({ UserName, GroupName: g }).promise()));
  // Create temporal password
  await iam.createLoginProfile({ UserName, Password: tempPassword, PasswordResetRequired: true }).promise();

  await awsTempRepo.createItem(
    { id: tempIdentifier },
    {
      deleteTTL: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).getTime(), // 1 week
      consoleAccess: { username: UserName, password: tempPassword },
      programmaticAccess: { accessKey: AccessKey.AccessKeyId, secretKey: AccessKey.SecretAccessKey },
    }
  );

  await dispatchEvent<notificationEvent.dispatch.Event<NewUserTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: UserName,
    template: {
      templateName: 'new-user',
      payload: {
        currentYear: new Date().getFullYear().toString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        getCredentialsUrl,
      },
    },
  });

  return { accessKeyId: AccessKey.AccessKeyId };
};

export const validateEnvAccess = (awsUserCreate: Omit<AwsUserCreate, 'accessKeyId'>): void => {
  const envs = ['dev', 'staging', 'prod'];
  awsUserCreate.envAccess.forEach((e) => {
    if (!envs.includes(e))
      throw new ApiError('Invalid envAccess', 400, `envAccess array should contain only these values: ${envs}`);
  });
};

export const generateTempPass = (): string => {
  const upperString = (Math.random() + 1).toString(36).substring(2).toUpperCase();
  const endString = (Math.random() + 1).toString(36).substring(2).toLowerCase();
  const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|'];
  const baseCharacters = Array.from(Array(5))
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join('');
  return `${upperString}${baseCharacters}${endString}`
    .split('')
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .join('');
};
