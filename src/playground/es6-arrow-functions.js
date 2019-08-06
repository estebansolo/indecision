function square(x) {
	return x * x;
}

console.log(square(2));

const squareArrow = (x) => {
	return x * x;
};

console.log(squareArrow(5));

const squareArrowB = (x) => x * x;
console.log(squareArrowB(5));

// arguments object - no longer bound with arrow functions

const add = function(a, b) {
	console.log(arguments);
	return a + b;
};

console.log(add(55, 1, 100));

// this keyword - no longer bound

const user = {
	name: 'Esteban',
	age: '25',
	cities: [ 'Armenia', 'Cartagena', 'Bogota' ],
	printInfo: function() {
		console.log(this.age);
		console.log(this.name);

		// Option A
		const that = this;
		this.cities.forEach(function(city) {
			console.log(that.name + ' has visited ' + city);
		});

		// Option B
		this.cities.forEach((city) => {
			console.log(this.name + ' has visited ' + city);
		});
	}
};

user.printInfo();
