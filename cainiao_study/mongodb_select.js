//引入mongodb模块
var mongo=require('mongodb');

//创建client
var mongoClient=mongo.MongoClient();

//构造连接套接字并连接到test数据库
var dbConn_str='mongodb://localhost:27017/test';

var selectData=function(db,callback){
	//连接到test集合
	var clcn=db.collection('test');
	var where={"name":"baidu.com"};

	//select data from mongodb
	clcn.find(where).toArray(function(error,data){
		if(error){
			console.log('Error:',error);
			return;
		}

		callback(data);
	});
}

//连接
mongoClient.connect(dbConn_str,function(error,db){
	if(error){
		console.log('Error:',error);
		return;
	}	

	console.log('连接成功');
	
	selectData(db,function(data){
		console.log(data);
	});

	db.close();
});
