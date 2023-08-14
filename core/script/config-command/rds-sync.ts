/* eslint-disable no-console */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { getResourceName } from '@sinapsis-co/cc-core/common/naming/get-resource-name';
import { Secret } from '@sinapsis-co/cc-sdk/integration/store/aurora/cluster-connect';
import { log } from 'console';
import { DataSource } from 'typeorm';
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

export const rdsSync: ConfigCommand = async <
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
    log('<< Syncronization RDS Started >>');

    const { envName, ephemeralEnvName, servicesNamesInput, roleName, accountMap } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    if (!['dev', 'develop'].includes(envName)) throw new Error('Syncronization only allowed in DEV');

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
        projectName,
        envName,
        ephemeralEnvName,
        serviceName: servicesNamesInput[0],
      });

    const ssm = new SSMClient(role);
    const configs = await ssm.send(new GetParameterCommand({ Name: getParamName('config') }));

    if (!configs.Parameter?.Value) throw new Error('Invalid Config');
    const { clusterSecretArn } = JSON.parse(configs.Parameter?.Value);

    const sm: SecretsManagerClient = new SecretsManagerClient(role);
    const response = await sm.send(
      new GetSecretValueCommand({
        SecretId: clusterSecretArn,
      })
    );

    const DbSecrets: Secret['payload'] = JSON.parse(response.SecretString!);

    log('>> STEP: (2/2) => SYNC WITH DB');

    const { username, host, port, password } = DbSecrets;
    const dataSource = new DataSource({
      type: 'postgres',
      database: 'postgres',
      host,
      port,
      username,
      password,
      entities: [`${process.cwd()}/services/**/**/entities/*.{ts, js}`],
    });
    await dataSource.initialize();
    await dataSource.synchronize();
    console.log('SYNC READY! ✅');
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
