// Method 1:
const fs = require('fs');
fs.writeFileSync("hello.txt", 'Hello World!');

// Method 2:
const fs1 = require('fs').writeFileSync;
fs1("hello1.txt", 'Hello World1!');


console.log(__filename);  // D:\NODE_LEARNING\ex_fs.js
console.log(__dirname); // D:\NODE_LEARNING
