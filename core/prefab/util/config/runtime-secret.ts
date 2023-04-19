import { SecretConfig } from '@sinapsis-co/cc-sdk/catalog/secret';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { ISecret, Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type RuntimeSecretBuilderProps = {
  secretConfig: SecretConfig;
  fromSecret?: ISecret;
};

export class RuntimeSecret extends Construct {
  public readonly secret: ISecret;
  public readonly secretName: string;

  constructor(service: Service, params: RuntimeSecretBuilderProps) {
    super(service, getLogicalName(RuntimeSecret.name));

    this.secretName = params.secretConfig.name;

    this.secret = params.fromSecret
      ? Secret.fromSecretCompleteArn(this, 'Secret', params.fromSecret.secretArn)
      : new Secret(this, 'Secret', {
          secretName: getResourceName(this.secretName, service.props),
        });
  }

  public useMod(mods: ((secret: ISecret) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(this.secretName, this.secret.secretArn);
      mods.map((fn) => fn(this.secret)(lambda));
    };
  }

  public useModReader(): (lambda: NodejsFunction) => void {
    return this.useMod([RuntimeSecret.modifier.reader]);
  }

  public static modifier = {
    reader: (secret: ISecret): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        secret.grantRead(lambda);
      };
    },
  };
}
