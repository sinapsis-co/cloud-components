import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';

export type CognitoHandlerParams = BaseHandlerParams & {
  operation: UserPoolOperation;
};

export type CognitoFunctionParams = BaseFunctionParams & {
  userPool: UserPool;
};

export class CognitoFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: CognitoFunctionParams & CognitoHandlerParams) {
    super(scope, getLogicalName(CognitoFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(this, props, params).lambdaFunction;

    params.userPool.addTrigger(params.operation, this.lambdaFunction);
  }
}
