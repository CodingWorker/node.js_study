//引入EventEmitter
var emitterClz=require('events').EventEmitter;

var emitter=new emitterClz();

//触发error事件
emitter.emit('error');
