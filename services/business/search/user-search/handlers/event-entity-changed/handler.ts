import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { getRuntimeSecret } from '@sinapsis-co/cc-sdk/integration/config/runtime-secret';

import { identityEvent } from '@sinapsis-co/cc-services/business/identity/multi-tenant/catalog';
import { searchSecret } from '../../catalog';
import { algoliaSyncEntity } from '../../platform/index-sync';

export const handler = eventHandler<identityEvent.memberCreated.Event>(async (event) => {
  const [entityName, operation] = event['detail-type'].split('.').slice(1);
  if (!entityName || !operation) throw new Error('Invalid entity');
  const algoliaConfig = await getRuntimeSecret<searchSecret.algolia.Secret>(searchSecret.algolia.secretConfig);
  const { userId: id, ...att } = event.detail;
  await algoliaSyncEntity(algoliaConfig, entityName, { id, att }, operation);
});
