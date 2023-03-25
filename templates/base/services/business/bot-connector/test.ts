import { apiCall } from '@sinapsis-co/cc-platform/integrations/api';
import { CustomFault } from '../../../config/error-catalog';
import { baseIntegrations } from './catalog';
// import { baseIntegrations } from '../catalog';

(async () => {
  try {
    const apiCallResult = await apiCall(
      baseIntegrations.external.config,
      {
        headers: {
          Authorization:
            'eyJraWQiOiJ3UFRhbmExM0xiUXdcL1NQNWxDV0RKRDFDdUdmOXJid21oVDBuTEEyNjlGTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3NzNiOTllZS01MjM0LTQyNTEtYjg0Mi0zNmM0NGZkNTI0YjciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX05qWVNlUXE3RSIsImNvZ25pdG86dXNlcm5hbWUiOiJhbmRyZXMrdGVzdDZAc2luYXBzaXMuY28iLCJnaXZlbl9uYW1lIjoiRGF2aWQiLCJvcmlnaW5fanRpIjoiOTNmOGZhOTEtZWIyZS00ZjM4LWJjOTEtYjc2NTk3NDU2Zjc3IiwiY3VzdG9tOnRlbmFudElkIjoiZjFmZjc1NDktMWYyZC00NGQyLTg5ZmUtOWEzYTU3OWU5MzMxIiwiYXVkIjoiMjM4c2Y3MGVqYzNpZWNrcGVhZTU1N2djZm4iLCJldmVudF9pZCI6ImE3MGU5YWQxLWFhNWUtNGNhOS05Y2RhLTI2ODE0YTExZDY5MiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5NjkwMDkxLCJjdXN0b206Y29tcGFueU5hbWUiOiJzaW5hcHNpcyIsImV4cCI6MTY3OTY5MzY5MSwiY3VzdG9tOnJvbGUiOiJvd25lciIsImlhdCI6MTY3OTY5MDA5MSwiZmFtaWx5X25hbWUiOiJMYXJhIiwianRpIjoiYmM2NmIyMTctZTAzOS00YWRkLTg4OGItZjk4MzkwZmE3MGY2IiwiZW1haWwiOiJhbmRyZXMrdGVzdDZAc2luYXBzaXMuY28ifQ.CVWtPIyB5CJLtHVS3hpFXyUC59XhzuWR8fhe7Ca3lKlOMixG21uzZOCpjfncuVZV4f66z7tfkMy-n1kr93Rqw8iIjx8KLpq7pButU3hyONpH6XZ8MWo516xnuQg2cvCRSdqvIOcYbKDuYu8xNygEGcaL9bUaUoLv5fZH_2x7DN9QDhdc5btJWJX5LiyEBt34MAeHWKTdkQ1_2zAE8gJ2ryX3j6LLUnKhNqTSQPAyktXGslda8SNAUzvBmi0caVh5LUWwaOYVgqxcCG3fXYM0UfmuEUby_pliXVwTy9PpACLRn3rThF3esCzuHFEwUmVqlPyoQ4IjbYNLcV1oNAnIOw',
        },
        body: { email: 'andres+a6@sinapsis.co' },
      },
      { tracingMeta: { tenantId: '123' }, returnErrorResponse: true }
    );

    const errorResponse = 'errorResponse' in apiCallResult ? apiCallResult.errorResponse : undefined;
    const response = 'response' in apiCallResult ? apiCallResult.response : undefined;

    console.log(response);

    console.log('statusCode', apiCallResult.statusCode);
    console.log(errorResponse);
    // console.log(errorResponse?.errorCode);
  } catch (error) {
    if (error instanceof CustomFault) error.returnException();
  }
})();
