const express = require('express');
const app = express();
const mware = require('./mymiddleware');

// Applied on Application Level
//app.use(mware);


// For Group Level
const route = express.Router()
route.use(mware);

app.get('', (req, res) => {
    res.send("Welcome!");
});

// Route Level
app.get('/user', mware, (req, res) => {
    res.send("Your are authorized! ",);
});

route.get('/about', (req, res) => {
    res.send("About Us",);
});

route.get('/contact', (req, res) => {
    res.send("Contact Us",);
});

app.use('/', route);

app.listen(5000);