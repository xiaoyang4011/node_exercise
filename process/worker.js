const net = require('net');
process.on('message', function(m, server){
		server.listen();
		server.onconnection = function(err, handle){
		console.log('got a connection on worker, pid = %d', process.pid);
		var socket = new net.Socket({
			handle: handle
		});
		socket.readable = socket.writable = true;
		socket.end('hello js');
	}
});
