import { Construct } from 'constructs';
import { Distribution, BehaviorOptions, OriginRequestPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { CachePolicy, AllowedMethods, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { CfnOutput } from 'aws-cdk-lib';
import { HostedZone, ARecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';

import { getDomain } from '../../common/naming/get-domain';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { AssetBucket, AssetBucketParams } from '../../prefab/bucket/asset-bucket';
import { HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Waf } from '../waf';

export type CdnAssetConstructProps = {
  subDomain: string;
  certificate: ICertificate;
  recordForRootPath: boolean;
  assetBucketProps?: AssetBucketParams;
  waf?: Waf;
  skipRecord?: true;
};

export class CdnAssetConstruct extends Construct {
  public readonly bucket: AssetBucket;
  public readonly domain: string;
  public readonly baseUrl: string;
  public readonly distribution: Distribution;
  public readonly behaviorOptions: Omit<BehaviorOptions, 'origin'>;

  constructor(service: Service, params: CdnAssetConstructProps) {
    super(service, getLogicalName(CdnAssetConstruct.name, params.subDomain));

    this.domain = getDomain(params.subDomain, service.props);
    this.baseUrl = `https://${this.domain}/`;

    this.bucket = new AssetBucket(service, {
      bucketName: params.subDomain,
      ...params.assetBucketProps,
      bucketProps: {
        cors: [{ allowedMethods: [HttpMethods.GET, HttpMethods.POST], allowedOrigins: ['*'], allowedHeaders: ['*'] }],
        ...params.assetBucketProps?.bucketProps,
      },
    });

    this.behaviorOptions = {
      compress: true,
      originRequestPolicy: new OriginRequestPolicy(this, 'OriginRequestPolicy', {
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
        origin: new S3Origin(this.bucket.bucket),
        ...this.behaviorOptions,
      },
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
