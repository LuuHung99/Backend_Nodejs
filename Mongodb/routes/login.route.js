const loginController = require('../controllers/login.controller');

function setLoginRoutes(app) {
  app.get('/login', loginController.index);
  app.post('/login', loginController.postLogin);
}

module.exports = setLoginRoutes;