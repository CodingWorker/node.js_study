//引入mongodb模块
var mongodb=require('mongodb');

//创建client
var mongoClient=mongodb.MongoClient();

//连接套接字，选在test数据库
var dbConn_str='mongodb://localhost:27017/test';

var insertData=function(db,callback){
	//连接到test集合
	var clct=db.collection('test');

	//构造插入数据
	var data=[{'name':'baidu.com'},{'name':'sina.com'}];

	clct.insert(data,function(error,result){
		if(error){
			console.log('Error:',error);
			return;
		}

		callback(result);
	});
}

//连接数据库
mongoClient.connect(dbConn_str,function(error,db){
	console.log('连接成功');
	insertData(db,function(result){
		console.log(result);
	});


	db.close();
});
