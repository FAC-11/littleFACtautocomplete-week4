var test = require('tape');
var handler = require('../src/handler.js');
var library = require('./lib.test.js')

test('search', function(t) {
  var actual = handler.search('Fire');

  var expected = [{
    name: "FireBrick",
    hex: "#B22222"
  }];
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
test('prepareSearch', function(t) {
  var actual = handler.prepareSearch(library.object2);
  var expected = {
    results: library.object1
  };
  t.deepEqual(actual, expected, 'should return an object containing key-value pair, in which value is an empty array, if no match is found');
  t.end();
});