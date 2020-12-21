const alphaNumWithLatinRegExp = /^[\p{L}\s]+$/u;
const passwordFormatRegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,13}$/;

module.exports = {
  alphaNumWithLatinRegExp,
  passwordFormatRegExp,
};
