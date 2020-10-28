const http = require('http');
const fs = require('fs'); //File systems => read Stream
const path = require('path');

function requestListener(req, res) {
  let locationPath = req.url;
  if(req.url =="/") locationPath = "index.html"; 
  else {
    let parts = req.url.split("/");
    if(parts[parts.length -1].indexOf(".") < 0) {
      locationPath = path.join(req.url, "index.html");
    }
  }

  let readStream = fs.createReadStream(path.join(__dirname,'public', locationPath));

  readStream.on('error', () => {
    // console.log('catched');
    res.statusCode = 404;
    res.end('Page Not Found');
  });
  readStream.pipe(res);

  // res.end('Hello World');
}

const server = http.createServer(requestListener);

server.listen(3005, () => {
  console.log('Server listening on port 3000');
});
