var nameVar = 'Esteban';
var nameVar = 'David';
console.log('nameVar', nameVar);

let nameLet = 'Luis';
nameLet = 'Jose';
// let nameLet = 'Jose'; # Does not work
console.log('nameLet', nameLet);

const nameConst = 'Daniela';
// nameConst = "Maria" # Does not work
console.log('nameConst', nameConst);

function getPetName() {
	const petName = 'Zaira';
	return petName;
}

const petName = getPetName();
console.log(petName);
