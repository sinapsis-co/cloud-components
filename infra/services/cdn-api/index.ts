import { Construct } from 'constructs';
import { RemovalPolicy, CfnOutput } from 'aws-cdk-lib';
import { Distribution, BehaviorOptions, CachePolicy, CacheQueryStringBehavior } from 'aws-cdk-lib/aws-cloudfront';
import { OriginRequestPolicy, AllowedMethods, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { HostedZone, ARecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';

import { getDomain } from '../../common/naming/get-domain';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Waf } from '../waf';

export type CdnApiConstructProps = {
  subDomain: string;
  certificate: ICertificate;
  waf?: Waf;
  skipRecord?: true;
};

export class CdnApiConstruct extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnApiConstructProps) {
    super(service, getLogicalName(CdnApiConstruct.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    const bucket = new Bucket(this, 'DefaultOrigin', {
      bucketName: getResourceName('cdn-default-origin', service.props),
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.behaviorOptions = {
      compress: true,
      cachePolicy: new CachePolicy(this, 'CachePolicy', {
        queryStringBehavior: CacheQueryStringBehavior.all(),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Authorization'],
        },
      }),
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicy', {
        headerBehavior: {
          behavior: 'whitelist',
          headers: [
            'Access-Control-Allow-Origin',
            'Access-Control-Request-Method',
            'Access-Control-Allow-Headers',
            'Access-Control-Request-Headers',
            'Origin',
          ],
        },
      }),
      allowedMethods: AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: [this.domain],
      defaultBehavior: {
        origin: new HttpOrigin(bucket.bucketDomainName),
        ...this.behaviorOptions,
      },
      webAclId: params.waf?.webACL?.attrArn,
    });

    if (!params.skipRecord) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      new ARecord(service, 'Record', {
        zone: hostedZone,
        target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
        recordName: this.domain,
      });
    }

    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });
  }
}
