import { Construct } from 'constructs';
import { AwsCustomResource, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getShortResourceName } from '../../common/naming/get-resource-name';
import { generateSesPolicyForCustomResource } from './ses-domain';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export type SesEmailAddressParams = {
  emailSender: string;
};

export class SesEmailAddress extends Construct {
  constructor(scope: Construct, props: BaseServiceProps, params: SesEmailAddressParams) {
    super(scope, getLogicalName(SesEmailAddress.name));

    new AwsCustomResource(this, 'VerifyEmailAddressIdentity', {
      functionName: getShortResourceName('ses-verification', props),
      onCreate: {
        service: 'SES',
        action: 'verifyEmailIdentity',
        parameters: {
          EmailAddress: params.emailSender,
        },
        physicalResourceId: PhysicalResourceId.of('verify-email-address'),
      },
      onDelete: {
        service: 'SES',
        action: 'deleteIdentity',
        parameters: {
          Identity: params.emailSender,
        },
      },
      policy: generateSesPolicyForCustomResource('VerifyEmailIdentity', 'DeleteIdentity'),
    });
  }

  public static emailSenderModifier(): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addToRolePolicy(
        new PolicyStatement({ effect: Effect.ALLOW, actions: ['ses:SendRawEmail'], resources: ['*'] })
      );
    };
  }
}
