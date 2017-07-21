
var userInput = document.getElementById("userSearch");
var colourResults = document.getElementById('results');

userInput.addEventListener('input', function(event) {
  getApi(urlBuilder(cleanInput(event.target.value)), appendData);
  event.preventDefault();
});

// appendData function creates new list elements for results and creates another event listener for clicks on each one to return background colour change
function appendData(responseObj) {
  colourResults.innerHTML = '';
  responseObj.results.forEach(function(val) {
    var colourNode = document.createElement("li");
    colourNode.tabIndex = '0';
    colourNode.textContent = val.name + ': ' + val.hex;
    colourResults.appendChild(colourNode);
    var hexCode = val.hex;
    colourNode.addEventListener('click', function(event) {
      var backgroundNode = document.getElementById('change-background');
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
