import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { BaseGlobalProps, BaseServiceProps } from '@sinapsis-co/cc-infra-v2/common/synth/props-types';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { StripePayoutWorkflowParams } from '../workflow';

export class TaskCreateStripeInStripePayout<GlobalProps extends BaseGlobalProps> {
  readonly task: sfn.TaskStateBase;

  constructor(scope: Construct, props: BaseServiceProps<GlobalProps, StripePayoutWorkflowParams>) {
    this.task = new tasks.LambdaInvoke(scope, 'Create Stripe In Payout', {
      lambdaFunction: props.createStripeInPayout.lambdaFunction,
      payloadResponseOnly: true,
      resultPath: '$.connectPayout',
    });
  }
}