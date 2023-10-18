const express = require('express');
const app = express();

app.    get('', (req, res) => {
    
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
})

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(`<h1>Welcome  ${req.query.name} </h1>
    <input type="text" value="${req.query.name}">
    `);
})  

app.listen(5000);