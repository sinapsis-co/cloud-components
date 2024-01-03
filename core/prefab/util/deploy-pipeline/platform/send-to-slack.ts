import { apiCall } from '@sinapsis-cloud-components/sdk/integration/api';
import { Slack } from '../catalog/integrations';
import { SlackNotificationConfig, SlackNotificationPayload } from '../entities';

export const sendToSlack = async (
  slackNotificationPayload: SlackNotificationPayload,
  slackNotificationConfig: SlackNotificationConfig
) => {
  const { fallback, color, fields } = slackNotificationPayload;
  await apiCall(
    Slack.config,
    {
      pathParams: { token: slackNotificationConfig.token },
      body: { attachments: [{ pretext: fallback, fallback, color, fields }], channel: slackNotificationConfig.channel },
    },
    { tracingMeta: {}, ignoreResponse: true }
  );
};
