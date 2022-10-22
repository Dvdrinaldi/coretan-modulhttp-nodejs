// var http = require('http');

// var server = http.createServer(function (request, response) {
//     response.end("Hi, selamat datang di nodejs");
// });

// server.listen(8000);

// console.log("server running on http://localhost:8000");

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello <b>World</b>!');
    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");

// untuk JSON
//response.writeHead(200, {'Content-Type': 'application/json'});
// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.write('{"message": "Hello World!"}');
//     response.end();
// }).listen(8000);


// console.log("server running on http://localhost:8000");

// untuk PDF
//response.writeHead(200, {'Content-Type': 'application/pdf'});

// untuk XML
//response.writeHead(200, {'Content-Type': 'application/xml'});