

function* f() {
	for(let i=0; true; i++) {
		let ret = yield i

		if(ret) { i = -1}
	}
}

var f = f()

console.log(f.next())  //{ value: 0, done: false }
console.log(f.next())  //{ value: 1, done: false }
console.log(f.next(true)) //   ?
