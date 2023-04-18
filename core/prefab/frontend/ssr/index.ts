import { CfnOutput, Duration, RemovalPolicy } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  CachePolicy,
  Distribution,
  OriginRequestPolicy,
  PriceClass,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { EventConfig } from '@sinapsis-co/cc-sdk/catalog/event';
import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getCloudFrontName, getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';
import { WafPrefab } from '../../networking/waf';
import { PrivateBucketPrefab } from '../../storage/bucket/private-bucket';
import { FrontendEnvBuilder } from '../../util/config/frontend-env-builder';

export type SsrPrefabParams = {
  subDomain: string;
  certificate: ICertificate;
  assetMaxAge?: string;
  indexMaxAge?: string;
  baseDir?: string;
  distDir?: string;
  calculatedSecrets?: Record<string, string>;
  waf?: WafPrefab;
  skipRecord?: true;
  wwwRedirectEnabled?: true;
  deployTriggeredEventConfig: EventConfig & { bus: string };
};

export class SsrPrefab extends Construct {
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly distributionBucket: PrivateBucketPrefab;
  public readonly recipeBucket: PrivateBucketPrefab;

  constructor(service: Service, params: SsrPrefabParams) {
    super(service, getLogicalName(SsrPrefab.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.distributionBucket = new PrivateBucketPrefab(service, {
      bucketName: 'webapp',
      bucketProps: {
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
        cors: [
          {
            allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
            allowedOrigins: ['*'],
            allowedHeaders: ['*'],
          },
        ],
      },
    });

    this.recipeBucket = new PrivateBucketPrefab(service, {
      bucketName: 'recipe',
    });

    const behaviorOptions = {
      compress: true,
      origin: new S3Origin(this.distributionBucket.bucket, {
        originId: getCloudFrontName('Origin', 'Default', service.props),
      }),
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicy', {
        originRequestPolicyName: getCloudFrontName('Bucket', 'RequestPolicy', service.props),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
        },
      }),
      cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      cachedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };
    const domains = [this.domain];
    if (params.wwwRedirectEnabled) {
      if (params.subDomain)
        throw new SynthError('wwwRedirectEnabled is only allowed in the root domain', service.props);
      domains.push(`www.${this.domain}`);
    }
    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: domains,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          ttl: Duration.seconds(86400),
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(86400),
        },
      ],
      defaultBehavior: behaviorOptions,
      ...(service.props.envName !== 'prod' ? { priceClass: PriceClass.PRICE_CLASS_100 } : {}),
      webAclId: params.waf?.webACL?.attrArn,
    });

    if (!params.skipRecord) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      domains.map((d) => {
        new ARecord(service, d.split('.')[0], {
          zone: hostedZone,
          target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
          recordName: d,
        });
      });
    }

    new FrontendEnvBuilder(service, { ...params, name: params.subDomain });

    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        domain: this.domain,
        distributionBucket: this.distributionBucket.bucket.bucketName,
        recipeBucket: this.recipeBucket.bucket.bucketName,
        distributionId: this.distribution.distributionId,
        deployTriggeredEventConfig: params.deployTriggeredEventConfig,
        assetMaxAge: params.assetMaxAge || '300',
        indexMaxAge: params.indexMaxAge || '1800',
        baseDir: params.baseDir || `frontend/${service.props.serviceName}`,
        distDir: params.distDir || 'build',
      }),
    });
    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });
  }
}
