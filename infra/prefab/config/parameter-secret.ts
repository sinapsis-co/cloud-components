import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getParameterNamePlain } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';

export type ParameterSecretProps = {
  name: string;
};

export class ParameterSecret extends Construct {
  public readonly secret: StringParameter;

  constructor(service: Service, params: ParameterSecretProps) {
    super(service, getLogicalName(ParameterSecret.name, params.name));

    this.secret = new StringParameter(this, getLogicalName('param', params.name), {
      simpleName: false,
      parameterName: getParameterNamePlain(params.name, service.props),
      stringValue: 'Default value: this need to be changed',
    });
  }
}
