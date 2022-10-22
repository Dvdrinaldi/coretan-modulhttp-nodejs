// var http = require('http');

// http.createServer(function (request, response){
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('URL: ' + request.url);
// //Jika kita ingin mengambil URI untuk membuat URL routing, maka kita bisa mengambilnya dari objek request dengan properti url.
//     response.end();
// }).listen(8000);

// console.log('Server running on http://localhost:8000');

var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    switch(request.url){
        case '/about':
            response.write("Ini adalah halaman about");
            break;
        case '/profile':
            response.write("Ini adalah halaman profile");
            break;
        case '/produk':
            response.write("ini adalah halaman produk");
            break;
        default: 
            response.write("404: Halaman tidak ditemukan");
    }
    response.end();
}).listen(8000);

console.log('Server running on http://localhost:8000');