import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

import { Service } from '../../../common/service';
import { PrivateBucketParams, PrivateBucketPrefab } from './private-bucket';

export type AssetBucketParams = PrivateBucketParams & {
  folder?: string;
  prefix?: string;
};

export class AssetBucketPrefab extends PrivateBucketPrefab {
  constructor(service: Service, params: AssetBucketParams) {
    super(service, params);

    if (params.folder) {
      new BucketDeployment(this, 'DeployBucket', {
        sources: [Source.asset(params.folder)],
        destinationBucket: this.bucket,
        destinationKeyPrefix: params.prefix,
      });
    }
  }
}
