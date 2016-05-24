const net = require('net');
process.on('message', function(m, handle){
	console.log('got a connection on work , pid = %d', process.pid);

	var socket = new net.Socket({
		handle : handle
	});

	socket.end('hello world');
});
