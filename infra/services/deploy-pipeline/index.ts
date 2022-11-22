/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CodeStarConnectionsSourceAction, CodeBuildAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Role, ServicePrincipal, IManagedPolicy, ManagedPolicy, PolicyStatement } from 'aws-cdk-lib/aws-iam';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { DeploySecret } from '../../prefab/config/deploy-secret';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { DetailType, NotificationRule } from 'aws-cdk-lib/aws-codestarnotifications';
import { TopicFunction } from '../../prefab/function/topic-function';
import { SynthError } from '../../common/synth/synth-error';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs/lib';
import {
  BuildEnvironmentVariableType,
  BuildSpec,
  ComputeType,
  LinuxBuildImage,
  Project,
  ProjectProps,
} from 'aws-cdk-lib/aws-codebuild';
import { RuntimeSecret } from '../../prefab/config/runtime-secret';
import { slackToken } from './catalog';

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

export class DeployPipelineConstruct extends Construct {
  constructor(service: Service, params: DeployPipelineProps) {
    super(service, getLogicalName(DeployPipelineConstruct.name));

    if (service.props.ephemeralEnvName) return;

    if (!params.buildCommand) {
      params.buildCommand = [`yarn deploy ${service.props.envName}`];
    }

    if (
      !service.props.useRepositoryDefaultConfig &&
      (!service.props.repositoryOwner || !service.props.repositoryConnection)
    )
      throw new Error('repositoryOwner and repositoryConnection are required if useRepositoryDefaultConfig is false');

    const repositoryOwner = service.props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-owner')
      : service.props.repositoryOwner!;
    const repositoryConnection = service.props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-connection')
      : service.props.repositoryConnection!;

    let githubTokenParameterName = 'pipeline-default-repository-token';

    if (!service.props.useRepositoryDefaultConfig) {
      const secretBuilder = new DeploySecret(service, {
        name: 'pipeline',
        saveAsPlain: true,
        secretsKeys: ['GITHUB_TOKEN'],
      });
      githubTokenParameterName = secretBuilder.secrets['GITHUB_TOKEN'].parameterName;
    }

    const sourceCodeArtifact = new Artifact('sourceCode');
    const sourceCodeAction = new CodeStarConnectionsSourceAction({
      actionName: 'FetchRepo',
      branch: service.props.deployBranch,
      repo: service.props.repositoryName,
      output: sourceCodeArtifact,
      owner: repositoryOwner,
      connectionArn: repositoryConnection,
      ...(params.fullClone ? { codeBuildCloneOutput: true } : {}),
    });

    const deploymentRole = new Role(this, 'DeployRole', { assumedBy: new ServicePrincipal('codebuild.amazonaws.com') });
    const policy: IManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess');
    deploymentRole.addManagedPolicy(policy);

    const codebuildProject = new Project(this, 'CodebuildProject', {
      projectName: getResourceName('', service.props),
      role: deploymentRole,
      environment: {
        computeType: ComputeType.SMALL,
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
        bucketName: getResourceName('bucket', service.props),
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      }),
      pipelineName: getResourceName('', service.props),
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

    if (service.props.clientNotificationSlack || !service.props.defaultSlackDestinationDisabled) {
      const modifierTopicFunction = [getPipelineExecution()];
      let environmentTopicFunction: Record<string, string> = {
        REPOSITORY_OWNER: repositoryOwner,
        REPOSITORY_NAME: service.props.repositoryName,
      };

      if (!service.props.defaultSlackDestinationDisabled) {
        const slackToken = service.props.useRepositoryDefaultConfig
          ? StringParameter.valueFromLookup(this, 'pipeline-default-slack-token')
          : (params.slackToken as string);
        if (!slackToken) throw new SynthError('MissingSlackToken', service.props);
        environmentTopicFunction = {
          ...environmentTopicFunction,
          SLACK_CHANNEL: service.props.pipelineNotificationSlackChannel || '',
          SLACK_TOKEN: slackToken,
        };
      }

      if (service.props.clientNotificationSlack) {
        const secret = new RuntimeSecret(service, {
          secretConfig: slackToken.secretConfig
        });
        modifierTopicFunction.push(secret.useModReader());
        environmentTopicFunction = {
          ...environmentTopicFunction,
          CLIENT_SLACK_SECRET: secret.secret.name || ''
        };
      }

      const topicFunction = new TopicFunction(service, {
        name: 'send-to-slack',
        baseFunctionFolder: __dirname,
        ...(service.props.isDemoProject ? {} : { compiled: true }),
        environment: environmentTopicFunction,
        modifiers: modifierTopicFunction,
        customTopicParams: {
          name: 'pipeline-notifications',
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
