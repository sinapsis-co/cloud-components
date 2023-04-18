/* eslint-disable no-console */
import { preScript } from '../../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../../common/synth/props-types';

export const genPostmanEnv = async <
  GlobalConst,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
>(
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  output: Record<string, Record<string, string>>,
  args: string[]
): Promise<void> => {
  try {
    console.log('<< Gen Postman Env >>');

    const { envNameInput } = await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    const identityServiceKey = `${globalConstConfig.projectName}-${envNameInput}-Identity`
      .split('-')
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join('-');
    const clientIdKey = Object.keys(output[identityServiceKey]).find((w) =>
      w.startsWith('CognitoAuthPoolPrefabUserPoolClient')
    );

    const cdnApiServiceKey = `${globalConstConfig.projectName}-${envNameInput}-CdnApi`
      .split('-')
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join('-');
    const apiUrlKey = Object.keys(output[cdnApiServiceKey]).find((w) => w.startsWith('CdnApiPrefabapiDomain'));
    if (!clientIdKey || !apiUrlKey) throw new Error('Missing output');

    const postmanEnv = {
      name: `${globalConstConfig.projectName}-${envNameInput}`,
      values: [
        {
          key: 'baseUrl',
          value: `https://${output[cdnApiServiceKey][apiUrlKey]}`,
          enabled: true,
        },
        {
          key: 'cognitoClientId',
          value: output[identityServiceKey][clientIdKey],
          enabled: true,
        },
        {
          key: 'cognitoUser',
          value: 'andres+test@sinapsis.co',
          enabled: true,
        },
        {
          key: 'cognitoPassword',
          value: '4tn34n2ewc-23r23',
          enabled: true,
        },
      ],
    };
    console.log(JSON.stringify(postmanEnv, null, 2));
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
