import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  BehaviorOptions,
  CachePolicy,
  CacheQueryStringBehavior,
  Distribution,
  OriginRequestPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, LoadBalancerV2Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import { getDomain } from '../../common/naming/get-domain';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { PublicAlbConstruct } from '../alb-public';
import { Waf } from '../waf';

export type CdnApiConstructParams = {
  subDomain: string;
  certificate: ICertificate;
  albDefaultBehavior?: PublicAlbConstruct;
  waf?: Waf;
  skipRecord?: true;
};

export class CdnApiConstruct extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnApiConstructParams) {
    super(service, getLogicalName(CdnApiConstruct.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

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

    const defaultBehavior: BehaviorOptions = params.albDefaultBehavior
      ? {
          origin: new LoadBalancerV2Origin(params.albDefaultBehavior?.alb),
          ...this.behaviorOptions,
          originRequestPolicy: OriginRequestPolicy.ALL_VIEWER,
        }
      : {
          origin: new HttpOrigin(
            new Bucket(this, 'DefaultOrigin', {
              bucketName: getResourceName('cdn-default-origin', service.props),
              removalPolicy: RemovalPolicy.DESTROY,
            }).bucketDomainName
          ),
          ...this.behaviorOptions,
        };

    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: [this.domain],
      defaultBehavior,
      webAclId: params.waf?.webACL?.attrArn,
    });

    // this.distribution.de

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
