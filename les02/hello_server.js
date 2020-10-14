//ES6
//import http from 'http';

//CommonJS
const http = require('http');

function requestListener(req, res) {
  const frags = req.url.split('/');
  let err = false;

  if (frags.length != 4) err = true;
  else if (!(frags[1] == 'add' || frags[1] == 'mul')) err = true;

  let a = Number(frags[2]),
    b = Number(frags[3]),
    kq = 0;
  console.log(a);
  if (isNaN(a) || isNaN(b)) err = true;

  if (err) {
    res.end('Bad Request');
  } else {
    if (frags[1] == 'add') kq = a + b;
    else kq = a * b;
    res.end(`${frags[1] == 'add' ? 'Sum' : 'The product'} of ${a} and ${b} is ${kq}`);
  }
}

const server = http.createServer(requestListener); // Nhan 1 tham so. Lang nghe nguoi dung va tra ve ket qua nao do

server.listen(3004, () => {
  console.log('Server listening on port 3004');
});
