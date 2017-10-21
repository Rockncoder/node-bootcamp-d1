const fs = require('fs');

(function () {
  // the Callback Pattern calls a user function once the operation completes
  // the first value is a potential error
  fs.readFile('../assets/declaration.txt', (err, content) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(`file content`, content.toString());
  });
}());