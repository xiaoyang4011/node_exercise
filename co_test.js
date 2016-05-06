var co = require('co');

function sayHello() {
	return Promise.resolve('hello').then(function(hello) {
		console.log(hello);
	});
}

function sayWorld() {
	return Promise.resolve('world').then(function(world) {
		console.log(world);
	});
}

co(function *(){
	yield sayHello();
	yield sayWorld();
});
