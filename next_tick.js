setTimeout(function(){
	console.log('set time out');
}, 1000);

console.log('log');


process.nextTick(function(){
	console.log('next tick')
});

console.log('logt');
