var bf1=new Buffer('www.example.com');
var bf2=new Buffer('www.baiduxina.com');

var bf3=Buffer.concat([bf1,bf2]);

console.log(bf3.toString());
