function Person(name, age){
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		console.log('hello');
	}
}


//var person = new Person('lxy', 10);


//person.sayHello();

function Student(name, age, grade, school){
	Person.apply(this, arguments);

	this.grage = grade;
	this.school = school;
}

var s  = new Student('lxy', 10, 100, 'yx');

s.sayHello();
