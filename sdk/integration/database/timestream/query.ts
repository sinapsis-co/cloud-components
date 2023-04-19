import { QueryCommand, QueryCommandOutput, TimestreamQueryClient } from '@aws-sdk/client-timestream-query';
import { Tracing } from 'tracing';

const timestream: TimestreamQueryClient = Tracing.captureIntegration(new TimestreamQueryClient({}) as any);

// const emptyQueryResponse: QueryResponse = {
//   ColumnInfo: [],
//   QueryId: '',
//   Rows: [],
// };

//TODO: Implement pagination and types
export const timestreamQuery = async (query: string, nextToken?: string): Promise<QueryCommandOutput> => {
  const cmd = async () => {
    const queryResults = await timestream.send(new QueryCommand({ QueryString: query, NextToken: nextToken }));
    return queryResults;
  };
  return Tracing.capture('Query', 'FAULT_TS_WRITE', 'Query', cmd);
};
