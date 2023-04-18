import { IStringParameter, StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';

export type ParameterSecretProps = {
  name?: string;
  existingName?: string;
  value?: string;
};

export class ParameterSecret extends Construct {
  public readonly secret: IStringParameter;

  constructor(service: Service, params: ParameterSecretProps) {
    super(service, getLogicalName(ParameterSecret.name, params.name || params.existingName));

    if (!params.existingName && !params.name) throw new SynthError('name or existingName are required');

    if (params.existingName) {
      this.secret = StringParameter.fromStringParameterName(
        this,
        getLogicalName('param', params.existingName),
        params.existingName
      );
    }

    if (params.name) {
      this.secret = new StringParameter(this, getLogicalName('param', params.name), {
        simpleName: false,
        parameterName: getResourceName(params.name, service.props),
        stringValue: params.value || 'Default value: this need to be changed',
      });
    }
  }
}
