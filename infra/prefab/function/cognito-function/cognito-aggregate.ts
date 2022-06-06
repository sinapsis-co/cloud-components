import { Construct } from 'constructs';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { BaseServiceProps } from '../../../common/synth/props-types';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CognitoFunction, CognitoHandlerParams } from './cognito-function';
import { BaseFunctionParams } from '../base-function';

export type CognitoAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  handlers: Record<HandlerName, CognitoHandlerParams>;
  userPool: UserPool;
};

export class CognitoAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(scope: Construct, props: BaseServiceProps, params: CognitoAggregateParams<HandlerName>) {
    super(scope, getLogicalName(CognitoAggregate.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new CognitoFunction(this, props, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
