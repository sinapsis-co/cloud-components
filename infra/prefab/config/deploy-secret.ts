import { Construct } from 'constructs';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getParameterName, getParameterNamePlain } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';

export type DeploySecretProps = {
  calculatedSecrets?: Record<string, string>;
  secretsKeys?: string[];
  saveAsPlain?: boolean;
};

export class DeploySecret extends Construct {
  public readonly secrets: Record<string, StringParameter> = {};

  constructor(scope: Construct, props: BaseServiceProps, params: DeploySecretProps) {
    super(scope, getLogicalName(DeploySecret.name));

    params.secretsKeys?.map((secretKey) => {
      const secretName = `secret/${secretKey}`;
      const input = this.node.tryGetContext(secretKey);
      let value;
      if (input) {
        value = params.saveAsPlain ? input : JSON.stringify({ [secretKey]: input });
      } else {
        StringParameter.valueFromLookup(this, getParameterNamePlain(secretName, props));
        value = StringParameter.valueForStringParameter(this, getParameterNamePlain(secretName, props));
      }
      const parameter = new StringParameter(this, 'Secret', {
        simpleName: false,
        parameterName: getParameterNamePlain(secretName, props),
        stringValue: value,
      });
      this.secrets[secretKey] = parameter;
    });

    if (params.calculatedSecrets && Object.keys(params.calculatedSecrets).length > 0)
      new StringParameter(this, 'Secret', {
        simpleName: false,
        parameterName: getParameterName('secret/calculated', props),
        stringValue: JSON.stringify(params.calculatedSecrets),
      });
  }
}
