import fetch from 'node-fetch';

type GoogleApiRequestValidate = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
};
export const googleApiRequestValidate = async (
  captchaResponse: string,
  secret = process.env.GOOGLE_RECAPTCHA
): Promise<GoogleApiRequestValidate> => {
  const data = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaResponse}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const response = (await data.json()) as GoogleApiRequestValidate;

  return response;
};

