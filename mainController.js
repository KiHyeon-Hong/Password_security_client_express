const passwordSecurityClient = require('./PasswordSecurityClient');
const request = require('request');

request.get(
  {url:'http://54.157.166.99:65001/Test'},
  function(err, res, body) {
    console.log(body);
  }
);
