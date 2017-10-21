
// a buffer is a lot like a string but...
const buffer1 = new Buffer('Hello World!');
console.log(`buffer1 = ${buffer1}`);
console.log(`as base64 = ${buffer1.toString('base64')}`);

// one of the security changes for node 8 is that buffers are zeroed on creation
const buffer2 = new Buffer(1024);
console.log(`at position 512 = ${buffer2[512]}`);

