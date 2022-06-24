/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SNSHandler } from 'aws-lambda';
import { callApi } from '@sinapsis-co/cc-platform-v2/integrations/api';
import { Slack } from '../../integrations';

export type PipelineNotification = {
  detail: {
    'execution-id': string;
    pipeline: string;
    state: 'FAILED';
  };
  additionalAttributes: {
    failedActionCount: number;
    failedActions: { action: string; additionalInformation: string }[];
    failedStage: string;
  };
};

export const handler: SNSHandler = async (event) => {
  await Promise.all(
    event.Records.map(async (v) => {
      const response: PipelineNotification = JSON.parse(v.Sns.Message);
      const url = `https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/${response.detail.pipeline}/view?region=us-east-1`;
      const fallback = `[Pipeline Failed] \n Details at: <${url}|AWS Console>`;
      const color = response.detail.state === 'FAILED' ? '#D00000' : '#00d02d';
      const fields =
        response.detail.state === 'FAILED'
          ? [
              {
                title: 'Reason',
                short: false,
                value: response.additionalAttributes.failedActions[0]['additionalInformation'],
              },
            ]
          : [
              {
                title: 'Finished at:',
                short: false,
                value: new Date().toDateString(),
              },
            ];

      await sendToSlack(fallback, color, [
        ...fields,
        { title: 'Go to Console', short: false, value: ` <${url}|AWS Console>` },
      ]);
    })
  );
};

const sendToSlack = async (fallback: string, color, fields) => {
  await callApi<Slack.Interface>(
    Slack.config,
    {
      pathParams: { token: process.env.SLACK_TOKEN! },
      body: { attachments: [{ pretext: fallback, fallback, color, fields }], channel: process.env.SLACK_CHANNEL! },
    },
    { withoutResponse: true }
  );
};
