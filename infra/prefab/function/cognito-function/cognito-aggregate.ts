import { Construct } from 'constructs';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CognitoFunction, CognitoHandlerParams } from './cognito-function';
import { BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type CognitoAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  handlers: Record<HandlerName, CognitoHandlerParams>;
  userPool: UserPool;
};

export class CognitoAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: CognitoAggregateParams<HandlerName>) {
    super(service.scope, getLogicalName(CognitoAggregate.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new CognitoFunction(service, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
