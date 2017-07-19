//THis is where the functions are called
// functions are defined in handler

const fs = require('fs');
const path = require('path');
const handlers = require('./handler');


const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === "/") {
    handler.handleHome(request, response);
  }
  else if (endpoint.indexOf('search') != -1) {
    handler.action(request, response);

  } else if (endpoint.indexOf('public') != -1) {
    handler.handlePublic(request, response, endpoint);

  } else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h1>404 not found</h1>')
  }
}

module.exports = router;
