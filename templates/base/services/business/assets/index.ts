import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/queue-function';
import { CdnAssetPrefab } from '@sinapsis-co/cc-infra-v2/prefab/gateway/cdn-asset';
import { PrivateBucketPrefab } from '@sinapsis-co/cc-infra-v2/prefab/storage/bucket/private-bucket';
import { Duration } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';

import { CdnApi } from 'services/support/cdn-api';
import { GlobalCoordinator } from '../../../config/config-type';
import { DnsSubdomainCertificate } from '../../support/dns-subdomain-certificate';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';
import { assetApi, assetEvent } from './catalog';
import { Asset } from './entities/asset';
import { assetsTypes, AssetType } from './lib/assets-type';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  identity: Identity;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'dnsSubdomainCertificate', 'identity'];

export class Assets extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;
  public privateAssetsBucket: PrivateBucketPrefab;
  public publicAssetsBucket: PrivateBucketPrefab;
  public eventRaw: EventAggregate;
  public eventAggregate: EventAggregate;
  public cdnAssetPrefab: CdnAssetPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Assets.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.cdnAssetPrefab = new CdnAssetPrefab(this, {
      bucketName: 'public',
      subDomain: this.props.subdomain.assets,
      certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      recordForRootPath: false,
      assetBucketProps: {
        bucketName: 'bucket',
        folder: './notifications/assets',
        prefix: 'assets',
      },
    });

    this.privateAssetsBucket = new PrivateBucketPrefab(this, { bucketName: 'private' });
    this.publicAssetsBucket = this.cdnAssetPrefab.bucketPrefab;

    this.apiAggregate = new ApiAggregate(this, {
      baseFunctionFolder: __dirname,
      basePath: 'assets',
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
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

    this.eventAggregate = new EventAggregate(this, {
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

    const queueFunction = new QueueFunction(this, {
      name: 'msg-asset-uploaded',
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
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
