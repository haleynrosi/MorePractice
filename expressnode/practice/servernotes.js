const http = require('http'); // calls http library - internal http library required for the server

const hostname = "127.0.0.1"; //localhost, assigned to every system, its the default localhost
const port = 3000; //port number 3000 - nothing but an avenue by which a request can enter your server - entry point

const server = http.createServer((req, res) => { // createServer literally creates the server and takes 2 parameters (req: request, res: response).
    res.statusCode = 200;
    res.setHeader("Constent-Type", "text/plain"); // sets header to the res/response
    res.end('Hello World'); // sets the content of the res/response //response.end() makes sure the response comes back
});

server.listen(port, hostname, () => { // listens for the correct port and hostname
    console.log(`Server running at http://${hostname}:${port}/`);
});