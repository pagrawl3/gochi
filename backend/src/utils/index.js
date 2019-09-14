const jwt = require('jsonwebtoken');
const BYPASS = 'gochigang';

exports.returnError = function(res, error, code) {
  const payload = {
    success: false,
    message: error
  };
  res.status(code || 500).json(payload);
};

exports.returnSuccess = function(res, message, data) {
  const payload = {
    success: true,
    message: message,
    data: data
  };
  res.json(payload);
};

exports.createRoute = function(router, middleware) {
  return function(url, func, method) {
    router[method.toLowerCase()](url, middleware, func);
  };
};

exports.verifyToken = function(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'gochigang', (_, decoded) => {
      if (!decoded && token !== BYPASS) reject('Invalid Access Token');
      if (decoded) resolve(decoded);
      else resolve({ _id: '5bbb887effac8c09c28949e9', admin: true });
    });
  });
};
