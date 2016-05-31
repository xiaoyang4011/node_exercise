function add(a, b){
	return a + b;
}

function calladd(a, b){
	return add.call(this, a, b);
}

function applyadd(a ,b){
	return add.apply(this, [a ,b]);
}

console.log(calladd(1, 2));

console.log(applyadd(2, 3));
