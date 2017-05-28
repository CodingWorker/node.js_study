var http=require('http');//引入http模块

//创建服务器：使用http.createServer
http.createServer(function(request,response){
	//发送http头部
	//设定http状态值
	//内容类型
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送响应数据
	response.end('hello world');
}).listen(8888);


//运行服务时，终端打印如下信息
console.log('Server running at http://207.0.0.1:8888');
