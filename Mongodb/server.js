const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const setRoute = require('./routes');


const app = express();

app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'todos', 
  cookie: { maxAge: 60000 }}));

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const url = 'mongodb+srv://hungnucha123:hung0989231338@cluster0.fm2md.mongodb.net/backend?retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}
mongoose.connect(url, options)
        .then(() => {
          console.log('Connected');
        })
        .catch(err => {
          console.log(err);
        })

setRoute(app);

app.listen(3003, () => {
  console.log('Thinh Ml');
})