var words = require("../fixtures/words.json").words;

module.exports.text = function(req, res) {

  var urlParams = req.url.split("/");
  var responseType = urlParams[2];
  var responseAmount = urlParams[3];

  if (Number(responseAmount) > 500){
    res.send("Request amount too large. Be nice.");
    return;
  }

  var nextWord = getRandomWord();

  var response = [];

  if (responseType === "paragraphs") {
    for (var j = 0; j < responseAmount; j++) {
      var paragraph = "";
      for (var i = 0; i < 12; i++) {
        paragraph += getRandomSentence() + ". ";
      }
      response.push(paragraph);
    }
  } else if (responseType === "sentences") {
    for (var j = 0; j < responseAmount; j++) {
      response.push(getRandomSentence());
    }
  } else if (responseType === "words") {
    for (var i = 0; i < responseAmount; i++) {
      response.push(getRandomWord());
    }
  }

  res.json(response);
};

function getRandomSentence() {
  var sentence = getRandomWord();

  // capitalize first letter
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);



  for (var i = 0; i < 9; i++) {
    if (5 === i) {
      sentence += ",";
    }
    sentence += " " + getRandomWord();
  }

  return sentence;
}

function getRandomWord() {
  var word = words[Math.floor(Math.random() * words.length)];

  var secondCharacter = word.charAt(1);
  if (secondCharacter == secondCharacter.toUpperCase()) {
    return word;
  } else {
    var downcaseWord = word.charAt(0).toLowerCase() + word.slice(1);
    return downcaseWord;
  }
}