const express = require('express');
const hbs = require('hbs');
var app =   express();
console.log(text.toUpperCase("rama"));
 app.use(express.static(__dirname + '/public'));
//app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/Views/partials');
hbs.registerHelper('getCurrentYear',() => {return  new Date().getFullYear() });
hbs.registerHelper('Capitals',(textstr)=>{return 'partial functions'});
app.set('view engine','hbs');
app.get('/',(req,res) =>{
 res.send('Hello Venkat');
});
app.get('/about',(req,res) =>{
    res.render('about.hbs',{
        Title:'about Me',
        Name:'Venkat',
        city:'Henrico',
        currentyear: new Date().getFullYear()}

   )});
   app.get('/bad',(req,res) =>{
    res.render('bad.hbs',{
        Title:'error Page',
        Message:'You are in Bad page',
        currentyear: new Date().getFullYear()}

   )});
    
app.listen(3000);