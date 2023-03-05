import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { EventBusPrefab } from '@sinapsis-co/cc-infra-v2/prefab/integration/event-bus';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/private-bucket';
import { Duration } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';

import { CdnApi } from 'services/support/cdn-api';
import { CdnAssets } from 'services/support/cdn-assets';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';
import { assetApi, assetEvent } from './catalog';
import { eventConfig as rawAsset } from './catalog/event/raw-asset-uploaded';
import { assetsTypes } from './lib/assets-type';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  cdnAssets: CdnAssets;
  identity: Identity;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'cdnAssets', 'identity'];

export class Assets extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;
  public privateAssetsBucket: PrivateBucketPrefab;
  public publicAssetsBucket: PrivateBucketPrefab;
  public eventRaw: EventAggregate;
  public eventAggregate: EventAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Assets.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.addDependency(deps.cdnAssets);

    this.privateAssetsBucket = new PrivateBucketPrefab(this, { bucketName: 'private' });

    this.publicAssetsBucket = deps.cdnAssets.cdnAssetPrefab.bucketPrefab;

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'assets',
      cdnApi: deps.cdnApi.cdnApiPrefab,
      authPool: deps.identity.authPool,
      skipTable: true,
      handlers: {
        createPutUrl: {
          ...assetApi.createPutUrl.config,
          environment: { MEDIA_URL: getDomain(this.props.subdomain.assets, this.props, true) },
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [PrivateBucketPrefab.modifier.writer]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucketPrefab.modifier.writer]),
          ],
        },
        createGetUrl: {
          ...assetApi.createGetUrl.config,
          modifiers: [this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucketPrefab.modifier.reader])],
        },
      },
    });

    console.log(deps.globalEventBus.eventBusPrefab);

    this.eventAggregate = new EventAggregate(this, {
      name: 'custom',
      eventBus: deps.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        remove: {
          name: 'event-asset-remove',
          eventConfig: [assetEvent.assetToRemove.eventConfig],
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [PrivateBucketPrefab.modifier.writer]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucketPrefab.modifier.writer]),
          ],
        },
        resize: {
          name: 'event-asset-resize',
          eventConfig: [assetEvent.assetToResize.eventConfig],
          architecture: Architecture.X86_64,
          bundling: { nodeModules: ['sharp'] },
          timeout: Duration.minutes(5),
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [
              PrivateBucketPrefab.modifier.reader,
              PrivateBucketPrefab.modifier.writer,
            ]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [
              PrivateBucketPrefab.modifier.reader,
              PrivateBucketPrefab.modifier.writer,
            ]),
          ],
        },
      },
    });

    this.eventRaw = new EventAggregate(this, {
      eventBus: new EventBusPrefab(this, { defaultEventBus: true }),
      baseFunctionFolder: __dirname,
      handlers: {
        assetUploaded: {
          name: 'event-asset-uploaded',
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [
              PrivateBucketPrefab.modifier.reader,
              PrivateBucketPrefab.modifier.writer,
            ]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [
              PrivateBucketPrefab.modifier.reader,
              PrivateBucketPrefab.modifier.writer,
            ]),
            deps.globalEventBus.eventBusPrefab.useModWriter('CUSTOM_BUS'),
          ],
          eventConfig: [
            {
              ...rawAsset,
              detail: {
                bucket: {
                  name: [this.privateAssetsBucket.bucket.bucketName, this.publicAssetsBucket.bucket.bucketName],
                },
                object: {
                  key: Object.values(assetsTypes).map((a) => {
                    if (a.eventEmitterEnabled) return { prefix: a.rootPath };
                  }),
                },
              },
            },
          ],
        },
      },
    });
  }
}
