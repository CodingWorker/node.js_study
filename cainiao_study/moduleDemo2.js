//引入Hello模块
var hello=require('./m_hello2');
var h=new hello.Hello();

console.log(h.Name);
h.sayHello('Daniel');
