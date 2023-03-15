import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getParameterName, getParameterNamePlain } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';

export type DeploySecretProps = {
  name: string;
  calculatedSecrets?: Record<string, string>;
  secretsKeys?: string[];
  saveAsPlain?: boolean;
};

export class DeploySecret extends Construct {
  public readonly secrets: Record<string, StringParameter> = {};

  constructor(service: Service, params: DeploySecretProps) {
    super(service, getLogicalName(DeploySecret.name, params.name));

    params.secretsKeys?.map((secretKey) => {
      const secretName = `secret/${secretKey}`;
      const parameter = new StringParameter(this, getLogicalName(`new-${secretName}`, params.name), {
        simpleName: false,
        parameterName: getParameterNamePlain(secretName, service.props),
        stringValue: 'to-be-defined',
      });
      this.secrets[secretKey] = parameter;
    });

    if (params.calculatedSecrets && Object.keys(params.calculatedSecrets).length > 0)
      new StringParameter(this, getLogicalName('Secret', params.name), {
        simpleName: false,
        parameterName: getParameterName('secret/calculated', service.props),
        stringValue: JSON.stringify(params.calculatedSecrets),
      });
  }
}
