var words = require("../fixtures/words.json");

module.exports.text = function(req, res) {
  console.log(req);
  res.json(words);
};