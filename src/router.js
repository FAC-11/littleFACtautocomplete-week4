//THis is where the functions are called
// functions are defined in handler

const fs = require('fs');
const path = require('path');
const handlers = require('./handler')

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    handlers.handleHomeRoute(request, response);
  } else if (url.indexOf('public') != -1) {
    handlers.handlePublic(request, response, url);

  } else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h1>404 not found</h1>')
  }
}

module.exports = router;
