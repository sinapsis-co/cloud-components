/* eslint-disable no-console */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { getResourceName } from '@sinapsis-cloud-components/core/common/naming/get-resource-name';
import { Secret } from '@sinapsis-cloud-components/sdk/integration/store/aurora/cluster-connect';
import { ExecSyncOptions, SpawnOptions, execSync, spawn } from 'child_process';
import { log } from 'console';
import { ConfigCommand } from '..';
import { assumeRole } from '../../common/synth/assume-role';
import { preScript } from '../../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../../common/synth/props-types';

export const ssmConnect: ConfigCommand = async <
  GlobalConst,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
>(
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  args: string[]
): Promise<void> => {
  try {
    log('<< Open session SSM Started >>');

    const commandArg = args[5] || 'sync';

    if (!['sync', 'async'].includes(commandArg)) throw new Error('Action not allowed, you can use: sync or async');

    const { envName, ephemeralEnvName, servicesNamesInput, roleName, accountMap, isSingleProjectAccount } =
      await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    log('>> STEP: (1/2) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    const role = await assumeRole({ account, region }, roleName);

    const getParamName = (name: string) =>
      getResourceName(name, {
        isSingleProjectAccount,
        projectName,
        envName,
        ephemeralEnvName,
        serviceName: servicesNamesInput[0],
      });

    const ssm = new SSMClient(role);
    const configs = await ssm.send(new GetParameterCommand({ Name: getParamName('config') }));

    if (!configs.Parameter?.Value) throw new Error('Invalid Config');
    const { clusterSecretArn, ec2InstanceId, publicAccess } = JSON.parse(configs.Parameter?.Value);

    if (publicAccess) throw new Error('Action not allowed, this RDS has public access');

    const sm: SecretsManagerClient = new SecretsManagerClient(role);
    const response = await sm.send(
      new GetSecretValueCommand({
        SecretId: clusterSecretArn,
      })
    );

    const DbSecrets: Secret['payload'] = JSON.parse(response.SecretString!);
    const { host, port } = DbSecrets;
    const localPort = 1432;

    log('>> STEP: (2/2) => STARTING SESSION');

    const command = `aws ssm start-session --region ${region} --target ${ec2InstanceId} --document-name AWS-StartPortForwardingSessionToRemoteHost --parameters host="${host}",portNumber="${port}",localPortNumber="${localPort}"`;

    const parts = command.split(' ');
    const cmdAsync = parts[0];
    const argsAsync = parts.splice(1);

    const spawnOptions: SpawnOptions = {
      stdio: 'ignore',
      detached: true,
      cwd: `${process.cwd()}`,
      env: {
        ...process.env,
        AWS_ACCESS_KEY_ID: role.credentials.accessKeyId,
        AWS_SECRET_ACCESS_KEY: role.credentials.secretAccessKey,
        AWS_SESSION_TOKEN: role.credentials.sessionToken,
        AWS_REGION: role.region,
      },
    };

    const execOptions: ExecSyncOptions = {
      stdio: 'inherit',
      cwd: `${process.cwd()}`,
      env: {
        ...process.env,
        AWS_ACCESS_KEY_ID: role.credentials.accessKeyId,
        AWS_SECRET_ACCESS_KEY: role.credentials.secretAccessKey,
        AWS_SESSION_TOKEN: role.credentials.sessionToken,
        AWS_REGION: role.region,
      },
    };

    if (commandArg == 'async') spawn(cmdAsync, argsAsync, spawnOptions).unref();
    else execSync(command, execOptions);

    console.log('SSM Connected! ✅');
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
