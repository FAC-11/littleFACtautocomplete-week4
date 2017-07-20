var testObj = {results: [
{
name: "DarkRed",
hex: "#8B0000"
},
{
name: "IndianRed ",
hex: "#CD5C5C"
},
{
name: "MediumVioletRed",
hex: "#C71585"
},
{
name: "OrangeRed",
hex: "#FF4500"
},
{
name: "PaleVioletRed",
hex: "#DB7093"
},
{
name: "Red",
hex: "#FF0000"
}
]
}

const userInput = document.getElementById("userSearch");

userInput.addEventListener('input', function(event) {
  getApi(urlBuilder(cleanInput(event.value)), appendData);
  event.preventDefault();
});

  function appendData(responseObj) {
    userInput.innerHTML = '';
    var colourResults = document.getElementById('results');

    responseObj.results.forEach(function(val) {

    var colourNode = document.createElement("li");
    colourNode.className = 'dropdown';
    colourNode.textContent = val.name ;
    colourResults.appendChild(colourNode);
    var hexCode = val.hex;
    displayColours(hexCode);
  })

  };

appendData(testObj);
  // This is where all the functions go that take the typed input and return data/functions

  function displayColours(hexCode) {
    var backgroundNode = document.getElementById('change-background');
    backgroundNode.setAttribute('style','background-color: ')
  }

  // cleanInput puts user unput to lower case, replaces unfamiliar characters and passes value to urlBuilder
  // function cleanInput(event.value) {
  //   var userCleanInput = event.value.toLowerCase().replace(/[^a-z]/g, "");
  //   return userCleanInput;
  // }

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
