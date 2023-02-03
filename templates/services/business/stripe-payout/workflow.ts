import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { Duration } from 'aws-cdk-lib';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { GlobalProps } from 'config/config-type';
import * as tasks from './tasks';

export type StripePayoutWorkflowParams = {
  createTransfer: BaseFunction;
  createStripeInPayout: BaseFunction;
  createStripePayout: BaseFunction;
  updatePayoutStripe: BaseFunction;
};

export class StripePayoutWorkflow extends Service<GlobalProps, StripePayoutWorkflowParams> {
  readonly stateMachine: sfn.StateMachine;
  readonly definition: sfn.IChainable;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripePayoutWorkflowParams) {
    super(scope, StripePayoutWorkflow.name, globalProps, { params });

    this.definition = new tasks.TaskCreatePayout(scope, this.props).task.next(
      new tasks.TaskCreateTransferPayout(scope, this.props).task.next(
        new tasks.TaskCreateStripeInStripePayout(scope, this.props).task.next(
          new tasks.TaskUpdateStatusPayout(scope, this.props).task.next(new sfn.Succeed(scope, 'Success'))
        )
      )
    );

    this.stateMachine = new sfn.StateMachine(scope, this.props.serviceName, {
      definition: this.definition,
      timeout: Duration.minutes(15),
      stateMachineType: sfn.StateMachineType.STANDARD,
    });
  }
}
