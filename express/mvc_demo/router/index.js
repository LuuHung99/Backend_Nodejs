const setHomeRouter = require('./home.router');
function setRouters(app) {
  setHomeRouter(app);
}

module.exports = { setRouters };