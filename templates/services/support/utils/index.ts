/* eslint-disable @typescript-eslint/no-unused-vars */
type Flatten<T> = {
  [P in keyof T]: T[P];
};
export const removeEmptyValues = <T>(objectData: Flatten<T>): T =>
  Object.fromEntries(
    Object.entries(objectData).filter(([_, v]) => {
      if (!v) return false;
      if (v === '') return false;
      if (v === 'null') return false;
      if (v === 'undefined') return false;
      return true;
    })
  ) as unknown as T;
