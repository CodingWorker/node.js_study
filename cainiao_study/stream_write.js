//引入fs模块
var fs=require('fs');

//构建被写入数据
var data='百度网：www.baidu.com';

//创建写入流
var writeStream=fs.createWriteStream('f:/temp.txt');

//写入数据
writeStream.write(data,'utf-8');

//标记写入结束
writeStream.end();

//注册/绑定/监听 error finish 事件
writeStream.on('error',function(error){
	console.log(error);
});

writeStream.on('finish',function(){
	console.log('write finish');
});


console.log('程序执行完成');
