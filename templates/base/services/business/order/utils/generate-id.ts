const randomNumber = (length: number) => {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  ).toString();
};

export const generateId = (): string => {
  let now = Date.now().toString();

  if (now.length < 14) {
    const pad = 14 - now.length;
    now += randomNumber(pad);
  }

  return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
};
