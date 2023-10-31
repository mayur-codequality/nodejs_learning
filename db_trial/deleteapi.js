const express = require('express');
const con = require('./config');
const e = require('express');
const app = express();

app.use(express.json());

app.delete('/:id', (req, res) => {

    // const data = [req.params.id];

    // con.query("delete from user where id = ?", data, (err, result, fields) => {

    //     if(err) throw err;
    //     console.log('deleted ' + result.affectedRows + ' rows');
               
    // } )

    con.query("delete from user where id = " + req.params.id, (err, result, fields) => {

            if(err) throw err;
            console.log('Operation: Deleted ' + result.affectedRows + ' rows');
            res.send(result);
                   
        } )

    
    
}).listen(5000);