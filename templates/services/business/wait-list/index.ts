import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import * as catalog from './catalog';
import { RuntimeSecret } from '@sinapsis-co/cc-infra-v2/prefab/config/runtime-secret';
import { googleReCaptcha } from './catalog/secret';

export type WaitListParams = GlobalServiceDependencies;

export class WaitList extends Service<GlobalProps, WaitListParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly runtimeSecret: RuntimeSecret;

  constructor(scope: Construct, globalProps: GlobalProps, params: WaitListParams) {
    super(scope, WaitList.name, globalProps, { params });

    const listBucket = new PrivateBucket(this, { bucketName: 'wait-list-bucket' });

    this.runtimeSecret = new RuntimeSecret(this, googleReCaptcha);

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'wait-list',
      tableOptions: { withoutSortKey: true },
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      handlers: {
        create: {
          ...catalog.api.create.config,
          modifiers: [this.runtimeSecret.useModReader()],
        },
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
