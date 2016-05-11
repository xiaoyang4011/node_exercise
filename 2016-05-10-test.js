var a = new Object();
var b = a;

a.name = 'lxy';

console.log(b);

var c = 'ccc';
var d = c;

c = 'ddd';

console.log(d);
