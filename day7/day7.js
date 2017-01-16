const pepole = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 52347 },
	{ text: 'Super good', id: 82349 },
	{ text: 'You are the best', id: 89643 },
	{ text: 'Ramen in my fav food ever', id: 13423 },
	{ text: 'Nice Nice Nice!', id: 94384 }
];

// Some and Every check
// Array.prototype.some() ----> is at least one person 19?

const isAdult = pepole.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log({isAdult});

// Array.prototype.every() -----> is everyone 19?

const isEveryAdult = pepole.every(person => (new Date()).getFullYear - person.year >= 19);
console.log({isEveryAdult});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for 
// Find the comment with the ID of 82349
const comment = comments.find(comment => comment.id === 82349);
console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 82349

const index = comments.findIndex(comment => comment.id === 82349);
const newComments = [
	...comments.slice(0, index),
	...comments.slice(index + 1)
];

console.table(newComments);
