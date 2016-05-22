var net = require('net');

var server = net.createServer(function(socket) {

	socket.on('data', function(data){
		console.log(data);
		socket.write('nihao');
	});

	socket.on('end', function(){
		console.log('断开连接');
	});

	socket.write('欢迎啊啊啊啊啊');
});

server.listen(1111, function(){
	console.log('server bound');
});
