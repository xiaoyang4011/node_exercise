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

// function fn(){
//   var max = 10
//
//   return function(x){
//     console.log(x + max)
//   }
// }
//
// var max = 100
//
// var f = fn();
// f(20)

// const c = console
//
// function curry (fn) {
//   var _slice = Array.prototype.slice
//
//   var args = _slice.call(arguments, 1)
//
//   return function () {
//     var innerArgs = _slice.call(arguments)
//
//     var finalArgs = args.concat(innerArgs)
//
//     return fn.apply(null, finalArgs)
//   }
// }
//
// function add() {
//   var sum = 0;
//
//   Array.prototype.slice.call(arguments).forEach(function(item){
//     sum += item
//   })
//
//   return sum
// }
//
// c.log(curry(add, 10)(20, 30))


var uniq = function (arr) {

  let res = []
  let o = {}

  for(let i = 0; arr[i] != null; i++){
    if(!o[arr[i]]){
      res.push(arr[i])

      o[arr[i]] = true
    }
  }

  return res;
}

console.log(uniq([1,2,2,3]))
