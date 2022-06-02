import { Construct } from 'constructs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

import { BaseServiceProps } from '../../common/synth/props-types';
import { PrivateBucket, PrivateBucketParams } from './private-bucket';

export type AssetBucketParams = PrivateBucketParams & {
  folder?: string;
  prefix?: string;
};

export class AssetBucket extends PrivateBucket {
  constructor(scope: Construct, props: BaseServiceProps, params: AssetBucketParams) {
    super(scope, props, params);

    if (params.folder) {
      new BucketDeployment(this, 'DeployBucket', {
        sources: [Source.asset(params.folder)],
        destinationBucket: this.bucket,
        destinationKeyPrefix: params.prefix,
      });
    }
  }
}
