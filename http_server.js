var http = require('http');
var hostname = '127.0.0.1'; // ip 설정
var port = 8080;  // port 설정
http.createServer(function (requset, response) {
	//  request 용청, response 응답
	response.writeHead(200, {'Content-Type' : 'text'/'plain'});  // head 설정
	response.write('Hello Node.js'); // 화면에 Hello Node.js 를 띄어준다.
	response.end(); // 응답을 끝냄
}).listen(port, hostname, function() {
	console.log(port, 'Server Run... ');
})