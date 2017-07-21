//THis is where the functions are called
// functions are defined in handler
const handler = require("./handler")

function router(req, res) {

  if (req.url === '/') {

    handler.handleHome(req, res);

  } else if (req.url.includes('public')) {

    handler.handleHTMLCSSJS(req, res);

  } else if (req.url.includes('/search')) {

    handler.handleSearch(req, res);

  } else {

    res.writeHead(404, 'Content-Type: text/html');
    res.end('<h1>404 not found</h1>');
  }
}
module.exports = router;
