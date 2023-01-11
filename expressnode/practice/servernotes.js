const http = require('http'); // calls http library

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => { // createServer literally creates the server and takes 2 parameters (req: request, res: response).
    res.statusCode = 200;
    res.setHeader("Constent-Type", "text/plain"); // sets header to the res/response
    res.end('Hello World'); // sets the content of the res/response
});

server.listen(port, hostname, () => { // listens for the correct port and hostname
    console.log(`Server running at http://${hostname}:${port}/`);
});