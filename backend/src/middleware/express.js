const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');

module.exports = function(app, middleware) {
  app.use(compress());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
};
