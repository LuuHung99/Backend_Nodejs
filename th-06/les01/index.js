const express = require('express');
const server = express();

server.set('views', './views');
server.set('view engine', 'pug');

let name = ['hung', 'mocha', 'gif', 'jquery', 'html'];

// server.use(express.static('./public'));
// server.use('/tochuccb',express.static('./tccb'));
// server.use('/daotao', express.static('./daotao'));

server.get('/',(req, res)=>{
  res.render('index',{
    list: name
  });
})

server.get('/home',(req, res)=>{
  res.render('home/index');

})

server.listen(3001, () => {
  console.log('listening on port');
})