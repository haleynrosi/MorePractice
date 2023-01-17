const http = require('http');

const express = require('express');
const app = express();
app.use(express.json()); // you have to put this when doing a POST request with express

const cats = [
    {
        "id":"abys",
        "name": "Abyssinian Cat"
    },
    {
        "id": "bob",
        "name": "Bob cat"
    }
]

app.get('/breeds', (req, res) =>{
    console.log(req.headers);
    res.send(JSON.stringify(cats))
})

app.get('/breeds/:breedId',(req, res)=> {
    const catBreedId = req.params['breedId'];
    console.log(catBreedId);
    // for(let i=0; i<cats.length; i++){
    //     if(catBreedId == cats[i].id){
    //         res.send(JSON.stringify(cats[i]))
    //     }
    // }

    // THIS DOES THE SAME AS THE FOR LOOP COMMENTED OUT ABOVE
    const catToLookFor = cats.find(c=> c.id == catBreedId);
    if(catToLookFor){
        res.send(JSON.stringify(catToLookFor)) 
    } else {
        res.status(404).send('Breed not found');
    }

})

app.delete('/breeds/:breedId', (req, res) => {
    const catBreedId = req.params['breedId'];
    const catToLookFor = cats.findIndex(c => c.id == catBreedId);
    if(catToLookFor != -1) {
        cats.splice(catToLookFor, 1);
        res.send('Breed deleted successfully'); 
    } else {
        res.status(404).res.send('Breed not found'); 
    }
    
})


const server = http.createServer(app);
//     (request, response)=>{
//     response.statusCode = 200;
//     const url = request.url;
//     const method = request.method;
//     if(url == '/breeds'){
//         if(method == 'GET'){
//             response.write = JSON.stringify(cats);
//             response.end(JSON.stringify(cats));
//         }
//     }
//     // response.end("hey there url ="+url+ " method =" +method);

// });



server.listen(3000, '127.0.0.1', ()=>{
    console.log("server loaded successfully")
})