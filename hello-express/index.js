const http = require('http'); //importing http using require

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express'); //importing express module using require
const app = express(); //calls the express function and stores the result in the app variable
const server = http.createServer(app); //creates an http server using our Express app
const db = require('./db'); //importing db JS file

app.get('/', (req, res)=>{
    res.send('hello from express')
});

app.get('/friends', (req, res)=>{
    // res.send('this will be the short friends list')
    let htmlData = `<ul>`;
    for(let friend of db){
        htmlData += `<li>${friend.name}</li>`;
    }
    htmlData += `</ul>`;
    res.send(htmlData);
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});