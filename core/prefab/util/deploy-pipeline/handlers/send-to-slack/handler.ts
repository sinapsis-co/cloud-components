/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { apiCall } from '@sinapsis-co/cc-sdk/integration/api';
import { getRuntimeSecret } from '@sinapsis-co/cc-sdk/integration/config/runtime-secret';
import { SNSHandler } from 'aws-lambda';
import { Slack } from '../../catalog/integrations';
import * as secretCatalog from '../../catalog/secrets/index';
import { SlackObject } from '../../index';
import { getPipelineDetail } from '../../platform/get-pipeline-detail';

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
      // eslint-disable-next-line no-console
      console.log(v.Sns.Message);
      const response: PipelineNotification = JSON.parse(v.Sns.Message);
      const [envName, ...project] = response.detail.pipeline.split('-').reverse().slice(2);
      const { commitId, commitMessage } = await getPipelineDetail(
        response.detail.pipeline,
        response.detail['execution-id']
      );
      const commitUrl = `https://github.com/${process.env.REPOSITORY_OWNER}/${process.env.REPOSITORY_NAME}/commit/${commitId}`;
      const projectName = project.reverse().join('-');
      const url = `https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/${response.detail.pipeline}/view?region=us-east-1`;
      const fallback = ':robot_face: *[Deploy Pipeline]* :robot_face:\n';
      const color = response.detail.state === 'FAILED' ? '#D00000' : '#00d02d';
      const fields =
        response.detail.state === 'FAILED'
          ? [
              {
                title: 'Status: [Pipeline Failed]',
                short: false,
                value: `_For more details <${url}|Go to AWS Console>_ `,
              },
            ]
          : [
              {
                title: 'Status: [Pipeline Finished]',
                short: false,
                value: `Deployed at: ${new Date().toDateString()}`,
              },
            ];

      const slackObjects: SlackObject[] = [];
      if (process.env.SLACK_CHANNEL && process.env.SLACK_TOKEN) {
        slackObjects.push({
          channel: process.env.SLACK_CHANNEL!,
          token: process.env.SLACK_TOKEN!,
        });
      }

      if (process.env[secretCatalog.slackToken.secretConfig.name]) {
        const clientSecretSlackTokens = await getRuntimeSecret<secretCatalog.slackToken.SecretSlack>(
          secretCatalog.slackToken.secretConfig
        );
        slackObjects.push(...clientSecretSlackTokens);
      }

      await Promise.all(
        slackObjects.map((so) => {
          return sendToSlack(
            fallback,
            color,
            [
              { title: 'Pipeline', short: false, value: `${projectName}-${envName}` },
              {
                title: 'Commit',
                short: false,
                value: `${commitMessage} \n\n _For more details <${commitUrl}|Go to GitHub>_`,
              },
              ...fields,
            ],
            so
          );
        })
      );
    })
  );
};

const sendToSlack = async (fallback: string, color, fields, slackObject: SlackObject) => {
  await apiCall(
    Slack.config,
    {
      pathParams: { token: slackObject.token },
      body: { attachments: [{ pretext: fallback, fallback, color, fields }], channel: slackObject.channel },
    },
    { tracingMeta: {}, ignoreResponse: true }
  );
};
