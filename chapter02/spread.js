// The spread operator breaks up a composite object into its component parts


(function (){
  const myArray = ['Bob', 'Sue', 'Fido'];
  function printFamily(person1, person2, pet) {
    console.log(`Person 1: ${person1}, Person 2: ${person2}, and their pet: ${pet}`);
  }
  // the spread operate splits the array into its individual elements
  printFamily(...myArray);
}());