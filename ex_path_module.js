const path = require('path');

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));

console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));

//console.log(path.format('/foo/bar/baz/asdf/quux.html'));

const par = path.parse('/home/user/dir/file.txt');

console.log('\n ==== PARSE METHOD ==== \n', par);

const sep = '\\home\\user\\dir\\file.txt'.split(path.sep);

console.log('\n ==== SEP METHOD ===== \n', sep);

console.log('\n ==== EXTENSIOIN METHOD ==== \n', path.extname(__filename));


console.log('\n ==== JOIN METHOD ===== \n', path.join('\\home', __dirname, path.basename(__filename)));


