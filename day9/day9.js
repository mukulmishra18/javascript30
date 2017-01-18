function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular 
console.log('Hello');     // Regular logging to dev console.

// Interpolated
var name = 'Mukul';
console.log(`My name is ${name}`);    // Manipulation before logging.

// Styled 
console.log('%c I am some great text', 'font-size: 30px; background: red');    // applying style before 
																			   // logging to dev console.

// Warning !
console.warn('OH NOOO');   // logs warning to console.

// Error :/
console.error('Shit!')    // Displays an error to console.

// Info
console.info('Crocodiles eats 3-4 people per year');  // logs some info to console.

// Testing
console.assert(1 === 2, 'That is wrong!!');     // check if thing are true, fires only when assertion fails.

// Clearing 
console.clear();   // clear the console.

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);   // shows the actual element.
console.dir(p);   // logs all the methods and properties associated with that DOM element.
console.clear();

// Grouping together
const dogs = [{name: 'Snickers', age: 2}, {name: 'Hugo', age: 4}];
dogs.forEach(dog => {
	console.group(`${dog.name}`);    // groups the logs between group and groupEnd.
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old.`);
	console.groupEnd(`${dog.name}`);
});

// couting
console.count('man');    // Tells how many time a word is logged.
console.count('man');
console.count('man');
console.count('lan');
console.count('lan');
console.count('lan');
console.count('lan');
console.count('man');
console.count('man');
console.count('lan');
console.count('lan');
console.count('lan');
console.count('man');
console.count('lan');
console.count('lan');
console.clear();
//timing
console.time('fetching data');      // logs the time that something takes.
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});
