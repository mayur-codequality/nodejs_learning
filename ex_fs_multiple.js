const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

console.log(dirPath);

for (let index = 1; index <= 5; index++) {
    //const element = array[index];

    //fs.writeFileSync(dirPath+`/file${index}.txt`, "Hello");
    
}

fs.readdir(dirPath, (err, files) => {
    //console.warn(files);

    files.forEach((file) => {
        console.log(file)
    });
})