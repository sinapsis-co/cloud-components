/* eslint-disable no-console */
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
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

export const invalidationSSR: ConfigCommand = async <
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
    console.log('<< Invalidation SSR Started >>');

    const {
      envName,
      ephemeralEnvName,
      servicesNamesInput,
      roleName,
      accountMap,
      isSingleProjectAccount,
    } = await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    console.log('>> STEP: (1/3) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    console.log('>> STEP: (2/3) => RENDERING ENV');

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
    const { distributionId } = JSON.parse(deployConfig.Parameter?.Value);

    console.log('STEP: (3/3) => CREATING INVALIDATION');

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
    console.log(`>> Invalidation Created =>  DistributionId ${distributionId}`);
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
