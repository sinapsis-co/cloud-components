import { Construct } from 'constructs';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { CfnSecret } from 'aws-cdk-lib/aws-secretsmanager';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { SecretConfig } from '@sinapsis-co/cc-platform-v2/catalog/secret';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';

export type RuntimeSecretBuilderProps = {
  secretConfig: SecretConfig;
};

export class RuntimeSecret extends Construct {
  public readonly secret: CfnSecret;
  public readonly secretName: string;

  constructor(scope: Construct, props: BaseServiceProps, params: RuntimeSecretBuilderProps) {
    super(scope, getLogicalName(RuntimeSecret.name));

    this.secretName = params.secretConfig.name;

    this.secret = new CfnSecret(this, 'Secret', {
      name: getResourceName(this.secretName, props),
    });
  }

  public readerModifier(): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addToRolePolicy(
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: ['secretsmanager:GetSecretValue', 'secretsmanager:DescribeSecret'],
          resources: [this.secret.ref],
        })
      );
      lambda.addEnvironment(this.secretName, this.secret.ref);
    };
  }
}
