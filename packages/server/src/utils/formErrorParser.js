const formErrorParser = (errors) => {
  const formError = errors.details.reduce((acc, item) => {
    acc[item.context.label] = {
      message: item.message,
    };
    return acc;
  }, {});

  return {
    errors: formError,
  };
};

const uniqueValidatorParser = (errors) => {
  const { errors: uniqueErr } = errors;
  const uniqueErrors = Object.keys(uniqueErr).reduce((acc, item) => {
    acc[item] = {
      message: uniqueErr[item].message,
    };
    return acc;
  }, {});
  return {
    errors: uniqueErrors,
  };
};

module.exports = {
  formErrorParser,
  uniqueValidatorParser,
};
