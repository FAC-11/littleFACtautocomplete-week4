// function DEFINITIONS ONLY - not to be called in here
//1 function reading all files
//1 function which returns results object for a given url
const fs = require('fs');
const path = require('path');
const lib = require('../lib/lib.json');
//search checks if the input characters are parts of names in database. If so, as a result we will get an array of all matching names
function search(word) {
  const lowerCaseWord = word.toLowerCase();
  return lib.filter(function(colour) {
    const lowerCaseName = colour["name"].toLowerCase();
    return lowerCaseName.includes(lowerCaseWord);
  });
}
//handleSearch returns the server response with responseObject that contains an array of all matching results
var prepareSearch = function prepareSearch(req) {

  const searchWord = req.url.replace('/search/', '');
  const responseObject = {
    results: search(searchWord)
  }
  return responseObject;

}

function handleSearch(req, res) {
  res.writeHead(200, 'Content-Type: application/json');
  res.end(JSON.stringify(prepareSearch(req)));
}

// Check if the url requested is a file in the public folder
// if so, it sends it
// if not, 404

function handleHTMLCSSJS(req, res) {
  const url = req.url;

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
      res.writeHead(500, 'Content-Type: text/html');
      res.end("<h1> Sorry, it's not looking good, please try again.</h1>");
    } else {
      res.writeHead(200, `Content - Type: ${extensionType[extension]}`);
      res.end(file);
    }
  });
}

function handleHome(req, res) {
  const filePath = path.join(__dirname, '..', 'public', "index.html");

  fs.readFile(filePath, function(error, file) {
    if (error) {

      res.writeHead(500, 'Content-Type: text/html');
      res.end("<h1> Sorry, it's not looking good, please try again.</h1>");
    } else {

      res.writeHead(200, 'Content-Type: text/html');
      res.end(file);

    }
  });
}
module.exports = {
  search,
  prepareSearch,
  handleSearch,
  handleHome,
  handleHTMLCSSJS,
}
