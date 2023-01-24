import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import * as catalog from '../../catalog';
import { checkObject } from '../../platform/check-object';
import { createWaitListUsersList } from '../../platform/get-prelaunch-report';
import { createPresignedGet } from '../../platform/get-presigned-get';


export const handler = apiHandler<catalog.api.list.Interface>(async () => {
  const key = await createWaitListUsersList();
  await checkObject(key);
  return { url: createPresignedGet(key) };
}, catalog.api.list.config);
