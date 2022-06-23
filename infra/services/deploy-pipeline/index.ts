import { Construct } from 'constructs';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CodeStarConnectionsSourceAction, CodeBuildAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Role, ServicePrincipal, IManagedPolicy, ManagedPolicy } from 'aws-cdk-lib/aws-iam';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { DeploySecret } from '../../prefab/config/deploy-secret';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { DetailType, NotificationRule } from 'aws-cdk-lib/aws-codestarnotifications';
import { TopicFunction } from '../../prefab/function/topic-function';
import { SynthError } from '../../common/synth/synth-error';

export type DeployPipelineProps = {
  repositoryOwner?: string;
  repositoryConnection?: string;
  preDeployCommands?: string[];
  postDeployCommands?: string[];
  slackChannel?: string;
  slackToken?: string;
};

export class DeployPipelineConstruct extends Construct {
  constructor(service: Service, params: DeployPipelineProps) {
    super(service, getLogicalName(DeployPipelineConstruct.name));

    if (service.props.ephemeralEnvName) return;

    if (
      !service.props.useRepositoryDefaultConfig &&
      (!service.props.repositoryOwner || !service.props.repositoryConnection)
    )
      throw new Error('repositoryOwner and repositoryConnection are required if useRepositoryDefaultConfig is false');

    const repositoryOwner = service.props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-owner')
      : (service.props.repositoryOwner as string);
    const repositoryConnection = service.props.useRepositoryDefaultConfig
      ? StringParameter.valueFromLookup(this, 'pipeline-default-repository-connection')
      : (service.props.repositoryConnection as string);

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
    });

    const deploymentRole = new Role(this, 'DeployRole', { assumedBy: new ServicePrincipal('codebuild.amazonaws.com') });
    const policy: IManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess');
    deploymentRole.addManagedPolicy(policy);

    const codebuildProject = new codebuild.Project(this, 'CodebuildProject', {
      projectName: getResourceName('', service.props),
      role: deploymentRole,
      cache: codebuild.Cache.local(codebuild.LocalCacheMode.CUSTOM),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
      },
      environmentVariables: {
        GITHUB_TOKEN: {
          type: codebuild.BuildEnvironmentVariableType.PARAMETER_STORE,
          value: githubTokenParameterName,
        },
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          pre_build: {
            commands: [
              ...(params.preDeployCommands || []),
              'cp -rL cdk.out.cache cdk.out || true',
              'cp -rL node_modules.cache node_modules || true',
              'npm set //npm.pkg.github.com/:_authToken $GITHUB_TOKEN',
              'yarn --prod',
            ],
          },
          build: {
            commands: [`yarn deploy ${service.props.envName}`],
          },
          post_build: {
            commands: [
              ...(params.postDeployCommands || []),
              'rm -r cdk.out.cache || true',
              'cp -r cdk.out cdk.out.cache',
              'rm -r node_modules.cache || true',
              'cp -r node_modules node_modules.cache',
            ],
          },
        },
        cache: {
          paths: ['cdk.out.cache/**/*', 'node_modules.cache/**/*'],
        },
      }),
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
    if (params.slackChannel) {
      const slackToken = service.props.useRepositoryDefaultConfig
        ? StringParameter.valueFromLookup(this, 'pipeline-default-slack-token')
        : (params.slackToken as string);
      if (!slackToken) throw new SynthError('MissingSlackToken', service.props);

      const topicFunction = new TopicFunction(service, {
        name: 'send-to-slack',
        baseFunctionFolder: __dirname,
        compiled: true,
        environment: {
          SLACK_CHANNEL: params.slackChannel,
          SLACK_TOKEN: slackToken,
        },
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
