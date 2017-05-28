//引入events
var events=require('events');

//创建Emitter对象
var eventEmitter=new events.EventEmitter();

//监听事件
eventEmitter.on('some_event',function(){
	console.log('some_event 事件触发');
});

setTimeout(function(){
	//触发事件
	eventEmitter.emit('some_event');
},1000);
