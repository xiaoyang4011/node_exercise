// var x = 10
//
// function fn() {
//   console.log(x)
// }
//
// function show(f) {
//   var x = 20
//
//   f()
// }
//
//
// show(fn)

function fn(){
  var max = 10

  return function(x){
    console.log(x + max)
  }
}

var max = 100

var f = fn();
f(20)
