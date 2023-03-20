import { Construct } from '@sinapsis-co/cc-infra/common/service';
import { BaseGlobalProps, BaseServiceProps } from '@sinapsis-co/cc-infra/common/synth/props-types';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { StripePayoutWorkflowParams } from '../workflow';

export class TaskUpdateStatusPayout<GlobalProps extends BaseGlobalProps> {
  readonly task: sfn.TaskStateBase;

  constructor(scope: Construct, props: BaseServiceProps<GlobalProps, StripePayoutWorkflowParams>) {
    this.task = new tasks.LambdaInvoke(scope, 'Update Stripe Payout', {
      lambdaFunction: props.updatePayoutStripe.lambdaFunction,
      payloadResponseOnly: true,
      resultPath: '$.stripePayout',
      payload: sfn.TaskInput.fromObject({
        stripePayout: {
          status: sfn.JsonPath.stringAt('$.connectPayout.status'),
        },
        stripePayoutId: sfn.JsonPath.stringAt('$.stripePayout.id'),
        tenantId: sfn.JsonPath.stringAt('$.stripePayout.tenantId'),
      }),
    });
  }
}
