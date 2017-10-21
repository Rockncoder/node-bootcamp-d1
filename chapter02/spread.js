// The spread operator breaks up a composite object into its component parts


(function (){
  const myArray = ['Bob', 'Sue', 'Fido', 'Joe', 'Lisa', 'Rex'];
  function printFamily(person1, person2, pet) {
    console.log(arguments);
    console.log(`Person 1: ${person1}, Person 2: ${person2}, and their pet: ${pet}`);
  }
  // the spread operate splits the array into its individual elements
  printFamily(...myArray);

  const arr = ['Alpha','Beta','Delta','Gamma', 'Epsilon'];


}());


const add = function (x = 1, y = 2) {
  return x + y;
};


console.log(`7 + 5 = ${add(7)}`);