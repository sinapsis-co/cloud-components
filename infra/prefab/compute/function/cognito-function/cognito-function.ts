import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
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
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'COGNITO' },
    }).lambdaFunction;

    params.userPool.addTrigger(params.operation, this.lambdaFunction);
  }
}
