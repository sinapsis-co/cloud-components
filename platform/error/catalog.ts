type DynamoFaults =
  | 'FAULT_DYN_CHECK_ITEM_EXISTS'
  | 'FAULT_DYN_LIST_ITEM'
  | 'FAULT_DYN_GET_ITEM'
  | 'FAULT_DYN_PUT_ITEM'
  | 'FAULT_DYN_CREATE_ITEM'
  | 'FAULT_DYN_UPDATE_ITEM'
  | 'FAULT_DYN_DELETE_ITEM'
  | 'FAULT_DYN_SCAN_TABLE'
  | 'FAULT_DYN_QUERY_TABLE'
  | 'FAULT_DYN_BATCH_GET_ITEM'
  | 'FAULT_DYN_SOFT_DELETE_ITEM'
  | 'FAULT_DYN_RECOVER_ITEM'
  | 'FAULT_DYN_BATCH_CREATE_ITEM';

type S3Faults =
  | 'FAULT_S3_STREAM_UPLOAD'
  | 'FAULT_S3_STREAM_GET_OBJECT'
  | 'FAULT_S3_PUT_OBJECT'
  | 'FAULT_S3_HEAD_OBJECT'
  | 'FAULT_S3_GET_OBJECT'
  | 'FAULT_S3_DELETE_OBJECT'
  | 'FAULT_S3_LIST_OBJECT';

type ApiCallFaults =
  | 'FAULT_API_CALL_UNHANDLED'
  | 'FAULT_API_CALL_NETWORK'
  | 'FAULT_API_CALL_INVALID_RESPONSE'
  | 'FAULT_API_CALL_TIMEOUT';

export type PlatformFaultCodes =
  | DynamoFaults
  | S3Faults
  | ApiCallFaults
  | 'FAULT_UNHANDLED'
  | 'FAULT_TIMEOUT'
  | 'FAULT_MAX_RETRY_REACHED'
  | 'FAULT_TS_WRITE'
  | 'FAULT_SNS_SEND_MESSAGES'
  | 'FAULT_SQS_SEND_MESSAGES'
  | 'FAULT_SQS_DELETE_MESSAGE'
  | 'FAULT_EVENT_DISPATCH'
  | 'FAULT_NOT_DELIVER_EMAIL'
  | 'FAULT_NOT_MISSING_TEMPLATE'
  | 'FAULT_SM_MISSING_SECRET'
  | 'FAULT_SM_GET_RUNTIME_SECRET'
  | 'FAULT_SSM_INVALID_PARAMETER'
  | 'FAULT_SSM_GET_EDGE_CONFIG'
  | 'FAULT_COG_DELETE_USER'
  | 'FAULT_COG_UPDATE_USER';

export type PlatformErrorCodes =
  | 'ERROR_ITEM_NOT_FOUND'
  | 'ERROR_UNAUTHORIZED'
  | 'ERROR_BODY_VALIDATION'
  | 'ERROR_MALFORMED_BODY';
