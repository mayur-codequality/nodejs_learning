const fs = require('fs');

console.log("Hello World--------------");
fs.readFile('data.txt', '', (err, data) => {

    if(err){
        console.log(err.message);
    }else{
        console.log(data.toString());
    }
    
});

//const a = fs.readFileSync('data.txt', 'utf-8');
//console.log(a);

//fs.writeFile('data3.txt', " You are amazing!", ()=>{});
fs.writeFileSync('file4.txt', "TEST");
console.log("Hello World 2--------------");