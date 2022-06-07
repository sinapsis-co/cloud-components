import { Construct } from 'constructs';
import { CnameRecord, HostedZone, IHostedZone } from 'aws-cdk-lib/aws-route53';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getDomain } from '../../common/naming/get-domain';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { Service } from '../../common/service';

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
