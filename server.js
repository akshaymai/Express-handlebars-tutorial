var express = require('express');
var exphbs  = require('express3-handlebars');
const path=require('path')
var app = express();
app.engine('handlebars', exphbs({

    defaultLayout:'main',
    LayoutsDir:path.join(__dirname,'viwes/layouts')
}));
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
res.render('home',{
tittle:'home page',
name:'akshay maity',
age:22,
iscompleted:Boolean
});
})

app.get('/about',(req,res)=>{

    res.render('about',{
    tittle:'about page',
    discription:'hi akshay this is my discriptiomn page'


    })
})


app.get('/dashboard',(req,res)=>{
    res.render('dashboard',{

        isListEnable:true
    })
})
 app.listen(1973,()=>{

    console.log('app is running on port 1973...')
 })