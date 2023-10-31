const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());

app.put('/:id', (req, res) => {
    const data = [req.body.name, req.body.city, req.params.id];
    
    con.query("update user SET name = ?, city = ? where id = ?", data, (err, result, fields) => {

        if(err) throw err;
        res.send(result);
        
    });
}).listen(5000);



// app.put('/', (req, res) => {
//     const data = ["Henil", "Rajkot", 5];
    
//     con.query("update user SET name = ?, city = ? where id = ?", data, (err, result, fields) => {

//         if(err) throw err;
//         res.send(result);
        
//     });
// }).listen(5000);