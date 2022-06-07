import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

import { PrivateBucket, PrivateBucketParams } from './private-bucket';
import { Service } from '../../common/service';

export type AssetBucketParams = PrivateBucketParams & {
  folder?: string;
  prefix?: string;
};

export class AssetBucket extends PrivateBucket {
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
