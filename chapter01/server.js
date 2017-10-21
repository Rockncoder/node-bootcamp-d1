const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  switch(request.method){
    case 'GET':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(`The time is ${Date.now()}`);
      break;
    case 'POST':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(`POSTed at ${Date.now()}`);
      break;
    case 'DELETE':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(`DELETED at ${Date.now()}`);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});