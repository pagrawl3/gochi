const CONST = require('../const');
const _helper = require('./../utils');

const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/category');
const statusRouter = require('./routes/status');
const dashboardRouter = require('./routes/dashboard');

module.exports = function(app) {
  app.get(CONST.API_PATH, (req, res) => _helper.returnSuccess(res, 'Gochi API v1.0.1'));

  // other routers
  authRouter(app);
  categoryRouter(app);
  statusRouter(app);
  dashboardRouter(app);
};
