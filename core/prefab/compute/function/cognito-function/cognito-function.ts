import { Duration } from 'aws-cdk-lib';
import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type CognitoHandlerParams = BaseHandlerParams & {
  operation: UserPoolOperation;
};

export type CognitoFunctionParams = BaseFunctionParams & {
  userPool: UserPool;
};

export class CognitoFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: CognitoFunctionParams & CognitoHandlerParams) {
    super(service, getLogicalName(CognitoFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      timeout: Duration.seconds(5),
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'COGNITO' },
    }).lambdaFunction;

    if (this.lambdaFunction.timeout && this.lambdaFunction.timeout.toSeconds() > Duration.seconds(5).toSeconds()) {
      throw new SynthError('Lambda timeout must be less than 5 seconds CognitoFunction ApiFunctions', service.props);
    }

    params.userPool.addTrigger(params.operation, this.lambdaFunction);
  }
}
