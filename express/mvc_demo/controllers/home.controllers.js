const homeModel = require('../models/user.models');
function index(req, res) {
  //business logic
  let data = {title: 'HomePage'}
  res.render('home/home', data);
}

function login(req, res) {
  res.render('home/login');
}

module.exports = {index, login, homeModel};