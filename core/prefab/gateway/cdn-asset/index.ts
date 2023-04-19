import { CfnOutput } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import * as awsCloudfront from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getCloudFrontName, getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { WafPrefab } from 'prefab/networking/waf';
import { AssetBucketParams, AssetBucketPrefab } from 'prefab/storage/bucket/asset-bucket';

export type CdnAssetConstructProps = {
  subDomain: string;
  certificate: ICertificate;
  assetBucketProps: AssetBucketParams;
  waf?: WafPrefab;
  skipRecord?: true;
};

export class CdnAssetPrefab extends Construct {
  public readonly bucketPrefab: AssetBucketPrefab;
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: awsCloudfront.Distribution;
  public readonly behaviorOptions: Omit<awsCloudfront.BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnAssetConstructProps) {
    super(service, getLogicalName(CdnAssetPrefab.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.bucketPrefab = new AssetBucketPrefab(service, {
      ...params.assetBucketProps,
      bucketProps: {
        cors: [{ allowedMethods: [HttpMethods.GET, HttpMethods.POST], allowedOrigins: ['*'], allowedHeaders: ['*'] }],
        ...params.assetBucketProps?.bucketProps,
      },
    });

    this.behaviorOptions = {
      compress: true,
      originRequestPolicy: new awsCloudfront.OriginRequestPolicy(this, 'OriginRequestPolicy', {
        originRequestPolicyName: getCloudFrontName('Bucket', 'RequestPolicy', service.props),
        headerBehavior: {
          behavior: 'whitelist',
          headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin'],
        },
      }),
      cachePolicy: awsCloudfront.CachePolicy.CACHING_OPTIMIZED,
      allowedMethods: awsCloudfront.AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy: awsCloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    const domains = [this.domain];
    this.distribution = new awsCloudfront.Distribution(this, 'Distribution', {
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
      ...(service.props.envName !== 'prod' ? { priceClass: awsCloudfront.PriceClass.PRICE_CLASS_100 } : {}),
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
