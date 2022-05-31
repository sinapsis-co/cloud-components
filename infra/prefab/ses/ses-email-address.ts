import { Construct } from 'constructs';
import { AwsCustomResource, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getShortResourceName } from '../../common/naming/get-resource-name';
import { generateSesPolicyForCustomResource, SesDomain } from './ses-domain';

export type SesEmailAddressParams = {
  emailSender: string;
  sesDomain?: SesDomain;
};

export class SesEmailAddress extends Construct {
  constructor(scope: Construct, props: BaseServiceProps, params: SesEmailAddressParams) {
    super(scope, getLogicalName(SesEmailAddress.name));

    const verifyEmailAddress = new AwsCustomResource(this, 'VerifyEmailAddressIdentity', {
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

    if (params.sesDomain) {
      verifyEmailAddress.node.addDependency(params.sesDomain);
    }
  }
}
