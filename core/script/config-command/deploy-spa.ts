/* eslint-disable no-console */
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { execSync, ExecSyncOptions } from 'child_process';
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

export const deploySPA: ConfigCommand = async <
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
    console.log('<< Deploy SPA Started >>');

    const { envName, ephemeralEnvName, servicesNamesInput, envNameInput, roleName, accountMap } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    console.log('>> STEP: (1/4) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    const role = await assumeRole({ account, region }, roleName);

    console.log('>> STEP: (2/4) => RENDERING ENV');

    const getParamName = (name: string) =>
      getResourceName(name, {
        projectName,
        envName,
        ephemeralEnvName,
        serviceName: servicesNamesInput[0],
      });

    const ssm = new SSMClient(role);
    const deployConfig = await ssm.send(new GetParameterCommand({ Name: getParamName('config') }));

    if (!deployConfig.Parameter?.Value) throw new Error('Invalid Config');
    const { domain, bucketName, distributionId, assetMaxAge, indexMaxAge, baseDir, distDir } = JSON.parse(
      deployConfig.Parameter?.Value
    );

    const calculatedEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-calculated') }));
    if (!calculatedEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const manualEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-manual') }));
    if (!manualEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const envFile = `${calculatedEnv.Parameter?.Value}\n${manualEnv.Parameter?.Value}`;

    writeFileSync(`${process.cwd()}/${baseDir}/.env.${envNameInput}`, envFile);

    console.log('>> STEP: (3/4) => BUILDING');

    const command = `yarn && yarn build ${envNameInput}`;

    execSync(command, { stdio: 'inherit', cwd: `${process.cwd()}/${baseDir}` });

    const copyFolderCmd = `aws s3 cp ${distDir}/ s3://${bucketName}/ --recursive --cache-control "max-age=${assetMaxAge}" --exclude "index.html"`;
    const copyIndexCmd = `aws s3 cp ${distDir}/index.html s3://${bucketName}/index.html --cache-control "max-age=${indexMaxAge}"`;
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
    execSync(copyFolderCmd, execOptions);
    execSync(copyIndexCmd, execOptions);
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
