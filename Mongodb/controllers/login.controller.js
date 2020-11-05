const Account = require('../models/acount');

function index(req, res) {
  res.render('login');
}

async function postLogin(req, res) {
  const testAccount = await Account.loginTk(req.body);
  if(testAccount.length > 0) {
    console.log("Successfully");
    res.redirect('/');
  }
  else{
    res.redirect('/login');
  }
}

module.exports = {index, postLogin};

