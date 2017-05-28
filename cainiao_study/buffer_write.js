//创建一个buffer实例
var bf=new Buffer(256);

//写入一个字符串
var writeLen=bf.write('www.example.com');

console.log('写入的字节数:',writeLen);
