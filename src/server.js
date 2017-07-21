//creating server in here only

const http = require('http');
const router = require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router).listen(port);

console.log(`server is running on localhost:${host} ${port}`);
