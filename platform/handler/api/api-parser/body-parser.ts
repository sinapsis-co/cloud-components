/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schemy } from 'schemy-ts';
import { ApiError } from '../api-error';

export const bodyParser = async <BodyType>(body?: string, schema?: Schemy, errorName?: string): Promise<BodyType> => {
  try {
    const parsedBody = JSON.parse(body || '{}');
    if (schema) {
      return await Schemy.validate<BodyType>(parsedBody, schema, false).catch((e) => {
        throw new ApiError('ValidationError', 400, e);
      });
    }

    return parsedBody;
  } catch (error: any) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(errorName!, 400, error.message || error);
  }
};
