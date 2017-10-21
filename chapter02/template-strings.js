(function () {
  const state = 'California';
  const city = 'Torrance';
  console.log(`This boot camp is in ${city}, ${state}`);

  // template strings can run simple JS expressions
  const vanilla = 2.5;
  const chocolate = 1.0;
  const strawberry = 1.5;
  console.log(`We have a total of ${vanilla + chocolate + strawberry} gallons of ice cream.`);

  // They allow us to create multi line strings
  // Keep in mind that the CRLF will be embedded in the string
  console.log(`This is line #1
  this is line #2.`);

  // if you split the line due to its width, how would you join it back together as a single output string?
}());