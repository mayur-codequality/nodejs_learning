const con = require('./config');
const express = require('express');
const app = express();

app.use(express.json());

app.post("/", (req, res) => {

    // const data = {
    //     'name':"John",
    //     'city':"Bethleham"
    // };

    const data = req.body;

    con.query("insert into user SET ?", data, (err, result, fields) => {
        
        if (err) err;
        res.send(result);
    })
    
});

app.listen(5000);