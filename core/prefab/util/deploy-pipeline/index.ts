/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getBucketName } from '@sinapsis-co/cc-core/common/naming/get-resource-name';
import { RemovalPolicy } from 'aws-cdk-lib';
import * as awsCodebuild from 'aws-cdk-lib/aws-codebuild';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodeBuildAction, CodeStarConnectionsSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { DetailType, NotificationRule } from 'aws-cdk-lib/aws-codestarnotifications';
import { IManagedPolicy, ManagedPolicy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { TopicFunction } from '../../compute/function/topic-function';
import { ParameterSecret } from '../config/parameter-secret';

export type DeployPipelineProps = {
  preDeployCommands?: string[];
  postDeployCommands?: string[];
  codeBuildProjectParams?: Partial<awsCodebuild.ProjectProps>;
  useExtraSlackNotification?: boolean;
};

export class DeployPipelinePrefab extends Construct {
  constructor(service: Service, params: DeployPipelineProps) {
    super(service, getLogicalName(DeployPipelinePrefab.name));
    const props = { ...service.props, isSingleProjectAccount: false };

    if (props.ephemeralEnvName) return;

    const repositoryOwner = StringParameter.valueFromLookup(this, 'pipeline-default-repository-owner');
    const repositoryConnection = StringParameter.valueFromLookup(this, 'pipeline-default-repository-connection');

    const sourceCodeArtifact = new Artifact('sourceCode');
    const sourceCodeAction = new CodeStarConnectionsSourceAction({
      actionName: 'FetchRepo',
      branch: props.deployBranch,
      repo: props.repositoryName,
      output: sourceCodeArtifact,
      owner: repositoryOwner,
      connectionArn: repositoryConnection,
    });

    const deploymentRole = new Role(this, 'DeployRole', { assumedBy: new ServicePrincipal('codebuild.amazonaws.com') });
    const policy: IManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess');
    deploymentRole.addManagedPolicy(policy);

    const workerCommands =
      StringParameter.valueFromLookup(this, 'pipeline-deploy-worker-role') !== 'null'
        ? [
            'output=$(aws sts assume-role --role-arn "$DEPLOY_WORKER_ROLE" --role-session-name "CDK" --query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" --output text)',
            "var1=$(echo \"$output\" | awk -F'\t' '{print $1}')",
            "var2=$(echo \"$output\" | awk -F'\t' '{print $2}')",
            "var3=$(echo \"$output\" | awk -F'\t' '{print $3}')",
            'export AWS_ACCESS_KEY_ID=$var1',
            'export AWS_SECRET_ACCESS_KEY=$var2',
            'export AWS_SESSION_TOKEN=$var3',
          ]
        : [];

    const codebuildProject = new awsCodebuild.Project(this, 'CodebuildProject', {
      projectName: `${props.projectName}-${props.envName}`,
      role: deploymentRole,
      environment: {
        computeType: awsCodebuild.ComputeType.LARGE,
        buildImage: awsCodebuild.LinuxBuildImage.STANDARD_7_0,
      },
      environmentVariables: {
        GITHUB_TOKEN: {
          type: awsCodebuild.BuildEnvironmentVariableType.PARAMETER_STORE,
          value: 'pipeline-default-repository-token',
        },
        DEPLOY_WORKER_ROLE: {
          type: awsCodebuild.BuildEnvironmentVariableType.PARAMETER_STORE,
          value: 'pipeline-deploy-worker-role',
        },
      },
      buildSpec: awsCodebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': { nodejs: 18 },
          },
          pre_build: {
            commands: [
              ...workerCommands,
              'npm install --global yarn',
              'npm set //npm.pkg.github.com/:_authToken $GITHUB_TOKEN',
              'yarn --prod',
              ...(params.preDeployCommands || []),
            ],
          },
          build: {
            commands: [`yarn deploy ${props.envName}`],
          },
          post_build: {
            commands: params.postDeployCommands || [],
          },
        },
      }),
      ...params.codeBuildProjectParams,
    });

    const deployAction = new CodeBuildAction({
      actionName: 'Deploy',
      input: sourceCodeArtifact,
      project: codebuildProject,
    });

    const pipeline = new Pipeline(this, 'Pipeline', {
      crossAccountKeys: false,
      pipelineName: `${props.projectName}-${props.envName}`,
      artifactBucket: new Bucket(this, 'bucket', {
        bucketName: getBucketName('bucket', props),
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      }),
      stages: [
        { stageName: 'Source', actions: [sourceCodeAction] },
        { stageName: 'Deploy', actions: [deployAction] },
      ],
    });

    if (props.pipelineNotificationSlackChannel) {
      const extraSlackNotification = 'extra-slack-notification';
      const defaultSlackToken = new ParameterSecret(service, { existingName: 'pipeline-default-slack-token' });
      const modifiers = [getPipelineExecution(), defaultSlackToken.useModReader('DEFAULT_SLACK_TOKEN_PARAMETER')];

      if (params.useExtraSlackNotification) {
        const extraSlackNotificationParam = new ParameterSecret(service, { name: extraSlackNotification });
        modifiers.push(extraSlackNotificationParam.useModReader('SLACK_EXTRA_CONFIG_NAME'));
      }

      const topicFunction = new TopicFunction(service, {
        customTopicParams: { name: 'notifications' },
        name: 'send-to-slack',
        baseFunctionFolder: __dirname,
        modifiers,
        ...(props.isDemoProject ? {} : { compiled: true }),
        environment: {
          REPOSITORY_OWNER: repositoryOwner,
          REPOSITORY_NAME: props.repositoryName,
          DEFAULT_SLACK_CHANNEL: props.pipelineNotificationSlackChannel,
        },
      });

      new NotificationRule(this, 'Notification', {
        notificationRuleName: `${props.projectName}-${props.envName}`,
        detailType: DetailType.FULL,
        source: pipeline,
        targets: [topicFunction.customTopic.topic],
        events: [
          'codepipeline-pipeline-pipeline-execution-failed',
          'codepipeline-pipeline-pipeline-execution-succeeded',
        ],
      });
    }
  }
}
// }

const getPipelineExecution = (): ((lambda: NodejsFunction) => void) => {
  return (lambda: NodejsFunction): void => {
    lambda.role?.addToPrincipalPolicy(
      new PolicyStatement({
        actions: ['codepipeline:GetPipelineExecution'],
        resources: ['*'],
      })
    );
  };
};
