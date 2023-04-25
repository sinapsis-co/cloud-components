/* eslint-disable no-console */
import { apiCall } from '@sinapsis-co/cc-sdk/integration/api';
import { CustomFault } from '../../../config/error-catalog';
import { baseIntegrations } from './catalog';
// import { baseIntegrations } from '../catalog';

(async () => {
  try {
    const apiCallResult = await apiCall<baseIntegrations.external.Interface>(
      baseIntegrations.external.config,
      {
        headers: { Authorization: 'token' },
        body: { email: 'andres+a6@sinapsis.co' },
      },
      { tracingMeta: { tenantId: '123' } }
    );

    const errorResponse = 'errorResponse' in apiCallResult ? apiCallResult.errorResponse : undefined;
    const response = 'response' in apiCallResult ? apiCallResult.response : undefined;

    console.log(response);
    // console.log('statusCode', apiCallResult.statusCode);
    console.log(errorResponse);
    // console.log(errorResponse?.errorCode);
  } catch (error) {
    if (error instanceof CustomFault) error.returnException();
  }
})();
