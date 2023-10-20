const mysql = require('mysql');
const conn  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
}
);

conn.connect((err, data) => {
    if(err){
        console.log(err.messag);
    }else{
        console.log("~~~~~~~~ Connected ~~~~~~~~~");
    }
});

conn.query('select * from user', (e, data) => {
    if (e) {
        console.log(e.message);
    } else {
        const result = JSON.stringify(data);
        console.log(result);
        
    } 
});
