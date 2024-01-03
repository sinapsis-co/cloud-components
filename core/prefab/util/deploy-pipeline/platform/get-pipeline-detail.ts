import { CodePipelineClient, GetPipelineExecutionCommand } from '@aws-sdk/client-codepipeline';

const codepipeline = new CodePipelineClient({});

export type PipelineDetail = {
  commitId: string;
  commitMessage: string;
};

export const getPipelineDetail = async (pipelineName: string, executionId: string): Promise<PipelineDetail> => {
  const { pipelineExecution } = await codepipeline.send(
    new GetPipelineExecutionCommand({
      pipelineName: pipelineName,
      pipelineExecutionId: executionId,
    })
  );

  if (!pipelineExecution) throw new Error('Missing pipelineExecution');

  const detail = pipelineExecution.artifactRevisions
    ?.filter((a) => a.name === 'sourceCode')
    .map((a) => {
      return {
        commitId: a.revisionId || '',
        commitMessage: JSON.parse(a.revisionSummary || '{}')['CommitMessage'],
      };
    });

  if (!detail || !detail[0]) throw new Error('Missing artifactRevision');
  return detail[0];
};
