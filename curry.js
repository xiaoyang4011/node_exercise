var add = function (x) {
	return function (y) {
		return x + y
	}
}

var a = add(10);

console.log(a(20));
