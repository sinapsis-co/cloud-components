import S3 from 'aws-sdk/clients/s3';

import { format } from '@fast-csv/format';

import { prelaunchListHeaders, PrelaunchUserRow, PrelaunchUsersReport } from '../entities/wait-list';
import { waitListRepository } from '../repository';

const s3 = new S3();
export const createPrelaunchUsersList = async (): Promise<string> => {
  const items = await getItems();
  const key = `wait-list-${Date.now()}.csv`;
  await s3
    .putObject({
      Bucket: process.env.BUCKET_NAME!,
      Key: key,
      Body: await processContent(items),
    })
    .promise();

  return key;
};

const userToCsv = (u: PrelaunchUserRow): string[] => {
  return [u.email, u.givenName ?? '-', u.createdAt.toLocaleDateString()];
};

export const processContent = (users: PrelaunchUsersReport): Promise<string> => {
  return new Promise((resolve) => {
    const rows: string[] = [];
    const csvStream = format({
      headers: prelaunchListHeaders,
    });
    csvStream.on('data', (row) => rows.push(row));
    csvStream.on('end', () => resolve(rows.join()));
    users.map((u) => csvStream.write(userToCsv(u)));
    csvStream.end();
  });
};

const getItems = async (): Promise<PrelaunchUsersReport> => {
  const buffer: PrelaunchUserRow[] = [];
  let nToken: string | undefined;

  do {
    const { items, nextToken: newToken } = await waitListRepository.scanTable({
      limit: 1000,
      nextToken: nToken,
    });
    buffer.push(...items);
    nToken = newToken?.toString();
  } while (nToken);

  return buffer;
};
