/* eslint-disable no-console */
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { getResourceName } from '@sinapsis-cloud-components/core/common/naming/get-resource-name';
import { Secret } from '@sinapsis-cloud-components/sdk/integration/store/aurora/cluster-connect';
import { CustomDataSourceOptions } from '@sinapsis-cloud-components/sdk/integration/store/aurora/proxy-connect';
import { ExecSyncOptions, execSync } from 'child_process';
import { log } from 'console';
import { unlinkSync, writeFileSync } from 'fs';
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
    const { baseDir, clusterSecretArn, publicAccess } = JSON.parse(configs.Parameter?.Value);

    const sm: SecretsManagerClient = new SecretsManagerClient(role);
    const response = await sm.send(
      new GetSecretValueCommand({
        SecretId: clusterSecretArn,
      })
    );

    const DbSecrets: Secret['payload'] = JSON.parse(response.SecretString!);
    const { username, password, host, port } = DbSecrets;
    const localHost = '127.0.0.1';
    const localPort = 1433;

    const rdsConfigPath = `${process.cwd()}/${baseDir}/config/rds.ts`;
    const rdsConfigValue = (await import(rdsConfigPath))['default'] as CustomDataSourceOptions;

    const migrationsDefault = `${process.cwd()}/${baseDir}/migrations/*.{ts, js}`;

    if (commandArg === 'generate') {
      log('>> STEP: (2/2) => GENERATING MIGRATION');

      writeFileSync(
        `${process.cwd()}/${baseDir}/config/ormconfig.ts`,
        `import { DataSource } from 'typeorm';

      export const connectionSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: process.env.CC_HOST,
        port: Number(process.env.CC_PORT),
        username: process.env.CC_USER,
        password: process.env.CC_PASS,
        entities: [...process.env.CC_ENTITIES!.split(',')],
        migrations: [process.env.CC_MIGRATIONS!],
      });`
      );

      const command = `npx typeorm-ts-node-esm migration:generate ./${baseDir}/migrations/m -d ./${baseDir}/config/ormconfig.ts`;

      const execOptions: ExecSyncOptions = {
        stdio: 'inherit',
        cwd: `${process.cwd()}`,
        env: {
          ...process.env,
          CC_HOST: publicAccess ? host : localHost,
          CC_PORT: publicAccess ? `${port}` : `${localPort}`,
          CC_USER: username,
          CC_PASS: password,
          CC_ENTITIES: rdsConfigValue.entities as any,
          CC_MIGRATIONS: migrationsDefault,
        },
      };

      try {
        execSync(command, execOptions);
        unlinkSync(`${process.cwd()}/${baseDir}/config/ormconfig.ts`);
      } catch (error) {
        unlinkSync(`${process.cwd()}/${baseDir}/config/ormconfig.ts`);
        throw error;
      }
    }

    if (commandArg === 'run') {
      log('>> STEP: (2/2) => RUNNING MIGRATION');
      const dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: publicAccess ? host : localHost,
        port: publicAccess ? port : localPort,
        username,
        password,
        entities: rdsConfigValue.entities,
        migrations: [migrationsDefault],
      });
      await dataSource.initialize();
      await dataSource.runMigrations();
    }

    if (commandArg === 'revert') {
      log('>> STEP: (2/2) => REVERT MIGRATION');
      const dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: publicAccess ? host : localHost,
        port: publicAccess ? port : localPort,
        username,
        password,
        entities: rdsConfigValue.entities,
        migrations: [migrationsDefault],
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
