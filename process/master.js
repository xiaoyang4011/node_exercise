var child = require('child_process').fork('./child.js');

var child2 = require('child_process').fork('./child2.js');

var server = require('net').createServer();

server.listen(1111, function(){
	child.send('server', server);
	child2.send('server', server);
});
