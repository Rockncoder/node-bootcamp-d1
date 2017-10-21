// Let allows us to create block scoped variables
// these variables live in die within curly braces, ones can even be created for them


// btw: This kind of function is called an Immediately Invoked Function Expression or IIFE pronounced like "iffy"
(function demoLet() {
  let val = 2;
  console.log(`val = ${val}`);
  {
    // keep in mind that this would be a bad code smell
    let val = 42;
    console.log(`val = ${val}`);
  }
  console.log(`val = ${val}`);
}());


// also it is not necessary for these IIFEs to have names
(function demoConst() {
  try {
    const name = "Troy";
    console.log(`Your name is ${name}.`);
    // This reassignment won't work, it will trigger an exception
    name = 'Miles';
  } catch (err) {
    // using console.error will print the error and the stack trace
    console.error(err);
  }
}());


// also it is not necessary for these IIFEs to have names
(function demoConstObjects() {
  try {
    const name = {
      first:"Troy",
      last: "Myles"
    };
    console.log(`Your name is ${name.first} ${name.last}.`);
    name.last = 'Miles';
    console.log(`Your name is ${name.first} ${name.last}.`);
  } catch (err) {
    console.error(err);
  }
}());