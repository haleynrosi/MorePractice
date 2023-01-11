const http = require('http');

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
    
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    const url = request.url; //will give you the url of the 
    const method = request.method; //will give you the method of request from server - whether its post or get method etc
    if(url == '/breeds'){
        if(method == 'GET'){
            response.write(JSON.stringify(cats));
            response.end();        }
    }
    response.end('Hello there url =' +url+ "method= " +method)
});

// server.listen(3000, '127.0.0.1', ()=>{
//     console.log('Server started successfully');
// })

