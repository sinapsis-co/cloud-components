import { SlackNotificationPayload } from '../entities';

export const getSlackPayload = (
  pipelineName: string,
  state: string,
  commitId: string,
  commitMessage: string
): SlackNotificationPayload => {
  const commitUrl = `https://github.com/${process.env.REPOSITORY_OWNER}/${process.env.REPOSITORY_NAME}/commit/${commitId}`;
  const url = `https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/${pipelineName}/view?region=us-east-1`;
  const fallback = ':robot_face: *[Deploy Pipeline]* :robot_face:\n';
  const color = state === 'FAILED' ? '#D00000' : '#00d02d';
  const fieldState =
    state === 'FAILED'
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

  return {
    color,
    fallback,
    fields: [
      { title: 'Pipeline', short: false, value: pipelineName },
      {
        title: 'Commit',
        short: false,
        value: `${commitMessage} \n\n _For more details <${commitUrl}|Go to GitHub>_`,
      },
      ...fieldState,
    ],
  };
};
