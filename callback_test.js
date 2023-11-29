// const add = () => {
//     console.log("TEST"); 
// }

// add();
const fs = require('fs');
const fileData = fs.readFileSync('data.txt');
const obj = JSON.parse(fileData);
console.log(obj)

console.log("Start execution");
const buf = Buffer.from(JSON.stringify(fileData));
console.log(buf);
console.log("End of Program execution");

