var net = require('net');

var client = net.connect({port : 1111}, function(){
	console.log('connected');
	client.write('world');
});

client.on('data', function(data){
	console.log(data.toString());
	client.end();
});

client.on('end', function(){
	console.log('client end');
});
