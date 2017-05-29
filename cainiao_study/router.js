//引入http模块
var http=requite('http');

//引入url模块
var url=require('url');

function start(request,response){
	function onRequest(){
		
	
	var pathName=url.parse(request.url).pathname;
	console.log('Request for '+pathName+' received');
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');
	response.end();
}

//创建http服务并监听
http.createServer(onRequest).listen(8088);

console.log('server has been started');
}

exports.start=start;
