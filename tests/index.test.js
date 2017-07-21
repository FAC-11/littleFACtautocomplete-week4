var test = require('tape');
//urlBuilder creates the url using the clean user input
var index = require('../public/index');

test('urlBuilder: it should build the URL string', function(t) {
  var actual = index.urlBuilder('apple');
  var expected = "http://localhost:4000/" + "search/" + 'apple';
  t.equal(actual, expected, 'should return a new string');
  t.end();
});




// var test = require('tape');
// var index = require('../public/index.js');
//
// console.log(index);
//
// // test urlBuilder function concatenates
//
// test('urlBuilder concatenates', function(t) {
//   var actual = urlBuilder('apples');
//   var expected = "http://localhost:4000/" + "search/" + 'apples';
//   t.equal(actual, expected, 'should concatenate');
//   t.end();
// });
//
// // test retrive names from results object
// var testObj = {
//   results: [{
//       name: "DarkRed",
//       hex: "#8B0000"
//     },
//     {
//       name: "IndianRed ",
//       hex: "#CD5C5C"
//     },
//     {
//       name: "MediumVioletRed",
//       hex: "#C71585"
//     },
//     {
//       name: "OrangeRed",
//       hex: "#FF4500"
//     },
//     {
//       name: "PaleVioletRed",
//       hex: "#DB7093"
//     },
//     {
//       name: "Red",
//       hex: "#FF0000"
//     }
//   ]
// }
