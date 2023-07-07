import { IStringParameter, StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

export type ParameterSecretParams = {
  name?: string;
  existingName?: string;
  value?: string;
};

export class ParameterSecret extends Construct {
  public readonly parameter: IStringParameter;

  constructor(service: Service, params: ParameterSecretParams) {
    super(service, getLogicalName(ParameterSecret.name, params.name || params.existingName));

    if (!params.existingName && !params.name) throw new SynthError('name or existingName are required');

    if (params.existingName) {
      this.parameter = StringParameter.fromStringParameterName(
        this,
        getLogicalName('param', params.existingName),
        params.existingName
      );
    }

    if (params.name) {
      this.parameter = new StringParameter(this, getLogicalName('param', params.name), {
        parameterName: getResourceName(params.name, service.props),
        stringValue: params.value || 'Default value: this need to be changed',
      });
    }
  }

  public useModReader(variableName: string): (lambda: NodejsFunction) => void {
    return this.useMod(variableName, [ParameterSecret.modifier.reader]);
  }

  public useMod(
    variableName: string,
    mods: ((parameter: IStringParameter) => any)[]
  ): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.parameter.parameterName);
      mods.map((fn) => fn(this.parameter)(lambda));
    };
  }

  public static modifier = {
    reader: (parameter: IStringParameter): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        parameter.grantRead(lambda);
        return lambda;
      };
    },
  };
}
