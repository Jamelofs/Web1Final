const express = require('express');
const router = express.Router();
const app = express();
const PORT = 3000;
const fs = require("fs");
const moment = require("moment")
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('', (req, res) => {
    res.render('index');
   });
app.use(express.urlencoded({ extended: true }));


app.use('/character', router.get('*', (req, res) => {
    res.render('charactersheet'); 
  }));


app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});

