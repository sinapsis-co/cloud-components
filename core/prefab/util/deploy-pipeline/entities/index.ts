export type PipelineNotification = {
  detail: {
    'execution-id': string;
    pipeline: string;
    state: 'FAILED';
  };
  additionalAttributes: {
    failedActionCount: number;
    failedActions: { action: string; additionalInformation: string }[];
    failedStage: string;
  };
};

export type SlackNotificationConfig = {
  channel: string;
  token: string;
};

export type SlackNotificationPayload = {
  fallback: string;
  color: string;
  fields: { title: string; short: boolean; value: string }[];
};
