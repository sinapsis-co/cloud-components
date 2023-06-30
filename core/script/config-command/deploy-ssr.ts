/* eslint-disable no-console */
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { ExecSyncOptions, execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { ConfigCommand } from '..';
import { getResourceName } from '../../common/naming/get-resource-name';
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

export const deploySSR: ConfigCommand = async <
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
    console.log('<< Deploy SSR Started >>');

    const {
      envName,
      ephemeralEnvName,
      servicesNamesInput,
      envNameInput,
      roleName,
      accountMap,
      isSingleProjectAccount,
    } = await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    console.log('>> STEP: (1/4) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    console.log('>> STEP: (2/4) => RENDERING ENV');

    const getParamName = (name: string) =>
      getResourceName(name, {
        isSingleProjectAccount,
        projectName,
        envName,
        ephemeralEnvName,
        serviceName: servicesNamesInput[0],
      });

    const role = await assumeRole({ account, region }, roleName);

    const ssm = new SSMClient(role);
    const deployConfig = await ssm.send(new GetParameterCommand({ Name: getParamName('config') }));
    if (!deployConfig.Parameter?.Value) throw new Error('Invalid Config');
    const { domain, distributionBucket, distributionId, baseDir, distDir } = JSON.parse(deployConfig.Parameter?.Value);

    const calculatedEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-calculated') }));
    if (!calculatedEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const manualEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-manual') }));
    if (!manualEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const envFile = `${calculatedEnv.Parameter?.Value}\n${manualEnv.Parameter?.Value}`;

    writeFileSync(`${process.cwd()}/${baseDir}/.env.${envNameInput}`, envFile);

    console.log('>> STEP: (3/4) => BUILDING');

    const command = 'npx open-next@latest build -y';
    execSync(command, { stdio: 'inherit', cwd: `${process.cwd()}/${baseDir}` });

    const cpDistributionBucket = `aws s3 cp ${distDir}/assets s3://${distributionBucket} --recursive`;

    const execOptions: ExecSyncOptions = {
      stdio: 'inherit',
      cwd: `${process.cwd()}/${baseDir}`,
      env: {
        ...process.env,
        AWS_ACCESS_KEY_ID: role.credentials.accessKeyId,
        AWS_SECRET_ACCESS_KEY: role.credentials.secretAccessKey,
        AWS_SESSION_TOKEN: role.credentials.sessionToken,
        AWS_REGION: role.region,
      },
    };
    execSync(cpDistributionBucket, execOptions);

    console.log('STEP: (4/4) => CREATING INVALIDATION');

    const cf = new CloudFrontClient(role);
    await cf.send(
      new CreateInvalidationCommand({
        DistributionId: distributionId,
        InvalidationBatch: {
          CallerReference: Date.now().toString(),
          Paths: {
            Items: ['/*'],
            Quantity: 1,
          },
        },
      })
    );
    console.log(`>> DEPLOYED AT => ${domain}`);
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
