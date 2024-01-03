import { getParameter } from '@sinapsis-cloud-components/sdk/integration/config/parameter';
import { SNSHandler } from 'aws-lambda';
import { PipelineNotification, SlackNotificationConfig } from '../../entities';
import { getPipelineDetail } from '../../platform/get-pipeline-detail';
import { getSlackPayload } from '../../platform/get-slack-payload';
import { sendToSlack } from '../../platform/send-to-slack';

export const handler: SNSHandler = async (event) => {
  await Promise.all(
    event.Records.map(async (v) => {
      const response: PipelineNotification = JSON.parse(v.Sns.Message);

      const pipelineName = response.detail.pipeline;

      const { commitId, commitMessage } = await getPipelineDetail(pipelineName, response.detail['execution-id']);

      const slackPayload = getSlackPayload(pipelineName, response.detail.state, commitId, commitMessage);

      if (process.env.SLACK_EXTRA_CONFIG_NAME) {
        const slackConfig: SlackNotificationConfig[] = await getParameter(process.env.SLACK_EXTRA_CONFIG_NAME);
        await Promise.all(slackConfig.map((sc) => sendToSlack(slackPayload, sc)));
      } else {
        const defaultSlackConfig: SlackNotificationConfig = {
          channel: process.env.DEFAULT_SLACK_CHANNEL!,
          token: await getParameter(process.env.DEFAULT_SLACK_TOKEN_PARAMETER!, true),
        };
        await sendToSlack(slackPayload, defaultSlackConfig);
      }
    })
  );
};
