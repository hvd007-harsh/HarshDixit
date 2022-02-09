const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const exphbs = require('express-handlebars');
const user = require('./model/user.js');


app= express();
//load config
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT||500;
//Connect Db
connectDb();
//Body Parser 
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use('/public',express.static(/*path.join(__dirname +*/'public'));
app.engine('hbs',exphbs());
app.set('view engine','hbs');
app.set('views',path.join(__dirname, './views'));
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})
app.post('/contact/form',(req,res)=>{
    const User = new user({
        FirstName: req.body.FirstName,
        lastName:req.body.LastName,
        Email: req.body.Email,
        Phoneno: req.body.PhoneNo,
       });
    User.save();
    res.redirect('/form_submitted');
})
app.get('/form_submitted',(req,res)=>{
    res.render('form_submitted');
})
app.listen(PORT,(err)=>{
    console.log(err);
})
