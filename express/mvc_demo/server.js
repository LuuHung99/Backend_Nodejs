const express = require('express');
const setRouters = require('./router/index');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

setRouters(app);

app.use(express.static(path.join(__dirname, './public')));

//set routing by config
//app.get, app.post, app.put, app.delete
app.get('/', 'home');
app.get('/login', 'login');

app.listen(3007, () => {
  console.log('listen on port 3007');
})