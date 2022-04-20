const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, "views")));


// mongoose.connect('mongodb://localhost:27017/cyber_range',
// {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }
// );

// const db = mongoose.connection;

// db.on("error", console.error.bind(console,"connection error :"));
// db.once("open",()=>{
//     console.log("DB Connected on 27017.............");
// })




app.get('/',(req,res)=>{
    res.redirect('/Login');
})

app.get('/Login',(req,res)=>{
    res.render('Signup');
})

app.get('/Home',(req,res)=>{
    res.render('Home');
})

app.get('/team',(req,res)=>{
    res.render('team');
})

app.get('/team/new',(req,res)=>{
    res.render('team_views/newTeam');
})


app.get('/challenge/web/flagCheck',(req,res)=>{
    res.render('team_views/newTeam');
})

app.get('/Scoreboard',(req,res)=>{
    res.render('scoreboard');
})

app.get('/Profile',(req,res)=>{
    res.render('profile');
})

app.get('/Challenge',(req,res)=>{
    res.render('challenges_page');
})

app.get('/Sqli',(req,res)=>{
    res.render('particular_challenge');
})

app.get('/done',(req,res)=>{
    res.render('done');
})

app.listen(4000,()=>{
    console.log("LISTENING ON PORT 4000..........");
})

