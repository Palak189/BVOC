var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/insert',(req,res) =>{
   
    res.render('portfolio.ejs', {
        'text' : ''
    });
   
});
app.listen(8080);