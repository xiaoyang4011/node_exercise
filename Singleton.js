function MyClass () {
	if(!(this instanceof MyClass)) {
		console.log('11111111');
		return new MyClass();
	}
}

console.log(MyClass());

console.log(MyClass());
