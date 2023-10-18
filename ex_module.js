// Import/Export Example
const { profileEnd } = require('console');
const app = require('./app');
console.log(app.x, app.z());

// Filter function
const arr = [13,5,64,6,32,2,7];
let res = arr.filter((i)=>{
    if(i<=10){
       return i;
    }
});

console.log(res);

console.log([
    
    //process.versions,
    process.arch,
    //process.config,
    process.platform,
    //process.env['USERNAME'],
    process.execPath,
    
]);