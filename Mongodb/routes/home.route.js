const homeController = require('../controllers/home.controller');

function setHomeRoute(app) {
  app.get('/',homeController.index);
  app.get('/create', homeController.create);
  app.get('/delete/:id',homeController.deleteById);
  app.post('/create', homeController.postCreate);
  app.get('/update/:id', homeController.update);
  app.post('/update/:id', homeController.postUpdate);
}

module.exports = setHomeRoute;