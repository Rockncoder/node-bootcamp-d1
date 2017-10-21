const http = require('http');

// the Event Emitter Pattern - consist of two main parts
// the event emitter which in this case is the server
// and one ore more event listener
// here we have two listeners 'data' and 'end'
http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);