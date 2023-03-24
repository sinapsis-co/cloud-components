import { apiCall } from '@sinapsis-co/cc-platform/integrations/api';
import { CustomFault } from '../../../../../config/error-catalog';
import { identityIntegrations } from '../../catalog';

(async () => {
  try {
    const apiCallResult = await apiCall(
      identityIntegrations.external.config,
      {
        headers: {
          Authorization:
            'eyJraWQiOiJmZCtKSE5RZ1Y3bFd2OFdzbklwVW54enNDbVRvcHhuNjRscVdJeGlRQ1pVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3NzNiOTllZS01MjM0LTQyNTEtYjg0Mi0zNmM0NGZkNTI0YjciLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9OallTZVFxN0UiLCJjbGllbnRfaWQiOiIyMzhzZjcwZWpjM2llY2twZWFlNTU3Z2NmbiIsIm9yaWdpbl9qdGkiOiI5ZTU4YjNiOS1iODg3LTQ4ZjItOTFmZC02ZDcwYThiZWMyYzUiLCJldmVudF9pZCI6IjM1YWM0ZWY2LTYzYzctNGFlMS1hOTk2LTllNzQ2OTNiODA2YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2Nzk1OTQ5MTgsImV4cCI6MTY3OTU5ODUxOCwiaWF0IjoxNjc5NTk0OTE4LCJqdGkiOiJmZThjNDUyMS1kYTg1LTQ3ZDAtOGY5Yy1mZWFjMzZiMzgyMDUiLCJ1c2VybmFtZSI6ImFuZHJlcyt0ZXN0NkBzaW5hcHNpcy5jbyJ9.tB-0GXhstwyH5Qer6Z0hfvgtrihY9U7mXJ1Lyns-bngcciVUliVz-umcn8MeFdLDzjHEP9bFbZWHVZPHXIYdeMpPeih9yjZJsJD-Nygp2YwUxbZ5T4cqcOJqqqXIMuLK4JNGlGi1O9CkjEujxnKLnwt5KeaTw7Cr-9iZrNOvtPNBbK-2_SUN7oTtD0yyyp8mFcDS6_-csq3o8qLi20stPwrbZ3ZnKlfaCBN9JxOJrjIH5hlPLPdMBkHGO62c2p1O_lRNetHFDpipdoL2teLt-dA9AMJ1r_ugbzstKqg60x1Z-ekzuJjHbt4Go2KIOJdZU6qYBi2iIVoPZXveqFsu0A',
        },
      },
      { tracingMeta: { tenantId: '123' }, returnErrorResponse: false }
    );

    const errorResponse = 'errorResponse' in apiCallResult ? apiCallResult.errorResponse : undefined;
    const response = 'response' in apiCallResult ? apiCallResult.response : undefined;

    console.log(response?.title);

    // console.log(errorResponse);
    // console.log(errorResponse?.errorCode);
  } catch (error) {
    if (error instanceof CustomFault) error.returnException();
  }
})();
