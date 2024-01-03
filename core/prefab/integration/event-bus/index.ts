import { EventBus, IEventBus } from 'aws-cdk-lib/aws-events';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { Modifier } from '@sinapsis-cloud-components/core/common/modifier';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type EventBusPrefabParams = {
  defaultEventBus?: true;
};
export class EventBusPrefab extends Construct {
  public readonly bus: IEventBus;

  constructor(service: Service, params?: EventBusPrefabParams) {
    super(service, getLogicalName(EventBusPrefab.name));

    if (params?.defaultEventBus) {
      this.bus = EventBus.fromEventBusName(service, 'DefaultEventBus', 'default');
    } else {
      this.bus = new EventBus(this, 'bus', { eventBusName: getResourceName('', service.props) });
    }
  }

  // Mods
  public useMod(variableName = 'EVENT_BUS', mods: ((bus: IEventBus) => any)[]): Modifier {
    return (lambda) => {
      lambda.addEnvironment(variableName, this.bus.eventBusName);
      mods.map((fn) => fn(this.bus)(lambda));
    };
  }

  // Class Mods
  public static modifier = {
    writer: (bus: IEventBus): Modifier => {
      return (lambda) => {
        bus.grantPutEventsTo(lambda);
      };
    },
  };

  // Instance Mods
  public useModWriter(variableName = 'EVENT_BUS'): Modifier {
    return this.useMod(variableName, [EventBusPrefab.modifier.writer]);
  }

  // addBus is used inside aggregates in order to apply permissions if EventBus is there.
  public static addBus(lambdaFunction: NodejsFunction, eventBus?: IEventBus): void {
    if (eventBus instanceof EventBus) {
      eventBus.grantPutEventsTo(lambdaFunction);
      lambdaFunction.addEnvironment('EVENT_BUS', eventBus.eventBusName);
    }
  }
}
