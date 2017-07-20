//THis is where the functions are called
// functions are defined in handler


const handlers = require("./handler")

function router(req, res) {

  if (req.url.includes('/search')){
    return handlers.handleSearch(req,res)
  }
 else if (req.url === "/" || req.url.includes('public')) {
  return handlers.handleHTMLCSSJS(req,res)
}
  res.writeHead(404, 'Content-Type: text/html');
  res.end('<h1>404 not found</h1>')
}
module.exports = router;
