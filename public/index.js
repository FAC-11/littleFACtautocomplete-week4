//This is where all the functions go that take the typed input and return data/functions

// Event listener function -- on click - you know your deal
//url builder function --returns url
//API request function -- http request with callback(null, results)
//filter library object function returns results object

// event listener: 'input' is not supported by Internet Explorer
document.getElementById("name").addEventListener('input', function(event) {
  urlBuilder(name.value);

})

function urlBuilder (inputValue, callback) {
  var url = "http://localhost:4000/"+inputValue;
  // api();

}

function getApi (url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
      var responseObj = JSON.parse(xhr.responseText);
      displayNames(responseObj);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

function displayNames (responseObj) {



}

// var fs = require('fs');
// var autocomplete = {};
//
//
//
//
//
// module.exports = autocomplete;
