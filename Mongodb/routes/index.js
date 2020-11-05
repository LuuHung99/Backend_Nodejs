const setHomeRoute = require('./home.route');
const setLoginRoutes = require('./login.route');
function setRoutes(app) {
  setHomeRoute(app);
  setLoginRoutes(app);
}

module.exports = setRoutes;