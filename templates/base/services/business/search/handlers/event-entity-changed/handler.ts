import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { getRuntimeSecret } from '@sinapsis-co/cc-platform/integrations/config/runtime-secret';
import { BaseRepoEvent } from '../../../base-crud/repository/base';
import { searchSecret } from '../../catalog';
import { algoliaSyncEntity } from '../../platform/index-sync';

export const handler = eventHandler<BaseRepoEvent['created']>(async (event) => {
  const [entityName, operation] = event['detail-type'].split('.').slice(1);
  if (!entityName || !operation) throw new Error('Invalid entity');
  const algoliaConfig = await getRuntimeSecret<searchSecret.algolia.Secret>(searchSecret.algolia.secretConfig);
  await algoliaSyncEntity(algoliaConfig, entityName, event.detail, operation);
});
