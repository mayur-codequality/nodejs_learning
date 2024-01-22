const express = require('express');
const app = express();

app.use(express.json());
app.get('/hello', (req, res) => {
    console.log("I AM HERE---", req.url);
  res.send(`Hello, ${req.query.person}!`);
});

app.listen(3000);