function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

//timeout(2000).then((value) => {
//	console.log(value);
//});


function test1(ms) {
	var p = new Promise(function(resolve, reject){
		setTimeout(resolve, ms);
	});

	return p;
}


//test1(1000).then(function(aaa){
//	console.log('done');
//});
//
//p1 返回的是一个pending（即将发生的）Promise对象
function p1(){
	return new Promise((resolve, reject) => {});
}



//p2 返回的是一个resolve(成功的)Promise对象
function p2(){
	return new Promise((resolve, reject) => {
		resolve();
	});
}

var p7 = new Promise((resolve, reject) => {
	reject('dadadada');
});

p7.then(function(val){
	console.log(val);
}).catch(function(err){
	console.log('err')
	console.log(err)
});

//p3 返回的是一个reject（失败的）Promise对象
function p3(){
	return new Promise((resolve, reject) => {
		reject('sssss');
	});
}

function p4() {
	return new Promise((resolve, reject) => {
		reject();
	});
}

