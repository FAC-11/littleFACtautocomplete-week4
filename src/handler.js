// function DEFINITIONS ONLY - not to be called in here
//1 function reading all files
//1 function which returns results object for a given url

const fs = require('fs');
const path = require('path');
const handlers = require('./handler');

const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, 'Content-Type: text/html');
      response.end("<h1> Sorry, it's not looking good, please try again.</h1>");
    } else {
      response.writeHead(200, 'Content-Type: text/html');
      response.end(file);
    }
  });
}

const handlePublic = (request, response, url) => {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(500, 'Content-Type: text/html');
      response.end("<h1> Sorry, it's not looking good, please try again.</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
}



module.exports = {
  handleHomeRoute,
  handlePublic
}
