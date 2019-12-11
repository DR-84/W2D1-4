//A
//B

// zet de functie om naar een arrow functie
const ikRockArrowFunctions = () =>
	console.log('Joe, ik rock de arrow functions!');

ikRockArrowFunctions();

//C

() => 1 + 2;

//D

let a = 8;
let b = 15;
/*
const myFunction = function(a, b) {
	return a + b;
};
console.log(myFunction(a, b));
*/

const myFunction = (a, b) => a + b;
//console.log(myFunction(6, 9));

//D

const addFive = a => a + 5;
console.log(addFive(5));
