//引入fs模块
var fs=require('fs');

var data='';

//创建可读流
var readStream=fs.createReadStream('f:/temp.txt');

//设置编码
readStream.setEncoding('UTF-8');

//处理/绑定/注册流事件 data end error finish
readStream.on('data',function(chunk){
	data+=chunk;
});

readStream.on('end',function(){
	console.log('read to the end');
	console.log(data);
});

readStream.on('error',function(error){
	console.log('Error:',error);
});

readStream.on('finish',function(){
	conosle.log('数据写入完毕');
});

console.log('程序执行完成');
