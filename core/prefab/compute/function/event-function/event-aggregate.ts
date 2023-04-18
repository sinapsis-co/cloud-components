import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
import { EventBusPrefab } from '../../../integration/event-bus';
import { BaseFunctionParams } from '../base-function';
import { EventFunction, EventHandlerParams } from './event-function';

export type EventAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  name?: string;
  handlers: Record<HandlerName, EventHandlerParams>;
  eventBus: EventBusPrefab;
};

export class EventAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: EventAggregateParams<HandlerName>) {
    super(service, getLogicalName(EventAggregate.name, params.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new EventFunction(service, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: {
          ...params.environment,
          ...params.handlers[handler].environment,
        },
      }).lambdaFunction;
    });
  }
}
