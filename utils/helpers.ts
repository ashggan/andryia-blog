export const castToNumber = (param: number | string) => {
  const num = Number(param);
  if (isNaN(num)) {
    return false;
  }
  return num;
};
