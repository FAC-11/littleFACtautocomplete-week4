//creating server in here only

const http = require('http');
const path = require('path');
const fs = require('fs');
const router = require('./router');


// Takes a word and search for it in the database
// Returns an array of all matching results
// Search is case insensitive
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;


const server = http.createServer(router).listen(port);

console.log(`server is running on localhost:${host} ${port}`);
