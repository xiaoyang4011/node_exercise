var co = require('co');

function s1() {
	return new Promise((function(resolve, reject) {
		setTimeout(function(){
			resolve();
			console.log('6000ms');

		}, 6000);
	}));
}

function s2() {
	return new Promise((function(resolve, reject) {
		setTimeout (function(){
			resolve();
			console.log('3000ms');
		}, 3000);
	}));
}

function s3() {
	return new Promise((function(resolve, reject) {
		setTimeout(() => {
			resolve();
			console.log('1000ms');
		}, 1000);
	}));
}

co(function *(){
	yield [s1(), s2(), s3()];
});
