/*
var n = 999;

function f1(){
	console.log(n);
}

f1();

function f2(){
	var n = 999;
}

console.log(n);


function f3(){
	n = 999;
}

f3();

console.log(n);

*/

function curry(fn) {
	var _slice = Array.prototype.slice;

	var arg1 = _slice.call(arguments, 1);

	console.log(arg1);

	return function(){
		var arg2 = _slice.call(arguments);

		var final_args = arg2.concat(arg1);

		console.log(final_args);
		return fn.apply(null, final_args);
	};
}

function add(a, b, c){
	return a + b + c;
}

console.log(curry(add, 5)(15, 20));
