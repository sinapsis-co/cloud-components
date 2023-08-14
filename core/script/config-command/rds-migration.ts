/* eslint-disable no-console */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { getResourceName } from '@sinapsis-co/cc-core/common/naming/get-resource-name';
import { Secret } from '@sinapsis-co/cc-sdk/integration/store/aurora/cluster-connect';
import { ExecSyncOptions, execSync } from 'child_process';
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

export let dataSource: DataSource;

export const rdsMigration: ConfigCommand = async <
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
    log('<< Migration RDS Started >>');

    const commandArg = args[5] || 'generate';

    if (!['generate', 'run', 'revert'].includes(commandArg))
      throw new Error('Action not allowed, you can use: generate, run or revert');

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
    const { baseDir, clusterSecretArn } = JSON.parse(configs.Parameter?.Value);

    const sm: SecretsManagerClient = new SecretsManagerClient(role);
    const response = await sm.send(
      new GetSecretValueCommand({
        SecretId: clusterSecretArn,
      })
    );

    const DbSecrets: Secret['payload'] = JSON.parse(response.SecretString!);
    const { username, host, port, password } = DbSecrets;
    const entities = `${process.cwd()}/services/**/**/entities/*.{ts, js}`;
    const migrations = `${process.cwd()}/services/${baseDir}/migrations/*.{ts, js}`;

    if (commandArg === 'generate') {
      log('>> STEP: (2/2) => GENERATING MIGRATION');

      const command = `npx typeorm-ts-node-esm migration:generate ./services/${baseDir}/migrations/m -d ./services/${baseDir}/config/ormconfig.ts`;

      const execOptions: ExecSyncOptions = {
        stdio: 'inherit',
        cwd: `${process.cwd()}/services/${baseDir}`,
        env: {
          ...process.env,
          CC_HOST: host,
          CC_PORT: `${port}`,
          CC_USER: username,
          CC_PASS: password,
          CC_ENTITIES: entities,
          CC_MIGRATIONS: migrations,
        },
      };
      execSync(command, execOptions);
    }

    if (commandArg === 'run') {
      log('>> STEP: (2/2) => RUNNING MIGRATION');
      const dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host,
        port,
        username,
        password,
        entities: [entities],
        migrations: [migrations],
      });
      await dataSource.initialize();
      await dataSource.runMigrations();
    }

    if (commandArg === 'revert') {
      log('>> STEP: (2/2) => REVERT MIGRATION');
      const dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host,
        port,
        username,
        password,
        entities: [entities],
        migrations: [migrations],
      });
      await dataSource.initialize();
      await dataSource.undoLastMigration();
    }

    console.log('MIGRATION READY! ✅');
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
