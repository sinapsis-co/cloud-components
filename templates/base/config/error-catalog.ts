import { HandledError, HandledFault } from '@sinapsis-co/cc-platform/error';
import { PlatformErrorCodes, PlatformFaultCodes } from '@sinapsis-co/cc-platform/error/catalog';

type CustomErrorCodes =
  | PlatformErrorCodes
  | 'ERROR_IDENTITY_USER_EXISTS'
  | 'ERROR_IDENTITY_INVALID_ROLE'
  | 'ERROR_SEARCH_INVALID_TYPE'
  | 'ERROR_ASSET_INVALID_MEDIA_TYPE'
  | 'ERROR_ASSET_INVALID_TYPE';

type CustomFaultCodes = PlatformFaultCodes | 'FAULT_SSR_MISSING_MANIFEST' | 'FAULT_SSR_MISSING_RECIPE';

export const CustomError = HandledError<CustomErrorCodes>;

export const CustomFault = HandledFault<CustomFaultCodes>;
