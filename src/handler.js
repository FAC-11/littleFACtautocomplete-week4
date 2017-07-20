// function DEFINITIONS ONLY - not to be called in here
//1 function reading all files
//1 function which returns results object for a given url

const fs = require('fs');
const path = require('path');

// const handleHomeRoute = (request, response) => {
//   const filePath = path.join(__dirname, '..', 'public', 'index.html');
//
//   fs.readFile(filePath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(500, 'Content-Type: text/html');
//       response.end("<h1> Sorry, it's not looking good, please try again.</h1>");
//     } else {
//       response.writeHead(200, 'Content-Type: text/html');
//       response.end(file);
//     }
//   });
// }
//
// const handlePublic = (request, response, url) => {
//   const extension = url.split('.')[1];
//   const extensionType = {
//     html: 'text/html',
//     css: 'text/css',
//     js: 'application/javascript',
//     ico: 'image/x-icon'
//   };
//   const filePath = path.join(__dirname, '..', url);
//   fs.readFile(filePath, function(error, file) {
//     if (error) {
//       console.log(error);
//       response.writeHead(500, 'Content-Type: text/html');
//       response.end("<h1> Sorry, it's not looking good, please try again.</h1>");
//     } else {
//       response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
//       response.end(file);
//     }
//   });
// }

const database = [
  {
    name: 'Tom',
    description: 'some description',
  },
  {
    name: 'Bob',
    description: 'some description',
  },
  {
    name: 'Rob',
    description: 'some description',
  },
  {
    name: 'Finn',
    description: 'some description',
  },
]
//search checks if the input characters are parts of names in database. If so, as a result we will get an array of all matching names
function search(word) {
  const lowerCaseWord = word.toLowerCase();

  return database.filter(function(person){
    const lowerCaseName = person.name.toLowerCase();
    return lowerCaseName.includes(lowerCaseWord);
  })
}
//handleSearch returns the server response with responseObject that contains an array of all matching results
function handleSearch(req,res) {
  const searchWord = req.url.replace('/search/','')
  const responseObject = {
    results: search(searchWord)
  }

  res.writeHead(200, 'Content-Type: application/json');
  res.end(JSON.stringify(responseObject));
}

// Check if the url requested is a file in the public folder
// if so, it sends it
// if not, 404
function handleHTMLCSSJS(req,res) {
  let url = req.url

  // Serve index if nothing specified
  if (url === '/') {
    url = 'index.html'
  }

  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  const filePath = path.join(__dirname, '..', '/public', url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      res.writeHead(404, 'Content-Type: text/html');
      res.end("<h1>404 not found.</h1>");
    } else {
      res.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      res.end(file);
    }
  });
}
module.exports = {
  handleSearch,
  handleHTMLCSSJS,
}
