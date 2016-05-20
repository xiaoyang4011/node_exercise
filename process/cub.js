process.on('message', function(m){
	console.log('child got message : ', m);
});
process.send({name : 'lxy'});
