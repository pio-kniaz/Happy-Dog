export const formErrorParser = (error = {}) => {
  const formError = Object.keys(error).reduce((acc, item) => {
    acc[item] = error[item].message;
    return acc;
  }, {});
  return formError;
};
