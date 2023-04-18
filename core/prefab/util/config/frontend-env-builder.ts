import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type FrontendEnvBuilderParams = {
  name: string;
  calculatedSecrets?: Record<string, string>;
};

export class FrontendEnvBuilder extends Construct {
  public readonly secrets: Record<string, StringParameter> = {};

  constructor(service: Service, params: FrontendEnvBuilderParams) {
    super(service, getLogicalName(FrontendEnvBuilder.name, params.name));

    new StringParameter(this, getLogicalName('Manual', params.name), {
      parameterName: getResourceName('env-manual', service.props),
      stringValue: 'REACT_ENV_EXAMPLE=example',
    });

    if (params.calculatedSecrets && Object.keys(params.calculatedSecrets).length > 0)
      new StringParameter(this, getLogicalName('Calculated', params.name), {
        parameterName: getResourceName('env-calculated', service.props),
        stringValue: Object.keys(params.calculatedSecrets)
          .map((key) => `${key}=${params.calculatedSecrets![key]}`)
          .join('\n'),
      });
  }
}
