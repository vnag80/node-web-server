const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app =   express();
var port = process.env.PORT || 3000
 
 app.use(express.static(__dirname + '/public'));
 console.log(__dirname + '/public');
 console.log(__dirname);
 console.log(__dirname + '/Views/partials')
//app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/Views/partials');
hbs.registerHelper('getCurrentYear',() => {return  new Date().getFullYear() });
hbs.registerHelper('Capitals',(textstr)=>{return 'partial functions'});
app.set('view engine','hbs');
//app.use((req,res,next)=>{
//    res.render('main.hbs');
    
//})
//app.use((req,res,next)=>{
  //  console.log(req.url);
  //  fs.appendFileSync('sitelog.txt',req.method + new Date().toString());
  //  console.log(new Date().toString());
 //   next();
//})
app.get('/',(req,res) =>{
    res.render('Home.hbs',{
        Title:'about Me',
        currentyear: new Date().getFullYear()})
});
app.get('/projects',(req,res) =>{
    res.render('projects.hbs',{
        Title:'about Me',
        currentyear: new Date().getFullYear()})
});
app.get('/about',(req,res) =>{
    res.render('about.hbs',{
        Title:'about Me',
        Name:'Venkat',
        city:'Henrico',
        currentyear: new Date().getFullYear()}

   )});
   app.get('/',(req,res) =>{
    res.render('bad.hbs',{
        Title:'error Page',
        Message:'You are in Bad page',
        currentyear: new Date().getFullYear()}

   )});
    
app.listen(port);