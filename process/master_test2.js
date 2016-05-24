const net = require('net');
const fork = require('child_process').fork;

var workers = [];

for(let i = 0; i < 4; i++) {
	workers.push(fork('./worker1.js'));
}

var serverHandle = net._createServerHandle('0.0.0.0', 3000);
serverHandle.listen();

serverHandle.onconnection = function(err, handle) {
	var worker = workers.pop();
	worker.send({}, handle);
	workers.unshift(worker);
}
