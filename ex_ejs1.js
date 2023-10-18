const fs = require('fs');
const path = require('path');
const experss = require('express');
const app = experss();

const pulbicPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {

    const data = {'name':'smith', 'age':21};

    res.render('profile', {data});
});

app.listen(5000);
