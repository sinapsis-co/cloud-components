import { SecretConfig } from '@sinapsis-co/cc-sdk/catalog/secret';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CfnSecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type RuntimeSecretBuilderProps = {
  secretConfig: SecretConfig;
};

export class RuntimeSecret extends Construct {
  public readonly secret: CfnSecret;
  public readonly secretName: string;

  constructor(service: Service, params: RuntimeSecretBuilderProps) {
    super(service, getLogicalName(RuntimeSecret.name));

    this.secretName = params.secretConfig.name;

    this.secret = new CfnSecret(this, 'Secret', {
      name: getResourceName(this.secretName, service.props),
    });
  }

  public useMod(mods: ((secret: CfnSecret) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(this.secretName, this.secret.ref);
      mods.map((fn) => fn(this.secret)(lambda));
    };
  }

  public useModReader(): (lambda: NodejsFunction) => void {
    return this.useMod([RuntimeSecret.modifier.reader]);
  }

  public static modifier = {
    reader: (secret: CfnSecret): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['secretsmanager:GetSecretValue', 'secretsmanager:DescribeSecret'],
            resources: [secret.ref],
          })
        );
      };
    },
  };
}
