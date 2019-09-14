const CONST = require('../const');
const _helper = require('./../utils');

const authRouter = require('./routes/auth');

module.exports = function(app) {
  app.get(CONST.API_PATH, (req, res) => _helper.returnSuccess(res, 'Gochi API v1.0.0'));

  // other routers
  authRouter(app);
};
