import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { BaseServiceProps } from '../../../common/synth/props-types';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { EventFunction, EventHandlerProps } from './event-function';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { CustomEventBusParams } from '../../../services/custom-event-bus';

export type EventAggregateParams<HandlerName extends string = string> = {
  handlers: Record<HandlerName, EventHandlerProps>;
  eventBus: CustomEventBusParams;
  baseFunctionFolder: string;
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  table?: Table;
  tablePermission?: TablePermission;
  compiled?: true;
};

export class EventAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(scope: Construct, props: BaseServiceProps, params: EventAggregateParams<HandlerName>) {
    super(scope, getLogicalName(EventAggregate.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new EventFunction(this, props, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
