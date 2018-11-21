let http = require ('http');
const port = 3001;
const server = http
  .createServer ((request, response) => {
    response.write ('This is respone request!\r\n');
    response.writeHead (200, {
      'Content-Type': 'text/html',
      Trailer: 'Content-MD5',
    });
    const ipAddress = request.socket.remoteAddress;
    response.write (`Your ip address is ${ipAddress}\r\n`);
    response.write (`Request url : ${request.url}\r\n `);
    response.write (
      `Detail request url : ${require ('url').parse (request.url, true)}`
    );
    // run debugger
    debugger;
    response.addTrailers ('Content-MD5', 'f46e4fa1f8663b4bcc7945f46ceaeb33');
    // alway run .end() method to complote respone
    response.end ();
  })
  .listen (port);
console.log ('Server is running on port ' + port);
