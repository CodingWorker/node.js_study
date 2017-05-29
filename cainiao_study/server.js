//引入http模块
var http=require('http');

//引入url模块
var url=require('url');

//创建start函数
function start(route){
	//创建onRequest函数
	function onRequest(request,response){
		var pathName=url.parse(request.url).pathname;
		console.log('Request for '+pathName+' received');
	

	route(pathName);

	//处理响应
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');

	response.end();
}

http.createServer(onRequest).listen(8088);

console.log('server has been started');
};
exports.start=start;
