//引入evets模块
var events=require('events');

//创建EventEmitter对象
var eventEmitter=new events.EventEmitter();

//监听事件，也就是创建事件监听器或者说是注册事件
eventEmitter.on('someEvent',function(arg1,arg2){
	console.log('listen1',arg1,arg2);
});

//在同一事件上创建第二个监听器
eventEmitter.on('someEvent',function(arg1,arg2){
	console.log('listen2',arg1,arg2);
});

//触发someEvent事件,并传递参数
eventEmitter.emit('someEvent','arg1参数','arg2参数');

//输出监听器的数量
console.log('监听器数量:',events.EventEmitter.listenerCount(eventEmitter,'someEvent'));
