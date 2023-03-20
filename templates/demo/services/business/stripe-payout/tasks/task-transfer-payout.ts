import { Construct } from '@sinapsis-co/cc-infra/common/service';
import { BaseGlobalProps, BaseServiceProps } from '@sinapsis-co/cc-infra/common/synth/props-types';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { StripePayoutWorkflowParams } from '../workflow';

export class TaskCreateTransferPayout<GlobalProps extends BaseGlobalProps> {
  readonly task: sfn.TaskStateBase;

  constructor(scope: Construct, props: BaseServiceProps<GlobalProps, StripePayoutWorkflowParams>) {
    this.task = new tasks.LambdaInvoke(scope, 'Create Transfer Stripe Payout', {
      lambdaFunction: props.createTransfer.lambdaFunction,
      payloadResponseOnly: true,
      resultPath: '$.detailStripeTransfer',
    });
  }
}
