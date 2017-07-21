var test = require('tape');
var index = require('../public/indextestable.js');

//test cleanInput function
test('cleanInput', function(t) {
  var actual = index.cleanInput("apples1234_+/");
  var expected = "apples";
  t.equal(actual, expected, 'should return a string with all non alphabetical characters removed');
  t.end();
});
test('cleanInput', function(t) {
  var actual = index.cleanInput("aPPles");
  var expected = "apples";
  t.equal(actual, expected, "should return a string with all lower case characters");
  t.end();
});

// test urlBuilder function concatenates

test('urlBuilder', function(t) {
  var actual = index.urlBuilder("apples");
  var expected = "http://localhost:4000/" + "search/" + "apples";
  t.equal(actual, expected, 'should concatenate');
  t.end();
});
