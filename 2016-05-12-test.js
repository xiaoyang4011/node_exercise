var profiler = require('profiler');

profiler.resume();

var a = {};

console.log(a);

profiler.pause();
