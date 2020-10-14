const express = require('express');
const { get } = require('http');
const server = express();

server.use(express.static('./public'));
server.use('/tochuccb',express.static('./tccb'));
server.use('/daotao', express.static('./daotao'));

server.listen(3001, () => {
  console.log('listening on port');
})