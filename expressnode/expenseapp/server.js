const http = require('http'); //require is set up to require specific things in node
const express = require('express');
// const axios = require('axios');
const app = express();
// app.use(express.json()); // when you do a post you use JSON format
const pgp = require('pg-promise');
const pgPromise = pgp();
const dbConnection = pgPromise('postgres://postgres:RositaAcres6214!@localhost:5432/postgres'); 


// let callCount =0;
// app.use('/',(req, res, next)=>{
//     if(req.method == 'GET' || 'POST') {
//         callCount+=1;
//     } 

//     if(callCount>10){
//         return res.status(429).send("error: exceeded call limit")
//     }

//     next();
// })

// app.use((req, res, next)=>{
//     if(req.method == 'POST' && req.headers['content-type'] != 'application/json'){
//         return res.status(400).send({error:'Content-Type must be set to application/json'});
//     }
//     next();
// })

// app.use((req,res,next)=>{
//     const userIp = req.ip; 
//     console.log(userIp)
//     axios.get(`https://ipapi.co/${userIp}/json`)
//     .then(response => {
//         const countryCode = response.data.country_code;
//         if(countryCode !== "US"){
//             return res.status(401).send({ error: 'You must be in the US to see this.'})
//         }
//         next();
//     })
// })

app.get('/categories', (req, res) => {
    dbConnection.any('select * from expenseapp.expensecategories').then((categories)=>{
        console.log(categories)
        res.send('')
    })
})

app.get('/expenses',(req, res)=>{
    dbConnection.any('select * from expenseapp.expenses').then((expenses)=>{
        console.log(expenses)
        res.send('')
    })
})

app.get('expenses/:expenseId', ()=> {
    const expenseId = req.params['expenseId'];
    console.log(expenseId)
})

app.post('/categories', (req, res)=> {
    res.send("posted!")
})

const server = http.createServer(app);
server.listen(3000, '127.0.0.1', ()=> {
    console.log('Server started')
})