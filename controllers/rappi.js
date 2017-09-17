var request = require('request');
var cheerio = require('cheerio');

exports.getTranslaterButton = function(req, res) {
  return request('https://www.google.com/intl/en/chrome/demos/speech.html', function(error, response, body) {
    var $ = cheerio.load(body);
    var temp = $.html();
    console.log(temp);
    return res.end(temp);
  });
}
