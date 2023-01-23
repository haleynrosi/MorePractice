const http = require('http');
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer); // method within express that tells what kind of rendering engine you are going to use- through html rendering
app.set('views', 'templates');
app.set('view engine', 'html');
app.get('/', (req, res)=> {
    res.render('home')
});

app.get('/friends', (req, res)=> {
    res.render('friend')
});

app.get('friends/:handle', (req, res)=>{
    const {handle} = req.params;
    const friend = db.find
})

const server = http.createServer(app)

server.listen(3000,()=>{

});

