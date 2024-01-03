/* eslint-disable no-console */
import { execSync } from 'child_process';
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
  BaseRegionName,
} from '../../common/synth/props-types';

export const bootstrap: ConfigCommand = async <
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

    const {
      envName,
      envNameInput,
      roleName,
      outputFile,
      servicesNames,
      accountMap,
      bootstrappingServices,
      landingZones,
    } = await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    const accountArr = accountMap.split(' ');
    const deployAccount: string = accountArr.find((a) => a.includes('deploy'))?.split('=')[1] || '';
    const serviceAccount: string = accountArr.find((a) => a.includes('services'))?.split('=')[1] || '';
    const dnsAccount: string = accountArr.find((a) => a.includes('dnsShared'))?.split('=')[1] || '';

    const region = globalDeployTargetConfig[envName]['services']['region'];

    await runBootstrap(
      landingZones,
      serviceAccount,
      region,
      roleName,
      envNameInput,
      outputFile,
      accountMap,
      servicesNames
    );

    await runBootstrap(
      landingZones,
      deployAccount,
      region,
      roleName,
      envNameInput,
      outputFile,
      accountMap,
      servicesNames
    );

    if (dnsAccount !== deployAccount) {
      await runBootstrap(
        landingZones,
        dnsAccount,
        region,
        roleName,
        envNameInput,
        outputFile,
        accountMap,
        servicesNames
      );
    }

    if (bootstrappingServices) {
      const command = `npx cdk deploy \
      --require-approval='never' \
      --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
      --context env=${envNameInput} \
      --context isBootstrapping=true \
      --context assume-role-credentials:writeIamRoleName=${roleName} \
      --context assume-role-credentials:readIamRoleName=${roleName} \
      --outputs-file ${outputFile} \
      ${accountMap} ${bootstrappingServices}`;

      execSync(command, { stdio: 'inherit', env: process.env });
    }
  } catch (error) {
    process.exit(1);
  }
};

const runBootstrap = async (
  landingZones: string[],
  account: string,
  region: BaseRegionName,
  roleName: string,
  envNameInput: string,
  outputFile: string,
  accountMap: string,
  serviceName: string
) => {
  const command = `npx cdk bootstrap ${account}/${region} \
    --require-approval='never' \
    ${landingZones.map((lz) => `--trust ${lz}`).join(' ')} \
    ${landingZones.map((lz) => `--trust-for-lookup ${lz}`).join(' ')} \
    --no-bootstrap-customer-key \
    --require-approval='never' \
    --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
    --context env=${envNameInput} \
    --outputs-file ${outputFile} \
    ${accountMap} ${serviceName}`;

  const role = await assumeRole({ account, region }, roleName).catch((e) => {
    console.log(e);
    throw e;
  });

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
