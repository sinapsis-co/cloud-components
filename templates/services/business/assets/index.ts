import { Duration } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventBus } from 'aws-cdk-lib/aws-events';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { PrivateBucket } from '@sinapsis-co/cc-infra-v2/prefab/bucket/private-bucket';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';

import { CustomEventBus } from 'services/support/custom-event-bus';
import { CdnMedia } from 'services/support/cdn-media';
import { CdnApi } from 'services/support/cdn-api';
import { Identity } from '../identity';
import { assetsTypes } from './lib/assets-type';
import { GlobalProps } from '../../../config/config-type';
import { assetApi, assetEvent } from './catalog';
import { eventConfig as rawAsset } from './catalog/event/raw-asset-uploaded';

export type AssetsDeps = {
  customEventBus: CustomEventBus;
  cdnApi: CdnApi;
  cdnMedia: CdnMedia;
  identity: Identity;
};

export class Assets extends Service<GlobalProps, AssetsDeps> {
  public readonly apiAggregate: ApiAggregate;
  public readonly privateAssetsBucket: PrivateBucket;
  public readonly publicAssetsBucket: PrivateBucket;
  public readonly eventRaw: EventAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: AssetsDeps) {
    super(scope, Assets.name, globalProps, { params });

    this.addDependency(this.props.cdnMedia);

    this.privateAssetsBucket = new PrivateBucket(this, { bucketName: 'private' });

    this.publicAssetsBucket = params.cdnMedia.bucket;

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'assets',
      cdnApi: params.cdnApi,
      authPool: params.identity.authPool,
      skipTable: true,
      handlers: {
        createPutUrl: {
          ...assetApi.createPutUrl.config,
          environment: { MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true) },
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [PrivateBucket.modifier.writer]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucket.modifier.writer]),
          ],
        },
        createGetUrl: {
          ...assetApi.createGetUrl.config,
          modifiers: [this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucket.modifier.reader])],
        },
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      name: 'custom',
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      handlers: {
        remove: {
          name: 'event-asset-remove',
          eventConfig: [assetEvent.assetToRemove.eventConfig],
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [PrivateBucket.modifier.writer]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [PrivateBucket.modifier.writer]),
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
              PrivateBucket.modifier.reader,
              PrivateBucket.modifier.writer,
            ]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [
              PrivateBucket.modifier.reader,
              PrivateBucket.modifier.writer,
            ]),
          ],
        },
      },
    });

    this.eventRaw = new EventAggregate(this, {
      eventBus: EventBus.fromEventBusName(this, 'DefaultEventBus', 'default'),
      baseFunctionFolder: __dirname,
      handlers: {
        assetUploaded: {
          name: 'event-asset-uploaded',
          modifiers: [
            this.publicAssetsBucket.useMod('PUBLIC_BUCKET', [
              PrivateBucket.modifier.reader,
              PrivateBucket.modifier.writer,
            ]),
            this.privateAssetsBucket.useMod('PRIVATE_BUCKET', [
              PrivateBucket.modifier.reader,
              PrivateBucket.modifier.writer,
            ]),
            params.customEventBus.customEventBus.useModWriter('CUSTOM_BUS'),
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
