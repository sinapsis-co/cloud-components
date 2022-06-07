import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { EventFunction, EventHandlerParams } from './event-function';
import { CustomEventBusParams } from '../../../services/custom-event-bus';
import { BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type EventAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  handlers: Record<HandlerName, EventHandlerParams>;
  eventBus: CustomEventBusParams;
};

export class EventAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: EventAggregateParams<HandlerName>) {
    super(service, getLogicalName(EventAggregate.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new EventFunction(service, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
