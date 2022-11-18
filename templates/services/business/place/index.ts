import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { placeApi } from './catalog';

export type PlaceParams = GlobalServiceDependencies;

export class Place extends Service<GlobalProps, PlaceParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: PlaceParams) {
    super(scope, Place.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'places',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      tableOptions: {
        withoutSortKey: true
      },
      handlers: {
        createPlace: placeApi.createPlace.config,
        getPlace: placeApi.getPlace.config
      },
    });
  }
}
