var server=require('./server');

var router=require('./router2');

server.start(router.route);
