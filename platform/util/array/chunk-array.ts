export const chunkArray = <T>(elements: Array<T>, maxMessagePerBatch: number): Array<Array<T>> => {
  const length = elements.length;
  const chucks: T[][] = [];
  for (let index = 0; index < length; index += maxMessagePerBatch) {
    chucks.push(elements.slice(index, index + maxMessagePerBatch));
  }
  return chucks;
};
