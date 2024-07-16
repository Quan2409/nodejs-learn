const bcrypt = require("bcrypt");

const hashString = (string) => {
  let salt = 8;
  return bcrypt.hashSync(string, salt);
};

module.exports = hashString;
