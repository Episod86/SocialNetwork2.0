export const required = (value) => {
  if (value) return undefined;
  return "Fild is required ";
};

export const maxLengthCreator = (maxLengt) => (value) => {
  if (value && value.length > maxLengt) return "max length is 30 symbols";
  return undefined;
};
