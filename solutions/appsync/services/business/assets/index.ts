import { getDomain } from '@sinapsis-co/cc-core/common/naming/get-domain';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-core/prefab/compute/function/queue-function';
import { CdnAssetPrefab } from '@sinapsis-co/cc-core/prefab/gateway/cdn-asset';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-core/prefab/storage/bucket/private-bucket';
import { Duration } from 'aws-cdk-lib';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { CdnApi } from 'services/support/cdn-api';
import { GlobalCoordinator } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../../support/dns-subdomain-certificate';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';
import { assetApi, assetEvent } from './catalog';
import { Asset } from './entities/asset';
import { AssetType, assetsTypes } from './lib/assets-type';

class Dep extends ServiceDependencies {
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  identity: Identity;
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
}

export class Assets extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;
  public privateAssetsBucket: PrivateBucketPrefab;
  public publicAssetsBucket: PrivateBucketPrefab;
  public eventRaw: EventAggregate;
  public eventAggregate: EventAggregate;
  public cdnAssetPrefab: CdnAssetPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Assets.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.cdnAssetPrefab = new CdnAssetPrefab(this, {
      subDomain: this.props.subdomain.assets,
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      assetBucketProps: {
        bucketName: 'public',
        folder: './notifications/assets',
        prefix: 'assets',
      },
    });

    this.privateAssetsBucket = new PrivateBucketPrefab(this, { bucketName: 'private' });
    this.publicAssetsBucket = this.cdnAssetPrefab.bucketPrefab;

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'assets',
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      authPool: dep.identity.authPool,
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

    this.eventAggregate = new EventAggregate(this, {
      eventBus: dep.globalEventBus.eventBusPrefab,
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

    const queueFunction = new QueueFunction(this, {
      name: 'msg-asset-uploaded',
      baseFunctionFolder: __dirname,
      eventBus: dep.globalEventBus.eventBusPrefab,
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
    });

    this.privateAssetsBucket.addQueueNotification({
      queue: queueFunction.customQueue.queue,
      filters: getFilters(assetsTypes, false),
    });
    this.publicAssetsBucket.addQueueNotification({
      queue: queueFunction.customQueue.queue,
      filters: getFilters(assetsTypes, true),
    });
  }
}

const getFilters = (assetsTypes: Record<AssetType, Asset<AssetType>>, filterPublicOnly: boolean) => {
  return Object.values(assetsTypes)
    .filter((a) => a.isPublic === filterPublicOnly)
    .map((a) => {
      if (a.eventEmitterEnabled) return { prefix: a.rootPath };
      else return {};
    })
    .filter((a) => Object.keys(a).length > 0);
};
