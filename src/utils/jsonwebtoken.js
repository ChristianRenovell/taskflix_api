const jwt = require('jsonwebtoken');

module.exports.generarToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRETKEY);
  return token;
};

module.exports.decodeToken = (token) => {
  const payload = jwt.verify(token, process.env.SECRETKEY);
  return payload;
}
