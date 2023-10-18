const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/apple.txt`;

//console.log(filePath);
//fs. writeFileSync(filePath, " This is an apple watch! ");


// Read Content from File
fs.readFile(filePath, 'utf-8', (err,content) => {
    if(!err) console.log(content);
})

// Append Content to File
fs.appendFile(filePath, 'I am appended Text', (err) => {
    if(!err) console.log('File Updated!') 
});

// Rename File
fs.rename(filePath, `${dirPath}/carrot.txt`, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
})

