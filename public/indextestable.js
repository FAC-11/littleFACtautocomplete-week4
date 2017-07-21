
// cleanInput puts user input to lower case, replaces unfamiliar characters and passes value to urlBuilder
function cleanInput(textInput) {

  var userCleanInput = textInput.toLowerCase().replace(/[^a-z]/g, "");
  return userCleanInput;
}

//urlBuilder creates the url using the clean user input
function urlBuilder(userCleanInput) {

  var url = "search/" + userCleanInput;
  return url;
}


if (typeof module != "undefined"){
module.exports = {cleanInput: cleanInput, urlBuilder: urlBuilder};
}
