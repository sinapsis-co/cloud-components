
import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-platform-v2/catalog/secret';
import { SlackObject } from '../../index';

export type SecretSlack = SecretInterface<{
    name: 'slack_client';
    payload: SlackObject[]
}>;

export const secretConfig: SecretConfig<SecretSlack> = {
    name: 'slack_client',
};