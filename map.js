function Map(){
	var o = new Object();

	this.put = (k, v) => {
		o[k] = v;
	};

	this.size = () => {
		let s = 0;

		for(i in o){
			s++;
		}

		return s;
	};

	this.get = (k) => {
		return o[k] || null;
	};
}


var m = new Map();

console.log(m.size());


m.put('lxy', 200);

console.log(m.size());
console.log(m.get('lxy'));
console.log(m.get('aaa'));
