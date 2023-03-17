import { CfnOutput } from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  BehaviorOptions,
  CachePolicy,
  CacheQueryStringBehavior,
  Distribution,
  OriginRequestPolicy,
  PriceClass,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, HttpOriginProps, LoadBalancerV2Origin, RestApiOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getCloudFrontName, getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';
import { WafPrefab } from '../../networking/waf';
import { PrivateBucketPrefab } from '../../storage/bucket/private-bucket';
import { PublicAlbPrefab } from '../alb-public';
import { ApiRestPrefab } from '../api/api-rest';

export type CdnApiConstructParams = {
  subDomain: string;
  certificate: ICertificate;
  albDefaultBehavior?: PublicAlbPrefab;
  restApiDefaultBehavior?: ApiRestPrefab;
  waf?: WafPrefab;
  skipRecord?: true;
};

export class CdnApiPrefab extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  private readonly service: Service;
  private readonly distribution: Distribution;
  private readonly apiGatewayRequestPolicy: OriginRequestPolicy;
  private readonly apiGatewayCachePolicy: CachePolicy;
  private readonly apiGatewayBehaviorOptions: Omit<BehaviorOptions, 'origin'>;
  private readonly unrestrictedBehaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnApiConstructParams) {
    super(service, getLogicalName(CdnApiPrefab.name, params.subDomain));

    this.service = service;
    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    if (params.albDefaultBehavior && params.restApiDefaultBehavior)
      throw new SynthError('Only alb or api can be default behavior', service.props);

    this.apiGatewayCachePolicy = new CachePolicy(this, 'CachePolicy', {
      cachePolicyName: getCloudFrontName('ApiGateway', 'CachePolicy', this.service.props),
      queryStringBehavior: CacheQueryStringBehavior.all(),
      headerBehavior: {
        behavior: 'whitelist',
        headers: ['Authorization'],
      },
    });
    this.apiGatewayRequestPolicy = new OriginRequestPolicy(this, 'OriginRequestPolicy', {
      originRequestPolicyName: getCloudFrontName('ApiGateway', 'RequestPolicy', this.service.props),
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
    });

    this.apiGatewayBehaviorOptions = {
      compress: true,
      cachePolicy: this.apiGatewayCachePolicy,
      originRequestPolicy: this.apiGatewayRequestPolicy,
      allowedMethods: AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    this.unrestrictedBehaviorOptions = {
      compress: true,
      cachePolicy: CachePolicy.CACHING_DISABLED,
      originRequestPolicy: OriginRequestPolicy.ALL_VIEWER,
      allowedMethods: AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    let defaultBehavior: BehaviorOptions = {
      origin: new HttpOrigin(
        new PrivateBucketPrefab(service, { bucketName: 'default-origin' }).bucket.bucketDomainName,
        { originId: getCloudFrontName('Origin', 'Default', this.service.props) }
      ),
      ...this.apiGatewayBehaviorOptions,
    };

    if (params.albDefaultBehavior) {
      defaultBehavior = {
        origin: new LoadBalancerV2Origin(params.albDefaultBehavior.alb, {
          originId: getCloudFrontName('Origin', 'Default', this.service.props),
        }),
        ...this.unrestrictedBehaviorOptions,
      };
    }

    if (params.restApiDefaultBehavior) {
      defaultBehavior = {
        origin: new RestApiOrigin(params.restApiDefaultBehavior.api as RestApi, {
          originId: getCloudFrontName('Origin', 'Default', this.service.props),
        }),
        ...this.unrestrictedBehaviorOptions,
      };
    }

    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: [this.domain],
      defaultBehavior,
      ...(service.props.envName !== 'prod' ? { priceClass: PriceClass.PRICE_CLASS_100 } : {}),
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

  public addApiGateway(basePath: string, apiUrl: string, originOptions?: HttpOriginProps): void {
    this.distribution.addBehavior(
      `/${basePath}*`,
      new HttpOrigin(apiUrl, { originId: getCloudFrontName('Origin', basePath, this.service.props), ...originOptions }),
      this.apiGatewayBehaviorOptions
    );
  }
  public addAlb(basePath: string, alb: ApplicationLoadBalancer): void {
    this.distribution.addBehavior(
      `/${basePath}/*`,
      new LoadBalancerV2Origin(alb, { originId: getCloudFrontName('Origin', basePath, this.service.props) }),
      this.unrestrictedBehaviorOptions
    );
  }
}
