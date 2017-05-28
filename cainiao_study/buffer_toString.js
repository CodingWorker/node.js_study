//创建一个buffer
var bf=new Buffer(256);

//向缓冲区写入数据
var writeLen=bf.write('http://www.example.com中文','utf-8');

//读取缓冲区的数据为字符串
var bfStr=bf.toString('utf-8');

console.log('get from buffer:',bfStr);

