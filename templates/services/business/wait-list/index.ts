import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../config/config-type';
import * as catalog from './catalog';

export type PrelaunchServiceParams = GlobalServiceDependencies;

export class PrelaunchService extends Service<GlobalProps, PrelaunchServiceParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: PrelaunchServiceParams) {
    super(scope, PrelaunchService.name, globalProps, { params });

    const listBucket = new PrivateBucket(this, { bucketName: 'prelaunch-list-bucket' });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'prelaunch',
      tableOptions: { withoutSortKey: true },
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      handlers: {
        create: catalog.api.create.config,
        list: {
          ...catalog.api.list.config,
          environment: { BUCKET_NAME: listBucket.bucket.bucketName },
          modifiers: [
            listBucket.useMod('PRIVATE_BUCKET', [PrivateBucket.modifier.reader, PrivateBucket.modifier.writer]),
          ],
        },
      },
    });
  }
}
