const testObj = {
  results: [{
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
const colourResults = document.getElementById('results');

userInput.addEventListener('input', function(event) {
  getApi(urlBuilder(cleanInput(event.value)), appendData);
  event.preventDefault();
});

// appendData function creates new list elements for results and creates another event listener for clicks on each one to return background colour change
function appendData(responseObj) {
  colourResults.innerHTML = '';
  responseObj.results.forEach(function(val) {
    const colourNode = document.createElement("li");
    colourNode.className = 'dropdown';
    colourNode.textContent = val.name;
    colourResults.appendChild(colourNode);
    console.log(colourResults);
    const hexCode = val.hex;
    colourResults.addEventListener('click', function(event) {
      console.log("hello");
      const backgroundNode = document.getElementById('change-background');
      backgroundNode.setAttribute('style', 'background-color:' + hexCode)
    })
  })
};

appendData(testObj);

// cleanInput puts user input to lower case, replaces unfamiliar characters and passes value to urlBuilder
function cleanInput(a) {
  var userCleanInput = event.value.toLowerCase().replace(/[^a-z]/g, "");
  return userCleanInput;
}

//urlBuilder creates the url using the clean user input
function urlBuilder(userCleanInput) {
  var url = "http://localhost:4000/" + "search/" + userCleanInput;
}

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

// module.exports = {
//   urlBuilder
// };
