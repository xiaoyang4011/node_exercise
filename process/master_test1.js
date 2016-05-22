const net = require('net');
const fork = require('child_process').fork;

var handle= net._createServerHandle('0.0.0.0', 3000);

for(let a =0; a < 4; a++){
	fork('./worker.js').send({}, handle);
}

