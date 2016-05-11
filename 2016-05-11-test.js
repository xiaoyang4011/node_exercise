class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString () {
		return this.x + ',' + this.y;
	}
}

var p = new Point(2,3);

console.log(p.toString());


class ColorPoint extends Point {
	constructor(x, y, color){
		super(x, y);
		this.color = color;
	}

	toString () {
		return super.toString()+ this.color;
	}
}

var cp = new ColorPoint(2, 4, 'green');

console.log(cp.toString());
