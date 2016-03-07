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

function f4(){
	var n = 999;

	function f5(){
		console.log(n);
	}

	return f5;
}

var ret = f4();

ret();
