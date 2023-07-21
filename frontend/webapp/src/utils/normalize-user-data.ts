export const normalizeUserData = (data: string | FormDataEntryValue | null): string => {
  return data?.toString().toLowerCase() || '';
};
