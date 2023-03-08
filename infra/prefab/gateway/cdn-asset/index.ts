import { CfnOutput } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  BehaviorOptions,
  CachePolicy,
  Distribution,
  OriginRequestPolicy,
  PriceClass,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getBucketName, getCloudFrontName, getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { WafPrefab } from '../../networking/waf';
import { AssetBucketParams, AssetBucketPrefab } from '../../storage/bucket/asset-bucket';

export type CdnAssetConstructProps = {
  subDomain: string;
  certificate: ICertificate;
  recordForRootPath: boolean;
  assetBucketProps?: AssetBucketParams;
  waf?: WafPrefab;
  bucketName?: string;
  skipRecord?: true;
};

export class CdnAssetPrefab extends Construct {
  public readonly bucketPrefab: AssetBucketPrefab;
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnAssetConstructProps) {
    super(service, getLogicalName(CdnAssetPrefab.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.bucketPrefab = new AssetBucketPrefab(service, {
      bucketName: getBucketName(params.bucketName || params.subDomain, service.props),
      ...params.assetBucketProps,
      bucketProps: {
        cors: [{ allowedMethods: [HttpMethods.GET, HttpMethods.POST], allowedOrigins: ['*'], allowedHeaders: ['*'] }],
        ...params.assetBucketProps?.bucketProps,
      },
    });

    this.behaviorOptions = {
      compress: true,
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicy', {
        originRequestPolicyName: getCloudFrontName('Bucket', 'RequestPolicy', service.props),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
        },
      }),
      cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      allowedMethods: AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    const domains = [this.domain];
    if (params.recordForRootPath) domains.push(getDomain('', service.props));

    this.distribution = new Distribution(this, 'Distribution', {
      enabled: true,
      comment: getResourceName('cdn', service.props),
      certificate: params.certificate,
      domainNames: domains,
      defaultBehavior: {
        origin: new S3Origin(this.bucketPrefab.bucket, {
          originId: getCloudFrontName('Origin', 'Default', service.props),
        }),
        ...this.behaviorOptions,
      },
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

    new CfnOutput(this, 'Domain', { value: this.domain });
    new CfnOutput(this, 'BaseUrl', { value: this.baseUrl });
  }
}
