import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Payout } from '../../../entities';

export type Event = {
  name: 'app.payout.gateway.external';
  payload: {
    error: any;
    status: Payout['status'];
    completedAt: string;
    identifier: {
      payoutExternalServiceName: string;
      payoutExternalId: string;
    };
    payout: {
      id: Payout['id'];
      tenantId: Payout['tenantId'];
      userId: Payout['userId'];
    };
  };
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.payout.gateway.external',
};
