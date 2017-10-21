
// object destructuring assigns each value of a property on the right to a variable with the same name.

const useBinary = process.argv.length >= 2 && process.argv[2].toLowerCase() === 'true';

(function objectDestructuring(isBinary) {
  const binary = {kb: 1024, mb: 1048576, gb: 1073741824};
  const digital = {kb: 1000, mb: 1000000, gb: 1000000000};
  // We use a ternary statement to choose which object
  // assign properties based on their property names
  const {kb, mb, gb} = isBinary ? binary : digital;
  console.log(`kb = ${kb}, mb = ${mb}, gb = ${gb}`);
}(useBinary));

// array destructuring assigns each array element value to a variable by its position

(function arrayDestructuring() {
  let [param1, bob, key] = ['first', 2, '3rd'];
  console.info(`param1 = ${param1}, bob = ${bob}, key = ${key}`);
}());

// btw: process.argv holds the command line arguments used to invoke node
// 0 - the node executable
// 1 - the node script
// 2-n - additional arguments
process.argv.forEach((val, index) => {
  console.log(index + ': ' + val);
});


