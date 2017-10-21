// array.from
// array.from has a lot of different uses
// create an array from - supply the length in an object and arrow
// like other array method it is passed an element and an index, but element is undefined
const instantArr = Array.from({length: 20}, (_, index) => index + 1);
console.info(instantArr);

// LAB: Create an array which starts at 5 and increments by 5 up to and including the number 100


// we can an array from a string
const codersArray = Array.from("happy coders");
console.log(codersArray);

// .entries() returns the index and the element of each array item

for (let [index, elem] of codersArray.entries()) {
  if (index === 5) {
    break;
  }
  console.log(`${index}. ${elem}`);
}
console.log(``);

// unlike forEach, continue and break work
for (let [index, elem] of codersArray.entries()) {
  if (index === 5) {
    continue;
  }
  console.log(`${index}. ${elem}`);
}
