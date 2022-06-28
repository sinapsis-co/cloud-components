/* eslint-disable no-console */
import { execSync } from 'child_process';
import { assumeRole } from '../common/synth/assume-role';
import { preScript } from '../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseRegionName,
} from '../common/synth/props-types';
import { deploy } from './deploy';

export const bootstrap = async <
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
    console.log('<< Bootstrap Started >>');

    const { envName, envNameInput, roleName, outputFile, serviceName, context, accountMap, bootstrappingServices } =
      await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    const accountArr = accountMap.split(' ');

    const deployAccount: string = accountArr.find((a) => a.includes('deploy'))?.split('=')[1] || '';
    const serviceAccount: string = accountArr.find((a) => a.includes('services'))?.split('=')[1] || '';
    const dnsAccount: string = accountArr.find((a) => a.includes('dnsShared'))?.split('=')[1] || '';

    const region = globalDeployTargetConfig[envName]['services']['region'];

    await runBootstrap(
      deployAccount,
      serviceAccount,
      region,
      roleName,
      envNameInput,
      outputFile,
      accountMap,
      context,
      serviceName
    );

    if (dnsAccount !== serviceAccount)
      await runBootstrap(
        deployAccount,
        dnsAccount,
        region,
        roleName,
        envNameInput,
        outputFile,
        accountMap,
        context,
        serviceName
      );

    if (bootstrappingServices)
      deploy(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, [
        '',
        '',
        '',
        envNameInput,
        bootstrappingServices,
        'isBootstrapping=true',
      ]);
  } catch (error) {
    process.exit(1);
  }
};

const runBootstrap = async (
  deployAccount: string,
  account: string,
  region: BaseRegionName,
  roleName: string,
  envNameInput: string,
  outputFile: string,
  accountMap: string,
  context: string,
  serviceName: string
) => {
  const role = await assumeRole({ account, region }, roleName);

  const command = `npx cdk bootstrap ${account}/${region} \
    --require-approval='never' \
    --trust ${deployAccount} \
    --trust-for-lookup ${deployAccount} \
    --no-bootstrap-customer-key \
    --require-approval='never' \
    --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
    --context env=${envNameInput} \
    --outputs-file ${outputFile} \
    ${accountMap} ${context} ${serviceName}`;

  execSync(command, {
    stdio: 'inherit',
    env: {
      ...process.env,
      AWS_ACCESS_KEY_ID: role.credentials.accessKeyId,
      AWS_SECRET_ACCESS_KEY: role.credentials.secretAccessKey,
      AWS_SESSION_TOKEN: role.credentials.sessionToken,
      AWS_REGION: role.region,
    },
  });
};
