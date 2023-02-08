const http = require('http');
const express = require('express');
const templateEngine = require('express-es6-template-engine');
const { json } = require('node:stream/consumers');
const app = express();
app.engine('html',templateEngine);
app.set('views','templates');
app.set('view engine','html');

const cats = [
    {
        "id":"abys",
        "name":"absynian"
    },
    {
        "id":"abys1",
        "name":"absynian one"
    }
]

// app.use((req, res, next)=> {
//     if(req.method == 'POST' && req.header == json){
//         res.send('its POST!')
//     } else {
//         res.sendStatus(400)
//     }
//     next();
// })

app.use((req,res,next)=>{
    console.log("Time now is ",Date.now());
    console.log('This is the first line of defense. Its a middleware function.')
    next();
})

app.use('/cats',(req,res,next)=>{
    console.log('Request type is ',req.method);
    next();
})


app.get('/',(req,res)=>{
    res.render('homepage', {
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    });
})

app.get('/cats',(req,res) =>{
    res.render('catlist',{
        locals:{
            cats
        },
        partials: {
            header: 'partials/header'
        }
    });
})

app.get('/cats/:catId',(req,res) =>{
    const catId = req.params['catId'];
    const cat = cats.find(c => c.id == catId);
    res.render('catinfo',{
        locals:{
            cat
        }
    });
})

const server = http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
    console.log('Server started');
});