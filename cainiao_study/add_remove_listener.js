//引入events 模块
var events=require('events');

//创建一个EventEmitter对象
var eventEmitter=new events.EventEmitter();

//监听器1
var listener1=function(){
	console.log('监听器1');
};

var listener2=function(){
	console.log('监听器2');	
};

//绑定事件/注册事件和监听器/监听事件
eventEmitter.addListener('connection',listener1);

eventEmitter.addListener('connection',listener2);

console.log('绑定事件个数:',events.EventEmitter.listenerCount(eventEmitter,'connection'));

eventEmitter.removeListener('connection',listener2);

console.log(eventEmitter.listeners('connection'));
console.log('绑定事件个数:',events.EventEmitter.listenerCount(eventEmitter,'connection'));





