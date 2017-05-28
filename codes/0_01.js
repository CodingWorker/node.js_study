var http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

var server = http.createServer((request,respond)=>{
	respond.statusCode = 200;
	respond.setHeader('charset','utf-8');
	respond.end('hello node.js!');
});

server.listen(port,hostName,()=>{
	console.log(`Server running at http://${hostName}:${port}/`);
})