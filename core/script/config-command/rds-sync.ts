/* eslint-disable no-console */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { getResourceName } from '@sinapsis-cloud-components/core/common/naming/get-resource-name';
import { Secret } from '@sinapsis-cloud-components/sdk/integration/store/aurora/cluster-connect';
import { CustomDataSourceOptions } from '@sinapsis-cloud-components/sdk/integration/store/aurora/proxy-connect';
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
    log('<< Sync RDS Started >>');

    const { envName, ephemeralEnvName, servicesNamesInput, roleName, accountMap, isSingleProjectAccount } =
      await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    if (!['dev', 'develop'].includes(envName)) throw new Error('Sync only allowed in DEV');

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
    const { baseDir, clusterSecretArn, publicAccess } = JSON.parse(configs.Parameter?.Value);

    const sm: SecretsManagerClient = new SecretsManagerClient(role);
    const response = await sm.send(
      new GetSecretValueCommand({
        SecretId: clusterSecretArn,
      })
    );

    const DbSecrets: Secret['payload'] = JSON.parse(response.SecretString!);

    const rdsConfigPath = `${process.cwd()}/${baseDir}/config/rds.ts`;
    const rdsConfigValue = (await import(rdsConfigPath))['default'] as CustomDataSourceOptions;

    log('>> STEP: (2/2) => SYNC WITH DB');

    const { username, password, host, port } = DbSecrets;
    const localHost = '127.0.0.1';
    const localPort = 1432;

    const dataSource = new DataSource({
      type: 'postgres',
      database: 'postgres',
      host: publicAccess ? host : localHost,
      port: publicAccess ? port : localPort,
      username,
      password,
      entities: rdsConfigValue.entities,
    });
    await dataSource.initialize();
    await dataSource.synchronize();
    console.log('SYNC READY! ✅');
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
