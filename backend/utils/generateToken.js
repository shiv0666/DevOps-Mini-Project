const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || "changeme";
  const expires = process.env.TOKEN_EXPIRES_IN || "7d";
  return jwt.sign({ id }, secret, { expiresIn: expires });
};

module.exports = generateToken;
