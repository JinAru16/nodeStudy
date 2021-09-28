const http = require('http');

let server = http.createServer(function (request, response) {
    response.end('<h1>Hello World!</h1>');
});
server.listen(3000);  // 3000은 포트번호를 의미


