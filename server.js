var express = require('express');
var exphbs  = require('express3-handlebars');
var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
res.render('home');
})

app.get('/about',(req,res)=>{

    res.render('about')
})
 app.listen(1973,()=>{

    console.log('app is running on port 1973...')
 })