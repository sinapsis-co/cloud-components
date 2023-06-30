import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { awsUserRepo, AwsUserRepoEvent } from '../../repository/aws-user';

export type Event = EventInterface<AwsUserRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = awsUserRepo.events.deleted;
