//creating server in here only

const http = require('http');
const path = require('path');
const fs = require('fs');
const router = require('./router');


const port = 4000;
const server = http.createServer(router).listen(port);

console.log(`server is running on localhost:${port}`);
