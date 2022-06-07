import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type CognitoHandlerParams = BaseHandlerParams & {
  operation: UserPoolOperation;
};

export type CognitoFunctionParams = BaseFunctionParams & {
  userPool: UserPool;
};

export class CognitoFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: CognitoFunctionParams & CognitoHandlerParams) {
    super(service.scope, getLogicalName(CognitoFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    params.userPool.addTrigger(params.operation, this.lambdaFunction);
  }
}
