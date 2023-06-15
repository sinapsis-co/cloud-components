/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as awsCodebuild from 'aws-cdk-lib/aws-codebuild';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodeBuildAction, CodeStarConnectionsSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { IManagedPolicy, ManagedPolicy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getBucketName, getResourceName } from '@sinapsis-co/cc-core/common/naming/get-resource-name';
import { SynthError } from '@sinapsis-co/cc-core/common/synth/synth-error';
import { RemovalPolicy } from 'aws-cdk-lib';
import { DetailType, NotificationRule } from 'aws-cdk-lib/aws-codestarnotifications';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { TopicFunction } from '../../compute/function/topic-function';
import { RuntimeSecret } from '../config/runtime-secret';
import { slackToken } from './catalog/secrets';

export type SlackObject = {
  channel: string;
  token: string;
};

export type DeployPipelineProps = {
  fullClone?: true;
  preDeployCommands?: string[];
  postDeployCommands?: string[];
  slackToken?: string;
  buildCommand?: string[];
  codeBuildProjectParams?: Partial<awsCodebuild.ProjectProps>;
};

export class DeployPipelinePrefab extends Construct {
  constructor(service: Service, params: DeployPipelineProps) {
    super(service, getLogicalName(DeployPipelinePrefab.name));
    const props = { ...service.props, isDefaultProject: false };

    if (props.ephemeralEnvName) return;

    if (!props.useRepositoryDefaultConfig && (!props.repositoryOwner || !props.repositoryConnection))
      throw new Error('repositoryOwner and repositoryConnection are required if useRepositoryDefaultConfig is false');

    const repositoryOwner = props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-owner')
      : props.repositoryOwner!;
    const repositoryConnection = props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-connection')
      : props.repositoryConnection!;

    const sourceCodeArtifact = new Artifact('sourceCode');
    const sourceCodeAction = new CodeStarConnectionsSourceAction({
      actionName: 'FetchRepo',
      branch: props.deployBranch,
      repo: props.repositoryName,
      output: sourceCodeArtifact,
      owner: repositoryOwner,
      connectionArn: repositoryConnection,
      ...(params.fullClone ? { codeBuildCloneOutput: true } : {}),
    });

    const deploymentRole = new Role(this, 'DeployRole', { assumedBy: new ServicePrincipal('codebuild.amazonaws.com') });
    const policy: IManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess');
    deploymentRole.addManagedPolicy(policy);

    if (!params.buildCommand) {
      params.buildCommand = [`yarn deploy ${props.envName}`];
    }

    const workerCommands = StringParameter.valueFromLookup(this, 'pipeline-deploy-worker-role')
      ? [
          'output=$(aws sts assume-role --role-arn "$DEPLOY_WORKER_ROLE" --role-session-name "CDK" --query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" --output text)',
          "var1=$(echo \"$output\" | awk -F'\t' '{print $1}')",
          "var2=$(echo \"$output\" | awk -F'\t' '{print $2}')",
          "var3=$(echo \"$output\" | awk -F'\t' '{print $3}')",
          'export AWS_ACCESS_KEY_ID=$1',
          'export AWS_SECRET_ACCESS_KEY=$2',
          'export AWS_SESSION_TOKEN=$3',
        ]
      : [];

    const codebuildProject = new awsCodebuild.Project(this, 'CodebuildProject', {
      projectName: getResourceName('', props),
      role: deploymentRole,
      environment: {
        computeType: awsCodebuild.ComputeType.MEDIUM,
        buildImage: awsCodebuild.LinuxBuildImage.STANDARD_6_0,
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
            'runtime-versions': { nodejs: 16 },
          },
          pre_build: {
            commands: [
              ...workerCommands,
              'npm set //npm.pkg.github.com/:_authToken $GITHUB_TOKEN',
              'yarn --prod',
              ...(params.preDeployCommands || []),
            ],
          },
          build: {
            commands: params.buildCommand || [],
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
      pipelineName: getResourceName('', props),
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

    if (props.clientNotificationSlack || !props.defaultSlackDestinationDisabled) {
      const modifierTopicFunction = [getPipelineExecution()];
      let environmentTopicFunction: Record<string, string> = {
        REPOSITORY_OWNER: repositoryOwner,
        REPOSITORY_NAME: props.repositoryName,
      };

      if (!props.defaultSlackDestinationDisabled) {
        const slackToken = props.useRepositoryDefaultConfig
          ? StringParameter.valueFromLookup(this, 'pipeline-default-slack-token')
          : (params.slackToken as string);

        if (!slackToken) throw new SynthError('MissingSlackToken', props);

        environmentTopicFunction = {
          ...environmentTopicFunction,
          SLACK_CHANNEL: props.pipelineNotificationSlackChannel || '',
          SLACK_TOKEN: slackToken,
        };
      }

      if (props.clientNotificationSlack) {
        const secret = new RuntimeSecret(service, {
          secretConfig: slackToken.secretConfig,
        });
        modifierTopicFunction.push(secret.useModReader());
      }

      const topicFunction = new TopicFunction(service, {
        name: 'send-to-slack',
        baseFunctionFolder: __dirname,
        ...(props.isDemoProject ? {} : { compiled: true }),
        environment: environmentTopicFunction,
        modifiers: modifierTopicFunction,
        customTopicParams: {
          name: 'notifications',
        },
      });

      new NotificationRule(this, 'Notification', {
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
