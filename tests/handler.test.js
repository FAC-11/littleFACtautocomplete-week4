var test = require('tape');
var handler = require('../src/handler.js');
var library = require('./lib.test.js')

test('search', function(t) {
  var actual = handler.search('Fire');
  var expected = [{hex: "#B22222", name: "FireBrick" }];
  t.deepEqual(actual, expected, 'should return an array of objects');
  t.end();
});

test('search', function(t) {
  var actual = handler.search('Deep');
  var expected = library.object1;
  t.deepEqual(actual, expected, 'works for multiple search results');
  t.end();
});
test('search', function(t) {
  var actual = handler.search('hello');
  var expected = [];
  t.deepEqual(actual, expected, 'should return an empty array if there no match is found');
  t.end();
});
// test('prepareSearch', function(t) {
//  //var req.url = "/search/hello";
//   var actual = handler.prepareSearch("localhost:4000/search/hello");
//   var expected = {results: []};
//   t.deepEqual(actual, expected, 'should return an object containing key-value pair, in which value is an empty array, if no match is found');
//   t.end();
// });
