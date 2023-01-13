import { UserProfile } from 'services/identity/entities';
import twilio from 'twilio';
import { ChatGrant } from 'twilio/lib/jwt/AccessToken';
import { ConversationInstance } from 'twilio/lib/rest/conversations/v1/conversation';
import { MessageInstance } from 'twilio/lib/rest/conversations/v1/conversation/message';
import { ParticipantInstance } from 'twilio/lib/rest/conversations/v1/conversation/participant';
import { UserInstance } from 'twilio/lib/rest/conversations/v1/user';
import { messagesSecret } from '../catalog';

const DEFAULT_23_HOUR = 82800;

const client = (accountSid: string, authToken: string) => twilio(accountSid, authToken);

export interface TwilioOptions {
  secret: messagesSecret.twilio.Secret['payload'];
}

export interface SendMessageParams {
  conversationId: string;
  participantSid?: string;
  message: string;
  attributes?: {
    contentType: string;
    data?: any;
    onlyShow?: string[];
  };
}
export interface UpdateMessageParams {
  messageId: string;
  conversationId: string;
  message?: string;
  attributes?: {
    contentType: string;
    data: any;
    onlyShow?: string[];
  };
}
export interface DeleteMessageParams {
  conversationId: string;
}
interface Message {
  createConversations: (name?: string, attributes?: any) => Promise<ConversationInstance>;
  generateToken: (userId: string) => Promise<{
    token: string;
    ttl: number;
  }>;
  addParticipant: (conversationsId: string, userId: string, attributes: any) => Promise<ParticipantInstance>;
  sendMessage: (attr: SendMessageParams) => Promise<MessageInstance>;
  updateUser: (user: UserProfile) => Promise<UserInstance>;
  deleteMessage: (attr: DeleteMessageParams) => Promise<boolean>;
  updateMessage: (attr: UpdateMessageParams) => Promise<MessageInstance>;
}

export const message = ({
  secret: {
    SERVICE_CONVERSATIONS_SID: serviceConversationsSid,
    ACCOUNT_SID: accountSid,
    AUTH_TOKEN: authToken,
    TWILIO_API_KEY: twilioApiKey,
    TWILIO_API_SECRET: twilioApiSecret,
  },
}: TwilioOptions): Message => {
  const twilioClient = client(accountSid, authToken);

  const generateToken = async (userId: string) => {
    const chatGrant = new ChatGrant({
      serviceSid: serviceConversationsSid,
    });

    const token = new twilio.jwt.AccessToken(accountSid, twilioApiKey, twilioApiSecret, {
      identity: userId,
      ttl: DEFAULT_23_HOUR,
    });
    token.addGrant(chatGrant);
    return { token: token.toJwt(), ttl: DEFAULT_23_HOUR };
  };

  const createConversations = async (name?: string, attributes?: any) => {
    return twilioClient.conversations.v1.conversations.create({
      friendlyName: name,
      attributes: JSON.stringify(attributes),
    });
  };
  const addParticipant = async (conversationsId: string, userId: string, attributes: UserProfile) => {
    const createParticipant = await twilioClient.conversations.v1
      .conversations(conversationsId)
      .participants.create({ identity: userId });

    if (attributes.avatar) attributes.avatar = `${process.env.MEDIA_URL}/${attributes.avatar}`;

    await twilioClient.conversations.users(userId).update({
      attributes: JSON.stringify(attributes),
      friendlyName: `${attributes.givenName} ${attributes.familyName}`,
    });
    return createParticipant;
  };

  const sendMessage = async ({ conversationId, participantSid, message, attributes }: SendMessageParams) => {
    return twilioClient.conversations.v1
      .conversations(conversationId)
      .messages.create({ author: participantSid, body: message, attributes: JSON.stringify(attributes) });
  };
  const updateMessage = async ({ messageId, conversationId, message, attributes }: UpdateMessageParams) => {
    return twilioClient.conversations.v1
      .conversations(conversationId)
      .messages(messageId)
      .update({ body: message, attributes: attributes ? JSON.stringify(attributes) : undefined });
  };

  const deleteMessage = async ({ conversationId }: DeleteMessageParams) => {
    return twilioClient.conversations.v1.conversations(conversationId).remove();
  };

  const updateUser = async (user: UserProfile) => {
    return twilioClient.conversations.users(user.id).update({
      attributes: JSON.stringify(user),
      friendlyName: `${user.givenName} ${user.familyName}`,
    });
  };
  return { createConversations, generateToken, addParticipant, sendMessage, updateUser, deleteMessage, updateMessage };
};
