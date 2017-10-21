// mfr - map, filter, reduce


const junk = [1, 2, 3, 4, 'Alpha', 5, {name: 'Jason'}];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numbers);

// MAP
// iterates over all of the elements and returns a new array with the same number of elements
const times2 = numbers.map((element, index, arr) => {
  console.log(`el=${element} ndx=${index}, array=${arr}`);
  return element * 2
});
console.log(times2);

// FILTER
// iterates over the array and returns a new array with only the elements that pass the test
 const evenOnly = numbers.filter(element => !(element % 2)); 
console.log(evenOnly);

// REDUCE
const letters2 = letters.reduce((previous, current) => previous + current);
console.log(letters2);

let letters3 = letters.reduceRight((previous, current) => previous + current); 
console.log(letters3);

// create a map function to divide by 2
const div2 = numbers.map((element) => element / 2);
console.log(div2);



// create a filter which displays the odd numbers
const oddOnly = numbers.filter(element => (element % 2));
console.log(oddOnly);

