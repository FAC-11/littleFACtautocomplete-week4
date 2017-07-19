// function DEFINITIONS ONLY - not to be called in here
//1 function reading all files
//1 function which returns results object for a given endpoint

const fs = require('fs');
const path = require('path');
const handlers = require('./handler');

const handleHome = (request, response) => {
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

const handlePublic = (request, response, endpoint) => {
  const extension = endpoint.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  const filePath = path.join(__dirname, '..', endpoint);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(500, 'Content-Type: text/html');
      response.end("<h1> Sorry, it's not looking good, please try again.</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      //calling function(endpoint) diplays dom results
      response.end(file);
    }
  });
}




var algorithm = module.exports = {
  autocomplete: autocomplete,
  getValues: getValues
};
algorithm.serveHints = function(req, res) {
  var endpoint = req.url;
  var searchString = endpoint.split('\/search\/')[1];
  var arr = getValues(obj, 'firstname');
  var result = autocomplete(arr, searchString);
  res.writeHead(200, {
    "Content-Type": 'text/plain'
  });
  res.end(JSON.stringify(result));
};

function getValues(obj, key) {
  var arr = obj.map(a => $ {
      a.firstname.toLowerCase()
    }
    $ {
      a.surname.toLowerCase()
    });
  return arr;
}

function autocomplete(arr, searchString) {
  var autocompleteOptions = [];
  for (i = 0; i < arr.length; i++) {
    if (searchString === arr[i].slice(0, searchString.length) && autocompleteOptions.length < 10) {
      autocompleteOptions.push(arr[i]);
    }
  }
  return autocompleteOptions;
}


module.exports = {
  handleHome,
  handlePublic
  handle
}
