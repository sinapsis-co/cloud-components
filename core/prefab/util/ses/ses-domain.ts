import { CnameRecord, HostedZone, IHostedZone } from 'aws-cdk-lib/aws-route53';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

import { CfnUserPool } from 'aws-cdk-lib/aws-cognito/lib';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs/lib/function';
import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { Service } from '../../../common/service';
import { BaseGlobalProps } from '../../../common/synth/props-types';

export class SesDomain extends Construct {
  constructor(service: Service) {
    super(service, getLogicalName(SesDomain.name));

    const domain = getDomain('', service.props);
    const zone = this.getHostedZone(domain);

    const verifyDomainIdentity = this.verifyDomainIdentity(domain);

    const verifyDomainDkim = this.verifyDomainDkim(domain);
    verifyDomainDkim.node.addDependency(verifyDomainIdentity);

    this.addDkimRecords(verifyDomainDkim, zone, domain);
  }

  private verifyDomainIdentity(domainName: string): AwsCustomResource {
    return new AwsCustomResource(this, 'VerifyDomainIdentity', {
      installLatestAwsSdk: true,
      onCreate: {
        service: 'SES',
        action: 'verifyDomainIdentity',
        parameters: {
          Domain: domainName,
        },
        physicalResourceId: PhysicalResourceId.fromResponse('VerificationToken'),
      },
      onUpdate: {
        service: 'SES',
        action: 'verifyDomainIdentity',
        parameters: {
          Domain: domainName,
        },
        physicalResourceId: PhysicalResourceId.fromResponse('VerificationToken'),
      },
      onDelete: {
        service: 'SES',
        action: 'deleteIdentity',
        parameters: {
          Identity: domainName,
        },
      },
      policy: generateSesPolicyForCustomResource('VerifyDomainIdentity', 'DeleteIdentity'),
    });
  }

  private verifyDomainDkim(domainName: string): AwsCustomResource {
    return new AwsCustomResource(this, 'VerifyDomainDkim', {
      installLatestAwsSdk: true,
      onCreate: {
        service: 'SES',
        action: 'verifyDomainDkim',
        parameters: {
          Domain: domainName,
        },
        physicalResourceId: PhysicalResourceId.of(`${domainName}-verify-domain-dkim`),
      },
      onUpdate: {
        service: 'SES',
        action: 'verifyDomainDkim',
        parameters: {
          Domain: domainName,
        },
        physicalResourceId: PhysicalResourceId.of(`${domainName}-verify-domain-dkim`),
      },
      policy: generateSesPolicyForCustomResource('VerifyDomainDkim'),
    });
  }

  private getHostedZone(domainName: string): IHostedZone {
    return HostedZone.fromLookup(this, 'Zone', {
      domainName: domainName,
    });
  }

  private addDkimRecords(verifyDomainDkim: AwsCustomResource, zone: IHostedZone, domainName: string) {
    [0, 1, 2].forEach((val) => {
      const dkimToken = verifyDomainDkim.getResponseField(`DkimTokens.${val}`);
      const cnameRecord = new CnameRecord(this, 'SesDkimVerificationRecord' + val, {
        zone,
        recordName: `${dkimToken}._domainkey.${domainName}`,
        domainName: `${dkimToken}.dkim.amazonses.com`,
      });
      cnameRecord.node.addDependency(verifyDomainDkim);
    });
  }

  // Custom Methods
  public useMod(mods: (() => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      mods.map((fn) => fn()(lambda));
    };
  }

  public static modifier = {
    emailSender: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({ effect: Effect.ALLOW, actions: ['ses:SendRawEmail'], resources: ['*'] })
        );
      };
    },
    smsSender: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({ effect: Effect.ALLOW, actions: ['sns:Publish'], resources: ['*'] })
        );
      };
    },
  };

  public static getCognitoRef(props: BaseGlobalProps): CfnUserPool.EmailConfigurationProperty {
    return {
      emailSendingAccount: 'DEVELOPER',
      from: props.emailSender,
      sourceArn: `arn:aws:ses:${props.regionName}:${props.deployTarget['services'].account}:identity/${getDomain(
        '',
        props
      )}`,
    };
  }
}

export function generateSesPolicyForCustomResource(...methods: string[]): AwsCustomResourcePolicy {
  return AwsCustomResourcePolicy.fromStatements([
    new PolicyStatement({
      actions: methods.map((method) => 'ses:' + method),
      effect: Effect.ALLOW,
      resources: ['*'],
    }),
  ]);
}
