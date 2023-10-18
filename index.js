const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const pulbicPath = path.join(__dirname, 'public');
//console.log(pulbicPath);
// Used only for static pages
//app.use(express.static(pulbicPath));

const homeFile = `${pulbicPath}/home.html`;

app.get('', (req, res) => {
    res.sendFile(homeFile);
});

app.get('/about', (req, res) => {
    res.sendFile(`${pulbicPath}/about.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${pulbicPath}/error.html`);
});


app.listen(5000);

