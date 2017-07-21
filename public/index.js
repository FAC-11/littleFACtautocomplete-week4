//start function prevents addEventListener from running straight away and enables passing of the tests
function start() {
    const userInput = document.getElementById("userSearch");
    const colourResults = document.getElementById('results');

    userInput.addEventListener('input', function(event) {
      console.log(event.target.value);
      getApi(urlBuilder(cleanInput(event.target.value)), appendData);
      event.preventDefault();
    });

        // appendData function creates new list elements for results and creates another event listener for clicks on each one to return background colour change
        function appendData(responseObj) {
          colourResults.innerHTML = '';
          console.log(responseObj.results);
          responseObj.results.forEach(function(val) {
            const colourNode = document.createElement("li");
            colourNode.className = 'dropdown';
            colourNode.textContent = val.name + ': ' + val.hex;
            colourResults.appendChild(colourNode);
            console.log(colourResults);
            const hexCode = val.hex;
            colourNode.addEventListener('click', function(event) {
              console.log("hello");
              const backgroundNode = document.getElementById('change-background');
              backgroundNode.setAttribute('style', 'background-color:' + hexCode);

            })
          })
        };

        // http request function
        function getApi(url, cb) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
              var responseObj = JSON.parse(xhr.responseText);
              appendData(responseObj);
            }
          }
          xhr.open("GET", url, true);
          xhr.send();
        }
}

// cleanInput puts user input to lower case, replaces unfamiliar characters and passes value to urlBuilder
function cleanInput(textInput) {
  console.log(textInput);
  var userCleanInput = textInput.toLowerCase().replace(/[^a-z]/g, "");
  return userCleanInput;
}
//urlBuilder creates the url using the clean user input
function urlBuilder(userCleanInput) {

  var url = "http://localhost:4000/" + "search/" + userCleanInput;
  return url;
}


if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = {
    urlBuilder: urlBuilder
  }
}
