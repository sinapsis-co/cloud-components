export type Message = {
  entity: string;
  key: string;
  s3FileParser?: {
    results: {
      startByte: number;
      headers: string[];
      finished: boolean;
    };
  };
};
