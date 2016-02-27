var async = require('async');


var arr = [{name:'Jack', delay: 200},
           {name:'Mike', delay: 100},
           {name:'Freewind', delay: 300}];

async.each(arr, function(item, callback) {
    console.log('1 :' + item.name);
    setTimeout(function(){
        console.log('2:' + item.name);
        callback(null, item.name);
    }, item.delay);
}, function(err) {
    console.log('3 : ' + err);
});
