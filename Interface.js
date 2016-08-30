var Interface = function (name, methods) {
  if (arguments.length !== 2) {
    throw new Error('Interface exactly 2 arrguments are expected')
  }
  this.name = name
  this.methods = []

  for (let i=0; i<methods.length; i++) {
    if(typeof methods[i] !== 'string') {
      throw new Error('Interface method name is expected to be passed in as a string!')
    }

    this.methods.push(methods[i])
  }
}

Interface.ensureImplements = function (o) {
  var i = 1
  var len = arguments.length

  if (len < 2) {
    throw new Error('Interface ensureImplements at least 2 arguments are expected!')
  }

  for (; i<len; i++) {
    var j = 0
    var instanceInterface = arguments[i]
    var mLen = instanceInterface.methods.length

    if(instanceInterface.constructor!==Interface){
        throw new Error('instances of Interface are expected')
    }
    for (; j<mLen; j++) {
      var mName = instanceInterface.methods[j]

      if(!o[mName] || typeof o[mName] !== 'function') {
         throw new Error("the method name" + mName + "() is not found!");
      }
    }
  }
}

var PersonInterface = new Interface('PersonInterface',['eat','drink'])
var ProgrammerInterface = new Interface('ProgrammerInterface',['coding'])

console.log(PersonInterface);
console.log(ProgrammerInterface);

var DavidImpl = function(){
   Interface.ensureImplements(this,PersonInterface,ProgrammerInterface)
}

DavidImpl.prototype.eat = function(o){
  var str = '大卫是个大胖子，一天只晓得吃'
  return str
}

DavidImpl.prototype.drink = function(o){
  var str = '大卫除了吃就是喝'
  return str
}

DavidImpl.prototype.coding = function(o){
  var str = '写代码吧，大卫'
  return str
}

var david = new DavidImpl()
console.log(david.eat())

var M2 = function(o) {
  this.eat = function(){
    return 'aaa' + o.eat()
  }
}

var m2 = new M2(david).eat()

//装饰者
console.log(m2)
