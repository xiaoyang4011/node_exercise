function unqiue(arr) {
	var res = [];
	var log = {};

	for(i=0; arr[i] != null; i++){
		if(!log[arr[i]]){
			res.push(arr[i]);
			log[arr[i]] = true;		
		}
	}

	return res;
}

var a = [1,2,3,4,1];

console.log(unqiue(a));
