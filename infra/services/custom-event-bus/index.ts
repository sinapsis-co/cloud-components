import { Construct } from 'constructs';
import { EventBus, IEventBus } from 'aws-cdk-lib/aws-events';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type CustomEventBusParams = IEventBus;
export class CustomEventBusConstruct extends Construct {
  public readonly bus: EventBus;

  constructor(scope: Construct, props: BaseServiceProps) {
    super(scope, getLogicalName(CustomEventBusConstruct.name));

    this.bus = new EventBus(this, 'bus', { eventBusName: getResourceName('', props) });
  }

  static addBus(lambdaFunction: NodejsFunction, eventBus?: CustomEventBusParams): void {
    if (eventBus instanceof EventBus) {
      eventBus.grantPutEventsTo(lambdaFunction);
      lambdaFunction.addEnvironment('EVENT_BUS', eventBus.eventBusName);
    }
  }
}
