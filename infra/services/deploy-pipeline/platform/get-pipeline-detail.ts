import { CodePipeline } from 'aws-sdk';

const codepipeline = new CodePipeline();

export type PipelineDetail = {
  commitId: string;
  commitMessage: string;
};

export const getPipelineDetail = async (pipelineName: string, executionId: string): Promise<PipelineDetail> => {
  const { pipelineExecution } = await codepipeline
    .getPipelineExecution({
      pipelineName: pipelineName,
      pipelineExecutionId: executionId,
    })
    .promise();

  if (!pipelineExecution) throw new Error('Missing pipelineExecution');

  const detail = pipelineExecution.artifactRevisions
    ?.filter((a) => a.name === 'sourceCode')
    .map((a) => {
      return {
        commitId: a.revisionId,
        commitMessage: JSON.parse(a.revisionSummary || '{}')['CommitMessage'],
      };
    });

  if (!detail || detail[0]) throw new Error('Missing artifactRevision');
  return detail[0];
};
