

let http = require('http')
const port = 3001
const server = http.createServer((request, response) => {
    response.write('This is respone request!\r\n')
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    })
    const ipAddress = request.socket.remoteAddress
    response.write(`Your ip address is ${ipAddress}\r\n`)
    response.write(`Request url : ${request.url}\r\n `)
    response.end()
}).listen(port)
console.log('Server is running on port ' + port);
console.log('Have change anything')