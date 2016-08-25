var list = [12, 35, 99, 18, 76];

for(var i=0;i<list.length-1;i++) {
	for(var j=0; j< list.length -1; j++) {
		if(list[j] < list[j+1]) {
			var item = list[j];
			list[j] = list[j+1];
			list[j+1] = item;
		}
	}
}

console.log(list);
