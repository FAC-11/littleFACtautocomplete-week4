const userInput = document.getElementById("userSearch");

userInput.addEventListener('input', function(event) {
  getApi(urlBuilder(cleanInput(event.value)), appendData);
  event.preventDefault();
});

function appendData(responseObj) {
  userInput.innerHTML = '';

  userInput.forEach(function(val) {
  

  });

  //This is where all the functions go that take the typed input and return data/functions

  function displayColours(responseObj) {
    document.createElement;
  }

  // cleanInput puts user unput to lower case, replaces unfamiliar characters and passes value to urlBuilder
  function cleanInput(event.value) {
    var userCleanInput = event.value.toLowerCase().replace(/[^a-z]/g, "");
    return userCleanInput;
  }

  //urlBuilder creates the url using the clean user input
  function urlBuilder(userCleanInput) {
    var url = "http://localhost:4000/" + "search/" + userCleanInput;
    // api();
  }

  // http request function
  function getApi(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var responseObj = JSON.parse(xhr.responseText);
        displayColours(responseObj);
      }
    }
    xhr.open("GET", url, true);
    xhr.send();
  }
