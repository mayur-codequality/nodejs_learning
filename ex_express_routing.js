const express = require('express');
const app = express();

app.    get('', (req, res) => {
    
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
})

app.get('/user', (req, res) => {
    console.log(req.headers.host);
    res.send(`<h1>Welcome  ${req.query.id} . </h1>
    <input type="text" value="${req.query.id}">
    `);
})  

app.listen(5000);