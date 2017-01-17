const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1864, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }		
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Backett, Samule', 'Beddos, Meck', 'Beecher, Henry', 
	'Beethoven, Loodvic', 'Begin, Meenhem', 'Belloc, Hellarie', 'Bellow, Saul', 'Benchley, Robert', 
	'Benenson, Peter', 'Ben-Gurion, David', 'Bejamin, Wlater', 'Ben, Tony', 'Bennington, Chestor', 
	'Benson, Lenna', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Berman, Igman', 'Berio, Luciano', 
	'Berle, Milton', 'Berlin, Irving', 'Bernie, Eric', 'Bernhard, Sendra', 'Berra, Yogi', 'Berry, Helle',
	'Berry, Windle', 'Bethan, Eric'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fistAndLastName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fistAndLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => (a.year - b.year));
console.table(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors lives
const totalYears = inventors.reduce((total, inventor) => (total += (inventor.passed - inventor.year)), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const sortInv = inventors.sort((a, b) => ((a.passed - a.year) - (b.passed - b.year)));
console.table(sortInv);

// 6. Sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
	const [aLast, aFirst] = a.split(', ');
	const [bLast, bFirst] = b.split(', ');
	return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 7. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
 			'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce((obj, item) => {
	if(!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.log(transport);
