const homeCtrl = require('../controllers/home.controllers');
function setHomeRouter(app) {
  app.get('/', homeCtrl.home);
  app.get('/login', homeCtrl.login);
}

module.exports = setHomeRouter;