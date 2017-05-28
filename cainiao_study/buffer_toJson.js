var bf=new Buffer(256);
bf.write('www.example.com','utf-8');

var bfJson=bf.toJSON();

console.log('toJSON:',bfJson);
