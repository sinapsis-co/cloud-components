import { getDomain } from '@sinapsis-co/cc-infra/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { RuntimeSecret } from '@sinapsis-co/cc-infra/prefab/config/runtime-secret';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { userProfileRepository } from '../identity/repository/user-profile-repository';
import { api, messagesSecret } from './catalog';

export type MessagesParams = GlobalServiceDependencies;

export class Messages extends Service<GlobalProps, MessagesParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;
  public readonly secret: RuntimeSecret;

  constructor(scope: Construct, globalProps: GlobalProps, params: MessagesParams) {
    super(scope, Messages.name, globalProps, { params });
    this.secret = new RuntimeSecret(this, messagesSecret.twilio);

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'messages',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getToken: {
          timeout: Duration.seconds(30),
          modifiers: [this.secret.useModReader()],
          ...api.getToken.config,
        },
        createMessage: {
          timeout: Duration.seconds(10),
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true),
          },
          modifiers: [
            this.secret.useModReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.identity.apiAggregate.table,
                'readWrite',
                'USER_PROFILE_TABLE'
              ),
          ],
          ...api.createMessage.config,
        },
        deleteMessage: {
          timeout: Duration.seconds(10),
          modifiers: [
            this.secret.useModReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.identity.apiAggregate.table,
                'readWrite',
                'USER_PROFILE_TABLE'
              ),
          ],
          ...api.deleteMessage.config,
        },
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      handlers: {
        profileSkillChanged: {
          name: 'event-profile-changed',
          eventConfig: [userProfileRepository.events.updated],
          modifiers: [this.secret.useModReader()],
          environment: {
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true),
          },
        },
      },
    });
  }
  public SecretReader(): (lambda: NodejsFunction) => void {
    return this.secret.useModReader();
  }
}
