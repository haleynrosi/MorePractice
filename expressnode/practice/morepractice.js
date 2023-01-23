const http = require('http');


const server = http.createServer((req, res)=>{
    const {url} = req;
    console.log(`This is the URL: ${url}`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello there')
}); 

server.listen(3000, '127.0.0.1', ()=>{

});