/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RemovalPolicy } from 'aws-cdk-lib';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodeBuildAction, CodeStarConnectionsSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { IManagedPolicy, ManagedPolicy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import {
  BuildEnvironmentVariableType,
  BuildSpec,
  ComputeType,
  LinuxBuildImage,
  Project,
  ProjectProps,
} from 'aws-cdk-lib/aws-codebuild';
import { DetailType, NotificationRule } from 'aws-cdk-lib/aws-codestarnotifications';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs/lib';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getBucketName, getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';
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
  codeBuildProjectParams?: Partial<ProjectProps>;
};

export class DeployPipelinePrefab extends Construct {
  constructor(service: Service, params: DeployPipelineProps) {
    super(service, getLogicalName(DeployPipelinePrefab.name));
    const props = { ...service.props, isDefaultProject: false };

    if (props.ephemeralEnvName) return;

    if (!params.buildCommand) {
      params.buildCommand = [`yarn deploy ${props.envName}`];
    }

    if (!props.useRepositoryDefaultConfig && (!props.repositoryOwner || !props.repositoryConnection))
      throw new Error('repositoryOwner and repositoryConnection are required if useRepositoryDefaultConfig is false');

    const repositoryOwner = props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-owner')
      : props.repositoryOwner!;
    const repositoryConnection = props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-connection')
      : props.repositoryConnection!;

    const githubTokenParameterName = 'pipeline-default-repository-token';

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

    const codebuildProject = new Project(this, 'CodebuildProject', {
      projectName: getResourceName('', props),
      role: deploymentRole,
      environment: {
        computeType: ComputeType.MEDIUM,
        buildImage: LinuxBuildImage.STANDARD_6_0,
      },
      environmentVariables: {
        GITHUB_TOKEN: {
          type: BuildEnvironmentVariableType.PARAMETER_STORE,
          value: githubTokenParameterName,
        },
      },
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
          },
          pre_build: {
            commands: [
              'npm set //npm.pkg.github.com/:_authToken $GITHUB_TOKEN',
              'yarn --prod',
              ...(params.preDeployCommands || []),
            ],
          },
          build: {
            commands: [...(params.buildCommand || [])],
          },
          post_build: {
            commands: [...(params.postDeployCommands || [])],
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
      artifactBucket: new Bucket(this, 'bucket', {
        bucketName: getBucketName('bucket', props),
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      }),
      pipelineName: getResourceName('', props),
      crossAccountKeys: false,
      stages: [
        {
          stageName: 'Source',
          actions: [sourceCodeAction],
        },
        {
          stageName: 'Deploy',
          actions: [deployAction],
        },
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
        environmentTopicFunction = {
          ...environmentTopicFunction,
          CLIENT_SLACK_SECRET: secret.secret.name || '',
        };
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

      const events = [
        'codepipeline-pipeline-pipeline-execution-failed',
        'codepipeline-pipeline-pipeline-execution-succeeded',
      ];

      new NotificationRule(this, 'Notification', {
        detailType: DetailType.FULL,
        events: events,
        source: pipeline,
        targets: [topicFunction.customTopic.topic],
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
