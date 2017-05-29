//定义一个模块
function Hello(){
	this.Name='hello';
	this.sayHello=function(name){
		console.log('hello '+name);
	}
}

module.exports.Hello=Hello;
