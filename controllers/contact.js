var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.send({title: 'Contact'});
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  res.send({msg: 'Thank you! Your feedback has been submitted.'});
};
