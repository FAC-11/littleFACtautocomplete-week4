//This is where all the functions go that take the typed input and return data/functions

// Event listener function -- on click - you know your deal
//url builder function --returns url
//API request function -- http request with callback(null, results)
//filter library object function returns results object

// event listener: 'input' is not supported by Internet Explorer

// function to clean the userInput
const userInput = document.getElementById("userSearch");
userInput.addEventListener('input', function(event) {
  cleanInput(userSearch.value)
})

// cleanInput puts user unput to lower case, replaces unfamiliar characters and passes value to urlBuilder
function cleanInput(userSearch.value) {
  var userCleanInput = userSearch.value.toLowerCase().replace(/[^a-z]/g, "");
  urlBuilder(userCleanInput);
}

//urlBuilder creates the url using the clean user input
function urlBuilder(userCleanInput, callback) {
  var url = "http://localhost:4000/" + "search/" + userCleanInput;
  // api();
}

function getApi(url) {
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

function displayNames(responseObj) {
  document.createElement
}

// var fs = require('fs');
// var autocomplete = {};
//
//
//
//
//
// module.exports = autocomplete;
