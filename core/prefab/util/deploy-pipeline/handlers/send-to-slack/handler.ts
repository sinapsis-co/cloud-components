import { getParameter } from '@sinapsis-co/cc-sdk/integration/config/parameter';
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

      const slackConfig: SlackNotificationConfig[] = [
        {
          channel: process.env.DEFAULT_SLACK_CHANNEL!,
          token: await getParameter(process.env.DEFAULT_SLACK_TOKEN_PARAMETER!, true),
        },
      ];
      if (process.env.SLACK_EXTRA_CONFIG_NAME) {
        slackConfig.push(await getParameter(process.env.SLACK_EXTRA_CONFIG_NAME));
      }
      await Promise.all(slackConfig.map((sc) => sendToSlack(slackPayload, sc)));
    })
  );
};
