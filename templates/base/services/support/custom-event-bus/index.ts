import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventBus } from 'aws-cdk-lib/aws-events';
import { CustomEventBusConstruct } from '@sinapsis-co/cc-infra-v2/services/custom-event-bus';

import { GlobalProps } from '../../../config/config-type';

export class CustomEventBus extends Service {
  public readonly customEventBus: CustomEventBusConstruct;
  public readonly bus: EventBus;

  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, CustomEventBus.name, globalProps, {});

    this.customEventBus = new CustomEventBusConstruct(this);
    this.bus = this.customEventBus.bus;
  }
}
