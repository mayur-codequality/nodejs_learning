const con = require('./config');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    con.query("select * from user", (err, result) => {
        if(err) {
            res.send(err);
        }else{
            console.log(result);
            res.send(result);
        }
    })
    
});

app.listen(5000);