import { Construct } from 'constructs';
import { EventBus, IEventBus } from 'aws-cdk-lib/aws-events';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type CustomEventBusParams = IEventBus;
export class CustomEventBusConstruct extends Construct {
  public readonly bus: EventBus;

  constructor(service: Service) {
    super(service.scope, getLogicalName(CustomEventBusConstruct.name));

    this.bus = new EventBus(this, 'bus', { eventBusName: getResourceName('', service.props) });
  }

  public writerModifier(variableName = 'EVENT_BUS'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.bus.eventBusName);
      this.bus.grantPutEventsTo(lambda);
    };
  }

  static addBus(lambdaFunction: NodejsFunction, eventBus?: CustomEventBusParams): void {
    if (eventBus instanceof EventBus) {
      eventBus.grantPutEventsTo(lambdaFunction);
      lambdaFunction.addEnvironment('EVENT_BUS', eventBus.eventBusName);
    }
  }
}
