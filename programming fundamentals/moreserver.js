const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(res.getHeader('Content-Type'))
    res.end('hello world')
});

server.listen(3000, ()=>{

})