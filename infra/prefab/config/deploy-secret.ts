import { Construct } from 'constructs';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getParameterName, getParameterNamePlain } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';

export type DeploySecretProps = {
  calculatedSecrets?: Record<string, string>;
  secretsKeys?: string[];
  saveAsPlain?: boolean;
};

export class DeploySecret extends Construct {
  public readonly secrets: Record<string, StringParameter> = {};

  constructor(service: Service, params: DeploySecretProps) {
    super(service, getLogicalName(DeploySecret.name));

    params.secretsKeys?.map((secretKey) => {
      const secretName = `secret/${secretKey}`;
      const input = this.node.tryGetContext(secretKey);
      let value;
      if (input) {
        value = params.saveAsPlain ? input : JSON.stringify({ [secretKey]: input });
      } else {
        StringParameter.valueFromLookup(this, getParameterNamePlain(secretName, service.props));
        value = StringParameter.valueForStringParameter(this, getParameterNamePlain(secretName, service.props));
      }
      const parameter = new StringParameter(this, 'Secret', {
        simpleName: false,
        parameterName: getParameterNamePlain(secretName, service.props),
        stringValue: value,
      });
      this.secrets[secretKey] = parameter;
    });

    if (params.calculatedSecrets && Object.keys(params.calculatedSecrets).length > 0)
      new StringParameter(this, 'Secret', {
        simpleName: false,
        parameterName: getParameterName('secret/calculated', service.props),
        stringValue: JSON.stringify(params.calculatedSecrets),
      });
  }
}
