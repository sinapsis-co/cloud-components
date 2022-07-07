/* eslint-disable no-console */
import SSM from 'aws-sdk/clients/ssm';
import CloudFront from 'aws-sdk/clients/cloudfront';
import { execSync, ExecSyncOptions } from 'child_process';
import { writeFileSync } from 'fs';
import { getParameterName, getResourceName } from '../common/naming/get-resource-name';
import { assumeRole } from '../common/synth/assume-role';
import { preScript } from '../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../common/synth/props-types';

export const deploySSR = async <
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

    const { envName, ephemeralEnvName, serviceNameInput, envNameInput, roleName, accountMap } = await preScript(
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

    const parameterName = getResourceName('config', {
      projectName,
      envName,
      ephemeralEnvName,
      serviceName: serviceNameInput,
    });

    console.log('>> STEP: (2/4) => RENDERING ENV');

    const ssm = new SSM(role);
    const deployConfig = await ssm.getParameter({ Name: parameterName }).promise();

    if (!deployConfig.Parameter?.Value) throw new Error('Invalid Config');
    const { domain, distributionBucket, recipeBucket, distributionId, assetMaxAge, indexMaxAge, baseDir, distDir } =
      JSON.parse(deployConfig.Parameter?.Value);

    const baseSecretName = getParameterName('secret', {
      projectName,
      envName,
      ephemeralEnvName,
      serviceName: serviceNameInput,
    });
    const { Parameters } = await ssm.getParametersByPath({ Path: baseSecretName, Recursive: true }).promise();
    if (!Parameters) throw new Error('Invalid secret');
    const secret: Record<string, any> = Parameters?.reduce(
      (pre, curr) => ({ ...pre, ...JSON.parse(curr.Value as string) }),
      {}
    );

    const envFile = Object.keys(secret)
      .map((key) => `${key}=${secret[key]}\n`)
      .join('');

    if (Parameters && Parameters?.length > 0)
      writeFileSync(`${process.cwd()}/${baseDir}/.env.${envNameInput}`, envFile);

    console.log('>> STEP: (3/4) => BUILDING');

    const command = `yarn && yarn build ${envNameInput}`;
    execSync(command, { stdio: 'inherit', cwd: `${process.cwd()}/${baseDir}` });

    const cpDistributionBucket = `aws s3 cp ${distDir}/ s3://${distributionBucket}/ --recursive --cache-control "max-age=${assetMaxAge}" --exclude ".next"`;
    const cpRecipeBucket = `aws s3 cp ${distDir}/ s3://${recipeBucket}/.next/ --recursive --cache-control "max-age=${indexMaxAge}"`;

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
    execSync(cpRecipeBucket, execOptions);

    console.log('STEP: (4/4) => CREATING INVALIDATION');
    const cf = new CloudFront(role);
    await cf
      .createInvalidation({
        DistributionId: distributionId,
        InvalidationBatch: {
          CallerReference: Date.now().toString(),
          Paths: {
            Items: ['/*'],
            Quantity: 1,
          },
        },
      })
      .promise();
    console.log(`>> DEPLOYED AT => ${domain}`);
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
