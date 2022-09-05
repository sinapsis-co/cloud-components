/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SNSHandler } from 'aws-lambda';
import { callApi } from '@sinapsis-co/cc-platform-v2/integrations/api';
import { Slack } from '../../integrations';
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
                value: `${response.additionalAttributes.failedActions[0]['additionalInformation']} \n For more details <${url}|Go to AWS Console> `,
              },
            ]
          : [
              {
                title: 'Status: [Pipeline Finished]',
                short: false,
                value: `Deployed at: ${new Date().toDateString()}`,
              },
            ];
      await sendToSlack(fallback, color, [
        { title: 'Pipeline', short: false, value: `${projectName}-${envName}` },
        { title: 'Commit', short: false, value: `${commitUrl}` },
        { title: 'Commit Message', short: false, value: `${commitMessage}` },
        ...fields,
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
