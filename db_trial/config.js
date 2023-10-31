const mysql = require('mysql');
const con = mysql.createConnection(

    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'

    }


);

con.connect((err) => {
    //if(!err) console.log("Connected Successfully!");
    //else console.log(err.message);
    if(err) console.log(err.message);
});

module.exports = con;
